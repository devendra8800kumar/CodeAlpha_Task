const create = document.getElementById("create");
const createImg = document.getElementById("createImg");
const captionText = document.getElementById("captionText");
const imageContainer = document.querySelectorAll(".container");
let currentIndex = 0;

const imageList = Array.from(imageContainer);

imageList.forEach((container, index) => {
  const img = container.querySelector("img");
  img.addEventListener("click", () => openModal(index));
});

function openModal(index) {
  currentIndex = index;
  updateModal();
  create.style.display = "block";
}

function closeModal() {
  create.style.display = "none";
}

function updateModal() {
  const img = imageList[currentIndex].querySelector("img");
  createImg.src = img.src;
  captionText.textContent = img.alt;
}

function showNext() {
  currentIndex = (currentIndex + 1) % imageList.length;
  updateModal();
}

function showPrev() {
  currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
  updateModal();
}


function filterImage(category) {
  imageList.forEach(container => {
    const match = category === "all" || container.dataset.category === category;
    container.style.display = match ? "block" : "none";
  });
}
