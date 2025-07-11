const inner = document.querySelector('.carousel-inner');
    const totalSlides = document.querySelectorAll('.slide-item').length;
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;

    function updateSlide() {
      inner.style.transform = `translateX(-${currentIndex * 100}%)`;
      dots.forEach(dot => dot.classList.remove('active'));
      dots[currentIndex].classList.add('active');
    }

    document.querySelector('.btn--right').addEventListener('click', () => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    });

    document.querySelector('.btn--left').addEventListener('click', () => {
      currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
      updateSlide();
    });

    dots.forEach(dot => {
      dot.addEventListener('click', () => {
        currentIndex = +dot.dataset.index;
        updateSlide();
      });
    });

    setInterval(() => {
      currentIndex = (currentIndex + 1) % totalSlides;
      updateSlide();
    }, 5000);

   updateSlide(); 