<?php
/**
 * @file
 * View class for viewing a single step assignment section (page)
 */

namespace CL\Step;

use CL\Site\Site;
use CL\Site\System\Server;

/**
 * A view of a step assignment section (page).
 *
 * This is instantiated automatically by StepPlugin, not used directly.
 */
class StepSectionView extends StepSectionsView {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param Server $server Optional dependency injection of Server
	 * @param array $properties Properties passed by the router. Key 'step' is the section to view.
	 * @param int $time Time we are viewing or null for time()	 */
	public function __construct(Site $site, Server $server, array $properties, $time) {
		parent::__construct($site, $properties['step'], $server, $time);

        /*
         * Get the section
         */
        $this->stepSection = $this->step->get_section($properties['section']);
        if($this->stepSection === null) {
	        $server->redirect($site->root . '/' . $this->tag);
            return;
        }

		// Open the section file
		$this->file = $this->stepSection->openFile();
		if($this->file === false) {
			return;
		}

		// Indicate that this section has been visited
		$this->stepSection->flag_visited($this->user, $time);

		$shortname = $this->step->shortName;
		$sectionname = $this->stepSection->name;
		$this->setTitle("$shortname: $sectionname");

		foreach($this->step->get_view_aux() as $aux) {
			$this->add_aux($aux);
		}

		// Does the section have a ViewAux?
		$this->viewAux = $this->stepSection->viewAux();
		if($this->viewAux !== null) {
			$this->add_aux($this->viewAux);
		}

		$data = $this->step->data(['status'=>true, 'url'=>true]);
		$data['current'] = $this->stepSection->tag;
		$this->addJSON('cl-step', json_encode($data));

		if(get_class($this) === self::class) {
			$site->amend($this);
		}
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'sectionTag':
				return $this->stepSection->tag;

			case 'stepSection':
				return $this->stepSection;

			default:
				return parent::__get($property);
		}
	}


	/** _set magic function.
	 *
	 * @param string $property Name of the parameter to set
	 * @param mixed $value Value to set it to
	 */
	public function __set($property, $value) {
		// See if there are any custom properties for this section type
		if($this->stepSection->property($property, $value)) {
			return;
		}

		switch($property) {
			default:
				parent::__set($property, $value);
				break;
		}

	}

	
	/** A header block to use on every step section page
	 * @returns string HTML */
	public function head() {
		$html = parent::head();

		$root = $this->course->root;
        $stepTag = $this->assignment->tag;

        $html .= <<<HTML
<base href="$root/$stepTag/" />

HTML;

		if($this->file !== false) {
			/*
			 * Transfer everything between <head> and </head>
			 * except for the line automatically included by
			 * the template
			 */

			// Read until we get to <head>
			while(($line = fgets($this->file)) != false) {
				if(stristr($line, '<head>')) {
					break;
				}
			}

			$code = 'global $site; global $course; global $section; global $user; global $member; global $view; ?>';

			// Read until </head>
			while(($line = fgets($this->file)) != false) {
				if(stristr($line, '</head>')) {
					break;
				}

				if(stristr($line, 'course.css') ||
					stristr($line, 'class.css') ||
					stristr($line, 'course.min.js') ||
					stristr($line, 'step/step.js') ||
					stristr($line, 'step/step.css') ||
					stristr($line, 'js/jquery') ||
					stristr($line, 'lib/js/video-js') ||
					stristr($line, 'video.css') ||
					stristr($line, '<title>')) {
					continue;
				}

				$code .= $line;
			}

			// This block of code does an eval on the header lines of
			// the page and saves the results into a string
			ob_start();
			eval($code);
			$html .= ob_get_contents();
			ob_end_clean();
		}

		return $html;
    }

	/**
	 * Create the page header section, including Interact! link if needed
	 * @return string HTML for page header
	 */
	public function header($contentDiv = null, $nav='') {

		$nav = $this->stepNav();
		$html = parent::header(false, $nav);
		$html .= '<div class="content">';
		//$html .= $this->warnings();
		return $html;
	}

	/** 
	 * Present the section body
	 * @return string HTML
	 */
	public function present() {
		$html = '';

		if($this->file !== false) {
			// Read until we get to <body>
			while(($line = fgets($this->file)) != false) {
				if(stristr($line, "<body>")) {
					break;
				}
			}

			$code = 'global $site; global $course; global $section; global $user; global $member; global $view; ?>';

			// Read the rest until </body>
			while(($line = fgets($this->file)) != false) {
				if(stristr($line, "</body>")) {
					break;
				}

				$code .= $line;
			}

			fclose($this->file);

			ob_start();
			eval($code);
			$html .= ob_get_contents();
			ob_end_clean();

			$this->viewAux = $this->stepSection->viewAux();
			if($this->viewAux !== null) {
				$html .= $this->viewAux->present();
			}

		} else {
			$sectionTag = $this->stepSection->tag;
			$html .= <<<HTML
<p class="centerbox comp center">Assignment section <em>$sectionTag</em> not found.</p>
HTML;
		}

		return $html;
	}

	


	/**
	 * Create the code for the step navigation area
	 * @returns string HTML
	 */
	private function stepNav() {
        $course = $this->step->course;
		$root = $course->root;
		$stepUrl = $this->step->url;

		$prev = $this->stepSection->prev;
		$prevUrl = $prev !== null ? $prev->url : $stepUrl;

		$next = $this->stepSection->next;
		$nextUrl = $next !== null ? $next->url : $stepUrl;
		
		$html = <<<END1
<div class="cl-stepnav-div"><nav class="cl-stepnav cl-nav"><div><ul>
<li><a href="$stepUrl"><span>Return to Step Page</span>
<img alt="Return to Step" width="28" height="25" src="$root/vendor/cl/step/img/returnstep.png" /></a></li>
END1;

		// Extra menu items here
		foreach($this->step->menuExtra as $extra) {
			$html .= $extra->html($this->stepSection, $this->user);
		}

		/*
		<li><a class="cl-step-mark-completed"><span>Mark Completed</span>
<img alt="Mark Complete" height="25" src="$root/vendor/cl/site/img/checkmenu.png" width="24" /></a>
</li><li><a class="cl-step-clear-completed"><span>Clear Completed</span>
<img alt="Mark Incomplete" height="25" src="$root/vendor/cl/site/img/nocheckmenu.png" width="24" /></a>

		*/
		$html .= <<<HTML
</li><li><a href="$prevUrl"><span>Previous Section</span>
<img alt="Mark Complete" height="25" src="$root/vendor/cl/site/img/previcon.png" width="40" /></a>
</li><li><a href="$nextUrl"><span>Next Section</span>
<img alt="Mark Complete" height="25" src="$root/vendor/cl/site/img/nexticon.png" width="40" /></a>
</li><li><a href="$nextUrl" class="cl-step-completed-next"><span>Mark Completed and Next Section</span>
<img alt="Mark Complete" height="25" src="$root/vendor/cl/site/img/checknext.png" width="40" /></a>
</li><li class="cl-step-progress"></li>
HTML;

		// Appended menu items here
		foreach($this->step->menuAppend as $extra) {
			$html .= $extra->html($this->stepSection, $this->user);
		}
		
		/*
		 * End of menu bar 
		 */
		$html .= <<<HTML
</ul></div>
</nav></div>
HTML;
	
		return $html;
	}


	/**
	 * Create the Interact! view object for this view.
	 *
	 * May be overridden in a derived class that also uses a section.
	 */
	protected function create_interact_view() {
		$this->interact = new \Interact\InteractBaseView($this->course, $this->user,
			array($this->assignment->get_tag()), $this->section->get_tag());
		$this->add_aux($this->interact);
	}


	/**
	 * Create a link from this step section that will use autoback to return.
	 * @param $text Text to display in the link
	 * @param $link Page to link to
	 */
	public function link($text, $link) {
		return \Backto::link($text, $link, $this->title, $this->url);
	}


	private $stepSection;    ///< The section of the step assignment we are viewing
	private $file;			///< Open file handle

	private $viewAux;       ///< ViewAux object for this section
}
