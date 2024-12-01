let currentSlideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlideIndex = 0; 
    } else if (index < 0) {
        currentSlideIndex = slides.length - 1; 
    } else {
        currentSlideIndex = index;
    }

    const slideWidth = slides[0].clientWidth;
    document.querySelector('.slider').style.transform = `translateX(${-slideWidth * currentSlideIndex}px)`;

    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSlideIndex].classList.add('active');
}

function nextSlide() {
    showSlide(currentSlideIndex + 1);
}

function prevSlide() {
    showSlide(currentSlideIndex - 1);
}

function currentSlide(index) {
    showSlide(index);
}

function startAutoSlide() {
    return setInterval(nextSlide, 3000); 
}


let slideInterval = startAutoSlide();


document.querySelector('.next').addEventListener('click', function() {
    nextSlide();
    resetAutoSlide();
});

document.querySelector('.prev').addEventListener('click', function() {
    prevSlide();
    resetAutoSlide();
});

dots.forEach((dot, index) => {
    dot.addEventListener('click', function() {
        currentSlide(index);
        resetAutoSlide();
    });
});


function resetAutoSlide() {
    clearInterval(slideInterval);
    slideInterval = startAutoSlide();
}


window.onload = function() {
    showSlide(currentSlideIndex);
};
