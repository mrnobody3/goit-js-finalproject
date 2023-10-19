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
    `,
    {
      onShow: () => {
        document.addEventListener("keydown", onCloseItemByEscape);
      },
      onClose: () => {
        document.removeEventListener("keydown", onCloseItemByEscape);
      },
    }
  );
  instance.show();

  function onCloseItemByEscape(e) {
    if (e.code === "Escape") {
      instance.close();
    }
  }
}
