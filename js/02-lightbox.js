import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
(function () {
  const markup = galleryItems.map(
    ({ description, original, preview }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  </li>`
  );
  list.insertAdjacentHTML("beforeend", markup.join(""));
})();

var lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
