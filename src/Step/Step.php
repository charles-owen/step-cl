<?php
/** @file
 * Class that defines a Step assignment 
 */

namespace CL\Step;

/** Defines a step 
 *
 * Every step assignment has a tag associated with it. A tag is a
 * string up to 30 characters long such as 'step1' or 'design5'.
 * The tag is used as the directory name for the step files and
 * the name for the step main page. It is also used in the grading
 * system to manage step grades.
 */
class Step extends \CL\Course\Assignment {
	/** Constructor
	 * @param string $tag The step assignment tag
	 * @param string $name Name of the assignment.
	 * @param string $url URL to get to the assignment (defaults to tag name)
	 */
	public function __construct($tag, $name, $url=null) {
		if($url === null) {
			$url = $tag;
		}

		parent::__construct($tag, $name, $url);
	}

    /**
     * Get standard properties for a step/assignment.
     *
     * rewrite - Set true if assignment uses .htaccess file to rewrite URLs
     *
     * @param $key Options are: course, tag
     * @return Course|mixed|null|string Property value
     */
    public function __get($key)
    {
        switch ($key) {
            case 'rewrite':
                return $this->rewrite;

            default:
                return parent::__get($key);
        }
    }


    /**
     *
     * rewrite - Set true if assignment uses .htaccess file to rewrite URLs
     *
     * Property set magic method
     * @param $key Property name
     * @param $value Value to set
     */
    public function __set($key, $value) {
        switch($key) {
            case 'rewrite':
                $this->rewrite = $value;
                break;

            default:
                parent::__set($key, $value);
                break;
        }

    }

	/** Load the step definition.
	 *
	 * We defer loading until we need it. Loading if from the file
	 * $tag/define.inc.php.
	 */
	public function load() {
        parent::load();

        if($this->loaded) {
            return;
        }

		// Add the override category
		$this->grading->add_override();

		// Create the next/prev support
		$cnt = count($this->sectionsinorder);
		for($j=0; $j<$cnt; $j++)
		{
			$secobj = $this->sectionsinorder[$j];
			
			if($j > 0) {
				$secobj->set_prev($this->sectionsinorder[$j - 1]);
			}
			
			if($j < ($cnt - 1)) {
				$secobj->set_next($this->sectionsinorder[$j + 1]);
			}
		}

        $this->loaded = true;
	}

	/** Load the step status for a user */
	public function load_status(\User $user) {
		if($this->statusloaded) {
			return;
		}

        $sectionStatus = new \Assignments\SectionStatus($this->course);
        $statuses = $sectionStatus->get_statuses($user, $this);
        foreach($statuses as $section => $status) {
            // This test deals with cases where a step page has been deleted.
            if(isset($this->sections[$section])) {
                $this->sections[$section]->set_status($status['status']);
            }
        }

		$this->statusloaded = true;
	}
	
	/** The step icon 
	 * \param $url URL for the step icon
	 * \param $alt ALT text to display with the step icon */
	function set_icon($url, $alt) {
		$this->iconurl = $url;
		$this->iconalt = $alt;
	}
	
	/** Add a section to the step. 
	 *
	 * This function is called from define.inc.php
	 * for the step assignment and adds a section to 
	 * the step.
	 * \param $tag %Section tag
	 * \param $name %Section name 
	 * \param $type The Step %Section type */
	public function add_section($tag, $name, $type=StepSection::SECTION) {
		$section = new StepSection($this, $tag, $name, $type);
		$this->sectionsinorder[] = $section;
		$this->sections[$tag] = $section;
		return $section;
	}
	
	/** Add a task section to the step
	 *
	 * This function is called from define.inc.php 
	 * for the step assignment and adds a task to 
	 * the step.
	 * \param $tag %Section tag
	 * \param $name Task name */
	public function add_task($tag, $name) {
		return $this->add_section($tag, $name, StepSection::TASK);
	}
	
	/** Add a video section to the step
	 *
	 * This function is called from define.inc.php 
	 * for the step assignment and adds a task to 
	 * the step.
	 * \param $tag %Section tag
	 * \param $name Task name */
	public function add_video($tag, $name) {
		return $this->add_section($tag, $name, StepSection::VIDEO);
	}
	
