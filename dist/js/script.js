// Navbar Fixed
window.onscroll = function () {
    const header = document.querySelector("header");
    const fixedNav = header.offsetTop;

    if (window.pageYOffset > fixedNav) {
        header.classList.add("navbar-fixed");
    } else {
        header.classList.remove("navbar-fixed");
    }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("hamburger-active");
    navMenu.classList.toggle("hidden");
});

// animation role
  const texts = ["Student", "Entrepreneur", "Web Development"];
  let index = 0;
  let textElement = document.getElementById("changingText");

  function changeText() {
    textElement.classList.remove("animate__fadeIn"); // Hapus animasi dulu
    void textElement.offsetWidth; // Reset animasi
    textElement.classList.add("animate__fadeOut");

    setTimeout(() => {
      textElement.textContent = texts[index]; // Ganti teks
      textElement.classList.remove("animate__fadeOut");
      textElement.classList.add("animate__fadeIn");
      index = (index + 1) % texts.length;
    }, 500);
  }

  setInterval(changeText, 2000);