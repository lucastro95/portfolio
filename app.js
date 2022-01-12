const carouselImages = document.querySelector('.carousel-images');
const carouselButtons = document.querySelectorAll('.carousel-button');
const numberOfImages = document.querySelectorAll('.carousel-images div').length;
let imageIndex = 1;
let translateX = 0;

carouselButtons.forEach(button => {
  button.addEventListener('click', (event) => {
    if (event.target.id === 'previous') {
      if (imageIndex !== 1) {
        imageIndex--;
        translateX += 600;
      }
    } else {
      if (imageIndex !== numberOfImages) {
        imageIndex++;
        translateX -= 600;
      }
    }
    
    carouselImages.style.transform = `translateX(${translateX}px)`;
  });
});


function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);