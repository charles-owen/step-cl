/**
 * @file
 * Step page navigation features
 */

import {SectionStatus} from 'course-cl';

export let StepNav = function(sel, data) {
    let sectionTag = data.current;
    let assignTag = data.tag;

    let install = (nav) => {
        let element = nav.querySelector('.cl-step-mark-completed');
        if(element !== null) {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                flag(SectionStatus.DONE, () => {
                    window.location = data.url;
                });
            });
        }

        element = nav.querySelector('.cl-step-clear-completed');
        if(element !== null) {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                flag(SectionStatus.VISITED, () => {
                    window.location = data.url;
                });
            });
        }

        element = nav.querySelector('.cl-step-completed-next');
        if(element !== null) {
            element.addEventListener('click', function(event) {
                event.preventDefault();
                flag(SectionStatus.DONE, () => {
                    window.location = this.href;
                });
            });
        }
    }

    let flag = (status, callback) => {
        let params = {status: status};
        Site.api.post(`/api/step/status/${assignTag}/${sectionTag}`, params)
            .then((response) => {
                if (!response.hasError()) {
                    callback();
                } else {
                    Site.toast(this, response);
                }

            })
            .catch((error) => {
                Site.toast(this, error);
            });
    }

    let els = document.querySelectorAll(sel);
    for(let i=0; i<els.length;  i++) {
        install(els[i]);
    }
}
