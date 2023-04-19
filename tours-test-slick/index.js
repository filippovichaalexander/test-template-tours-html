import "./styles.css";
import "slick-slider";
import $ from "jquery";

$(".slider").slick({
  centerMode: true,
  centerPadding: "0px",
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  focusOnSelect: true,
  // autoplay: true,
  autoplaySpeed: 2000,
  prevArrow:
    '<button class="slide-arrow prev-arrow"><div class="arrow--btn arrow--btn-left"></div></button>',
  nextArrow:
    '<button class="slide-arrow next-arrow"><div class="arrow--btn arrow--btn-right"></div></button>',
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

// Get the modal
const modal = document.getElementById("myModal");

// Get the button that opens the modal
const btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
const close = document.querySelector(".closeBtn");

const modalWrapper = document.querySelector(".modal__wrapper");

// When the user clicks the button, open the modal
btn.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
close.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modalWrapper) {
    modal.style.display = "none";
  }
};
