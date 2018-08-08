<?php
/** @file
 * Interface for a step menu item we can add.
 */

namespace CL\Step;

use CL\Users\User;

/**
 * Interface for a step menu item we can add.
 *
 * We implement this interface on an object that creates the HTML for
 * new step menu items.
 */
interface StepMenuItem {
    /**
     * Create the HTML for the menu item
     * @param StepSection $section The Step section this is associated with
     * @param User $user User we are presenting for
     * @return HTML for the menu item
     */
	function html(StepSection $section, User $user);
}
