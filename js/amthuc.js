document.addEventListener("DOMContentLoaded", function () {
  const btnExplore = document.querySelector(".food-epl");
  const btnBack = document.querySelector(".btn-back");
  const wrapperFood = document.querySelector(".wrapper-food");
  const wrapperAfter = document.querySelector(".wrapper-food-after");
  const navItems = document.querySelectorAll(".nav-item");

  btnExplore.addEventListener("click", function () {
    wrapperFood.classList.add("hidden");
    wrapperAfter.classList.remove("hidden");

    navItems.forEach((item) => item.classList.remove("show"));

    wrapperAfter.classList.add("active_food");

    navItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 300);
    });

    wrapperAfter.scrollIntoView({ behavior: "smooth" });
  });

  btnBack.addEventListener("click", function () {
    wrapperAfter.classList.add("hidden");
    wrapperFood.classList.remove("hidden");

    navItems.forEach((item) => item.classList.remove("show"));
  });
});
