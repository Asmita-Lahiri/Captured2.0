
$('.banner').slick({
   dots: true,
   slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
});





// $('.autoplay').slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 2000,
// });



$("#text_animation1").typewriter({
  cursor:true,
  delay: 150,
  waitingTime: 1000,
  hide: 0,
});

// $("#text_animation1").typewriter({
//   text: 'digital agency',
// });


Fancybox.bind("[data-fancybox]", {
  Toolbar : {
    display : ["zoom", "fullscreen", "close",],
  },
});



$('.client').slick({
   dots: true,
      slidesToShow: 1,
   slidesToScroll: 1,
   autoplay: true,
   autoplaySpeed: 2000,
});

$('.process').slick({
   dots: true,
});


AOS.init();


jQuery(document).ready(function () {
  jQuery('.navigation').meanmenu();
});



// slider

// function init_class(current, last, class_nm) {
//     if (jQuery('.industries-listing.slick-slider').length) {
//         var currentItem = current;
//         var last_item = last - 1;
//         if (currentItem >= 1 && currentItem != last_item) {
//             class_nm.addClass("init-slide");
//         }
//         if (jQuery(class_nm).find(".slick-slide[data-slick-index='" + last_item + "']").attr('aria-hidden') != 'true') {
//             class_nm.addClass("init-slide-last");
//             class_nm.removeClass("init-slide");
//         } else {
//             // class_nm.removeClass("init-slide");
//             class_nm.removeClass("init-slide-last");
//         }
//     }
// }
// var $sliderNav = true;
//     function slider_nav(){
//         if ($(".slider.slick-slider").length) {
//             if ($($sliderNav)) {
//                 $(".slider.slick-slider").append("<span class='next-slide'></span>");
//                 $(".slider.slick-slider").prepend("<span class='previous-slide'></span>");
//                 $sliderNav = false;
//             }
            
//             var dots_width = $(".slider .slick-dots li").outerWidth();
//             var dots_left_position = $(".slider .slick-dots li").first().position().left;
//             var nav_left_position = (dots_left_position - dots_width);
//             var nav_right_position = (dots_left_position - dots_width) - 6; 

//             $(".slider .previous-slide").css({left: nav_left_position +'px'});   
//             $(".slider .next-slide").css({right: nav_right_position +'px'});

//             $(".slider .next-slide").click(function(){
//                 $(this).parents(".slider.slick-slider").slick('slickNext');
//             });
//             $(".slider .previous-slide").click(function(){
//                 $(this).parents(".slider.slick-slider").slick('slickPrev');
//             });
//         }
//     }

// $(function() {

//         //for slick slider
//         $('.slider').slick({
//             slidesToShow: 1,
//             slidesToScroll: 1,
//             dots: true,
//             centerMode: true,
//             arrows: false,
//             autoplay: true,
//         }).on("swipe", function(event) {
//                 var currentSlideIndex = jQuery('.industries-listing .slick-current').attr('data-slick-index');
//                 var last_item = jQuery('.industries-listing .slick-slide').length;
//                 var _currentclass = jQuery(".industries-listing");
//                 init_class(currentSlideIndex, last_item, _currentclass);
//             });

//         $(".slider .slick-dots").append("<li class='animated-dot'><li>");
//         $(".slider .slick-dots li.animation-dot").next("li").remove() 
  
//         $(".slick-dots .animated-dot").click(function() {
//             $(this).toggleClass("play");
//             if ($(this).hasClass("play")) {
//                 isPause = true;
//                 $(this).css('background-image', 'url(https://img.icons8.com/plasticine/100/000000/pause.png)');
//                 $('.slider').slick('slickPause');
//                 $bar.css({
//                     width: 100 + "%"
//                 });
//             } else {
//                 isPause = false;
//                 $(this).css('background-image', '');
//                 $('.slider').slick('slickPlay');
//             }
//         });


//         var time = 2;
//         var $bar,
//             isPause,
//             tick,
//             percentTime;

//         $bar = $('.slider-progress .progress');

//         function startProgressbar() {
//             resetProgressbar();
//             percentTime = 0;
//             isPause = false;
//             tick = setInterval(interval, 10);
//         }

//         function interval() {
//             if ($(".slick-dots .animated-dot").hasClass("play")) {
//                 isPause = true;
//             }
//             if (isPause === false) {
//                 percentTime += 1 / (time + 0.1);
//                 $bar.css({
//                     width: percentTime + "%"
//                 });
//                 if (percentTime >= 100) {
//                     $(".slider").slick('slickNext');
//                     startProgressbar();
//                 }
//             }
//         }

//         function resetProgressbar() {
//             $bar.css({
//                 width: 0 + '%'
//             });
//             clearTimeout(tick);
//         }

//         startProgressbar();

//         $(".slider").on("beforeChange", function() {
//             resetProgressbar();
//             startProgressbar();
//             $bar.css({
//                 width: 100 + "%"
//             });
//         });
  
//     slider_nav();

//     });*/




// video autoplay

let vid = document.getElementById("video_play");
function enableAutoplay() { 
  vid.autoplay = true;
  vid.load();
}

function disableAutoplay() { 
  vid.autoplay = false;
  vid.load();
} 

function checkAutoplay() { 
  alert(vid.autoplay);
}



// gallery

$(document).ready(function() {
    $('.gall_nav').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 6
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

// $(function(){

//   $('.gall_nav').mauGallery();

// });

// $('.gall_nav').mauGallery({

//   lightBox: true,
//   lightboxId: null,

// });

// $('.gall_nav').mauGallery({

//   showTags: true,
//   tagsPosition: 'bottom' // or 'top'

// });