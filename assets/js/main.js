$(document).ready(() => {
   menu();
});

function menu() {
   $("#button_menu").on("click", () => {
      $("#button_menu").toggleClass("active");
      $("#section_menu").toggleClass("active");
   });
}