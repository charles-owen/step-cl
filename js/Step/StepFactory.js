import {StepSectionPage} from './StepSectionPage.js';
import {StepPage} from './StepPage.js';

export let StepFactory = function() {
}

StepFactory.create = function(site) {
    let Step = function() {
    }

    site.ready(() => {

        let en;
        if( (en = document.getElementById('cl-step')) !== null) {
            new StepSectionPage(JSON.parse(en.textContent));
        }

        if( (en = document.getElementById('cl-step-page')) !== null) {
            new StepPage(JSON.parse(en.textContent));
        }

    })


    return Step;
}