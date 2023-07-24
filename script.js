// mobile nav
document.addEventListener('DOMContentLoaded', function () {
    let sidenav = document.querySelectorAll('.sidenav');
    let sideNavInit = M.Sidenav.init(sidenav);

    // Carousel
    let carousel = document.querySelectorAll(".carousel");
    let carouselInit = M.Carousel.init(carousel);

    // parallax
    var elems = document.querySelectorAll('.parallax');
    M.Parallax.init(elems);


    // Lightbox
    let lightbox = document.querySelectorAll(".materialboxed");
    let lightboxInit = M.Materialbox.init(lightbox);

    
    var modal = document.querySelectorAll('.modal');
    M.Modal.init(modal);

    var select = document.querySelectorAll('select');
    var selectinstances = M.FormSelect.init(select);
    
    var date = document.querySelectorAll('.datepicker');
    var dateinstances = M.Datepicker.init(date);
    
    var time = document.querySelectorAll('.timepicker');
    var timeinstances = M.Timepicker.init(time);
    
    var scrollspy = document.querySelectorAll('.scrollspy');
    M.ScrollSpy.init(scrollspy);

    // FAQs
    let faqs = document.querySelectorAll(".collapsible");
    let faqsInit = M.Collapsible.init(faqs, {
        accordion: false,
    });
});


//Nice Waves
const waveOptions = {
    fills: ["#9FA8DA", "#A6DAC4"],
    offset: 0.2,
    flowRate: 5,
};
waves(waveOptions).mount("#waves");


