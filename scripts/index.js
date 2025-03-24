const initialCards = [
  {
    name: "snowboarding",
    link: "https://unsplash.com/photos/a-group-of-chairs-sitting-in-front-of-a-large-black-ball-4FcECUfOsO8",
  },
  {
    name: "group of chairs",
    link: "https://unsplash.com/photos/a-man-flying-through-the-air-while-riding-a-snowboard-vIrsbgXSjj0",
  },
  {
    name: "A table with flowers",
    link: "https://unsplash.com/photos/a-table-topped-with-a-vase-filled-with-flowers-vtKr_wHuNHg",
  },
  {
    name: "Pair of earrings",
    link: "https://unsplash.com/photos/a-close-up-of-a-person-wearing-a-pair-of-earrings-9uRta3OGvDo",
  },
  {
    name: "City view",
    link: "https://unsplash.com/photos/a-view-of-a-city-from-the-water-xLQM7Tnqdpg",
  },
  {
    name: "Blurry photo of night",
    link: "https://unsplash.com/photos/a-blurry-photo-of-a-city-at-night-4Kre8hBbBKo",
  },
];

const profileEditButton = document.querySelector(".profile__edit-btn");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const editModal = document.querySelector("#edit-profile-modal");
const editFormElement = editModal.querySelector(".modal__form");
const editModalCloseBtn = editModal.querySelector(".modal__close-btn");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);

function openModal() {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  editModal.classList.add("modal_opened");
}

function closeModal() {
  editModal.classList.remove("modal_opened");
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = editModalNameInput.value;
  profileDescription.textContent = editModalDescriptionInput.value;
  closeModal();
}

profileEditButton.addEventListener("click", openModal);

editModalCloseBtn.addEventListener("click", closeModal);

editFormElement.addEventListener("submit", handleEditFormSubmit);
