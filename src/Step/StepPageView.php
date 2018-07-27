<?php
/** @file
 * View class for the main page of a Step assignment
 */
 
namespace CL\Step;

use CL\Site\Site;
use CL\Site\System\Server;

/**
 * A single StepPageView object is instantiated as a view for
 * the main page of a step.
 *
 * Usage:
 *
< ?php
$reload = true;
require_once "../site.php";	// For all pages
$view = new \Step\StepPageView($course, $user, 'circuit1');
$view->protect();
? >
 */
class StepPageView extends StepView {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param string $assignTag Tag for the assignment to view
	 * @param Server|null $server Optional dependency injection of Server
	 * @param int $time Time we are viewing or null for time()	 */
	public function __construct(Site $site, $assignTag, Server $server = null, $time=null) {
		parent::__construct($site, $assignTag, $server, $time);

        // Flag as looked at
        $this->step->look($this->user);

		$data = $this->step->data();
		$data['sectionsTitle'] = 'The Assignment Sections';
		$data['sectionsHeading'] = <<<HTML
<p>These are the sections of the assignment. Click on each to go to the 
section. For your convenience, a check mark will appear when you indicate that a 
section is done. Some of the sections are very short.</p>
<p>A link is available at the bottom of the page that allows you to view 
the assignment in one page. This is useful for searching purposes, though 
some functions may be limited.</p>
HTML;

		$root = $this->site->root;
		$data['taskicon'] = $root . $this->appearance->image('taskicon', "/vendor/cl/course/img/taskicon.png");
		$data['quizicon'] = $root . $this->appearance->image('quizicon', "/vendor/cl/course/img/quizicon.png");
		$data['videoicon'] = $root . $this->appearance->image('videoicon', "/vendor/cl/course/img/videoicon.png");

		$this->addJSON('cl-step-page', json_encode($data));
	}


	/**
     * Create the page header section, including Interact! link if needed
     * @return string HTML for page header
     */
    public function header($contentDiv = null, $nav='') {
		$html = parent::header(false);
		$html .= '<div class="content cl-steppage">';
		//$html .= $this->interact_link();
		//$html .= $this->warnings();
		return $html;
	}

    /**
     * Create the page tail section, including Interact! component if needed
     * @return string HTML for the page tail
     */
    public function tail($contentDiv = null) {
    	$html = '</div>';
		//$html = $this->present_interact();
		$html .= parent::tail();
		return $html;
	}


	/** Display any warnings about the step 
	 * @returns HTML for warnings if they exist */
	public function warnings() {
		if(!$this->user->is_staff()) {
			return "";
		}
		
		$html = '';

		$points = $this->step->get_grading()->get_points();
		if($points != 0 && $points != 100) {
			$html .= <<<MSG
<p class="centerbox comp center">Specified step grading categories do not add up to 100 points. They currently add up to $points.</p>
MSG;
		}
		
		return $html;
	}

	/**
	 * Override to add extra content to the header section of the document
	 * @return string Any extra HTML to be added to the header section
	 */
	protected function header_extra() {
		$html = parent::header_extra();

		if($this->user->is_staff()) {
			$html .= $this->step->shout_available_release($this->user, $this->time);
		}

		return $html;
	}

	public function present_sections() {
		return '<div class="cl-step-sections"></div>';
	}
	
	/** Generate a list of tasks as a table
	 * @returns Sections HTML */
	public function sections() {
		$id = uniqid();		// Generate a unique number
		$pname = "p" . $id;
		$tag = $this->step->tag;
		
		$html = "";

		$html .= <<<TASKS
<table class="tasks" title="Table of Step Sections">
<tr>
<th>&nbsp;</th>
<th>Section</th>
<th>&nbsp;</th>
</tr>
TASKS;
		
		$sectionsinorder = $this->step->get_sectionsinorder();
		foreach($sectionsinorder as $section) {
			$html .=$this->taskrow($section, $pname);
		}
		
		$html .= "\n</table>\n";
		return $html;
	}

	/** Rows in the task table
	 * This function is called by render_tasks once for each row */
	private function taskrow(StepSection $section, $pname) {
		// Is this task flagged as being completed?
		$taskDone = $section->is_done();

        $tag = $this->assignment->tag;
		$name = $section->get_name();
		$sectionTag = $section->tag;
		$root = $this->site->root;
		$url = $root . $section->url;

		$html = '<tr><td class="stepcheck">';
		if($taskDone) {
			$html .= '<img alt="Check mark" height="14" src="' . $root . '/vendor/cl/site/img/check.png" width="19">';
		}
		$html .= '</td>';

		$html .= '<td class="stepname">';
		switch($section->type) {
			case StepSection::TASK:
				$iconurl = $root . $this->appearance->image('taskicon', "/vendor/cl/course/img/taskicon.png");
				$html .= '<img alt="Task" src="' . $iconurl . '">';
				break;
				
			case StepSection::QUIZ:
				$iconurl = $root . $this->appearance->image('quizicon', "/vendor/cl/course/img/quizicon.png");
				$html .= '<img alt="Quiz" src="' . $iconurl . '">';
				break;
			
			case StepSection::VIDEO:
				$iconurl = $root . $this->appearance->image('videoicon', "/vendor/cl/course/img/videoicon.png");
				$html .= '<img alt="Video" src="' . $iconurl . '">';
				break;
			
			default:
				if($this->step->iconurl != NULL) {
					$iconurl = $this->step->iconurl;
					$html .= '<img alt="' . $this->step->iconalt . '" src="' . $iconurl . '">';
				}
				break;
		}
		
		$html .= "\n";
		$html .= '<a href="' . $url . '" class="steplink">' . $name . '</a></td>';
		
		if($section->type == StepSection::QUIZ) {
			$html .= '<td>&nbsp;</td>';

//            $quizTries = new \Quiz\QuizTries($this->course);
//            $correct = $quizTries->get_best($this->user, $this->step, $sectionTag);
//			$total = $section->get_numpoints();
//			if($correct !== null) {
//				$html .= "<td>" . $correct['correct'] . "/$total</td>";
//			} else {
//				$html .= "<td>-/$total</td>";
//			}
			
		} else {
			$html .= '<td>&nbsp;</td>';
		}
		
		$html .= '</tr>';
		return $html;
	}
	
	/** Display the link for the step as a single page 
	 * @returns HTML for the single page link */
	function all_link() {
		$tag = $this->step->tag;
        $libroot = $this->site->root;
		return <<<TAIL
<p class="center">This assignment is also available as a <a href="$libroot/step/stepall.php?step=$tag">
single page</a>.</p>
TAIL;
	}


	public function foot() {
		$libroot = $this->course->get_libroot();
		return <<<HTML
<figure class="right noshadow nomobile"><img src="$libroot/images/foot200.png" alt="Picture of a foot" width="200" height="165"></figure>
HTML;
	}

	/**
	 * Create a link from this step page that will use autoback to return.
	 * @param $text Text to display in the link
	 * @param $link Page to link to
	 */
	public function link($text, $link) {
		return \Backto::link($text, $link, $this->get_title(), $this->get_url());
	}

	
}
