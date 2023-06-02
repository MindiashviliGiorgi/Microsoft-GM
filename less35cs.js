const track = document.querySelector(".carousel-track");
const slides = Array.from(track.children);
const nextButton = document.querySelector(".nextBtn");
const prevButton = document.querySelector(".pervBtn");
const dotsNav = document.querySelector('.cirtcle-btns');
const dots = Array.from(dotsNav.children);


const slideWidth = slides[0].getBoundingClientRect().width;

// setSlidePosition

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + "px";
};
slides.forEach(setSlidePosition);

const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove("current-slide");
    targetDot.classList.add("current-slide")
}


const moveToSlide = (track, currentSlide, targetSlide) => {
    track.style.transform = 'translateX(-' + targetSlide.style.left + ")";
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

//move right

nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const nextSlide = currentSlide.nextElementSibling;
    const currentDot = dotsNav.querySelector('.current-slide');
    const nextDot = currentDot.nextElementSibling;

    updateDots(currentDot, nextDot);
    moveToSlide(track, currentSlide, nextSlide);
});

//move left

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector(".current-slide");
    const prevSlide = currentSlide.previousElementSibling;
    const currentDot = dotsNav.querySelector(".current-slide");
    const pervDot = currentDot.previousElementSibling;
    

    updateDots(currentDot, pervDot)
    moveToSlide(track, currentSlide, prevSlide)
});

// CAROUSEL 2 section 5 *******************)

const track2 = document.querySelector(".carousel-track-2");
const slides2 = Array.from(track2.children);
const nextBtn = document.querySelector(".nextBtn2");
const pervBtn = document.querySelector(".pervBtn2");
const dotsNav2 = document.querySelector(".cirtcle-btns2");
const dots2 = Array.from(dotsNav2.children)

const slideWidth2 = slides2[0].getBoundingClientRect().width;

//setSlidePosition

const setSlidePosition2 = (slides2, index) => {
    slides2.style.left = slideWidth2 * index + "px";
}
slides2.forEach(setSlidePosition2);

const moveToSlide2 = (track2, currentS, targetS) => {
    track2.style.transform = 'translateX(-' + targetS.style.left + ")";
    currentS.classList.remove("current-s");
    targetS.classList.add("current-s");
};

const targetDot2 = (currentDot2, targetDot2) => {
    currentDot2.classList.remove("current");
    targetDot2.classList.add("current")
}

// move right

nextBtn.addEventListener("click", e => {
    const currentS = track2.querySelector(".current-s");
    const nextSlide2 = currentS.nextElementSibling;
    const currentDot2 = dotsNav2.querySelector(".current");
    const nextDot2 = currentDot2.nextElementSibling;

    targetDot2(currentDot2, nextDot2)
    moveToSlide2(track2, currentS, nextSlide2)
})

//move left

pervBtn.addEventListener('click', e => {
    const currentS = track2.querySelector(".current-s");
    const prevSlide2 = currentS.previousElementSibling;
    const currentDot2 = dotsNav2.querySelector(".current");
    const pervDot2 = currentDot2.previousElementSibling;

    targetDot2(currentDot2, pervDot2)
    moveToSlide2(track2, currentS, prevSlide2)
});

// scroll move to top ***********************************

let calcScrollValue = () => {
    let scrollProgress = document.getElementById("progress");
    let pos = document.documentElement.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round((pos * 100)/calcHeight);
    if(scrollValue > 12){
        scrollProgress.style.opacity = '0.8';
    }else {
        scrollProgress.style.opacity = '0'
    };
    if(scrollValue > 90){
        scrollProgress.style.position = 'sticky';
        scrollProgress.style.bottom = '600px';
        scrollProgress.style.left = '1300px'
        scrollProgress.style.opacity = '1';
    }else {
        scrollProgress.style.position = 'fixed';
        scrollProgress.style.bottom = '30px';
        scrollProgress.style.right = '30px'
    }

    scrollProgress.addEventListener('click', () => {
        document.documentElement.scrollTop = 0;
    })

}

window.onscroll = calcScrollValue;
window.onload = calcScrollValue;

