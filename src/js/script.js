window.addEventListener("DOMContentLoaded", () => {
  /* ----------- Переключение табов ---------- */

  let tabsBtn = document.querySelectorAll(".tabs__nav-btn");
  let tabsItems = document.querySelectorAll(".content");

  tabsBtn.forEach(onTabClick);

  function onTabClick(item) {
    item.addEventListener("click", function () {
      let currentBtn = item;
      let tabId = currentBtn.getAttribute("data-tab");
      let currentTab = document.querySelector(tabId);

      if (!currentBtn.classList.contains("active")) {
        tabsBtn.forEach(function (item) {
          item.classList.remove("active");
        });

        tabsItems.forEach(function (item) {
          item.classList.remove("content-active");
        });

        currentBtn.classList.add("active");
        currentTab.classList.add("content-active");
      }
    });
  }

  /* ----------- Слайдер ---------- */

  let swiper = new Swiper(".swiper", {
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1100: {
        slidesPerView: 5,
        spaceBetween: 30,
      },
    },
  });

  /* ----------- Popup ---------- */
});
