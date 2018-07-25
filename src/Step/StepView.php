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
		parent::__construct($site, $assignTag, $server, $time);

		$this->step = $this->assignment;
		$this->addCSS("vendor/cl/step/step.css");
		$this->addJS('step');
	}

    /**
     * Property get magic method
     * @param string $key Property name
     * @return mixed
     */
    public function __get($key) {
        switch($key) {
            case "step":
                return $this->step;

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
