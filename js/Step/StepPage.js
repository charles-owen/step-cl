/**
 * @file
 * Javascript object for managment of the main step page.
 */

import {StepSectionsList} from './StepSectionsList.js';

export let StepPage = function(data) {
    new StepSectionsList('div.cl-step-sections', data);
}