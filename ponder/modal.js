// ----- Mobile Menu -----
const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("primaryNav");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("open");
});


// ----- Modal Gallery (like reference) -----
const gallery = document.querySelector(".gallery");
const modal = document.getElementById("viewer");
const modalImage = document.getElementById("viewerImg");
const closeButton = document.getElementById("closeViewer");

// Event listener for opening the modal
gallery.addEventListener("click", openModal);

function openModal(e) {
  // Only open if they clicked an image
  if (e.target.tagName !== "IMG") return;

  const img = e.target;
  const src = img.getAttribute("src");
  const alt = img.getAttribute("alt");

  // swap -sm to -full (matches your filenames)
  const full = src.replace("-sm", "-full");

  modalImage.src = full;
  modalImage.alt = alt;

  modal.showModal();
}

// Close modal on button click
closeButton.addEventListener("click", function () {
  modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.close();
  }
});
