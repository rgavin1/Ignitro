const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const rightButton = document.querySelector('.carousel .btn-right');
const leftButton = document.querySelector('.carousel .btn-left');

//Get width of slide
const slideWidth = slides[0].getBoundingClientRect().width;

// move to position
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = `translateX(-${targetSlide.style.left})`;
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
}

// When I click left, move slides to the left
leftButton.addEventListener('click', (e) => {
    // get current position
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    //move to the next slide
    moveToSlide(track, currentSlide, prevSlide);   
});

// When I click right, move slides to the right
rightButton.addEventListener('click', (e) => {
    //get current position
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    //move to the next slide
    moveToSlide(track, currentSlide, nextSlide);
});
