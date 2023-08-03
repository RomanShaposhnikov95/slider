(function() {
    const jsElement = document.getElementById('container');

    function updateSwiperOffsets() {
        swiper.params.slidesOffsetBefore = jsElement.offsetLeft + 40;
        swiper.params.slidesOffsetAfter =
            jsElement.offsetParent.offsetWidth - (jsElement.offsetLeft + jsElement.offsetWidth) + 40;

        swiper.update();
    }

    const swiper = new Swiper('.swiper', {
        loop: false,
        // slidesPerView: "auto",
        spaceBetween: 30,
        slidesOffsetBefore: jsElement.offsetLeft + 40,
        slidesOffsetAfter: jsElement.offsetParent.offsetWidth - (jsElement.offsetLeft + jsElement.offsetWidth) + 40,

        navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                slidesOffsetBefore: 0,
                slidesOffsetAfter: 0
            },
            655: {
                slidesPerView: "auto",
            }
        }
    });

    window.addEventListener('resize', updateSwiperOffsets);
})();
