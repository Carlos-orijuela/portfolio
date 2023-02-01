"use strict";

jQuery(document).ready(function(){
    feather.replace();

    var $grid = $('.works').isotope({
        itemSelector: '.item',
        layoutMode: 'fitRows'
    });

    $('.filters').on('click', 'li', function() {
        $(this).siblings().removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({
            filter: filterValue
        })
    });

    $('.testimonial-slider').owlCarousel({
        items: 1,
        loop: true,
        autoplay: true
    });

    
    $('.site-menu').onePageNav({
        currentClass: 'active',
        scrollSpeed: 800
    });

    $(window).on('scroll', function() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            $('.site-logo-menu').addClass('sticky');
        } else {
            $('.site-logo-menu').removeClass('sticky');
        }
    });

    $('.toggle-menu').on('click', function(){
        $(this).toggleClass('active');
        $(this).siblings('.responsive-menu').toggleClass('active');
    });

});