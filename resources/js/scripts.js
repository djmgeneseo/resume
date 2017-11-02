$(document).ready(function() {
    
    /*------ Sticky navigation ------*/
    $('.js--sticky-nav-waypoint').waypoint(function(direction) {
       if (direction === 'down') {
           $('nav').addClass('sticky');
       } else {
           $('nav').removeClass('sticky');
       }
        
        /* Close all navibars on mobile when sticky appears/disappears  */
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        if(icon.hasClass('ion-android-close')) {
            nav.slideToggle(0);
            icon.removeClass('ion-android-close');
            icon.addClass('ion-navicon');
        }
    }, {
           offset: '70px;'
    });
    
    /*------ Scroll-on buttons ------*/
    $('.js--hungry-button').click(function () {
        $('html, body').animate({scrollTop: $('.section-plans').offset().top}, 1000)
    });
    
    $('.js--show-more-button').click(function () {
        $('html, body').animate({scrollTop: $('.section-features').offset().top}, 1000)
    });
    
    /*------ Navigation Scroll ------*/
    
    
    // Add smooth scrolling to all links
    $("a[href^='#']").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
    });
    
    /*------ Mobile Navigation ------*/
    $('.js--nav-icon').click(function() {
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon i');
        /* Open and close sticky and main */
        nav.slideToggle(200);
        if (icon.hasClass('ion-navicon')) {
            icon.removeClass('ion-navicon');
            icon.addClass('ion-android-close');
        } else {
            icon.removeClass('ion-android-close');
            icon.addClass('ion-navicon');
        }
        
    });
    
});