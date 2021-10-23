//fade in the hero image contents and nav 
function fadeIn() {
    $("#hero-title").fadeIn(900);
    $("#hero-subtitle").delay(800).fadeIn(800);
    $("#arrow-button").delay(1700).fadeIn(800);
}
$(document).ready(fadeIn());


let prevScrollPos = window.pageYOffset;
window.onscroll = function() {
    const scrollPos = $(window).scrollTop();
    let currentScrollPos = window.pageYOffset;

    if (scrollPos > 1) {
        $("#navbar").css({"background-color":"#46d1c6", "box-shadow":"0px 4px 6px -2px rgba(0,0,0,0.1)"})
        
    } 
    else {
        $("#navbar").css({"background-color":"transparent", "box-shadow":"none"})
    }
    if (scrollPos > window.innerHeight * 1 - 70) {
        if (prevScrollPos < currentScrollPos) {
            document.querySelector("#navbar").style.top = "-70px";
        }
        else {
            document.querySelector("#navbar").style.top = "0";
        }
    }
    

    prevScrollPos = currentScrollPos;
};

var hamburger = document.querySelector(".hamburger");

// On click
hamburger.addEventListener("click", function() {
  // Toggle class "is-active"
  hamburger.classList.toggle("is-active");
  // Do something else, like open/close menu#
  $("#burger-menu").css({"transform": "translateX(0)"});
  $("#website-cover").toggle();
  $("#website-content").css({"left": "-300px"});
  $("#navbar").css({"left": "-300px"});
  $("body").toggleClass("scroll-lock");
});


$("#website-cover").click(function(){
    hamburger.classList.toggle("is-active");
    $("#burger-menu").css({"transform": "translateX(300px)"});
    $("#website-cover").toggle();
    $("#website-content").css({"left": "0"});
    $("#navbar").css({"left": "0"});
    $("body").toggleClass("scroll-lock");
  });

$(".secondary-link").click(function() {
    hamburger.classList.toggle("is-active");
    $("#burger-menu").css({"transform": "translateX(300px)"});
    $("#website-cover").toggle();
    $("#website-content").css({"left": "0"});
    $("#navbar").css({"left": "0"});
    $("body").toggleClass("scroll-lock");
  });
