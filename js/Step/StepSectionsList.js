import {SectionStatus} from 'course-cl';
import {TimeFormatter} from 'site-cl';
import {StepSection} from './StepSection.js';
import Dialog from 'dialog-cl';

export let StepSectionsList = function(sel, data) {

    this.start = function() {
        let element = document.querySelector(sel);
        if(element === null) {
            return;
        }

        element.innerHTML = `<h2><a id="sections">${data.sectionsTitle}</a></h2>`;

        let div = document.createElement('DIV');
        element.appendChild(div);
        div.innerHTML = data.sectionsHeading;

        let table = this.table();
        div.appendChild(table);
    }

    this.table = function() {
        let table = document.createElement('TABLE');
        table.title = "Table of Step Sections";

        let tr = document.createElement('TR');
        tr.innerHTML = `<th>&nbsp;</th><th>Section</th><th>&nbsp;</th>`;
        table.appendChild(tr);

        for(let section of data.sections) {
            tr = this.taskRow(data, section);
            table.appendChild(tr);
        }

        return table;
    }

    this.taskRow = function(data, section) {
        let tr = document.createElement('TR');

        //
        // Check mark column
        //
        let td1 = document.createElement('TD');
        td1.classList.add('stepcheck');
        tr.appendChild(td1);

        let root = Site.info.root;

        if(section.status === SectionStatus.DONE) {
            td1.innerHTML = `<img alt="Check mark" width="19" height="14" src="${root}/vendor/cl/site/img/check.png">`;
        }

        td1.onclick = (event) => {

            let div = document.createElement('DIV');
            div.classList.add('cl-dialog');


            let content = `<div class="tabular small">
<p><span class="label">Section: </span><span>${section.name}</span></p>
<p><span class="label">Status: </span><span>${SectionStatus.toString(section.status)}</span></p>`;

            if(section.status !== null && section.status !== SectionStatus.NOTVISITED) {
                content += `
<p><span class="label">First Look: </span><span>${TimeFormatter.relative(new Date(section.look * 1000))}</span></p>
<p><span class="label">Last Access: </span><span>${TimeFormatter.relative(new Date(section.access * 1000))}</span></p>`;
            }

            content += `</div>`;


            div.innerHTML = content;

            let dialog = new Dialog({
                content: div,
                title: 'Section Status'
            });

            if(section.status === SectionStatus.DONE) {
                let p = document.createElement('P');
                p.classList.add('center');
                div.appendChild(p);

                let button = document.createElement('BUTTON');
                button.textContent = 'Clear Status';
                p.appendChild(button);
                button.onclick = (event) => {
                    StepSection.flag(data.tag, section.tag, SectionStatus.VISITED, () => {
                        section.status = SectionStatus.VISITED;
                        td1.innerHTML = '';
                        dialog.close();
                    });

                }

            }

        }


        //
        // The link itself
        //
        let td2 = document.createElement('TD');
        td2.classList.add('stepname');
        tr.appendChild(td2);


        let img;
        switch(section.type) {
            case StepSection.TASK:
                img = `<img alt="Task" src="${data.taskicon}">`;
                break;

            case StepSection.QUIZ:
                img = `<img alt="Quiz" src="${data.quizicon}">`;
                break;

            case StepSection.VIDEO:
                img = `<img alt="Video" src="${data.videoicon}">`;
                break;

            default:
                img = `<img alt="${data.iconalt}" src="${data.iconurl}">`;
                break;
        }

        td2.innerHTML = `${img} <a href="${section.url}" class="steplink">${section.name}</a>`;

        //
        // Quiz status
        //
        let td3 = document.createElement('TD');
        tr.appendChild(td3);
        td3.innerHTML = '&nbsp;';

        return tr;
    }

    // '<p>Test</p>';

    this.start();
}

