const FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

const avatarChooser = document.querySelector('.ad-form-header__input');
const avatarPreview = document.querySelector('.ad-form-header__preview img');

const offerChooser = document.querySelector('.ad-form__input');
const offerContainer = document.querySelector('.ad-form__photo');

// создает тег img для фото
const offerPreviw = () => {
  const photo = document.createElement('img');
  photo.height = '70';
  photo.width = '70';
  offerContainer.appendChild(photo);
  return photo;
};

// показывает превью при загрузке фото
const onChangePreviw = (chooser, preview) => {
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

avatarChooser.addEventListener('change', onChangePreviw.bind(null, avatarChooser, avatarPreview));


offerChooser.addEventListener('change', onChangePreviw.bind(null, offerChooser, offerPreviw()));
