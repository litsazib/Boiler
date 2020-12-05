var isMobile = window.matchMedia("only screen and (max-width: 768px)");


/**
 * POPUP Script
 *
 */
 
 $('#freeBoiler').click(function(event) {
   $('#FreeBoilerModal').fadeIn();
 });
 $('#Insulation').click(function(event) {
   $('#FloorInsulationModal').fadeIn();
 });
 $('#WallInsulation').click(function(event) {
   $('#WallInsulationModal').fadeIn();
 });
 $('.close').click(function(event) {
   $('.modal').fadeOut();
 });
 
 
 
 
/**
 * Scroll to top of page
 *
 */
function scroll_to_top_page(callback) {
  if (typeof callback === 'undefined' || typeof callback !== 'function') {
    callback = function() {};
  }
  var isMobile = window.matchMedia("only screen and (max-width: 768px)");
  if (isMobile.matches) {
    callback();
  } else {
    $('html').animate({
      scrollTop: 0
    }, 400, 'linear', callback);
  }

}


/**
 * Open Close SP menu
 * @modify Utpal
 */
$(".nav-switch ").click(function(e) {
  e.preventDefault();
  $(this).toggleClass('nav-switch-on');
  $(".top-menu-icon").toggleClass('active-menu-sp');
  $('body').toggleClass('no-scroll');
  if ($(this).hasClass('nav-switch-on')) {
    $('.top-nav-rap').fadeIn();
  } else {
    $('.top-nav-rap').fadeOut();
  }
})


/**
 * ACHORE ANIMATION
 * @modify Utpal
 */
var reduceScrollAmout = 0;

$('a[href^="#"]').click(function() {
  var speed = 500;
  var menuHeight = $(".top-menu-icon").outerHeight();
  var href = $(this).attr("href");
  var target = $(href == "#" || href == "" ? 'html' : href);
  var position = target.offset().top;
  if (isMobile.matches) {
    position = target.offset().top - menuHeight;
  }
  $("html, body").animate({
    scrollTop: position
  }, speed, "swing");
  return false;
});

/**
 * ACTIVE MENU ACCORDING TO WINDOWS SCROLL
 * @modify Utpal
 */
var scrollAmout = 200;

if (isMobile.matches) {
  scrollAmout = 300;
}
$(window).on("scroll", function() {

  scr = $(window).scrollTop();
  themeLink = $("#theme_link").offset().top;
  recommendLink = $("#recommend_link").offset().top;
  flowsLink = $("#flows_link").offset().top;
  eventLink = $("#event_link").offset().top;
  accessLink = $("#access_link").offset().top;
  // qaLink = $("#qa_link").offset().top;



  if (scr < themeLink - scrollAmout) {
    $(".main-menu-nav li").removeClass("active");
    $(".main-menu-nav li").eq(0).addClass("active");
  }

  if (scr > themeLink - scrollAmout) {
    $(".main-menu-nav li").removeClass("active");
    $(".main-menu-nav li").eq(1).addClass("active");
  }

  if (scr > recommendLink - scrollAmout) {
    $(".main-menu-nav li").removeClass("active");
    $(".main-menu-nav li").eq(2).addClass("active");
  }

  if (scr > flowsLink - scrollAmout) {
    $(".main-menu-nav li").removeClass("active");
    $(".main-menu-nav li").eq(3).addClass("active");
  }

  if (scr > eventLink - scrollAmout) {
    $(".main-menu-nav li").removeClass("active");
    $(".main-menu-nav li").eq(4).addClass("active");
    $('.event-leftToRigh').addClass('anim');
  }

  if (scr > accessLink - scrollAmout) {
    $(".main-menu-nav li").removeClass("active");
    $(".main-menu-nav li").eq(5).addClass("active");
    $('.access-leftToRigh').addClass('anim');
  }








});

/**
 * Sp menu Icon position
 * @created By Utpal
 */
$(document).ready(function() {


  $(window).load(function() {
    var menuParentHeightLoad = $(".top-menu-icon").outerHeight();
    $(".menu-icon").css('height', menuParentHeightLoad + "px");
    $(".sp-bg-slider").css('top', menuParentHeightLoad + "px");
  });
  $(window).resize(function() {
    var menuParentHeightResize = $(".top-menu-icon").outerHeight();
    $(".menu-icon").css('height', menuParentHeightResize + "px");
    $(".sp-bg-slider").css('top', menuParentHeightResize + "px");
  });

  // sp menu
  $(".spFixNav li a").click(function(e) {
    $(".nav-switch").toggleClass('nav-switch-on');
    $('body').toggleClass('no-scroll');
    if ($(".nav-switch").hasClass('nav-switch-on')) {
      $('.top-nav-rap').fadeIn();
    } else {
      $('.top-nav-rap').fadeOut();
    }
  });

});

