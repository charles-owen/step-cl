/**
 * @file
 * Javascript object for management of a step section page
 */

import {Progress} from './Progress';
import {StickyNav} from 'site-cl/js/Util/StickyNav';
import {StepNav} from './StepNav';
import {Popup} from './Popup';

export let StepSectionPage = function(data) {
    new Popup('span.cl-popup-menu-item', data);
    new Progress('li.cl-step-progress', data);
    new StickyNav('nav.cl-stepnav');
    new StepNav('nav.cl-stepnav', data);
}


