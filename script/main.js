const promoPanels = document.querySelectorAll('.promo-panel');

promoPanels.forEach((panel) => {
  panel.addEventListener('click', (event) => {
    event.preventDefault();

    promoPanels.forEach((item) => {
      item.classList.remove('is-active');
    });

    panel.classList.add('is-active');
  });
});

const menuItems = document.querySelectorAll("header .menu > li");

menuItems.forEach((item) => {
  const mainLink = item.querySelector(":scope > a");
  const submenu = item.querySelector(":scope > .submenu");

  // 서브메뉴가 없는 메뉴는 원래 링크 기능 유지
  if (!submenu) return;

  mainLink.setAttribute("aria-expanded", "false");

  mainLink.addEventListener("click", (event) => {
    event.preventDefault();

    const isOpen = item.classList.contains("active");

    // 다른 서브메뉴 닫기
    menuItems.forEach((otherItem) => {
      otherItem.classList.remove("active");

      const otherLink = otherItem.querySelector(":scope > a");
      if (otherLink) {
        otherLink.setAttribute("aria-expanded", "false");
      }
    });

    // 현재 클릭한 메뉴 열기
    if (!isOpen) {
      item.classList.add("active");
      mainLink.setAttribute("aria-expanded", "true");
    }
  });
});

// 메뉴 영역 밖을 클릭하면 닫기
document.addEventListener("click", (event) => {
  if (!event.target.closest("header .menu")) {
    menuItems.forEach((item) => {
      item.classList.remove("active");

      const mainLink = item.querySelector(":scope > a");
      if (mainLink) {
        mainLink.setAttribute("aria-expanded", "false");
      }
    });
  }
});
