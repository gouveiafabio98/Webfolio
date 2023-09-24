let locoScroll;
var msnry;

function initLocomotiveScroll() {
    if (locoScroll) {
        locoScroll.destroy(); // Destroy the existing instance
    }

    locoScroll = new LocomotiveScroll({
        el: document.querySelector('[data-scroll-container]'),
        smooth: true,
        mobile: {
           smooth: true,
           breakpoint: 0
       },
       tablet: {
           smooth: true,
           breakpoint: 0
       }
    });
}

window.addEventListener("load", (event) => {
    if (typeof Masonry !== 'undefined') {
        msnry = new Masonry('.grid', {
            itemSelector: '.grid-item',
            columnWidth: '.grid-sizer',
            gutter: '.gutter-sizer',
            percentPosition: true
        });

        msnry.on('layoutComplete', function () {
            initLocomotiveScroll();
        });
    }

    initLocomotiveScroll();
});