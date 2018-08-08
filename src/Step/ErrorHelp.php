<?php
/** @file
 * Step menu item for error help.
 */

namespace CL\Step;

use CL\Users\User;

/**
 * Step menu item for error help.
 */
class ErrorHelp implements StepMenuItem {
	/**
	 * Constructor
	 */
	public function __construct() {
	}

	/**
	 * Create the HTML for the menu item
	 * @param StepSection $section The step section this is associated with
	 * @param User $user User this is for
	 * @return string HTML for the Error Help form
	 */
	public function html(StepSection $section, User $user) {
		$assignTag = $section->step->tag;
		$sectionTag = $section->tag;
		$obj = ['assign'=>$assignTag, 'tag'=>$sectionTag];
		$json = htmlspecialchars(json_encode($obj), ENT_NOQUOTES);

		return '<div class="cl-error-help" style="display: none">' . $json . '</div>';
	}
}
