/* =====================================
   MAIN JAVASCRIPT
   Website Filter Air Rumah Tangga
===================================== */

document.addEventListener("DOMContentLoaded", function () {

  /* ==========================
     NAVBAR ACTIVE AUTO
  ========================== */
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

  navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });

  /* ==========================
     AUTO CLOSE NAVBAR (MOBILE)
  ========================== */
  const navCollapse = document.querySelector(".navbar-collapse");
  const navItems = document.querySelectorAll(".navbar-nav .nav-link");

  navItems.forEach(item => {
    item.addEventListener("click", () => {
      if (window.innerWidth < 992) {
        new bootstrap.Collapse(navCollapse).hide();
      }
    });
  });

  /* ==========================
     CTA WHATSAPP TRACK (OPTIONAL)
  ========================== */
  const waButton = document.querySelector("a[href*='wa.me']");

  if (waButton) {
    waButton.addEventListener("click", () => {
      console.log("CTA WhatsApp diklik");
      // nanti bisa sambung ke Google Analytics / Meta Pixel
    });
  }

});
