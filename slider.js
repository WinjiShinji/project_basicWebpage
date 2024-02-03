// ---- Image Slider ---- //
// Works Slider //
const worksSlider = document.querySelector('.about-works-carosel') 
const worksNextBtn = document.querySelector('.about-works-carosel-next-btn')
const worksPrevBtn = document.querySelector('.about-works-carosel-prev-btn')

worksNextBtn.addEventListener('click', () => {
  worksSlider.scrollLeft += 410
})

worksPrevBtn.addEventListener('click', () => {
  worksSlider.scrollLeft -= 410
})

// Testimonial Slider //
const testimonialSlider = document.querySelector('.about_testimonial_container')
const testimonialNextBtn = document.querySelector('.about-testimonial-carosel-next-btn')
const testimonialPrevBtn = document.querySelector('.about-testimonial-carosel-prev-btn')

testimonialNextBtn.addEventListener('click', () => {
  testimonialSlider.scrollLeft += 400
})

testimonialPrevBtn.addEventListener('click', () => {
  testimonialSlider.scrollLeft -= 400
})


