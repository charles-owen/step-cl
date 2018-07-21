<?php
/** @file
 * View class for the main page of a Step assignment
 */
 
namespace CL\Step;

/**
 * A single StepPageView object is instantiated as a view for
 * the main page of a step.
 *
 * Usage:
 *
< ?php
$reload = true;
require_once "../lib/course.inc.php";	// For all pages
$view = new \Step\StepPageView($course, $user, 'circuit1');
$view->protect();
? >
 */
class StepPageView extends StepView {
    /**
     * Constructor
     * @param \Course $course Course object
     * @param \User $user User object
     * @param $stepTag The step tag to create
     */
	public function __construct(\Course $course, \User $user, $stepTag) {
		parent::__construct($course, $user, $stepTag);

        $step = $user->get_assignment($stepTag);
		if($step === null) {
			return;
		}

        // For the main page we always reload the step object.
        // This ensures it will be current if the files change
        $step->load(true);
        $step->load_status($user);

        // Flag as looked at
        $step->look($user);

		$this->set_title($this->get_name());
		$this->add_css("step/steppage.css");
	}

    /**
     * Create the page header section, including Interact! link if needed
     * @return string HTML for page header
     */
    public function header() {
		$html = parent::header();
		$html .= $this->interact_link();
		$html .= $this->warnings();
		return $html;
	}

    /**
     * Create the page tail section, including Interact! component if needed
     * @return string HTML for the page tail
     */
    public function tail() {
		$html = $this->present_interact();
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

	public function present() {
		$html = <<<HTML
<div class="section">
<h2><a id="Sections">Assignment Sections</a></h2>
<div>
<p>These are the sections of the assignment. Click on each to go to the 
section. For your convenience, a check mark will appear when you indicate that a 
section is done. Some of the sections are very short.</p>
<p>A link is available at the bottom of the page that allows you to view 
the assignment in one page. This is useful for searching purposes, though 
some functions may be limited.</p>
HTML;

		$html .= $this->sections() .
			$this->grading_link() .
			$this->all_link();

		$html .= "</div></div>";
		return $html;
	}
	
	/** @brief Generate a list of tasks as a table 
	 * @returns Sections HTML */
	public function sections() {
		$id = uniqid();		// Generate a unique number
		$formname = "f" . $id;
		$pname = "p" . $id;
		$tag = $this->step->get_tag();
		
		$html = "";
		
		// f$id is the form name
		// p$id = section - Jump to a section option hidden
		// id = $id 
		//echo "id=$id<br>";

		$stepurl = get_libroot() . "/step/steppost.php";
		$html .= '<form method="post" action="' . $stepurl . '" id="' . $formname . '">' . "\n";
		
		$html .= '<input name="formid" type="hidden" value="' . $id . '" />' . "\n";
		$html .= '<input name="step" type="hidden" value="' . $tag . '" />' . "\n";
		$html .= '<input id="' . $pname . '" name="' . $pname . '" type="hidden" value = ""/>' . "\n";
	
		$html .= <<<TASKS
<table class="tasks" title="Table of Step Sections">
<tr>
<th>Completed</th>
<th>Section</th>
<th style="width:30px;">&nbsp;</th>
<th>&nbsp;</th>
</tr>
TASKS;
		
		$sectionsinorder = $this->step->get_sectionsinorder();
		foreach($sectionsinorder as $section) {
			$html .=$this->taskrow($section, $formname, $pname);
		}
		
		$html .= "\n</table>\n</form>\n";
		return $html;
	}

	/** Rows in the task table
	 * This function is called by render_tasks once for each row */
	private function taskrow(StepSection $section, $formname, $pname) {
		// Is this task flagged as being completed?
		$taskDone = $section->is_done();

        $stepTag = $this->assignment->get_tag();
		$name = $section->get_name();
		$sectionTag = $section->get_tag();
		$libRoot = $this->course->get_libroot();

        //$href = "javascript:submitform('$formname', '$pname', '$tag')";
        if($this->assignment->rewrite) {
            $href = "$sectionTag";
        } else {
            $href = $libRoot . "/step/stepsection.php?step=$stepTag&amp;section=$sectionTag";
        }
		$html = '<tr><td class="stepcheck">';
		if($taskDone) {
			$html .= '<img alt="Check mark" height="14" src="' . $libRoot . '/images/check.png" width="19">';
		}
		$html .= '</td>';
		
		$html .= '<td class="stepname">';
		switch($section->get_type()) {
			case StepSection::TASK:
				$iconurl = "$libRoot/images/taskicon.png";
				$html .= '<img alt="Task" src="' . $iconurl . '">';
				break;
				
			case StepSection::QUIZ:
				$iconurl = "$libRoot/images/quizicon.png";
				$html .= '<img alt="Quiz" src="' . $iconurl . '">';
				break;
			
			case StepSection::VIDEO:
				$iconurl = "$libRoot/images/videoicon.png";
				$html .= '<img alt="Video" src="' . $iconurl . '">';
				break;
			
			default:
				if($this->step->get_iconurl() != NULL) {
					$iconurl = $this->step->get_iconurl();
					$html .= '<img alt="' . $this->step->get_iconalt() . '" src="' . $iconurl . '">';
				}
				break;
		}
		
		$html .= "\n";
		$html .= '<a href="' . $href . '" class="steplink">' . $name . '</a></td>';
		$html .= '<td class="stepclear">';
		if($taskDone) {
			$html .= "\n";
			$html .= '<input name="clearmain-' . $sectionTag . '" type="image" height="22" src="' . $libRoot . '/images/nocheck.png" width="21" alt="Uncheck Section" />';
		}
		
		$html .= '</td>';
		
		if($section->get_type() == StepSection::QUIZ) {
            $quizTries = new \Quiz\QuizTries($this->course);
            $correct = $quizTries->get_best($this->user, $this->step, $sectionTag);
			$total = $section->get_numpoints();
			if($correct !== null) {
				$html .= "<td>" . $correct['correct'] . "/$total</td>";
			} else {
				$html .= "<td>-/$total</td>";
			}
			
		} else {
			$html .= '<td>&nbsp;</td>';
		}
		
		$html .= '</tr>';
		return $html;
	}
	
	/** Display the link for the step as a single page 
	 * @returns HTML for the single page link */
	function all_link() {
		$tag = $this->step->get_tag();
        $libroot = $this->course->get_libroot();
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
	
	/** @brief The step page title
	 *
	 * This is for the title tag */
	function get_title() {
		return get_course()->get_name() . ' ' . $this->get_name();
	}
	
	/** @brief Get the URL for this page.
	 * @return URL */
	public function get_url() {
		return $this->step->get_tag();
	}
	
}
