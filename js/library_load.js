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

        var grid = document.getElementsByClassName('grid');
        for (var i = 0; i < grid.length; i++) {
            msnry = new Masonry(grid[i], {
                itemSelector: '.grid-item',
                columnWidth: '.grid-sizer',
                gutter: '.grid-gutter',
                percentPosition: true
            });
        }

        msnry.on('layoutComplete', function () {
            initLocomotiveScroll();
        });
    }

    initLocomotiveScroll();
});