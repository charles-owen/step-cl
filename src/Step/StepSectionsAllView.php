<?php
/** @file
 * View class for a Step assignment that displays all
 * sections of the Step on one page
 */

namespace CL\Step;

use CL\Site\Site;
use CL\Site\System\Server;

/** View of a Step assignment that displays all
 * sections of the Step on one page. */
class StepSectionsAllView extends StepSectionsView {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param Server|null $server Optional dependency injection of Server
	 * @param array $properties Properties passed by the router.
	 * @param int $time Time we are viewing or null for time()	 */
	public function __construct(Site $site, Server $server = null, array $properties, $time) {
		parent::__construct($site, $properties['step'], $server, $time);

		$name = $this->step->name;
		$this->title = $name;

		$sectionsinorder = $this->step->sectionsInOrder;

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

	/**
	 * Page head section content
	 * @return string
	 */
	public function head() {
		$html = parent::head();

		$root = $this->course->root;
		$stepTag = $this->assignment->tag;

		$html .= <<<HTML
<base href="$root/$stepTag/" />

HTML;
		
		$foundincluded = array();
				
		$sectionsinorder = $this->step->sectionsInOrder;
		
		foreach($sectionsinorder as $stepSection) {
			$tag = $stepSection->tag;
			$file = $stepSection->openFile();

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
		
			$code = 'global $site; global $course; global $section; global $user; global $member; global $view;  ?>';
			
			// Read until </head>
			while(($line = fgets($file)) != false) {
				if(stristr($line, '</head>')) {
					break;
				}
				
				// Because there may be many jquery versions...
				// And we ignore any title tags in the step pages
				if(stristr($line, 'course.css') ||
                    stristr($line, 'site.css') ||
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

		return $html;
	}

	/**
	 * Present the page body
	 * @return string HTML
	 */
	public function present() {
		$html = '';
		
		$steptag = $this->step->tag;
		$shortname = $this->step->shortName;
		$html .= '<p class="small">';
		$html .= \Backto::to($shortname, './', null);
		$html .= ".&nbsp;&nbsp;This page includes all sections for $shortname in a single page.</p>";
	
		$sectionsinorder = $this->step->sectionsInOrder;
		
		foreach($sectionsinorder as $stepSection) {
			$single = $stepSection->singlePagePresent();
			if($single !== null) {
				$html .= $single;
				continue;
			}

			$name = $stepSection->name;
			
			switch($stepSection->type) {
				case StepSection::TASK:
					$html .= "<h2>Task: $name</h2>";
					break;

				default:
					$html .= "<h2>Section: $name</h2>";
					break;
			}
		
			$tag = $stepSection->tag;
			$file = $stepSection->openFile();

			// Read until we get to <body> 
			while(($line = fgets($file)) != false) {
				if(stristr($line, "<body>")) {
					break;
				}
			}
		
			$code = 'global $site; global $course; global $section; global $user; global $member; global $view;  ?>';
			
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
		
		$html .= '<p class="small">' . \Backto::to($shortname, './', null) . '</p>';
		return $html;
	}

}
