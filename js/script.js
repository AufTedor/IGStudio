function BurgerConf() {
  document.getElementById("open-burger").onclick = () => {
    document.getElementById("open-burger").classList.toggle("active");
    document.getElementById("close-burger").classList.toggle("active");
    document.getElementById("header-nav").classList.toggle("active");
    document.body.classList.toggle("blocked");
  };
  document.getElementById("close-burger").onclick = () => {
    document.getElementById("open-burger").classList.toggle("active");
    document.getElementById("close-burger").classList.toggle("active");
    document.getElementById("header-nav").classList.toggle("active");
    document.body.classList.toggle("blocked");
  };
}

BurgerConf();

let slideIndex = 1;
showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n));
}
// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n));
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName(`slide`);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = `none`;
  }
  slides[slideIndex - 1].style.display = `flex`;
}

OpenCollapse();

function OpenCollapse() {
   let btns = document.getElementsByClassName(`faq__title`);
   let pages = document.getElementsByClassName(`faq__body`);

   for(let i = 0; i < btns.length; i++) {
      btns[i].onclick = () => {
         for(let j = 0; j < btns.length; j++) {
            if(j!=i) {
               btns[j].classList.remove(`active`);
               pages[j].classList.remove(`active`);
            }
         }
         btns[i].classList.toggle(`active`);
         pages[i].classList.toggle(`active`);
      }
   }
}

OpenTab();
function OpenTab() {
  let buttons = document.getElementsByClassName(`tab__button`);
  let tabs = document.getElementsByClassName(`tab`);
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].onclick = () => {
      for (let j = 0; j < buttons.length; j++) {
        if (j != i) {
          buttons[j].classList.remove("active");
          tabs[j].classList.remove("active");
        }
        buttons[i].classList.add("active");
        tabs[i].classList.add("active");
      }
    }
  }
}
