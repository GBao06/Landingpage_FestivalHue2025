function updateDetailsVisibility() {
  const slides = document.querySelectorAll(".swiper-slide");
  slides.forEach((slide) => {
    const details = slide.querySelector(".details");
    if (!details) return;

    if (
      slide.classList.contains("swiper-slide-active") ||
      slide.classList.contains("swiper-slide-prev") ||
      slide.classList.contains("swiper-slide-next")
    ) {
      details.classList.remove("hidden");
    } else {
      details.classList.add("hidden");
    }
  });
}

// Gọi ngay lúc trang tải xong
document.addEventListener("DOMContentLoaded", function () {
  updateDetailsVisibility();
});

// Gọi lại mỗi khi swiper thay đổi slide
const swiperContainer = document.querySelector(".cusSwiper3D");
if (swiperContainer && swiperContainer.swiper) {
  swiperContainer.swiper.on("slideChangeTransitionEnd", () => {
    updateDetailsVisibility();
  });
} else {
  // Nếu swiper chưa khởi tạo kịp thì đợi 1 chút
  window.addEventListener("load", function () {
    if (swiperContainer && swiperContainer.swiper) {
      swiperContainer.swiper.on("slideChangeTransitionEnd", () => {
        updateDetailsVisibility();
      });
    }
  });
}
