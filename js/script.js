$(function(){
    let lastIndoor = null;
    let lastOutdoor = null;

    function showIndoor(val){
        $('#tab1 .nested-content').hide();
        $('#tab1 .indoor-' + val).fadeIn();
    }

    function showOutdoor(val){
        $('#tab2 .nested-content').hide();
        $('#tab2 .outdoor-' + val).fadeIn();
    }

    $('#tabs-nav li').click(function(e){
        e.preventDefault();
        $('#tabs-nav li').removeClass('active');
        $(this).addClass('active');

        $('.tab-content').hide();
        let activeTab = $(this).find('a').attr('href');
        $(activeTab).fadeIn();

        if (activeTab === '#tab1') {
            if (lastIndoor) {
                $('#indoor-filter').val(lastIndoor);
                showIndoor(lastIndoor);
            } else {
                let defaultVal = $('#indoor-filter option:first').val();
                $('#indoor-filter').val(defaultVal);
                showIndoor(defaultVal);
                lastIndoor = defaultVal;
            }
        } 
        else if (activeTab === '#tab2') {
            if (lastOutdoor) {
                $('#outdoor-filter').val(lastOutdoor);
                showOutdoor(lastOutdoor);
            } else {
                let defaultVal = $('#outdoor-filter option:first').val();
                $('#outdoor-filter').val(defaultVal);
                showOutdoor(defaultVal);
                lastOutdoor = defaultVal;
            }
        }
    });

    $('#indoor-filter').change(function(){
        lastIndoor = $(this).val();
        showIndoor(lastIndoor);
    });

    $('#outdoor-filter').change(function(){
        lastOutdoor = $(this).val();
        showOutdoor(lastOutdoor);
    });

    // Initial load — first tab & first dropdown option
    $('#tabs-nav li:first').addClass('active');
    $('#tab1').show();
    let firstIndoor = $('#indoor-filter option:first').val();
    $('#indoor-filter').val(firstIndoor);
    showIndoor(firstIndoor);
    lastIndoor = firstIndoor;
});


//faq
$(document).ready(function () {
  // Load previously opened FAQ from localStorage
  const openId = localStorage.getItem("openFaqId");
  if (openId) {
    const $item = $(`.faq-item[data-id="${openId}"]`);
    $item.addClass("active");
    $item.find(".faq-answer").slideDown();
  }

  $(".faq-question").on("click", function () {
    const $item = $(this).closest(".faq-item");

    // Collapse all others
    $(".faq-item").not($item).removeClass("active").find(".faq-answer").slideUp();

    // Toggle this one
    $item.toggleClass("active");
    $item.find(".faq-answer").slideToggle();

    // Save to localStorage if open
    if ($item.hasClass("active")) {
      localStorage.setItem("openFaqId", $item.data("id"));

      // Scroll smoothly to opened FAQ
      $('html, body').animate({
        scrollTop: $item.offset().top - 20
      }, 500);
    } else {
      localStorage.removeItem("openFaqId");
    }
  });
});

//swiper
 document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".testimonial_next_btn",
      prevEl: ".testimonial_prev_btn",
    },
     breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      575: {
        slidesPerView: 1,
        spaceBetween: 20,
      },

      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },

      1024: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
       1199: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1920: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });

});

  function MatchHeight() {
    $('.testimonial_text p').matchHeight({});
  }
  MatchHeight(); 

  //scroll_header
  window.addEventListener("scroll", function() {
  const header = document.querySelector("header");
  if (window.scrollY > 30) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
});

//scroll_top_btn
 let btn = $('.scroll_top .button');

  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });

  btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, '300');
  });

  //menu
  $(".hamburger").click(function() {
 $(".header_nav").addClass("header_mobile_nav_active")
 $(".black_overlay").fadeIn();
   });

 $(".close-btn").click(function(){
$(".header_nav").removeClass("header_mobile_nav_active")
$(".black_overlay").fadeOut();
 });

 $(".black_overlay").click(function(){
$(".header_nav").removeClass("header_mobile_nav_active")
$(".black_overlay").fadeOut();
 });



//  $(document).ready(function () {
//     // Append dropdown icon to menu items that have a submenu
//     $('.main_header_nav li').has('.sub-menu-1').children('a').append('<span class="mean-expand"><i class="fa-solid fa-angle-down"></i></span>');

//     // Toggle submenu on click
//     $('.main_header_nav li:has(.sub-menu-1) > a').on('click', function (e) {
//         e.preventDefault(); // prevent link jump

//         let parentLi = $(this).parent();

//         if (parentLi.hasClass('active')) {
//             parentLi.removeClass('active');
//             parentLi.find('.sub-menu-1').stop(true, true).slideUp(200);
//         } else {
//             // Close all other open submenus
//             $('.main_header_nav li').removeClass('active');
//             $('.sub-menu-1').stop(true, true).slideUp(200);

//             // Open this one
//             parentLi.addClass('active');
//             parentLi.find('.sub-menu-1').stop(true, true).slideDown(200);
//         }
//     });
// });

$(document).ready(function () {
    // Append dropdown arrow to any li that has a submenu
    $('.main_header_nav li:has(.sub-menu-1) > a').each(function () {
        $(this).append('<span class="mean-expand"><i class="fa-solid fa-angle-down"></i></span>');
    });

    // Click on arrow to toggle submenu
    $('.main_header_nav li:has(.sub-menu-1) > a .mean-expand').on('click', function (e) {
        e.preventDefault();
        e.stopPropagation(); // prevent parent <a> link navigation

        let parentLi = $(this).closest('li');

        if (parentLi.hasClass('active')) {
            parentLi.removeClass('active').find('.sub-menu-1').stop(true, true).slideUp(200);
        } else {
            $('.main_header_nav li').removeClass('active').find('.sub-menu-1').slideUp(200);
            parentLi.addClass('active').find('.sub-menu-1').stop(true, true).slideDown(200);
        }
    });
});

// $(document).ready(function () {
//     // Append dropdown arrow to any li that has a submenu
//     $('.main_header_nav li:has(.sub-menu-1) > a').each(function () {
//         $(this).append('<span class="mean-expand"><i class="fa-solid fa-angle-down"></i></span>');
//     });

//     // Click on arrow to toggle submenu
//     $('.main_header_nav').on('click', '.mean-expand', function (e) {
//         e.preventDefault();
//         e.stopPropagation();

//         let parentLi = $(this).closest('li');

//         if (parentLi.hasClass('active')) {
//             parentLi.removeClass('active').find('.sub-menu-1').stop(true, true).slideUp(200);
//         } else {
//             $('.main_header_nav li').removeClass('active').find('.sub-menu-1').slideUp(200);
//             parentLi.addClass('active').find('.sub-menu-1').stop(true, true).slideDown(200);
//         }
//     });
// });
