const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png', 'bmp'];
const PhotoSize = {
  height: 250,
  width: 250,
};

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const offerChooser = document.querySelector('.ad-form__input');
const offerContainer = document.querySelector('.ad-form__photo');

// создает тег img для фото
const offerPreviw = () => {
  if (offerContainer.firstChild) {
    offerContainer.firstChild.remove();
  }
  const photo = document.createElement('img');
  photo.height = PhotoSize.height;
  photo.width = PhotoSize.width;
  offerContainer.appendChild(photo);
  return photo;
};

// показывает превью при загрузке фото
const onPreviwChange = (chooser, preview) => {
  const file = chooser.files[0];
  const fileName = file.name.toLowerCase();
  const matches = FILE_TYPES.some((type) => fileName.endsWith(type));

  if (matches) {
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      preview.src = reader.result;
    });

    reader.readAsDataURL(file);
  }
};

// сбрасывает превью фотографий
const resetOfferFreviw = () => {
  avatarPreview.src = 'img/muffin-grey.svg';
  if (offerContainer.firstChild) {
    offerContainer.firstChild.remove();
  }
};

avatarChooser.addEventListener('change', onPreviwChange.bind(null, avatarChooser, avatarPreview));


offerChooser.addEventListener('change', () => {
  onPreviwChange(offerChooser, offerPreviw());
});

export {resetOfferFreviw};

