import { galleryItems } from "./gallery-items.js";
// Change code below this line
const list = document.querySelector(".gallery");
(function () {
  const markup = galleryItems.map(
    ({ description, original, preview }) => `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
    </a>
  </li>`
  );
  list.insertAdjacentHTML("beforeend", markup.join(""));
})();

list.addEventListener("click", onClick);

function onClick(evt) {
  evt.preventDefault();
  const isImageItem = evt.target.classList.contains("gallery__image");
  if (!isImageItem) {
    return;
  }
  const lagreImg = evt.target.dataset.source;
  const instance = basicLightbox.create(
    `
 <img class="gallery__image" src="${lagreImg}"  alt="${galleryItems.description}" />`,

    {
      onShow: () => {
        window.addEventListener("keydown", onPressEsc);
      },

      onClose: () => {
        window.removeEventListener("keydown", onPressEsc);
      },
    }
  );
  instance.show();

  function onPressEsc(evt) {
    console.log(evt);
    const keyEscCode = "Escape";
    const isKeyEsc = evt.code === keyEscCode;
    if (!isKeyEsc) {
      return;
    }
    instance.close();
  }
}
