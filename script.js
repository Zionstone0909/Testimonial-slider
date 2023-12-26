const swiper = new Swiper('.js-testimonials-slider', {
    grabCusor: true,
    spaceBetween:30,
    pagination:{
        el:'.js-testimonials-pagination',
        clickable:true
    },
    breakpoints:{
        767:{
            slidesPerView: 2
        }
    }
    });