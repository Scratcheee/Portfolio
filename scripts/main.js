// Add your javascript here
// Don't forget to add it into respective layouts where this js file is needed

$(document).ready(function() {
  AOS.init( {
    // uncomment below for on-scroll animations to played only once
    // once: true  
  }); // initialize animate on scroll library
});

// Smooth scroll for links with hashes
$('a.smooth-scroll')
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

// Get the modal
var calcModal = document.getElementById("calc");

// Get the button that opens the modal
var calcBtn = document.getElementById("calcModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
calcBtn.onclick = function() {
  calcModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  calcModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    calcModal.style.display = "none";
  }
}

var noteModal = document.getElementById("note");
var noteBtn = document.getElementById("noteModal");
var span = document.getElementsByClassName("close")[0];
noteBtn.onclick = function() {
  noteModal.style.display = "block";
}
span.onclick = function() {
  noteModal.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal) {
    noteModal.style.display = "none";
  }
}