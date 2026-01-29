const menuBtn = document.getElementById("menuBtn");
const primaryNav = document.getElementById("primaryNav");

menuBtn.addEventListener("click", () => {
  const isOpen = primaryNav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(isOpen));
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900) {
    primaryNav.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  }
});

const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

function openModal(imgEl) {
  modal.classList.add("show");
  modal.setAttribute("aria-hidden", "false");

  modalImg.src = imgEl.src;
  modalImg.alt = imgEl.alt || "Enlarged photo";
}

function closeModal() {
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modalImg.src = "";
  modalImg.alt = "";
}

document.querySelectorAll(".gallery img").forEach((img) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => openModal(img));
});

modalClose.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && modal.classList.contains("show")) {
    closeModal();
  }
});
