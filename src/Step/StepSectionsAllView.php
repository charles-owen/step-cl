<?php
/** @file
 * View class for a Step assignment that displays all
 * sections of the Step on one page
 */

namespace Step;

/** View of a Step assignment that displays all
 * sections of the Step on one page. */
class StepSectionsAllView extends StepSectionsView {
    /**
     * Constructor
     * @param \Course $course Course object
     * @param \User $user Current User object
     * @param $stepTag Tag for the step assignment
     * @param $time The time of this view, default is time()
     */
	public function __construct(\Course $course, \User $user, $stepTag, $time=null) {
		parent::__construct($course, $user, $stepTag, $time);

		$name = $this->step->get_name();
		$this->set_title($name);

		$sectionsinorder = $this->step->get_sectionsinorder();

		$video = false;
		foreach($sectionsinorder as $section) {
			if($section->get_type() === StepSection::VIDEO) {
				$video = true;
				break;
			}
		}

		if($video) {
			$this->add_video();
		}


		foreach($this->step->get_view_aux() as $aux) {
			$this->add_aux($aux);
		}
	}

	/** Display the document title */
	public function doctitle() {
        $course = $this->course->get_name();
        $name = $this->step->get_name();
		return "<title>$course $name</title>";
	}

	/** Display the section title */
	public function title() {
		$name = $this->step->get_name();
		return "<h1>$name</h1>";
	}
	
	/** Output the heading section for the HTML document */
	public function heading() {
		global $dir;
		global $calendar;
        global $user;
        global $view;

        $root = $this->course->get_root();
        $libroot = $this->course->get_libroot();
        $stepTag = $this->assignment->get_tag();

        $html = <<<HTML
<base href="$root/$stepTag/" />

HTML;
		
		$foundincluded = array();
				
		$sectionsinorder = $this->step->get_sectionsinorder();
		
		foreach($sectionsinorder as $section) {
			$tag = $section->get_tag();
			$file = fopen($this->step->get_dir() . "/$tag.php", "r");
		
			/*
			 * Transfer everything between <head> and </head>
			 * except for the line automatically included by 
			 * the template
			 */
			 
			// Read until we get to <head>
			while(($line = fgets($file)) != false) {
				if(stristr($line, '<head>')) {
					break;
				}
			}        
		
			$code = 'global $course; global $user; ?>';
			
			// Read until </head>
			while(($line = fgets($file)) != false) {
				if(stristr($line, '</head>')) {
					break;
				}
				
				// Because there may be many jquery versions...
				// And we ignore any title tags in the step pages
				if(stristr($line, 'course.css') ||
					stristr($line, 'class.css') ||
					stristr($line, 'course.min.js') ||
					stristr($line, 'step/step.js') ||
					stristr($line, 'step/step.css') ||
					stristr($line, 'js/jquery') ||
					stristr($line, '<title>')) {
					continue;
				}

				$matches = array();
				if(preg_match("#(href|src)=\"(?<file>[^\"]*)\"#", $line, $matches) === 1) {
					$match = $matches['file'];
					if(in_array($match, $foundincluded)) {
						//$html .= "<!-- skipped: $match ..>\n";
						continue;
					} else {
						$foundincluded[] = $match;
					}
					
				}
		
				$code .= $line;
			}
			
			ob_start();
			eval($code);
			$html .= ob_get_contents();
			ob_end_clean();
			
			fclose($file);
		}
	
		$html .= <<<STYLE
<style>
header {
	margin-top:0px;
}
</style>	
STYLE;
		return $html;
	}

	/** Output the body of the HTML document */
	function body() {
		global $calendar;
        global $view;

		$html = '';
		
		$steptag = $this->step->get_tag();
		$shortname = $this->step->get_shortname();
		$html .= '<p>';
		$html .= \Backto::to($shortname, './', null);
		$html .= "&nbsp;&nbsp;This page includes all sections for $shortname in a single page.</p>";
	
		$sectionsinorder = $this->step->get_sectionsinorder();
		
		foreach($sectionsinorder as $section) {
			$name = $section->get_name();
			
			switch($section->get_type()) {
				case StepSection::TASK:
					$html .= "<h2>Task: $name</h2>";
					break;
					
				case StepSection::QUIZ:
					$html .= "<h2>Quiz: $name</h2>";
					$html .= '<p class="centerbox comp center">Quizzes are not available in single page view.</p>';
					break;
					
				default:
					$html .= "<h2>Section: $name</h2>";
					break;
			}
			
			if($section->get_type() == StepSection::QUIZ) {
				continue;
			}
		
			$tag = $section->get_tag();
			$file = fopen($this->step->get_dir() . "/$tag.php", "r");
		
			// Read until we get to <body> 
			while(($line = fgets($file)) != false) {
				if(stristr($line, "<body>")) {
					break;
				}
			}
		
			$code = 'global $course; global $user; ?>';
			
			// Read the rest!
			while(($line = fgets($file)) != false) {
				if(stristr($line, "</body>")) {
					break;
				}
			
				$code .= $line;
			}
			
			ob_start();
			eval($code);
			$html .= ob_get_contents();
			ob_end_clean();
			
			fclose($file);
	
		}
		
		$html .= \Backto::to($shortname, './');
		return $html;
	}

	/**
	 * Create a link from this step page that will use autoback to return.
	 * @param $text Text to display in the link
	 * @param $link Page to link to
	 */
	public function link($text, $link) {
		return \Backto::link($text, $link, $this->get_title(), $this->get_url());
	}
	
		/** Get the URL for this page.
	 * @return URL */
	public function get_url() {
		$steptag = $this->step->get_tag();
		$libroot = $this->course->get_libroot();
		return "$libroot/step/stepall.php?step=$steptag";
	}



}
?>
