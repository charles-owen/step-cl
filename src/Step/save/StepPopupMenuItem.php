<?php
/**
 * @file
 * @brief Class that implements an added pop-up menu item for step menus
 */

namespace Step;

/**
 * Class that implements an added pop-up menu item for step menus
 *
 * This is commonly used for things such as UML diagrams.
 */
class StepPopupMenuItem extends StepMenuItem {

    /**
     * Add a menu item that pops up a page using the popup function
     *
     * This is commonly used to add UML to a menu. Example:
     * \code
    $step->add_menuextra(new \Step\StepMenuItem('umlpopup.php',
    'UML Diagram', '../lib/images/umlmenu.png'));
     * \endcode
     *
     * @param $link Link to the page to pop up.
     * @param $title Title for the menu option
     * @param $img Link to image to display for the menu option
     * @param int $width Width of the page to pop up
     * @param int $height Height of the page to pop up
     */
    public function __construct($link, $title, $img, $width=800, $height=900) {
        $this->link = $link;
        $this->title = $title;
        $this->img = $img;
        $this->width = $width;
        $this->height = $height;
    }

    /** Create the HTML for the menu item
     * @param StepSection|The $section The Step section this is associated with
     * @param \User $user User we are presenting for
     * @return string HTML for the menu option
     */
    public function html(StepSection $section, \User $user) {
        return <<<HTML
<li><a href="" onClick="return popup('$this->link', '$this->title', $this->width, $this->height)">
<img alt="$this->title" height="25" src="$this->img" width="24"><span>$this->title</span></a></li>
HTML;
    }

    private $link;
    private $title;
    private $img;
    private $width;
    private $height;
}