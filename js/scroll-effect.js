// Cuộn mượt khi nhấn vào thẻ a có href là id
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener("click", function(e) {
//       e.preventDefault();
//       const target = document.querySelector(this.getAttribute("href"));
//       if (target) {
//         target.scrollIntoView({
//           behavior: "smooth"
//         });
//       }
//     });
//   });
  
//   // Fade-in khi cuộn tới phần tử có class .fade-in
//   const fadeElements = document.querySelectorAll(".fade-in");
  
//   function handleFadeInOnScroll() {
//     fadeElements.forEach(el => {
//       const rect = el.getBoundingClientRect();
//       if (rect.top < window.innerHeight - 100) {
//         el.classList.add("show");
//       }
//     });
//   }
  
//   window.addEventListener("scroll", handleFadeInOnScroll);
//   window.addEventListener("load", handleFadeInOnScroll);
  
//   // Header thay đổi khi scroll xuống
//   const header = document.querySelector("header");
//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       header.classList.add("scrolled");
//     } else {
//       header.classList.remove("scrolled");
//     }
//   });
  