	/** Add a quiz to the step.
	 *
	 * \param $tag Quiz tag
	 * \param $name Quiz name
	 * \param $numpoints Number of points for this quiz
	 */
	public function add_quiz($tag, $name, $numpoints) {
		$section = $this->add_section($tag, $name, StepSection::QUIZ);
		$section->set_numpoints($numpoints);
		return $section;
	}
	
	/** Get a reference to a section. 
	 * \param $tag Section tag (short name)
	 * \returns Section reference or null if tag is not a valid section tag */
	public function get_section($tag) {
		if(isset($this->sections[$tag])) {
			return $this->sections[$tag];
		}

		return null;
	}

	/** Step name */
	public function get_stepname() {return $this->get_name();}
	
	/** Array of section objects in order 
	 * @retval array Array of Step::StepSection objects in order of presentation */
	public function get_sectionsinorder() {return $this->sectionsinorder;}
	
	/** URL for an icon that does with step sections */
	public function get_iconurl() {return $this->iconurl;}
	
	/** ALT text that goes with the step icon */
	public function get_iconalt() {return $this->iconalt;}
	
	/** ID for a visit by a user to a step assignment */
	public function get_stepuserid() {return $this->stepuserid;}
	
	/** The current step section 
	 * This refers to a step section that is currently being
	 * displayed to the user */	
	public function get_current() {return $this->current;}

	/** \copydoc get_current()
	 * \param $current Step section to set as current */
	public function set_current($current) {$this->current = $current;}
	
	/** Indicate we should add Skype links */
	/*public function use_skype() {
		$skype = new \Skype(get_user()->get_section());
	
		$this->menu_extra($skype->skype_menu_items());
	} */
	
	/** Add any extra menu options for the top-level menu 
	 * @param $extra Extra menu option HTML */
	public function menu_extra(StepMenuItem $extra) {$this->menuextra[] = $extra;}
	
	/** Extra content to add to the step menu */
	public function get_menuextra() {return $this->menuextra; }

    /**
     * Add a menu item that pops up a page using the popup function
     *
     * This is commonly used to add UML to a menu. Example:
     * \code
      	$step->add_popup_menu_item('umlpopup.php',
    'UML Diagram', '../lib/images/umlmenu.png');
     * \endcode
     *
     * @param $link Link to the page to pop up.
     * @param $title Title for the menu option
     * @param $img Link to image to display for the menu option
     * @param int $width Width of the page to pop up
     * @param int $height Height of the page to pop up
     */
    public function add_popup_menu_item($link, $title, $img, $width=800, $height=900) {
        $this->menu_extra(new \Step\StepPopupMenuItem($link, $title, $img, $width, $height));
    }
	
	/** Add any appended menu options for the top-level menu 
	 * @param $append appended menu option HTML */
	public function menu_append(StepMenuItem $append) {$this->menuappend[] = $append;}
	
	/** Appended content to add to the step menu */
	public function get_menuappend() {return $this->menuappend;}

    /**
     * Add Skype to the Step toolbar
     */
	public function add_skype() {
		$this->menu_extra(new SkypeMenuOption());
	}

    /**
     * Add error help to the Step toolbar
     * @param string $path Directory off root where error help can be found
     */
    public function add_error_help($path = "errorhelp") {
        $this->menu_append(new ErrorHelp($path));
    }

	/**
	 * Add any auxiliary views that are utilized by the page views
	 * @param \ViewAux $aux Auxiliary view utilized by this page
	 * @return ViewAux The ViewAux object we added
	 */
	public function add_view_aux(\ViewAux $aux) {
		$this->viewaux[] = $aux;
		return $aux;
	}

	public function get_view_aux() {
		return $this->viewaux;
	}

	private $statusloaded = false;  ///< The step status is loaded
	
	// Array from a section name to section
	private $sections = array();	///< The step sections indexed by name
	private $sectionsinorder = array(); ///< Array of sections in order of appearance
	
	// The current section
	private $current = NULL;
	
	private $iconurl = NULL;		// URL for icon to use in section table
	private $iconalt = NULL;		// Alt for icon in section table
	
	private $menuextra = array();	///< Extra content inserted into the top menu
	private $menuappend = array();	///< Extra content appended to the top menu

    private $loaded = false;        ///< Is the assignment loaded?
	private $viewaux = array();		///< Any aux views to add to pages

    private $rewrite = false;       ///< If true, directory uses RewriteRule to rewrite URL's.
}
