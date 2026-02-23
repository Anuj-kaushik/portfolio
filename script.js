const nav = document.getElementById("nav");

if (nav) {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 40) {
      nav.classList.add("scrolled");
    } else {
      nav.classList.remove("scrolled");
    }
  });
}

const revealElements = document.querySelectorAll(".reveal");

function handleReveal() {
  revealElements.forEach(function (el) {
    const scrollBottom = window.scrollY + window.innerHeight;
    const elementTop = el.offsetTop;
    if (scrollBottom > elementTop + 80) {
      el.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", handleReveal);

handleReveal();

const grid = document.getElementById("grid");

if (grid) {
  const allCards = document.querySelectorAll(".card[data-tags]");
  const filterBtns = document.querySelectorAll(".filter-btn");
  const countEl = document.getElementById("count");
  const emptyState = document.getElementById("emptyState");

  countEl.textContent = allCards.length + " projects";

  filterBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      filterBtns.forEach(function (b) {
        b.classList.remove("active");
      });

      btn.classList.add("active");
      const selectedTag = btn.dataset.tag;
      let visibleCount = 0;

      allCards.forEach(function (card) {
        const cardTags = card.dataset.tags.split(",");
        const shouldShow = selectedTag === "all" || cardTags.includes(selectedTag);
        if (shouldShow) {
          card.classList.remove("hidden");
          visibleCount++;
        } else {
          card.classList.add("hidden");
        }
      });

      if (visibleCount === 1) {
        countEl.textContent = "1 project";
      } else {
        countEl.textContent = visibleCount + " projects";
      }
      if (visibleCount === 0) {
        emptyState.classList.add("visible");
      } else {
        emptyState.classList.remove("visible");
      }
    });
  });
}