$(document).ready(function() {  
  var icons = {
    header: "arrow-close",
    activeHeader: "arrow-open"
  };
  if(isMobile.matches) {
    $("#accordion").accordion({
      icons: icons,
      collapsible: true,
      heightStyle: "content"
    });
  } else {
    $("#accordion").accordion({
      icons: icons,
      collapsible: true,
    });
  }


  // Recommend Carousel
    $('.recommend-item').owlCarousel({
      center: true,
      loop: true,
      nav: true,
      dots: true,
      navContainer: '.step-inner .recommend-item',
      navText: [
        '<img src="images/event/left-arrow@2x.png" alt="">',
        '<img src="images/event/right-arrow@2x.png" alt="">'
      ],
      responsive: {
        0: {
          items: 1,
          stagePadding: 100,
          margin: 25,
          lazyLoad : true,
          navigation : true,
          dots: true,
          navText: [
            '<img src="images/sp/recommend/left.png" alt="left">',
            '<img src="images/sp/recommend/right.png" alt="right">'
          ]
        },
        768 : {
          items: 1,
          dots: true,
          stagePadding: 100,
          margin: 25,
          lazyLoad : true,
          navigation : true,
          navText: [
            '<img src="images/sp/recommend/left.png" alt="left">',
            '<img src="images/sp/recommend/right.png" alt="right">'
          ]
          
      },
      769 : {
        items: 3,
        dotsContainer: '#Rec-customDots'
    }
      }
    });

  // end recommend

  $('.review').owlCarousel({    
    loop: true,  
    center: true,  
    nav: false,
    autoplay:true,
    dots: true,
    margin: 20,    
    // navContainer: '.review',
    // navText: [
    //   '<img src="images/sp/recommend/left.png" alt="left">',
    //   '<img src="images/sp/recommend/right.png" alt="right">'
    // ], 
    responsive: {
      0: {
        items: 1
      },
      768 : {
        items: 1
    },
    769 : {
      items: 1,
      dots: true,
      dotsContainer: '#review-customDots'
  }
    }
  });
  

});


/**
  Page scroll animation
*/
 var lastScrollTop = 0;
 $(window).scroll(function(event){
    var st = $(this).scrollTop();
    var service = $(this).scrollTop();
    var about = $("#about").offset().top;
    // console.log(st);
    if (st > lastScrollTop){
      if(isMobile.matches){
        if(st>400){
          $('.leftToRight').addClass('anim');
        }
        if(st>410){
          $('.leftToRigh-sp').addClass('anim-sp');
        }
        if(st>886){
          $('.theme-leftToRigh').addClass('anim');
        }
        if(st>1408){
          $('.recom-leftToRigh').addClass('anim');
        }
        if(st>2206){
          $('.flow-leftToRigh').addClass('anim');
        }
        if(st>3323){
          $('.event-leftToRigh').addClass('anim');
        }
        if(st>3997){
          $('.access-leftToRigh').addClass('anim');
        }
        if(st>4893){
          $('.qa-leftToRigh').addClass('anim');
          $('h1.qa-leftToRigh').css('overflow','unset');
        }
      }else {
        if(st>140){
          $('.leftToRight').addClass('anim');
        }
        if(st>344){
          $('.leftToRigh').addClass('anim');
        }
        if(st>800){
          $('.theme-leftToRigh').addClass('anim');
        }
        if(st>1930){
          $('.recom-leftToRigh').addClass('anim');
        }
        if(st>2100){
          $('.flow-leftToRigh').addClass('anim');
        }
        if(st>4684){
          $('.event-leftToRigh').addClass('anim');
        }
        if(st>5243){
          $('.access-leftToRigh').addClass('anim');
        }
        if(st>6333){
          $('.qa-leftToRigh').addClass('anim');
        }
      }  
    }
    lastScrollTop = st;

 });
 
 
 
 
 
 
 
 
 
 
 
 
 