$(document).ready(function() {
    $('#toggleContent1').click(function() {
        $('#hiddenContent1').slideToggle();
    });
});

$(document).ready(function() {
    $('#toggleContent2').click(function() {
        $('#hiddenContent2').slideToggle();
    });
});

$(document).ready(function() {
    $('#toggleContent3').click(function() {
        $('#hiddenContent3').slideToggle();
    });
});

function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth", 
    });
  }
  
