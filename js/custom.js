$( document ).ready(function() {
(function () {
    $(".menu_toggle").on("click", function () {
      $(".pw_left_menu").toggleClass("active");
      $(".pw_right").toggleClass("active");
      $(".menu_toggle ").toggleClass("active");
      $(".menu_toggle i").toggleClass("fa-chevron-right");
    });
  })();
});
