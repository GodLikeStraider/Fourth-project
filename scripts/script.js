let profile = document.querySelector('.profile');
let popup = document.querySelector('.popup');

let editButton = profile.querySelector('.profile__edit-button');
let closeButton = popup.querySelector('.popup__close-button');
let formElement = popup.querySelector('.popup__container');

let profileName = profile.querySelector('.profile__name');
let profileDescription = profile.querySelector('.profile__description');

let inputName = popup.querySelector('.popup__input_name');
let inputDescription = popup.querySelector('.popup__input_description');

function popupOpened() {
  popup.classList.add('popup_opened');
  inputName.value = profileName.textContent;
  inputDescription.value = profileDescription.textContent;
};

function popupClosed() {
  popup.classList.remove('popup_opened');
};

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = inputName.value;
  profileDescription.textContent = inputDescription.value;
  popupClosed();
};

editButton.addEventListener('click', popupOpened);
closeButton.addEventListener('click', popupClosed);
formElement.addEventListener('submit', formSubmitHandler);