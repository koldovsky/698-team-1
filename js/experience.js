// (function () {

//     const slides = [
//         `<div class="experience-stories__story">
//             <img src="img/experience_section/Story1.png" alt="Storys author photo" class="story_photo"
//             width="120" height="120">
//             <p class="story_author">Cole Tiers</p>
//             <p class="story_text">I wanted to see Norway since childhood when I saw a stylish house
//             right in the middle of the Norwegian forest in some magazine. I thought then that I also
//             want to live in such a house. This dream came true a few months ago on a tour of Norway.
//             I am very happy! Thanks, guys!</p>
//             <p class="story_date">October 28, 2018</p>
//         </div>`, 
//         `<div class="experience-stories__story story_hidden">
//             <img src="img/experience_section/Story2.png" alt="Storys author photo" class="story_photo"
//                 width="120" height="120">
//             <p class="story_author">Lilland Forester</p>
//             <p class="story_text">We went on this tour with our daughter, she was 5 years old. I was worried that it would be difficult for her but everything went great. We spent nights in good hotels with excellent breakfasts. My daughter always had something to eat, and the nature in Norway fascinated her even more than us!</p>
//             <p class="story_date">May 13, 2019</p>
//         </div>`, 
//         `<div class="experience-stories__story story_hidden">
//             <img src="img/experience_section/Story3.png" alt="Storys author photo" class="story_photo"
//                 width="120" height="120">
//             <p class="story_author">Alice Hendricks</p>
//             <p class="story_text">I still can't believe I have seen the Northern Lights with my own eyes! That was incredible! When we arrived in Tromsø, it was constantly snowing, the weather was bad, and the guide said that we were out of luck, most likely. But on the last night, right at midnight, the clouds left, and I saw it! It was magical!</p>
//             <p class="story_date">January 12, 2020</p>
//     </div>`, 
//     ]

//     let slideIdx = 0;

//     function showCurrentSlide() {
//         const slideContainer = document.querySelector('.experience_stories .experience-stories__story');
//         slideContainer.innerHTML = slides[slideIdx];
//         // if (window.innerWidth < 640) 
       
//         if (window.matchMedia('(min-width: 640px)').matches) {
//             const secondSlideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
//             slideContainer.innerHTML += slides[secondSlideIdx];
//             if (window.matchMedia('(min-width: 960px)').matches) {
//                 const thirdSlideIdx = secondSlideIdx + 1 >= slides.length ? 0 : secondSlideIdx + 1;
//                 slideContainer.innerHTML += slides[thirdSlideIdx];
//             }
//         }
//     }

//     function nextSlide() {
//         slideIdx = slideIdx + 1 >= slides.length ? 0 : slideIdx + 1;
//         showCurrentSlide();
//     }

//     function prevSlide() {
//         slideIdx = slideIdx - 1 < 0 ? slides.length - 1 : slideIdx - 1;
//         showCurrentSlide();
//     }

//     // setInterval(nextSlide, 3000);
//     showCurrentSlide();

//     const nextButton = document.querySelector('.arrow_right');
//     nextButton.addEventListener('click', nextSlide);
//     const prevButton = document.querySelector('.arrow_left');
//     prevButton.addEventListener('click', prevSlide);

//     window.addEventListener('resize', showCurrentSlide);