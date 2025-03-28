var swiper = new Swiper(".mySwiper", {
    cssMode: true,
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
    },
    mousewheel: true,
    keyboard: true,
});




var swiper = new Swiper(".clientSwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    autoplay: true,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });