jQuery(document).ready(function ($) {
	
    /*Preloader animsition*/
    $(window).on('load', function () {
        $('.page-loader').fadeOut('slow', function () {
            $(this).remove();
        });
    });
    
	// Change color website
	$(".switcher-cog").on("click", function(){
        $('#switcher').toggleClass("show");
    });

    jQuery(".color1").on("click", function(){
        jQuery("#colors").attr("href", "css/colors/green.css");
    });

    jQuery(".color2").on("click", function(){
        jQuery("#colors").attr("href", "css/colors/black.css");
    });

    jQuery(".color3").on("click", function(){
        jQuery("#colors").attr("href", "css/colors/red.css");
    });

    jQuery(".color4").on("click", function(){
        jQuery("#colors").attr("href", "css/colors/lavender.css");
    });

    jQuery(".color5").on("click", function(){
        jQuery("#colors").attr("href", "css/colors/orange.css");
    });


    /*Tooltips bootstrap*/
    $('[data-toggle="tooltip"]').tooltip();

    /*Navigation control*/
    var hamburgerAnimation = $(".hamburger.has-animation");
    var hamburgerNoAnimation = $(".hamburger");
    var navbar = $('.nav-right');
    var navbarVertical = $('.navbar-vertical .navbar-main');
    var navbarV3 = $('.navbar-center .navbar-menu');
    hamburgerAnimation.on("click", function() {
        hamburgerAnimation.toggleClass("is-active");
    });
    hamburgerNoAnimation.on("click", function() {
        navbar.toggleClass('opened');
        navbarV3.toggleClass('opened');
        navbarVertical.toggleClass('opened');
    });
    
    // Navbar menu caret
    $('.dropdown i').on('click', function(e) {
        $(this).siblings('.dropdown-menu').toggleClass('open');
        $(this).toggleClass('fa-rotate-180');
        e.stopPropagation();
    });

    // SLIDER SHOW HOME PAGE 1
    $('#rev_slider_home01').show().revolution({
        responsiveLevels: [1920, 1600, 768, 480],
        gridwidth:[1240, 1024, 768, 600],
        sliderType:"standard",
        dottedOverlay:"none",
        sliderLayout: 'auto',
        gridheight:[900,800,700,600],
        delay: 5000,
        spinner: 'spinner2',
        navigation: {
         onHoverStop: "off",
         arrows: {
             enable: true,
             style: 'uranus',
             hide_onleave: true,
             hide_under: 767
         },
         bullets: {
             enable: false,
             style: 'hermes',
             hide_onleave: false,
             h_align: "center",
             v_align: "bottom",
             h_offset: 0,
             v_offset: 20,
             space: 5
         }
        }
     });

    // SLIDER SHOW HOME PAGE 2
    $('#rev_slider_home02').show().revolution({
         responsiveLevels: [1920, 1600, 768, 480],
         gridwidth:[1240, 1024, 768, 600],
         sliderType:"standard",
         dottedOverlay:"none",
         sliderLayout: 'auto',
         gridheight:[880,780,680,580],
         delay: 5000,
         spinner: 'spinner2',
         navigation: {
             onHoverStop: "off",
             arrows: {
                 enable: true,
                 style: 'uranus',
                 hide_onleave: true,
                 hide_under: 767
             },

             bullets: {
                 enable: false,
                 style: 'hermes',
                 hide_onleave: false,
                 h_align: "center",
                 v_align: "bottom",
                 h_offset: 0,
                 v_offset: 20,
                 space: 5
             }
         }
     });

    // SLIDER SHOW HOME PAGE 3
     $('#rev_slider_home03').show().revolution({
         responsiveLevels: [1920, 1600, 768, 480],
         gridwidth:[1240, 1024, 768, 600],
         sliderType:"standard",
         dottedOverlay:"none",
         sliderLayout: 'auto',
         gridheight:[900,800,700,600],
         delay: 5000,
         spinner: 'spinner2',
         navigation: {
             onHoverStop: "off",
             arrows: {
                 enable: true,
                 style: 'uranus',
                 hide_onleave: true,
                 hide_under: 767
             },
    
             bullets: {
                 enable: false,
                 style: 'hermes',
                 hide_onleave: false,
                 h_align: "center",
                 v_align: "bottom",
                 h_offset: 0,
                 v_offset: 20,
                 space: 5
             }
         }
     });

    // productV2 HOME 2
    $('.productV2-box').owlCarousel({
        autoplay:true,
        loop:true,
        nav: false,
        margin:20,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
            },
            480:{
                items:2,
            },
            768:{
                items:2,
            },
            992:{
                items:3,
            }
        }

    });

    // NEW BLOG HOME 2 SLIDE
    $('#get-look').show().revolution({
         responsiveLevels: [1920, 1600, 768, 480],
         gridwidth:[1240, 1024, 768, 600],
         sliderType:"standard",
         dottedOverlay:"none",
         sliderLayout: 'auto',
         gridheight:[535],
         delay: 5000,
         spinner: 'spinner2',
         navigation: {
             onHoverStop: "off",
             arrows: {
                 enable: true,
                 style: 'uranus',
                 hide_onleave: true,
                 hide_under: 767
             },

             bullets: {
                 enable: false,
                 style: 'hermes',
                 hide_onleave: false,
                 h_align: "center",
                 v_align: "bottom",
                 h_offset: 0,
                 v_offset: 20,
                 space: 5
             }
         }
     });

    /*Mini shop cart*/
    var miniCart = $('.mini-cart');
    $('.u-shop-cart .ic-cart').on('click', function () {
        miniCart.toggleClass('opened');
    });
    $(window).on('click', function(event) {
        if (!$(event.target).closest(miniCart).length && !$(event.target).closest('.u-shop-cart .ic-cart').length) {
            miniCart.removeClass('opened');
        }
    });

    /*Mini setting*/
    var miniSetting = $('.mini-setting');
    $('.ic-enjoy').on('click', function () {
        miniSetting.toggleClass('opened');
    });
    $(window).on('click', function(event) {
        if (!$(event.target).closest(miniSetting).length && !$(event.target).closest('.ic-enjoy').length) {
            miniSetting.removeClass('opened');
        }
    });

    // BUTTON SEARCH
    $('.ic-search').click(function(){
        $('.search').toggle(500);
    })

    // trademark-list
    $('.trademark-list').owlCarousel({
        autoplay:true,
        loop:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:true
            },
            480:{
                items:3,
                nav:true
            },
            768:{
                items:4,
                nav:false
            },
            992:{
                items:6,
                nav:true,
                loop:false
            }
        }
    });

    // Slider Range Sidebar
    $("#sidebar-range").slider({
        range: true,
        min: 3,
        max: 20,
        values: [ 3, 15 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $("#amount").val( "$" + $( "#sidebar-range" ).slider( "values", 0 ) +
    " - $" + $( "#sidebar-range" ).slider( "values", 1 ) );

    // categories li active sidebar
    $(".sidebar-tab li").click(function() {
        $(".sidebar-tab li").removeClass("active");
        $(this).addClass("active");
    });

    // Shop gird detail slider 
    $('.detail-slider .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        loop: true,
        autoplay: true,
        fade: true,
        asNavFor: '.detail-slider .slider-nav'
    });
    $('.detail-slider .slider-nav').slick({
        slidesToShow: 6,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        asNavFor: '.detail-slider .slider-for',
        dots: true,
        focusOnSelect: true
    }); 

    // Shop gird detail Sidebar slider 
    $('.detail-sidebar-slider .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        loop: true,
        autoplay: true,
        fade: true,
        asNavFor: '.detail-sidebar-slider .slider-nav'
    });
    $('.detail-sidebar-slider .slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        asNavFor: '.detail-sidebar-slider .slider-for',
        dots: true,
        focusOnSelect: true
    }); 

    // Shop gird detail fullwidth slider 
    $('.detail-fullwidth .slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        loop: true,
        autoplay: true,
        fade: true,
        asNavFor: '.detail-fullwidth .slider-nav'
    });
    $('.detail-fullwidth .slider-nav').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        loop: true,
        autoplay: true,
        asNavFor: '.detail-fullwidth .slider-for',
        dots: true,
        focusOnSelect: true
    });

    // Quantity
    $('.quantity').each(function() {
        var spinner = $(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function () {
            var oldValue = parseFloat(input.val());
            var newVal;
            if (oldValue >= max) {
                newVal = oldValue;
            } else {
                newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function () {
            var oldValue = parseFloat(input.val());
            var newVal;
            if (oldValue <= min) {
                newVal = oldValue;
            } else {
                newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

     // PORTFOLIO
    function maso(){
        $('.portfolio-content').masonry({
            itemSelector: '.element-item',
            columnWidth: '.element-item',
            percentPosition: true
        });
    }

    var $Gird = $('.portfolio-content').isotope({
      itemSelector: '.element-item',
    });

    $('.filters-button-group').on( 'click', 'li', function() {
      var filterValue = $( this ).attr('data-filter');
      $Gird.isotope({ filter: filterValue }); 
      return false;
    });
    maso();

    $('img.myImage1').zoomify(
    {
        duration: 300,
    });

    $(".portfolio-gird .filters-button-group li").click(function() {
        $(".portfolio-gird .filters-button-group li").removeClass("active");
        $(this).addClass("active");
    });

    // FAQ ACCORDION
    var acc = $(".accordion");
    var i;
    for (i = 0; i < acc.length; i++) {
        acc[i].onclick = function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight){
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        }
    }

    // Back to top
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
          $('#bttop').fadeIn();
        } else {
          $('#bttop').fadeOut();
        }
    });

    $('#bttop').click(function() {
         $('body,html').animate({
            scrollTop: 0
         }, 800);
    });
    
});