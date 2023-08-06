import { galleryItems } from './gallery-items.js';
// Change code below this line
function createGalleryItemsMarkup(items) {
  return items
    .map(
      ({ preview, original, description }) => `
<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`
      
    )
    .join('');
}
const galleryList = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryList.innerHTML = galleryMarkup;

let activeInstance = null;

galleryList.addEventListener('click', handleGalleryItemClick);
function handleGalleryItemClick(event) {
  event.preventDefault();
  const clickedImage = event.target.closest('.gallery__image');
  if (!clickedImage) {
    return;
  }
  const largeImageURL = clickedImage.dataset.source;
  const instance = basicLightbox.create(`<img src="${largeImageURL}" alt="Image" />`);

  if (activeInstance) {
    activeInstance.close();
  }
    activeInstance = instance;

  instance.show();
  document.addEventListener('keydown', handleEscapeKeyPress);

}
function handleEscapeKeyPress(event) {
  if (event.key === 'Escape' && activeInstance) {
    activeInstance.close();
    activeInstance = null; 
  }
}

// console.log(galleryItems);
