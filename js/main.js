$(document).ready(function() {
    $('.slider').slick({
        arrows:false,
        dots:true,
        appendDots:'.slider-dots',
        dotsClass:'.dots',
        autoplay:true,
        autoplaySpeed:2000,
    });

    document.getElementById("year").innerHTML = (new Date().getFullYear());

    let hamburger=document.querySelector('.hamburger');
    let times=document.querySelector('.times');
    let mobileNav=document.querySelector('.mobile-nav');
    let mainSiteWrapper=document.querySelector('main-site-wrapper');

    hamburger.addEventListener('click', function() {
        mobileNav.classList.add('open');
        // hamburger.classList.add('opacity-0');
      });
    times.addEventListener('click', function() {
        mobileNav.classList.remove('open');
        // hamburger.classList.remove('opacity-0');
      });
    //   mainSiteWrapper.addEventListener('click', function() {
    //     mobileNav.classList.remove('open');
    //     hamburger.classList.remove('opacity-0');
    //   });
});           

