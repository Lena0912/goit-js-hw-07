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
            alt="${description}"
          />
        </a>
      </li>`
      
    )
    .join('');
}

const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.innerHTML = galleryMarkup;



const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,


});

// console.log(SimpleLightbox);
