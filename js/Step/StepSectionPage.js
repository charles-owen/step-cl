/**
 * @file
 * Javascript object for management of a step section page
 */

import {Progress} from './Progress.js';
import {StickyNav} from './StickyNav.js';
import {StepNav} from './StepNav.js';

export let StepSectionPage = function(data) {
    new Progress('li.cl-step-progress', data);
    new StickyNav('nav.cl-stepnav');
    new StepNav('nav.cl-stepnav', data);
}


