// Add imports above this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

const listEl = document.querySelector(".gallery");

function createGalleryMarkup(galleryItems) {
	return galleryItems.reduce((html, {preview, original, description}) => {
	return html + `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
	},"");
};

listEl.innerHTML = createGalleryMarkup(galleryItems);

let gallery = new SimpleLightbox('.gallery a', {
	captionsData: "alt",
	captionPosition: 'bottom',
	captionDelay: 250,
});
