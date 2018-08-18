import {StepSection} from './StepSection.js';
import {TimeFormatter} from 'site-cl/js/TimeFormatter';
import {SectionStatus} from 'course-cl/js/SectionStatus';
import Dialog from 'dialog-cl';

export let StepSectionsList = function(sel, data, quizResults) {

    this.start = function() {
        let element = document.querySelector(sel);
        if(element === null) {
            return;
        }

        element.innerHTML = `<h2><a id="sections">${data.sectionsTitle}</a></h2>`;

        let div = document.createElement('DIV');
        element.appendChild(div);
        div.innerHTML = data.sectionsBegin;

        let table = this.table();
        div.appendChild(table);

        let p = document.createElement('P');
        div.appendChild(p);
        p.classList.add('center');
        p.innerHTML = `This assignment is also available as a 
<a href="${Site.root + '/cl/step/all/' + data.tag}" title="Single Page View">single page</a>.`;

        if(data.gradeLink !== undefined) {
	        p = document.createElement('p');
	        div.appendChild(p);
	        p.classList.add('grade');
	        p.innerHTML = `<p class="grade"><img src="${Site.root}/vendor/cl/grades/img/grading.png" width="114" height="50" alt="Grading Icon">
		    <a class="cl-autoback" href="${data.gradeLink}/${data.tag}">Assignment Grading Page</a></p>`;
        }

	    const endDiv = document.createElement('DIV');
        div.appendChild(endDiv);
        endDiv.innerHTML = data.sectionsEnd;
    }

    this.table = function() {
        let table = document.createElement('TABLE');
        table.title = "Table of Step Sections";

        let tr = document.createElement('TR');
        if(quizResults !== null) {
            tr.innerHTML = `<th>&nbsp;</th><th>Section</th><th>&nbsp;</th>`;
        } else {
            tr.innerHTML = `<th>&nbsp;</th><th>Section</th>`;
        }
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

        let root = Site.root;

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

        const icon = data.icons[section.type];
        const img = `<img alt="${icon.alt}" src="${icon.file}">`;

        td2.innerHTML = `${img} <a href="${section.url}" title="${section.name}" class="steplink">${section.name}</a>`;

        //
        // Quiz status
        //
        if(quizResults !== null) {
            let td3 = document.createElement('TD');
            tr.appendChild(td3);

            let result = quizResults[section.tag];
            if(result !== undefined) {
                td3.innerHTML = result.points + '/' + result.maxpoints;
            } else {
                td3.innerHTML = '&nbsp;';
            }

        }


        return tr;
    }

    this.start();
}

