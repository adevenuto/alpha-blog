// This controls the border-bottom effect on nav links
$(function() {
  $(".nav-buttons").hover(
    function() {
      $(".navbar-default").addClass("border-bottom");
    }, function() {
      $(".navbar-default").removeClass("border-bottom");
    }
  );
  $(".nav-articles-button").hover(
    function() {
      $(".navbar-default").addClass("border-bottom-article");
    }, function() {
      $(".navbar-default").removeClass("border-bottom-article");
    }
  );
  $(".navbar-brand").hover(
    function() {
      $(".navbar-default").addClass("border-bottom-brand");
    }, function() {
      $(".navbar-default").removeClass("border-bottom-brand");
    }
  );
});
