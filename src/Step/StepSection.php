<?php
/** @file
 * Class that defines a section in a step assignment 
 */

namespace CL\Step;

use CL\Course\SectionStatus;

/** Defines a section in a step assignment 
 *
 * A section can be a tutorial page, a task page, or a quiz.
 */
class StepSection {
	const SECTION = 0;		//!< Indicates this section is a regular section
	const TASK = 1;			//!< Indicates this section is a task
	const QUIZ = 2;			//!< Indicates this section is a quiz
	const VIDEO = 3;		//!< Indicates this section is a video

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

	/** Reference to next section in order */	
	public function get_next() {return $this->next;}
	
	/** \copydoc get_next() 
	 * \param $next Next section to set */
	public function set_next($next) {$this->next = $next;}
	
	/** Reference to previous section in order */
	public function get_prev() {return $this->prev;}
	
	/** \copydoc get_prev() 
	 * \param $prev Previous section to set */
	public function set_prev($prev) {$this->prev = $prev;}
	
	/** StepSection status 
	 *
	 * The possible section status is NOTVISITED, VISITED, DONE
	 * \param $status New section status */
	public function set_status($status) {
        $this->status = $status;
    }
	
	/** %Section tag
	 * Every section has a short tag (name) that is the base 
	 * name of the section in the step directory and is used
	 * as the key for the section in all tables. 
	 * \returns StepSection tag */
	public function get_tag() {return $this->tag;}
	
	/** StepSection name \returns StepSection name */
	public function get_name() {return $this->name;}
	
	/** StepSection type \returns StepSection type */
	public function get_type() {return $this->type;}
	
	/** Number of points for a quiz */
	public function get_numpoints() {return $this->numpoints;}
	
	/** \copydoc get_numpoints
	 * \param $num Number of points to specify */
	public function set_numpoints($num) {$this->numpoints = $num;}
	
	/** %Section is done \returns TRUE if section is done */
	public function is_done() {
        $s = self::DONE;
        return $this->status == self::DONE;
    }
	
	/** Flag a task as VISITED or DONE
     * @param User $user The user we are flagging
	 * @param $status Task status to set (VISITED or DONE)
     * @param $time The time of the flagging, default is time()
     */
	public function flag(\User $user, $status, $time=null) {
        if($time === null) {
            $time = time();
        }

		$this->status = $status;
        parent::set_section_status($user, $this->step, $this->tag, $status, $time);
	}
	
	/** Flag this section as having been visited 
	 * The general flag() function is used to set the 
	 * status. This function will only set the section as 
	 * visited if it has not been previously visited. 
	 */
	public function flag_visited(\User $user, $time=null) {
		if($this->status === self::NOTVISITED) {
			$this->flag($user, self::VISITED, $time);
		}
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
	private $status;	    // Status of section

	private $numpoints = 0;	// Number of points for quiz
}
