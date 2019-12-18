<?php
/** @file
 * Base class for all views of a step assignment
 */
 
namespace CL\Step;

use CL\Site\Site;
use CL\Site\System\Server;

/**
 * Base class for all views of a step assignment
 *
 * This is the base class for both the main page view and
 * views on section pages
 */
class StepView extends \CL\Course\AssignmentView {
	/**
	 * View constructor.
	 * @param Site $site The Site object
	 * @param string $assignTag Tag for the assignment to view
	 * @param Server|null $server Optional dependency injection of Server
	 * @param int $time Time we are viewing or null for time()	 */
	public function __construct(Site $site, $assignTag, Server $server = null, $time=null) {
		parent::__construct($site, $assignTag, [], $server, $time);

		$this->step = $this->assignment;

		// Load the user status in this assignment
		$this->step->load_status($this->user);

		$this->addCSS("vendor/cl/step/step.css");
		$this->addJS('step');
	}

    /**
     * Property get magic method
     * @param string $property Property name
     * @return mixed
     */
    public function __get($property) {
        switch($property) {
            case "step":
                return $this->step;

            default:
                return parent::__get($property);
        }
    }

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
    public function __set($property, $value) {
        switch ($property) {
            default:
                parent::__set($property, $value);
                break;
        }
    }



    /**
     * Create a link to a section of the step assignment
     * @param string $sectionTag Tag for the section to link to
     * @param string $text Text to display for the link
     * @return string HTML for the link.
     */
    function section_link($sectionTag, $text) {
    	$url = $this->sectionURL($sectionTag);
        return "<a href=\"$url\">$text</a>";
    }

	/**
	 * Create an absolute URL for a section of the step assignment.
	 * @param string $sectionTag Tag for the section to link to
	 * @return string URL
	 */
    function sectionURL($sectionTag) {
        $tag = $this->step->section->substituteLC($sectionTag);

        if($this->step->rewrite) {
		    return $this->step->site->root . '/' . $this->step->tag . '/' . $tag;
	    }

	    return $this->step->site->root . '/cl/step/section/' . $this->step->tag . '/' . $tag;
    }
	
	protected $course;  // Current course object
    protected $user;    // User for this step
	protected $step;	// Reference to the current Step object
}
