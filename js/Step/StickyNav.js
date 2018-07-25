

export let StickyNav = function(sel) {


    let navs = [];

    let els = document.querySelectorAll(sel);
    for(let i=0; i<els.length;  i++) {
        navs.push({
            nav:  els[i],
            sticky: els[i].offsetTop
        });
    }


    window.addEventListener('scroll', (event) => {
        for(let i=0; i<navs.length; i++) {
            let nav = navs[i];
            if (window.pageYOffset >= nav.sticky) {
                nav.nav.classList.add("cl-sticky")
            } else {
                nav.nav.classList.remove("cl-sticky");
            }
        }
    });

}
