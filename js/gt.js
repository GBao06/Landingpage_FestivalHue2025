const swiper = new Swiper(".swiper-container", {
  direction: "vertical",
  effect: "fade",
  speed: 1000,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: {
    invert: false,
    forceToAxis: false,
    thresholdDelta: 50,
    sensitivity: 1,
  },
  on: {
    slideChange: function () {
      this.slides.forEach((slide) => {
        let background = slide.querySelector(".background");
        if (background) {
          background.classList.remove("animation");
        }
      });
      let activeSlide = this.slides[this.activeIndex];
      let background = activeSlide.querySelector(".background");
      if (background) {
        background.classList.add("animation");
      }
    },
  },
});

// Bật-Tắt mobile nav
const menuLinks = document.querySelectorAll(".menu-link");
const headerEl = document.querySelector(".header");
menuLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const slideIndex = parseInt(this.getAttribute("data-slide"), 10);
    swiper.slideToLoop(slideIndex, 800);

    // THAY ĐỔI TẠI ĐÂY:
    // Chỉ đóng menu di động nếu nhấp vào mục "Liên hệ" (có data-slide="5")
    if (slideIndex === 5 && headerEl.classList.contains("nav-open")) {
      headerEl.classList.remove("nav-open");
    }
  });
});
const btnNavEl = document.querySelector(".btn-mobile-nav");

btnNavEl?.addEventListener("click", () => {
  headerEl.classList.toggle("nav-open");
});

// Sửa lỗi điều hướng menu cho slider có loop
document.querySelectorAll(".menu-link").forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const slideIndex = parseInt(this.dataset.slide);
    if (!isNaN(slideIndex)) {
      // Sử dụng slideToLoop khi bật tùy chọn loop: true
      swiper.slideToLoop(slideIndex);
    }
  });
});
