$(document).ready(() => {
   menu();
   gallery();
});

function menu() {
   $("#button_menu").on("click", () => {
      $("#button_menu").toggleClass("active");
      $("#section_menu").toggleClass("active");
   });
}

function gallery() {
   setInterval(() => {
      let src = "/assets/image/gallery/0";
      src += getRandomArbitrary(1, 9);
      src += ".jpg";
      document.getElementById('gallery').setAttribute("src", src);
      console.log(src);
   }, 4000);
}

function getRandomArbitrary(min, max) {
   return Math.floor(Math.random() * (max - min) + min);
}
