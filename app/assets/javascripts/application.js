// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

// Loading animation for contact form
$(document).ready(function() {
  var contactForm = $('#contact-form');
  var submitBtn = $('#submit-btn');
  var loadingAnimation = $('#loading-animation');
  
  if (contactForm.length) {
    contactForm.on('submit', function() {
      submitBtn.hide();
      loadingAnimation.css('display', 'flex');
    });
  }
});

// Ensure CSRF token is properly refreshed with Turbolinks
document.addEventListener('turbolinks:load', function() {
  // For Rails CSRF protection with Turbolinks
  var token = document.querySelector('meta[name="csrf-token"]');
  if (token) {
    // Update all forms with the current CSRF token
    var forms = document.querySelectorAll('form');
    forms.forEach(function(form) {
      var input = form.querySelector('input[name="authenticity_token"]');
      if (input) input.value = token.content;
    });
  }
});
