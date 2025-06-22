
document.addEventListener("DOMContentLoaded", function () {
  const container = document.querySelector("div.flex.overflow-x-auto");

  // Hide scrollbar using injected style
  const style = document.createElement('style');
  style.textContent = `
    .flex.overflow-x-auto::-webkit-scrollbar {
      display: none;
    }
    .flex.overflow-x-auto {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  `;
  document.head.appendChild(style);

  let scrollAmount = 0;
  const scrollStep = 1;
  const scrollDelay = 15;

  function autoScroll() {
    if (!container) return;

    scrollAmount += scrollStep;

    if (scrollAmount >= container.scrollWidth - container.clientWidth) {
      scrollAmount = 0;
    }

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth"
    });
  }

  setInterval(autoScroll, scrollDelay);
});
