/*global console*/
$(document).ready(function () {

    "use strict";

    var audio = $('#myAudio');

    var video = $('#vid');

    var btn = $('#btn');

    var btn_text = $('.btn_text');

    var btn_icon = $('.btn_icon');

    var liActive = $('.customMenu ul>li');

    var my_container = $('.my_full_container');

    console.log(my_container.height());

    /*  make the dropdown move by hover not by clicking
     $(".dropdown").hover(function(){
 
         var dropdownMenu = $(this).children(".dropdown-menu");
 
         if(dropdownMenu.is(":visible")){
 
             dropdownMenu.parent().toggleClass("open");
 
         }
 
     });  
     */
    //=================================== sticky container

    //show the white full container when scrolling
    $(window).on('scroll', function () {

        if ($(window).scrollTop() > my_container.height()) {

            $('.my_full_container').addClass('sticky');

            //avoid the border bottom of container full widht
            $('header .my_collapse').addClass('topCalc');

        } else {

            $('.my_full_container').removeClass('sticky');

            $('header .my_collapse').removeClass('topCalc');

        }
    });

    //change the icon of navbar toggler to close icon
    $('.navbar-toggler').click(function () {

        $('.navbar-toggler-icon i').toggleClass('icofont-navigation-menu icofont-close');

    });

    //run the video by play and pause btn
    btn.on('click', function () {

        var $el = $(this);

        if ($el.children().first().text() != "pause") {

            video.trigger('play');

            btn_text.text('pause');

            $(this).find("i").toggleClass("icofont-play-alt-1 icofont-pause");

        } else {

            video.trigger('pause');

            btn_text.text('play');

            $(this).find("i").toggleClass("icofont-play-alt-1 icofont-pause");

        }

    });

    // //run the counter 
    $('.counter').counterUp({
        delay: 20,
        time: 3000
    });

}); //end document

//preload page
$(window).on('load', function () {

    $('#preloader').fadeOut();

    $('#preloader').delay(350).fadeOut('fast');

    $('body').delay(350).css({ 'overflow': 'visible' });

});