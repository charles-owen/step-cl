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

		// Collect up all page icons
		$icons = [];
		foreach($this->step->sectionsInOrder as $section) {
			$icons[$section->type] = $section->icon();
		}

		// Appearance map all of these
		$data['icons'] = [];
		$root = $this->site->root;

		foreach($icons as $key => $icon) {
			if($key === StepSection::SECTION && $this->step->iconurl !== null) {
				$data['icons'][$key] = [
					'file' => $this->step->iconurl,
					'alt' => $this->step->iconalt !== null ? $this->step->iconalt : $icon['alt']
				];
			} else {
				$data['icons'][$key] = [
					'file' => $root . $this->appearance->image($icon['tag'], $icon['file']),
					'alt' => $icon['alt']
				];
			}
		}

		$this->addJSON('cl-step-page', json_encode($data));
		$site->amend($this);
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

	/**
	 * Present the assignment section.
	 * @return string HTML
	 */
	public function present_sections() {
		return '<div class="cl-step-sections"></div>';
	}

	/**
	 * Create a link from this step page that will use autoback to return.
	 * @param $text Text to display in the link
	 * @param $link Page to link to
	 * @return string HTML
	 */
	public function link($text, $link) {
		return \Backto::link($text, $link, $this->get_title(), $this->get_url());
	}

	
}
