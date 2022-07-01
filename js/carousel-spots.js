(function () {

    const slides = [
        `<div class="carousel_spots__image_container">
            <img
                class="carousel_spots__image_block-1 carousel_spots__image"
                src="img/carousel_spots/carousel_spots-1.jpeg"
                alt="STUNNING SPOTS"
            >
        </div>`, 
        `<div class="carousel_spots__image_container">
                <img
                    class="carousel_spots__image_block-2 carousel_spots__image"
                    src="img/carousel_spots/carousel_spots-2.jpeg"
                    alt="STUNNING SPOTS"
                >
        </div>`, 
        `<div class="carousel_spots__image_container">
                <img
                    class="carousel_spots__image_block-3 carousel_spots__image"
                    src="img/carousel_spots/carousel_spots-3.jpeg"
                    alt="STUNNING SPOTS"
                >
        </div>`, 
        `<div class="carousel_spots__image_container">
            <img 
                class="carousel_spots__image_block-4 carousel_spots__image" 
                src="img/carousel_spots/carousel_spots-4.png" 
                alt="STUNNING SPOTS"
            >
        </div>`,    
        `<div class="carousel_spots__image_container">
            <img 
                class="carousel_spots__image_block-5 carousel_spots__image" 
                src="img/carousel_spots/carousel_spots-5.jpeg" 
                alt="STUNNING SPOTS"
            >
        </div>`,    
        `<div class="carousel_spots__image_container">
            <img 
                class="carousel_spots__image_block-6 carousel_spots__image" 
                src="img/carousel_spots/carousel_spots-6.jpeg" 
                alt="STUNNING SPOTS"
            >
        </div>` 
    ]

    let slideIdx = 0;

    function showCurrentSlide() {
        const slideContainer = document.querySelector('.carousel_spots__image_block .carousel_spots__image-carousel-conteiner');
        slideContainer.innerHTML = slides[slideIdx];
        // if (window.innerWidth < 640) 
       
        if (window.matchMedia('(min-width: 640px)').matches) {
            const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
            slideContainer.innerHTML += slides[secondSlideIdx];
            if (window.matchMedia('(min-width: 960px)').matches) {
                const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
                slideContainer.innerHTML += slides[thirdSlideIdx];
            }
        }
    }

    function nextSlide() {
        slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
        showCurrentSlide();
    }

    function prevSlide() {
        slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
        showCurrentSlide();
    }

    // setInterval(nextSlide, 3000);
    showCurrentSlide();

    const nextButton = document.querySelector('.carousel_spots__slider_button-right');
    nextButton.addEventListener('click', nextSlide);
    const prevButton = document.querySelector('.carousel_spots__slider_button-left');
    prevButton.addEventListener('click', prevSlide);

    window.addEventListener('resize', showCurrentSlide);
})()