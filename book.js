// mobile nav
document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    let sideNavInit = M.Sidenav.init(sidenav);
});

document.addEventListener('DOMContentLoaded', function () {
    var elems = document.querySelectorAll('.carousel');
    M.Carousel.init(elems, {
        duration: 1000,
        fullWidth: true,
        padding: 15,
        indicators: true
    });
});

// Or with jQuery

$(document).ready(function () {
    $('.carousel').carousel();
});