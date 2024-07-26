const track = document.querySelector('.carousel__track');
const dotsNav = document.querySelector('.carousel__nav');
var wait = false;
const carouselItems={
    item1:{
        img: 'https://images.unsplash.com/photo-1721714874858-18526c08b8d7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8',
        title: 'Title 1',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae, doloribus expedita dolore molestias ipsa illo repellendus atque ratione iusto itaque, sint perspiciatis voluptatum ex omnis quaerat voluptas eligendi neque.',
    },
    item2:{
        img: 'https://images.unsplash.com/photo-1721297015609-1374b1378d31?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzfHx8ZW58MHx8fHx8',
        title: 'Title 2',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae, doloribus expedita dolore molestias ipsa illo repellendus atque ratione iusto itaque, sint perspiciatis voluptatum ex omnis quaerat voluptas eligendi neque.',
    },
    item3:{
        img: 'https://plus.unsplash.com/premium_photo-1721257104603-b6b48b7ff239?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyfHx8ZW58MHx8fHx8',
        title: 'Title 3',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae, doloribus expedita dolore molestias ipsa illo repellendus atque ratione iusto itaque, sint perspiciatis voluptatum ex omnis quaerat voluptas eligendi neque.',
    },
    item4:{
        img: 'https://images.unsplash.com/photo-1719937206255-cc337bccfc7d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8',
        title: 'Title 4',
        description: '    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime vitae, doloribus expedita dolore molestias ipsa illo repellendus atque ratione iusto itaque, sint perspiciatis voluptatum ex omnis quaerat voluptas eligendi neque.',
    }
}
const slides = Object.values(carouselItems).map((item, index) => {
    // Create elements
    const slide = document.createElement('li');
    const img = document.createElement('img');
    img.classList.add('carousel__image');
    const div = document.createElement('div');
    div.classList.add('carousel__text');
    const h2 = document.createElement('h2');
    const p = document.createElement('p');
    const dot = document.createElement('button');

    // Set classes for dot
    dot.classList.add('carousel__indicator');
    if (index === 0) {
        dot.classList.add('current-slide');
    }

    // Set classes for slide
    slide.classList.add('carousel__slide');
    if (index === 0) {
        slide.classList.add('current-slide');
    }

    // Set image attributes
    img.src = item.img || '';
    img.alt = item.title || 'Carousel image';

    // Set text content
    h2.textContent = item.title || '';
    p.textContent = item.description || '';

    // Append elements to slide
    slide.appendChild(img);

    div.appendChild(h2);
    div.appendChild(p);

    slide.appendChild(div);

    // Append slide and dot to their respective containers
    track.appendChild(slide);
    dotsNav.appendChild(dot);

    return slide;
});
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;



// Arrange the slides next to each other
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

// Move slides
const moveToSlide = (track, currentSlide, targetSlide) => {
    
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentSlide.classList.remove('current-slide');
    targetSlide.classList.add('current-slide');
};

// Update dots
const updateDots = (currentDot, targetDot) => {
    currentDot.classList.remove('current-slide');
    targetDot.classList.add('current-slide');
};

// Hide/show arrows
// const hideShowArrows = (slides, prevButton, nextButton, targetIndex) => {
//     if (targetIndex === 0) {
//         prevButton.classList.add('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     } else if (targetIndex === slides.length - 1) {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.add('is-hidden');
//     } else {
//         prevButton.classList.remove('is-hidden');
//         nextButton.classList.remove('is-hidden');
//     }
// };

//connect extreme slides


// When I click left, move slides to the left
prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const currentDot = dotsNav.querySelector('.current-slide');

    let prevIndex = currentIndex - 1; ;
    let prevSlide = currentSlide.previousElementSibling;
    let prevDot = currentDot.previousElementSibling;
    

    if(prevIndex <0){
   
        prevIndex = slides.length - 1;
        prevSlide = slides[slides.length - 1];
        prevDot = dots[dots.length - 1];
    }
   

    moveToSlide(track, currentSlide, prevSlide);
    updateDots(currentDot, prevDot);
    // hideShowArrows(slides, prevButton, nextButton, prevIndex);
});

// When I click right, move slides to the right
nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide');
    const currentIndex = slides.findIndex(slide => slide === currentSlide);
    const currentDot = dotsNav.querySelector('.current-slide');

    let nextIndex =currentIndex + 1;
    let nextSlide = currentSlide.nextElementSibling;
    let nextDot = currentDot.nextElementSibling;

    if(nextIndex === slides.length ){
 
  
        nextIndex = 0
        nextSlide = slides[0];
        nextDot = dots[0];

    }

    moveToSlide(track, currentSlide, nextSlide);
    updateDots(currentDot, nextDot);
    // hideShowArrows(slides, prevButton, nextButton, nextIndex);
    console.log(nextIndex);
    console.log(nextSlide);
});

// When I click the nav indicators, move to that slide
dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');

    if (!targetDot) return;

    const currentSlide = track.querySelector('.current-slide');
    const currentDot = dotsNav.querySelector('.current-slide');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
    // hideShowArrows(slides, prevButton, nextButton, targetIndex);
});

const handleSwipe = (direction) => {
    let targetSlide, targetDot;
    if (direction === 'left') {
        targetSlide = currentSlide.nextElementSibling || slides[0];
        targetDot = currentDot.nextElementSibling || dots[0];
    } else if (direction === 'right') {
        targetSlide = currentSlide.previousElementSibling || slides[slides.length - 1];
        targetDot = currentDot.previousElementSibling || dots[dots.length - 1];
    }
    moveToSlide(track, currentSlide, targetSlide);
    updateDots(currentDot, targetDot);
   
};

track.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

track.addEventListener('touchmove', (e) => {
    const moveX = e.touches[0].clientX;
    const diffX = startX - moveX;
    if (Math.abs(diffX) > 5) {
        handleSwipe(diffX > 0 ? 'left' : 'right');
        startX = null; // Reset startX to prevent multiple swipes
    }
});

track.addEventListener('touchend', () => {
    startX = null;
});

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


document.addEventListener('DOMContentLoaded', async (e) => {
    let currentSlide = track.querySelector('.current-slide');
    let currentDot = dotsNav.querySelector('.current-slide');
    const intervalTime = 3000;
        let slideInterval;

    if(wait){
        await delay(5000);
    }

    const startSlideShow = () => {
        slideInterval = setInterval(() => {
            let runningSlide = track.querySelector('.current-slide');
            let runningDot = dotsNav.querySelector('.current-slide');
            
            if(runningSlide !== currentSlide || runningDot !== currentDot){
                currentSlide = runningSlide;
                currentDot = runningDot;
            }
            let nextSlide = currentSlide.nextElementSibling;
            let nextDot = currentDot.nextElementSibling;

            if (!nextSlide) {
                nextSlide = slides[0];
            }
            if (!nextDot) {
                nextDot = dots[0];
            }

            moveToSlide(track, currentSlide, nextSlide);
            updateDots(currentDot, nextDot);

            currentSlide = nextSlide;
            currentDot = nextDot;
        }, intervalTime);
    };

    const stopSlideShow = () => {
        clearInterval(slideInterval);
    };

    // Start the slideshow
    startSlideShow();

    // Add event listeners to stop and start the slideshow on hover
    const carousel = document.querySelector('.carousel');
    carousel.addEventListener('mouseenter', stopSlideShow);
    carousel.addEventListener('mouseleave', startSlideShow);
});



