/**
 * @file
 * Step progress indicator
 */

import {ImageLoader} from './ImageLoader.js';

import progressLeft from '../../img/progress-left.png';
import progressRight from '../../img/progress-right.png';
import progressSI from '../../img/progress-si.png';
import progressSC from '../../img/progress-sc.png';
import progressTI from '../../img/progress-ti.png';
import progressTC from '../../img/progress-tc.png';
import progressCur from '../../img/progress-cur.png';


export let Progress = function(sel, data) {
    const NOTVISITED = 'N';	///< %Section has not been visited by the user
    const VISITED = 'V';	///< %Section has been visited, but is not yet done
    const DONE = 'D';		///< %Section is completed
    const SECTION = 'S';    ///< Indicates this section is a regular section

    const TASK = 'T';		///< Indicates this section is a task
    const QUIZ = 'Q';		///< Indicates this section is a quiz
    const VIDEO = 'V';		///< Indicates this section is a video

    let loader = new ImageLoader();
    let left = loader.load(progressLeft);
    let right = loader.load(progressRight);
    let si = loader.load(progressSI);
    let sc = loader.load(progressSC);
    let ti = loader.load(progressTI);
    let tc = loader.load(progressTC);
    let cur = loader.load(progressCur);

    let overX = null;

    loader.loaded(() => {
        let els = document.querySelectorAll(sel);
        for(let i=0; i<els.length; i++) {
            let li = els[i];
            let canvas = document.createElement('CANVAS');
            li.appendChild(canvas);
            canvas.height = 25;
            canvas.width = left.width + right.width + sc.width * data.sections.length;

            let div = document.createElement('DIV');
            li.appendChild(div);

            let context = canvas.getContext("2d");

            let x = 0;
            let y = 5;
            context.drawImage(left, x, y);
            x += left.width;
            let curX = 0;

            for (let i = 0; i < data.sections.length; i++) {
                let section = data.sections[i];
                let img;

                switch (section.type) {
                    case 'T':
                        img = section.status === DONE ? tc : ti;
                        break;

                    default:
                        img = section.status === DONE ? sc : si;
                        break;
                }

                if (section.tag === data.current) {
                    curX = x;
                }

                context.drawImage(img, x, y);
                x += img.width;
            }

            // Draw the current location
            context.drawImage(cur, curX, y);

            context.drawImage(right, x, y);
            x += right.width;

            canvas.addEventListener("mouseenter", (event) => {
            });

            canvas.addEventListener("mousemove", (event) => {
                overX = event.offsetX;
                div.style.display = 'block';
                div.style.right = (li.offsetWidth - overX - 10) + 'px';

                let s = (overX - left.width) / sc.width;
                if(s < 0 || s >= data.sections.length) {
                    div.style.display = 'none';
                } else {
                    div.textContent = data.sections[Math.floor(s)].name;
                }
            });

            canvas.addEventListener("click", (event) => {
                overX = event.offsetX;
                let s = (overX - left.width) / sc.width;
                if(s >= 0 && s < data.sections.length) {
                    window.location = data.sections[Math.floor(s)].url;
                }
            });

            canvas.addEventListener("mouseleave", (event) => {
                div.style.display = 'none';
                overX = null;
            });

        }

    });

}
