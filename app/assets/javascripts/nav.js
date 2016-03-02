// This controls the border-bottom effect on nav links
$(function() {
  $(".nav-buttons").hover(
    function() {
      $(".navbar-default").addClass("border-bottom");
    }, function() {
      $(".navbar-default").removeClass("border-bottom");
    }
  );
  $(".nav-explore-button").hover(
    function() {
      $(".navbar-default").addClass("border-bottom-explore");
    }, function() {
      $(".navbar-default").removeClass("border-bottom-explore");
    }
  );
  $(".navbar-brand").hover(
    function() {
      $(".navbar-default").addClass("border-bottom-brand");
    }, function() {
      $(".navbar-default").removeClass("border-bottom-brand");
    }
  );
  $(".logout-button").hover(
    function() {
      $(".navbar-default").addClass("border-bottom-logout");
    }, function() {
      $(".navbar-default").removeClass("border-bottom-logout");
    }
  );
});
