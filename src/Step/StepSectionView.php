<?php
/**
 * @file
 * View class for viewing a single step assignment section (page)
 */

namespace CL\Step;

use CL\Site\Site;
use CL\Site\System\Server;

/** A view of a step assignment section (page) */
class StepSectionView extends StepSectionsView {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param Server|null $server Optional dependency injection of Server
	 * @param int $time Time we are viewing or null for time()	 */
	public function __construct(Site $site, Server $server = null, array $properties, $time) {
		parent::__construct($site, $properties['step'], $server, $time);

        /*
         * Get the section
         */
        $this->stepSection = $this->step->get_section($properties['section']);
        if($this->stepSection === null) {
	        $server->redirect($site->root . '/');
            return;
        }

		if($this->stepSection->type === StepSection::VIDEO) {
			$this->add_video();
		}

        // Indicate that this section has been visited
        $this->stepSection->flag_visited($this->user, $time);


		// Open the section file
		$this->file = $this->stepSection->openFile();
		if($this->file === false) {
			$server->redirect($site->root . '/' . $this->tag);
			return;
		}

		$shortname = $this->step->shortName;
		$sectionname = $this->stepSection->name;
		$this->title = "$shortname: $sectionname";

		foreach($this->step->get_view_aux() as $aux) {
			$this->add_aux($aux);
		}

		$data = $this->step->data();
		$data['current'] = $this->stepSection->tag;
		$this->addJSON('cl-step', json_encode($data));

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

			$code = 'global $course; global $user; ?>';

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
		//$html .= $this->interact_link();
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

			$code = 'global $course; global $user; global $view; ?>';

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

			if($this->quizView !== null) {
				$libroot = $this->course->get_libroot();

				$assignmentTag = $this->step->get_tag();
				$sectionTag = $this->section->get_tag();

				$resultsLink = "$libroot/step/stepsection.php?step=$assignmentTag&section=$sectionTag&results";
				$html .= $this->quizView->present($resultsLink);
			}

		} else {
			$sectionTag = $this->section->get_tag();
			$html .= <<<HTML
<p class="centerbox comp center">Assignment section <em>$sectionTag</em> not found.</p>
HTML;
		}

		$html .= $this->present_interact();

		return $html;
	}
	
	/** _set magic function.
	 *
	 * This implements the ability to define a
	 * quiz function this way:
	 * @code
	 * $view->quiz = function(StepQuiz $quiz) {}
	 * @endcode
	 *
	 * @param $key Name of the parameter to set
	 * @param $value Value to set it to */
	public function __set($key, $value) {
		switch($key) {
			case 'quiz':
				$this->set_quiz($value);
				break;

            default:
                parent::__set($key, $value);
                break;
		}
		
	}
	
	/** Set the quiz function for this page
	 * @param $function Quiz definition function */
	public function set_quiz($function) {

        if(is_callable($function)) {
		    $sectionTag  = $this->section->get_tag();
			$quiz = new \Quiz\Quiz($this->step, $sectionTag, $this->section->get_numpoints());
			$this->quiz_set_complete_msg($quiz);

			// We have a quiz, use the function to define it
			$function($quiz);

            // And create a view for the quiz
			$this->quizView = $quiz->create_view($this->user, $this->session);
        }
	}

	/** Set a quiz object for this page
	 *
	 * This allows for dependency injection of a custom, derived
	 * quiz class.
	 *  @param $quiz StepQuiz object
	 */
	public function set_quiz_obj(\Quiz\Quiz $quiz) {
		$this->quiz_set_complete_msg($quiz);
		$this->quizView = $quiz->create_view($this->user, $this->session);
	}

	private function quiz_set_complete_msg(\Quiz\Quiz $quiz) {
		$stepTag = $this->step->get_tag();
		$sectionTag  = $this->section->get_tag();
		$libroot = $this->step->get_course()->get_libroot();

		$msg = <<<HTML
<p>Quiz is complete. You may now navigate to the next section or
<a href="$libroot/step/stepsection.php?step=$stepTag&section=$sectionTag">retake the quiz.</a></p>
HTML;
		$quiz->set_complete_msg($msg);
	}

	/**
	 * Create the code for the step navigation area
	 * @returns string HTML
	 */
	private function stepNav() {
        $course = $this->step->course;
		$root = $course->root;
		$stepTag = $this->step->tag;
		$sectionTag = $this->stepSection->tag;
		$stepUrl = $this->step->url;

		$prev = $this->stepSection->prev;
		$prevUrl = $prev !== null ? $prev->url : $stepUrl;

		$next = $this->stepSection->next;
		$nextUrl = $next !== null ? $next->url : $stepUrl;
		
		$html = <<<END1
<div class="cl-stepnav-div"><nav class="cl-stepnav"><div><ul>
<li><a href="$stepUrl"><span>Return to Step Page</span>
<img alt="Return to Step" width="28" height="25" src="$root/vendor/cl/step/img/returnstep.png" /></a></li>
END1;

		// Extra menu items here
		foreach($this->step->get_menuextra() as $extra) {
			$html .= $extra->html($this->section, $this->user);
		}

		$html .= <<<HTML
<li><a class="cl-step-mark-completed"><span>Mark Completed</span>
<img alt="Mark Complete" height="25" src="$root/vendor/cl/site/img/checkmenu.png" width="24" /></a>
</li><li><a class="cl-step-clear-completed"><span>Clear Completed</span>
<img alt="Mark Incomplete" height="25" src="$root/vendor/cl/site/img/nocheckmenu.png" width="24" /></a>
</li><li><a href="$prevUrl"><span>Previous Section</span>
<img alt="Mark Complete" height="25" src="$root/vendor/cl/site/img/previcon.png" width="40" /></a>
</li><li><a href="$nextUrl"><span>Next Section</span>
<img alt="Mark Complete" height="25" src="$root/vendor/cl/site/img/nexticon.png" width="40" /></a>
</li><li><a href="$nextUrl" class="cl-step-completed-next"><span>Mark Completed and Next Section</span>
<img alt="Mark Complete" height="25" src="$root/vendor/cl/site/img/checknext.png" width="40" /></a>
</li><li class="cl-step-progress"></li>
HTML;
		//
		// Appended menu items here
		foreach($this->step->get_menuappend() as $extra) {
			$html .= $extra->html($this->section, $this->user);
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
	
	/** Get the URL for this page.
	 * @return URL */
	public function get_url() {
		$libroot = $this->course->get_libroot();
		$steptag = $this->step->get_tag();
		$sectiontag = $this->section->get_tag();
		return "$libroot/step/stepsection.php?step=$steptag&section=$sectiontag";
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

	/**
	 * If this section has a quiz, return the quiz view.
	 * @return null|QuizView Quiz view object
	 */
	public function get_quiz_view() {
		return $this->quizView;
	}

	private $stepSection;       ///< The section of the step assignment we are viewing
	private $file;			// Open file handle

    private $quizView = null;   // StepQuizView object if this section is a quiz
}
