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

		// This object presents the sections of the step assignment.
		$this->sections = new StepPageSections($this);

        // Flag as looked at
        $this->step->look($this->user);

		// Call amend if this object is not subclassed.
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
	 * sections | StepPageSections | Representation of the sections listing.
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case "sections":
				return $this->sections;

			default:
				return parent::__get($property);
		}
	}




	/**
     * Create the page header section, including Interact! link if needed
     * @return string HTML for page header
     */
    public function header($contentDiv = true, $nav='') {
		$html = parent::header(false);
		$html .= '<div class="content cl-steppage">';
		//$html .= $this->warnings();
		return $html;
	}


	/** Display any warnings about the step 
	 * @returns string HTML for warnings if they exist */
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
		return $this->sections->present();
	}

	/**
	 * Create a link from this step page that will use autoback to return.
	 * @param string $text Text to display in the link
	 * @param string $link Page to link to
	 * @return string HTML
	 */
	public function link($text, $link) {
		return \Backto::link($text, $link);
	}

	private $sections;
}
