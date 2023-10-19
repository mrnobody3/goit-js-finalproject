import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");

galleryEl.addEventListener("click", onImgClick);

const markup = galleryItems
  .map(
    ({ preview, original, description }) => `
  <li class="gallery__item">
        <a href="${original}" class="gallery__link">
          <img src="${preview}" alt="${description}" class="gallery__image" data-source="${original}" />
        </a>
      </li>
  `
  )
  .join("");

galleryEl.insertAdjacentHTML("beforeend", markup);

function onImgClick(e) {
  e.preventDefault();
  if (e.currentTarget === e.target) {
    return;
  }

  const instance = basicLightbox.create(
    `
      <img src="${e.target.dataset.source}" width="800" height="600">
    `
  );

  instance.show();

  document.addEventListener("keydown", onCloseItemByEscape);

  function onCloseItemByEscape(e) {
    if (e.code === "Escape") {
      instance.close();
      document.removeEventListener("keydown", onCloseItemByEscape);
    }
  }
}
