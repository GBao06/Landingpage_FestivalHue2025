document.addEventListener("DOMContentLoaded", function () {
    const btn = document.getElementById("backToTop");
  
    window.addEventListener("scroll", function () {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        btn.style.display = "block";
      } else {
        btn.style.display = "none";
      }
    });
  
    btn.addEventListener("click", function () {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
  