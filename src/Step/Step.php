<?php
/** @file
 * Class that defines a Step assignment 
 */

/// Classes in the Step assignment subsystem
namespace CL\Step;

use CL\Users\User;
use CL\Course\SectionStatus;
use CL\Site\ViewAux;

/**
 * Defines a step assignment
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
     * @param string $property Options are: course, tag
     * @return mixed Property value
     */
    public function __get($property) {
        switch ($property) {
            case 'rewrite':
                return $this->rewrite;

	        case 'iconurl':
	        	return $this->iconurl;

	        case 'iconalt':
	        	return $this->iconalt;

	        case 'sectionsInOrder':
	        	return $this->sectionsInOrder;

            default:
                return parent::__get($property);
        }
    }


    /**
     *
     * rewrite - Set true if assignment uses .htaccess file to rewrite URLs
     *
     * Property set magic method
     * @param string $property Property name
     * @param mixed $value Value to set
     */
    public function __set($property, $value) {
        switch($property) {
            case 'rewrite':
                $this->rewrite = $value;
                break;

            default:
                parent::__set($property, $value);
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
		if($this->grading !== null) {
			$this->grading->add_override();
		}

		// Create the next/prev support
		$cnt = count($this->sectionsInOrder);
		for($j=0; $j<$cnt; $j++)
		{
			$secobj = $this->sectionsInOrder[$j];
			
			if($j > 0) {
				$secobj->prev = ($this->sectionsInOrder[$j - 1]);
			}
			
			if($j < ($cnt - 1)) {
				$secobj->next = ($this->sectionsInOrder[$j + 1]);
			}
		}

        $this->loaded = true;
	}

	/** Load the step status for a user */
	public function load_status(User $user) {
		if($this->statusloaded) {
			return;
		}

        $sectionStatus = new SectionStatus($this->site->db);
        $statuses = $sectionStatus->get_statuses($user, $this->tag);
        foreach($statuses as $section => $status) {
            // This test deals with cases where a step page has been deleted.
            if(isset($this->sections[$section])) {
                $this->sections[$section]->set_status(
                	$status['status'],
	                $status['look'],
	                $status['access']);
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
	 *
	 * @param $tag %Section tag
	 * @param $name %Section name
	 * @param $type The Step %Section type
	 * @return StepSection
	 */
	public function add_section($tag, $name, $type=StepSection::SECTION) {
		$section = new StepSection($this, $tag, $name, $type);
		return $this->add($section);
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

	/**
	 * Add a StepSection object to the step
	 * @param StepSection $section StepSection object to add
	 * @return StepSection
	 */
	public function add(StepSection $section) {
		$this->sectionsInOrder[] = $section;
		$this->sections[$section->tag] = $section;
		return $section;
	}
	
	/**
	 * Get a reference to a section.
	 * \param string $tag Section tag (short name)
	 * \return Section reference or null if tag is not a valid section tag
	 */
	public function get_section($tag) {
		if(isset($this->sections[$tag])) {
			return $this->sections[$tag];
		}

		return null;
	}

	
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
	 * Create data suitable for JSON to send to runtime
	 * @param array $options Options that control what data is included
	 * @return array
	 */
    public function data($options=[]) {
    	$data = parent::data($options);

    	$sections = [];
    	foreach($this->sectionsInOrder as $section) {
    		$sections[] = $section->data($options);
	    }

	    $data['sections'] = $sections;
    	$data['iconurl'] = $this->iconurl;
    	$data['iconalt'] = $this->iconalt;
    	return $data;
    }

	/**
	 * Add any auxiliary views that are utilized by the page views
	 * @param ViewAux $aux Auxiliary view utilized by this page
	 * @return ViewAux The ViewAux object we added
	 */
	public function add_view_aux(ViewAux $aux) {
		$this->viewaux[] = $aux;
		return $aux;
	}

	/**
	 * Get all ViewAux views attached to this view.
	 * @return array All auxiliary views attached to this view
	 */
	public function get_view_aux() {
		return $this->viewaux;
	}

	private $statusloaded = false;  ///< The step status is loaded
	
	// Array from a section name to section
	private $sections = array();	///< The step sections indexed by name
	private $sectionsInOrder = array(); ///< Array of sections in order of appearance
	
	private $iconurl = NULL;		// URL for icon to use in section table
	private $iconalt = NULL;		// Alt for icon in section table
	
	private $menuextra = array();	///< Extra content inserted into the top menu
	private $menuappend = array();	///< Extra content appended to the top menu

    private $loaded = false;        ///< Is the assignment loaded?
	private $viewaux = array();		///< Any aux views to add to pages

    private $rewrite = false;       ///< If true, directory uses RewriteRule to rewrite URL's.
}
