/**
 * @file
 * Javascript object for managment of the main step page.
 */

import {StepSectionsList} from './StepSectionsList.js';

export let StepPage = function(data) {
    // Is there any quiz data?
    let en, quizResults = null;
    if( (en = document.getElementById('cl-quiz-results')) !== null) {
        quizResults = JSON.parse(en.textContent);
    }

    new StepSectionsList('div.cl-step-sections', data, quizResults);
}