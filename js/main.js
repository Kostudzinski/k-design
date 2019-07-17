 'use strict';

 window.addEventListener('load', function () {
     const loader = document.querySelector('.start-loader');
     $('.load-cover').addClass('load-cover-on');
     $('.loading-par').addClass('height');
     $('.navigations').addClass('navigations-on');
     setTimeout(function () {
         $('.black-square').addClass('black-square-on');
         $('.gray-square').addClass('gray-square-on');
         $('.designer').addClass('designer-on');
         $('.card-line').addClass('card-line-on');
         $('.studzinski-cover').addClass('studzinski-cover-on');
         $('.black-square-cover').addClass('black-square-cover-on');
     }, 2000);
     loader.className += ' hidden';
 });

 $(document).ready(function () {
     parallax();
     scrollSlow();
     changeProgram();
     firstProgram();
     mouseOverProgram();
     buttons();
     backHTML();
     socialFixed();
     infoLine();
     kLogo();
     infoRow();
     textFooter();
     burger();
     chooseSkill();
     chooseSlides();
     zoom();
     //     mouseSquare();
     mobileShow();
     ok();
     playClick();
     polish();
 });

 $(window).scroll(function () {
     card();
     card2();
     designer();
     firstProgram();
     buttons();
     socialFixed();
     infoLine();
     kLogo();
     infoRow();
     textFooter();
     showSlides();


 });

 function scrollSlow() {

     // Add smooth scrolling to all links
     $("a").on('click', function (event) {
         console.log(this.hash);
         // Make sure this.hash has a value before overriding default behavior
         if (this.hash !== "") {
             // Prevent default anchor click behavior
             event.preventDefault();

             // Store hash
             var hash = this.hash;

             // Using jQuery's animate() method to add smooth page scroll
             // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
             $('html, body').animate({
                     scrollTop: $(hash).offset().top - 20
                 }, 500,
                 //                              function(){
                 //   
                 //        // Add hash (#) to URL when done scrolling (default click behavior)
                 //        window.location.hash = hash;
                 //      }
             );
         } // End if
     });
 };

 //CARD

 function card() {
     if ($(window).scrollTop() >= 240) {

         $('.black-square-cover').addClass('cover-all-animation')

     } else {
         $('.black-square-cover').removeClass('cover-all-animation')

     };


 }

 function card2() {
     if ($(window).scrollTop() >= 200) {

         $('.studzinski-cover').addClass('cover-all-animation')

     } else {
         $('.studzinski-cover').removeClass('cover-all-animation')

     };


 }

 function designer() {
     if ($(window).scrollTop() >= 300) {

         $('.designer').addClass('designer-reverse');
         $('.card-line').addClass('card-line-reverse')

     } else {
         $('.designer').removeClass('designer-reverse');
         $('.card-line').removeClass('card-line-reverse');

     };


 }

 function parallax() {
     window.addEventListener('scroll', parallax, false);
     var backgroundTop = document.getElementById('card');
     backgroundTop.style.top = (window.pageYOffset / 2.5) + "px";
 }



 //First Slide

 function showSlides() {
     if ($(window).scrollTop() >= ($(".comp-on").offset().top - 350)) {
         //           $('.web-design-slides').addClass('display-slides');
         //           $('.web-design').addClass('active');
         $('.screen-black').addClass('screen-on');
         $('.button-start').addClass('display-slides');
         setTimeout(function () {
             $('.button-start').addClass('display');
             $('.button-full-portfolio .gray-border').addClass('gray-border-on');
             $('.button-full-portfolio .black-border').addClass('black-border-on');
             $('.button-full-portfolio .button-p').addClass('button-p-on');
         }, 100)
     }
 };


 //Programs changer

 function changeProgram() {
     $('.mymultiplediv').mouseover(function () {
         var myvar = this.id;
         $("div.mydiv").hide();
         $('#div' + myvar).show();
     });
 };

 // First program selected



 function firstProgram() {
     if ($(window).scrollTop() >= ($(".number").offset().top + 150)) {
         $('#divone').addClass('display');
         $('#one').addClass('hovering');
     };
 };


 function mouseOverProgram() {
     $('.mymultiplediv').mouseover(function () {
         $('#one').removeClass('hovering')
     })
 };

 function backHTML() {
     $('.left-column').mouseleave(function () {
         $("div.mydiv").hide();
         $("#divone").show();
         $('#one').addClass('hovering');
     })
 };

 function buttons() {
     var scrollBottom = $(window).scrollTop() + $(window).height();
     if (scrollBottom >= ($("#buttons").offset().top) + 100) {
         $('.black-border').addClass('black-border-on');
         $('.gray-border').addClass('gray-border-on');
         $('.button-p').addClass('button-p-on');
     } else {
         $('.black-border').removeClass('black-border-on');
         $('.gray-border').removeClass('gray-border-on');
         $('.button-p').removeClass('button-p-on');
     };
 };

 function socialFixed() {
     var scrollBottom = $(window).scrollTop() + $(window).height();
     if (scrollBottom >= ($('.text-about').offset().top) + 300) {
         $('.social').addClass('fade-away');
     } else {
         $('.social').removeClass('fade-away');
     };
 };

 function infoLine() {
     var scrollBottom = $(window).scrollTop() + $(window).height();
     if (scrollBottom >= ($('.info-line').offset().top) + 50) {
         $('.info-line').addClass('info-line-on');
     } else {
         $('.info-line').removeClass('info-line-on');
     };
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

 function kLogo() {
     var scrollBottom = $(window).scrollTop() + $(window).height();
     if (scrollBottom >= ($(".k-logo").offset().top) + 170) {
         $('.k-logo').addClass('k-logo-show');
     } else {
         $('.k-logo').removeClass('k-logo-show');
     };
 };

 function infoRow() {
     var scrollBottom = $(window).scrollTop() + $(window).height();
     if (scrollBottom >= ($(".footer-info-row").offset().top) + 50) {
         $('.footer-info-row').addClass('info-row-on');
     } else {
         $('.footer-info-row').removeClass('info-row-on');
     };
 };

 function textFooter() {
     var scrollBottom = $(window).scrollTop() + $(window).height();
     if (scrollBottom >= ($(".text-footer").offset().top) + 50) {
         $('.text-footer').addClass('info-row-on');
     } else {
         $('.text-footer').removeClass('info-row-on');

     };
 };

 function burger() {
     $('#burger').click(function () {
         $('.burger-line:nth-child(2)').toggleClass('transparent');
         $('.burger-line:nth-child(1)').toggleClass('rotate-top');
         $('.burger-line:nth-child(3)').toggleClass('rotate-bottom');
         $('#burger-menu').toggleClass('show-nav');
         setTimeout(showBurger, 900);
     });
     $('.burger-li').click(function () {
         $('#burger-menu').toggleClass('show-nav');
         $('.burger-line:nth-child(2)').toggleClass('transparent');
         $('.burger-line:nth-child(1)').toggleClass('rotate-top');
         $('.burger-line:nth-child(3)').toggleClass('rotate-bottom');
         $('.burger-li').toggleClass('burger-li-show');
         $('.burger-icon').toggleClass('burger-icons-show');
     });
 }

 function showBurger() {
     $('.burger-li').toggleClass('burger-li-show');
     $('.burger-icon').toggleClass('burger-icons-show');
 }

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
         $('.button-full-portfolio').css('display', 'none')
     });

     $('.brand').click(function () {
         $('.slides').removeClass('display-slides');
         $('.brand-slides').addClass('display-slides');
         $('.button-full-portfolio').css('display', 'none')

     });

     $('.web-design').click(function () {
         $('.slides').removeClass('display-slides');
         $('.web-design-slides').addClass('display-slides');
         $('.button-full-portfolio').css('display', 'none')

     });

     $('.front-end').click(function () {
         $('.slides').removeClass('display-slides');
         $('.front-slides').addClass('display-slides');
         $('.button-full-portfolio').css('display', 'none')

     });

     $('.graphic').click(function () {
         $('.slides').removeClass('display-slides');
         $('.graphic-slides').addClass('display-slides');
         $('.button-full-portfolio').css('display', 'none')

     });
 }

 function zoom() {
     $('.zoom-click').click(function () {
         $(document).keyup(function (e) {
             if (e.keyCode === 27) {
                 $('html, body').removeClass('no-scroll');
                 $('#projects').removeClass('laptop-full');
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

 function ok() {
     $('.button-portfolio').click(function () {
         $('.desktop-window').toggleClass('display-ok');
     })
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