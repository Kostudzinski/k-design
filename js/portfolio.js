 'use strict';

 window.addEventListener('load', function () {
     const loader = document.querySelector('.start-loader');
     $('.load-cover').addClass('load-cover-on');
     $('.loading-par').addClass('height');
     $('.navigations').addClass('navigations-on');
     setTimeout(function () {
         $('.web-design').trigger('click');
     }, 3000);
     loader.className += ' hidden';
 });

 $(document).ready(function () {

     chooseSkill();
     chooseSlides();
     zoom();
     //     mouseSquare();
     playClick();
     mobileShow();
     polish();
 });

 $(window).scroll(function () {
     showSlides();
 });



 //CARD



 //First Slide

 function showSlides() {
     if ($(window).scrollTop() >= ($(".comp-on").offset().top - 350)) {
         //           $('.web-design-slides').addClass('display-slides');
         //           $('.web-design').addClass('active');
         $('.screen-black').addClass('screen-on');
         $('.button-start').addClass('display-slides');
         setTimeout(function () {
             $('.button-start').addClass('display');
         }, 100)
     }
 };



 //function socialFixedNone() {
 //     var scrollBottom = $(window).scrollTop() + $(window).height();
 //
 //     if (scrollBottom >= ($('.text-about').offset().top) + 700) {
 //         $('#social').addClass('nodisplay');
 //     } else {
 //         $('#social').removeClass('nodisplay');
 //     };
 // }


 //slideshow 

 var slideIndex = 1;
 var slideIndexBrand = 1;
 showDivs(slideIndex);
 showDivsBrand(slideIndexBrand);

 function plusDivs(n) {
     showDivs(slideIndex += n);
 }

 function plusDivsBrand(n) {
     showDivsBrand(slideIndexBrand += n);
 }

 function showDivs(n) {
     //     if ($('.web-design-slides').hasClass('display-slides')) {
     var i;
     var x = document.getElementsByClassName("mySlides");
     if (n > x.length) {
         slideIndex = 1
     }
     if (n < 1) {
         slideIndex = x.length
     };
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     x[slideIndex - 1].style.display = "block";
     //     }
 }

 function showDivsBrand(n) {
     //     if ($('.brand-slides').hasClass('display-slides')) {
     var i;
     var x = document.getElementsByClassName("mySlidesBrand");
     if (n > x.length) {
         slideIndexBrand = 1
     }
     if (n < 1) {
         slideIndexBrand = x.length
     };
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     x[slideIndexBrand - 1].style.display = "block";
     //     }
 }

 var slideIndexGraphic = 1;
 var slideIndexFront = 1;
 showDivsGraphic(slideIndexGraphic);
 showDivsFront(slideIndexFront);

 function plusDivsGraphic(n) {
     showDivsGraphic(slideIndexGraphic += n);
 }

 function plusDivsFront(n) {
     showDivsFront(slideIndexFront += n);
 }

 function showDivsGraphic(n) {
     var i;
     var x = document.getElementsByClassName("mySlidesGraphic");
     if (n > x.length) {
         slideIndexGraphic = 1
     }
     if (n < 1) {
         slideIndexGraphic = x.length
     };
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     x[slideIndexGraphic - 1].style.display = "block";
 }

 function showDivsFront(n) {
     var i;
     var x = document.getElementsByClassName("mySlidesFront");
     if (n > x.length) {
         slideIndexFront = 1
     }
     if (n < 1) {
         slideIndexFront = x.length
     };
     for (i = 0; i < x.length; i++) {
         x[i].style.display = "none";
     }
     x[slideIndexFront - 1].style.display = "block";
 }

 function chooseSkill() {
     $('.skill-item').click(function () {
         $('.loader').addClass('display-slides');
         $('.skill-item').removeClass('active');
         $(this).addClass('active');
     });

 }

 function chooseSlides() {
     $('.start-screen').click(function () {
         $('.loader').addClass('display-slides');
         $('.slides').removeClass('display-slides');
         $('.web-design-slides').addClass('display-slides');
         $('.web-design').addClass('active');
     });

     $('.brand').click(function () {
         $('.slides').removeClass('display-slides');
         $('.brand-slides').addClass('display-slides');
     });

     $('.web-design').click(function () {
         $('.slides').removeClass('display-slides');
         $('.web-design-slides').addClass('display-slides');
     });

     $('.front-end').click(function () {
         $('.slides').removeClass('display-slides');
         $('.front-slides').addClass('display-slides');
     });

     $('.graphic').click(function () {
         $('.slides').removeClass('display-slides');
         $('.graphic-slides').addClass('display-slides');
     });
 }

 function zoom() {
     $('.zoom-click').click(function () {
         $(document).keyup(function (e) {
             if (e.keyCode === 27) {
                 $('html, body').removeClass('no-scroll');
                 $('#projects').removeClass('laptop-full');
                 $('#projects-portfolio').removeClass('portfolio-full');
                 $('.laptop-container').removeClass('laptop-full');
                 $('.screen-black').removeClass('zoom-screen');
                 $('.info').removeClass('nodisplay');
                 $('.mac-nav').removeClass('fix-nav-mac');
                 $('#card').removeClass('card-absolute');

                 $('.arrows').removeClass('arrows-full');
                 $('.cross-right').removeClass('slides');
                 $('.cross-left').removeClass('cross-left-zoom');
                 $('.phone-show').removeClass('phone-zoom');
                 $('video').removeClass('video-zoom');


                 setTimeout(function () {
                     $([document.documentElement, document.body]).animate({
                         scrollTop: $("#projects").offset().top
                     }, 500);
                 }, 100)
             }
         });

         $('html, body').toggleClass('no-scroll');
         //         $([document.documentElement, document.body]).animate({
         //             scrollTop: $("#projects").offset().top
         //         }, 500);
         $('#projects').toggleClass('laptop-full');
         $('#projects-portfolio').toggleClass('portfolio-full');
         $('.laptop-container').toggleClass('laptop-full');
         $('.screen-black').toggleClass('zoom-screen');
         $('.info').toggleClass('nodisplay');
         $('.mac-nav').toggleClass('fix-nav-mac');
         $('#card').toggleClass('card-absolute');

         $('.arrows').toggleClass('arrows-full');
         $('.cross-right').toggleClass('slides');
         $('.cross-left').toggleClass('cross-left-zoom');
         $('.phone-show').toggleClass('phone-zoom');
         $('video').toggleClass('video-zoom');



     })
 }

 // function mouseSquare() {
 //     $('.scroll-squares').mousemove(function (e) {
 //         var x = e.pageX - this.offsetLeft;
 //         var y = e.pageY - this.offsetTop; {
 //             $('.scroll-squares').css({
 //                 'right': x / 20,
 //                 'bottom': y / 20
 //             });
 //         }
 //     })
 // }

 function mobileShow() {
     $('.mobile-icon').click(function () {
         var parent = $(this).parents(".mySlides");
         var phone = $(parent).find(".phone-show");
         phone.toggleClass('phone-display');
         $('.cross-mobile').click(function () {
             phone.removeClass('phone-display');
         })
     });
 }

 function playClick() {
     $('.play-icon').click(function () {
         $('video').trigger('click');
     })
 }

function polish() {
    $('.polish').click(function() {
        $('.polish-message').addClass('display-slides');
        $('.button-okay').click(function() {
            $('.polish-message').removeClass('display-slides');
        })
    })
}