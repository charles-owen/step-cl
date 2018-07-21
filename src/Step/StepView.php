<?php
/** @file
 * Base class for all views of a step assignment
 */
 
namespace CL\Step;

/** Base class for all views of a step assignment
 *
 * This is the base class for both the main page view and
 * views on section pages */
class StepView extends \Assignments\AssignmentView {
    /**
     * Constructor
     * @param \Course $course Course object
     * @param \User $user Current User object
     * @param $stepTag Tag for the step assignment
     * @param $time The time of this view, default is time()
     */
	public function __construct(\Course $course, \User $user, $stepTag, $time=null) {
		parent::__construct($course, $user, $stepTag, $time);

		$this->step = $this->assignment;
		$this->add_css("step/step.css");
		$this->add_js("step/step.js");
	}

    /**
     * Property get magic method
     * @param $key Property name
     * @property-read tablename The table name
     * @property-read prefix The table prefix
     * @return null|string
     */
    public function __get($key) {
        switch($key) {
            case "step":
                return $this->get_step();

            case "tag":
                return $this->step->get_tag();

            default:
                return parent::__get($key);
        }
    }

    /**
     * PHP set operation
     **
     * @param $key Name of the parameter to set
     * @param $value Value to set
     */
    public function __set($key, $value) {
        switch ($key) {
            default:
                parent::__set($key, $value);
                break;
        }
    }
	
	/** \brief Step object we are viewing */
	public function get_step() {return $this->step;}
	
	public function get_tag() {return $this->step->get_tag(); }
		
	/** \brief Step name */
	public function get_name() {return $this->step->get_name();}

    /**
     * Create a link to a section of the step assignment
     * @param string $sectionTag Tag for the section to link to
     * @param string $text Text to display for the link
     * @return string HTML for the link.
     */
    function section_link($sectionTag, $text) {
        $libRoot = $this->course->get_libroot();
        $stepTag = $this->step->get_tag();
        $href = $libRoot . "/step/stepsection.php?step=$stepTag&amp;section=$sectionTag";
        return <<<HTML
<a href="$href">$text</a>
HTML;
    }
	
	protected $course;  ///< Current course object
    protected $user;    ///< User for this step
	protected $step;	//!< Reference to the current Step object
}
