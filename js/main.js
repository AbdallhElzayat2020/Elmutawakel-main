// ScrollReveal({
//     reset: true
// });

// ScrollReveal({
//     reset: true,
//     distance: '80px',
//     duration: 2000,
//     delay: 200,
// });

// ScrollReveal().reveal('.logo', {
//     origin: "top"
// });

const btn = document.querySelector(".scroll-top")
const btn2 = document.querySelector(".scroll-left");

window.addEventListener("scroll", () => {
  if (window.scrollY >= 150) {
    btn.style.display = "block";
    btn2.style.display = "block";
  } else {
    btn.style.display = "none";
    btn2.style.display = "none";
  };
});

btn.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
btn2.addEventListener("click", () => {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
});
