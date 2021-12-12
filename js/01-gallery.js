import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector('.gallery'),
};

const galleryMarkup = createGalleryMarkup(galleryItems);
function createGalleryMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
        <div class="gallery__item">
          <a class="gallery__link" href="${original}">
            <img
              class="gallery__image"
              src="${preview}"
              data-source="${original}"
              alt="${description}"
            />
          </a>
        </div>`;
    })
    .join('');
}
refs.gallery.insertAdjacentHTML('beforeend', galleryMarkup);

const onGalleryClick = event => {
  event.preventDefault();
  const instance = basicLightbox.create(`
<img src='${event.target.dataset.source}'>`);
  instance.show();
};
refs.gallery.addEventListener('click', onGalleryClick);
