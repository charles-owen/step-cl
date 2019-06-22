<?php
/** @file
 * Class that defines a section in a step assignment 
 */

namespace CL\Step;

use CL\Course\SectionStatus;
use CL\Users\User;

/** Defines a section in a step assignment 
 *
 * A section can be a tutorial page, video, or a task page.
 * Other subsystems extend this class for custom features like
 * quizzes.
 *
 * @cond
 * @property Step step
 * @property string tag
 * @endcond
 */
class StepSection {
	const SECTION = 'S';    ///< Indicates this section is a regular section
	const TASK = 'T';		///< Indicates this section is a task
	const VIDEO = 'V';		///< Indicates this section is a video

    /**
     * Constructor
     * @param Step $step Step this is for
     * @param string $tag Step section tag
     * @param string $name Step section name
     * @param string $type Step section type (constants above)
     */
	function __construct(Step $step, $tag, $name, $type) {
		$this->step = $step;
		$this->tag = $tag;
		$this->name = $name; 
		$this->type = $type;
        $this->status = SectionStatus::NOTVISITED;
	}

	/**
	 * Property get magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * done | boolean | Step section has been flaged as done
	 * name | string | Name of the section
	 * next | StepSection | Next section
	 * prev | StepSection | Previous section
	 * step | Step | The Step this section is associated with
	 * tag | string | Step section tag
	 * type | string | Step section type (see class constants)
	 * url | string | URL for that step section on the site
	 *
	 * @param string $property Property name
	 * @return mixed
	 */
	public function __get($property) {
		switch($property) {
			case 'done':
				return $this->status == SectionStatus::DONE;

			case 'name':
				return $this->name;

			case 'next':
				return $this->next;

			case 'prev':
				return $this->prev;

			case 'step':
				return $this->step;

			case 'tag':
				return $this->tag;

			case 'type':
				return $this->type;

			case 'url':
				if($this->step->rewrite) {
					return $this->step->site->root . '/' . $this->step->tag . '/' . $this->tag;
				}

				return $this->step->site->root . '/cl/step/section/' . $this->step->tag . '/' . $this->tag;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 *
	 * <b>Properties</b>
	 * Property | Type | Description
	 * -------- | ---- | -----------
	 * next | StepSection | Next section
	 * prev | StepSection | Previous section
	 *
	 * @param string $property Property name
	 * @param mixed $value Value to set
	 */
	public function __set($property, $value) {
		switch($property) {
			case 'next':
				$this->next = $value;
				break;

			case 'prev':
				$this->prev = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $property .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}

	}

	
	/**
	 * StepSection status
	 *
	 * The possible section status is NOTVISITED, VISITED, or DONE
	 *
	 * @param string $status Status to set
	 * @param int $look The look time
	 * @param int $access The last access time
	 */
	public function set_status($status, $look, $access) {
        $this->status = $status;
        $this->look = $look;
        $this->access = $access;
    }

	
	/**
	 * Flag a step section as VISITED or DONE
     * @param User $user The user we are flagging
	 * @param string $status Task status to set (VISITED or DONE)
     * @param int $time The time of the flagging, default is time()
     */
	public function flag(User $user, $status, $time) {
		$this->status = $status;
		$table = new SectionStatus($this->step->site->db);
		$table->set($user, $this->step->tag, $this->tag, $status, $time);
	}
	
	/**
	 * Flag this section as having been visited
	 *
	 * The general flag() function is used to set the 
	 * status. This function will only set the section as 
	 * visited if it has not been previously visited.
	 * @param User $user User to flag
	 * @param int $time Current time
	 */
	public function flag_visited(User $user, $time) {
		if($this->status === SectionStatus::NOTVISITED) {
			$this->flag($user, SectionStatus::VISITED, $time);
		}
	}

	/**
	 * Open the step section as a file.
	 * @return bool|resource File handle
	 */
	public function openFile() {
		$name = $this->step->site->rootDir .
			'/' . $this->step->rawUrl .
			'/' . $this->tag . '.php';
		return @fopen($name, "r");
	}

	/**
	 * Create data suitable for JSON to send to client
	 * @param array $options Options that control what data is included
	 * @return array of data to send to client
	 */
	public function data($options=[]) {

		$data = [
			'name'=>$this->name,
			'type'=>$this->type,
			'tag'=>$this->tag,
		];

		if(!empty($options['status']) && $options['status']) {
			$data['status'] = $this->status;
			$data['look'] = $this->look;
			$data['access'] = $this->access;
		}

		if(!empty($options['url']) && $options['url']) {
			$data['url'] = $this->__get('url');
		}

		return $data;
	}

	/**
	 * @page appearance-options Appearance options
	 *
	 * @section step-image-tags Image tags
	 *
	 * tag | usage
	 * --- | -----
	 * stepicon | Icon for section pages on step main pages
	 * taskicon | Icon for task pages on step main pages
	 * videoicon | Icon for video pages on step main pages
	 *
	 */

	/**
	 * Get the icon used by this page
	 * @return array with keys 'tag', 'file', 'alt'
	 */
	public function icon() {
		switch($this->type) {
			case StepSection::SECTION:
			default:
				return ['tag'=>'stepicon', 'file'=>'/vendor/cl/course/img/stepicon.png', 'alt'=>'Section'];

			case StepSection::TASK:
				return ['tag'=>'taskicon', 'file'=>'/vendor/cl/course/img/taskicon.png', 'alt'=>'Task'];

			case StepSection::VIDEO:
				return ['tag'=>'videoicon', 'file'=>'/vendor/cl/course/img/videoicon.png', 'alt'=>'Video'];
		}
	}

	/**
	 * Create any custom auxiliary view object for this section
	 * @return ViewAux object or null if none required
	 */
	public function viewAux() {
		return null;
	}

	/**
	 * Custom properties for the step section that are
	 * added to the view to make it easier to config
	 * @param string $property Name of the custom property
	 * @param mixed $value Value to set
	 * @return bool true if this property exists.
	 */
	public function property($property, $value) {
		return false;
	}

	/**
	 * Present page on the Step single-page view.
	 *
	 * A return value of null means the default rendering is
	 * used by StepSectionsAll. Override to customize this
	 * behavior (see QuizStepSection in the Quiz subsystem for
	 * an example).
	 *
	 * @return string HTML
	 */
	public function singlePagePresent() {
		return null;
	}

	private $step;			// Step this is a task in
	private $tag;			// Tag for the section - base name of section file
	private $name;			// Section name
	private $type;			// SECTION, TASK, VIDEO, or type defined in derived class
	private $next = NULL;	// Next section
	private $prev = NULL;	// Previous section
	private $status = null;	// Status of section
	private $look = null;   // When was the first look at this section?
	private $access = null; // When was the last access of this section?
}
