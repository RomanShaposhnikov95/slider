(function() {
    const swiper = new Swiper('.swiper-about', {
        loop: false,
        // slidesPerView: "auto",
        spaceBetween: 20,
        breakpoints: {
            320: {
                slidesPerView: 1,
            },
            555: {
                slidesPerView: 3,
            },
            700: {
                slidesPerView: "auto",
            }
        }
    });

})();
