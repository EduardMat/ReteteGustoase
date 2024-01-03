var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

let heading = document.querySelector("h1");
heading.innerHTML = "Vino la noi pe site cand nu mai stii ce sa gatesti!";

new Typewriter("h1", {
  strings: "Vino la noi pe site cand nu mai stii ce sa gatesti!",
  autoStart: true,
  cursor: " ",
  delay: 80,
});
