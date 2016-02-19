// This controls the border-bottom on nav links
$(function() {
    $(".nav-buttons").hover(
    function() {
      $(".navbar-default").addClass("border-bottom");
    }, function() {
      $(".navbar-default").removeClass("border-bottom");
    }
  );
});
$(function() {
    $(".nav-articles-button").hover(
    function() {
      $(".navbar-default").addClass("border-bottom-article");
    }, function() {
      $(".navbar-default").removeClass("border-bottom-article");
    }
  );
});