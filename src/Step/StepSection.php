<?php
/** @file
 * Class that defines a section in a step assignment 
 */

namespace CL\Step;

use CL\Course\SectionStatus;
use CL\Users\User;

/** Defines a section in a step assignment 
 *
 * A section can be a tutorial page, a task page, or a quiz.
 */
class StepSection {
	const SECTION = 'S';    ///< Indicates this section is a regular section
	const TASK = 'T';		///< Indicates this section is a task
	const QUIZ = 'Q';		///< Indicates this section is a quiz
	const VIDEO = 'V';		///< Indicates this section is a video

    /**
     * Constructor
     * @param Step $step Step this is for
     * @param $tag Section tag
     * @param $name Section name
     * @param $type Section type (constants above)
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
	 * @param string $key Property name
	 *
	 * Properties supported:
	 * rootDir - Site root directory
	 *
	 * @return null|string
	 */
	public function __get($key) {
		switch($key) {
			case 'name':
				return $this->name;

			case 'tag':
				return $this->tag;

			case 'type':
				return $this->type;

			case 'next':
				return $this->next;

			case 'prev':
				return $this->prev;

			case 'url':
				return $this->step->site->root . '/cl/step/section/' . $this->step->tag . '/' . $this->tag;


			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				return null;
		}
	}

	/**
	 * Property set magic method
	 * @param string $key Property name
	 * @param mixed $value Value to set
	 */
	public function __set($key, $value) {
		switch($key) {
			case 'next':
				$this->next = $value;
				break;

			case 'prev':
				$this->prev = $value;
				break;

			default:
				$trace = debug_backtrace();
				trigger_error(
					'Undefined property ' . $key .
					' in ' . $trace[0]['file'] .
					' on line ' . $trace[0]['line'],
					E_USER_NOTICE);
				break;
		}

	}

	
	/** StepSection status 
	 *
	 * The possible section status is NOTVISITED, VISITED, DONE
	 * \param $status New section status */
	public function set_status($status, $look, $access) {
        $this->status = $status;
        $this->look = $look;
        $this->access = $access;
    }

	
	/** Number of points for a quiz */
	public function get_numpoints() {return $this->numpoints;}
	
	/** \copydoc get_numpoints
	 * \param $num Number of points to specify */
	public function set_numpoints($num) {$this->numpoints = $num;}
	
	/** %Section is done \returns TRUE if section is done */
	public function is_done() {
        return $this->status == SectionStatus::DONE;
    }
	
	/** Flag a task as VISITED or DONE
     * @param User $user The user we are flagging
	 * @param string $status Task status to set (VISITED or DONE)
     * @param int $time The time of the flagging, default is time()
     */
	public function flag(User $user, $status, $time) {
		$this->status = $status;
		$table = new SectionStatus($this->step->site->db);
		$table->set($user, $this->step->tag, $this->tag, $status, $time);
	}
	
	/** Flag this section as having been visited 
	 * The general flag() function is used to set the 
	 * status. This function will only set the section as 
	 * visited if it has not been previously visited. 
	 */
	public function flag_visited(User $user, $time) {
		if($this->status === SectionStatus::NOTVISITED) {
			$this->flag($user, SectionStatus::VISITED, $time);
		}
	}

	/**
	 * Open the step page as a file.
	 * @return bool|resource File handle
	 */
	public function openFile() {
		return @fopen($this->step->site->rootDir .
			'/' . $this->step->url .
			'/' . $this->tag . '.php', "r");
	}

	/**
	 * Create data suitable for JSON to send to runtime
	 * @return array
	 */
	public function data() {
		return [
			'name'=>$this->name,
			'type'=>$this->type,
			'tag'=>$this->tag,
			'status'=>$this->status,
			'look'=>$this->look,
			'access'=>$this->access,
			'url'=>$this->__get('url')
		];
	}
	
	/** Step this section is assocated with 
	 * @returns Step object */
	public function get_step() { return $this->step; }

	private $step;			// Step this is a task in
	private $tag;			// Tag for the section - base name of section file
	private $name;			// Section name
	private $type;			// SECTION, TASK, VIDEO, or QUIZ
	private $next = NULL;	// Next section
	private $prev = NULL;	// Previous section
	private $status = null;	// Status of section
	private $look = null;   ///< When was first look at this section?
	private $access = null; ///< When was the last access of this section?

	private $numpoints = 0;	// Number of points for quiz
}
