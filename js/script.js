$(document).ready(function() {

    /* Stiky navigacija od dela ikone*/

    $('.js--nav-sticky').waypoint(function(direction) {
        if (direction == "down"){
            $('nav').addClass('sticky');
        }else{
            $('nav').removeClass('sticky');
        }
    }, {
        offset: '60px'
    });

    /* Skrolovanje dugmeta sa headera na galeriju */

    // $('.js--prvo-dugme').click(function (){
    //     $('html, body').animate({scrollTop: $('.js--galerija-ik').offset().top}, 1000);
    // });


   /*  HAMBURGER MENI  */  
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".main-nav");
    // const stickyMeny = document.querySelector(".sticky>.main-nav.active");

    hamburger.addEventListener("click", () =>{
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("active");
      // stickyMeny.classList.toggle("active");
    } )

    document.querySelectorAll(".main-nav>li").forEach(n => n.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      // stickyMeny.classList.remove("active");
    }))

    /* SCROL NAVIGACIJE */

    // Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});

});