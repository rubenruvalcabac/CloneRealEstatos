function openNav() {
  document.getElementById("navbar__overlay").style.width = "100%";
}

function closeNav() {
  document.getElementById("navbar__overlay").style.width = "0";
}

function initNavbarScrollHide() {
  // Looks for the hider element, when this hider element is scrolled out, the navbar will be unsticky
  const hiderElement = document.getElementById("navbar__scroll-hide");
  if (!hiderElement) return;

  const navBarElement = document.getElementById("navbar");
  if (!navBarElement) return;

  navBarElement.style.position = "sticky";
  const hiderElementTop = hiderElement.getBoundingClientRect().top;

  window.addEventListener("scroll", (e) => {
    if (window.pageYOffset > hiderElementTop) {
      navBarElement.style.position = null;
    } else {
      navBarElement.style.position = "sticky";
    }
  });
}

initNavbarScrollHide();
