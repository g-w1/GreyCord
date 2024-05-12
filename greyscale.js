function applyGreyscale() {
  document.documentElement.style.filter = "grayscale(100%)";
}

setInterval(() => {
  applyGreyscale();
}, 100);

// This is jsut a fallback.
const observer = new MutationObserver(() => {
  removeFavicons();
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
  attributes: true,
});
