/**
 * @file
 * Popup menu items.
 */




export let Popup = function(sel, data) {

    function initialize() {
        const elements = document.querySelectorAll(sel);
        for(let i=0; i<elements.length; i++) {
        	install(elements[i]);
        }
    }

    function install(element) {
    	const json = JSON.parse(element.textContent);
    	element.innerHTML = '';
    	element.style.display = 'inline-block';

    	const a = document.createElement('a');
    	element.appendChild(a);

    	const span = document.createElement('span');
    	span.innerText = json.title;
    	a.appendChild(span);

    	const img = document.createElement('img');
    	img.src = json.img;
    	a.appendChild(img);

    	a.onclick = (event) => {
    		event.preventDefault();

		    if (! window.focus){
		    	return;
		    }

		    window.open(json.link, json.title, 'width=' + json.width + ', height=' + json.height + ', scrollbars=yes');
	    }

    }

    initialize();
}
