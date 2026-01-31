const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("primaryNav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});

const gallery = document.querySelector(".gallery");
const modal = document.getElementById("viewer");
const modalImage = document.getElementById("viewerImg");
const closeButton = document.getElementById("closeViewer");

gallery.addEventListener("click", openModal);

function openModal(e) {
  if (e.target.tagName !== "IMG") return;

  const img = e.target;
  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");

  const full = src.replace("-sm", "-full");

  modalImage.src = full;
  modalImage.alt = alt;

  modal.showModal();
}

closeButton.addEventListener("click", function () {
  modal.close();
});

modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close();
  }
});
