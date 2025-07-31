const tabs = document.querySelectorAll(".sidebar li");
const events = document.querySelectorAll(".event");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    // active tab
    document.querySelector(".sidebar li.active").classList.remove("active");
    tab.classList.add("active");

    // active content
    const idx = tab.dataset.event;
    document.querySelector(".event.active").classList.remove("active");
    const next = document.getElementById(`event-${idx}`);
    next.classList.add("active");
  });
});
