import { galleryItems } from "./gallery-items.js";

const galleryEl = document.querySelector(".gallery");
function imgContain(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
      <li>
        <a class="gallery__item" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
    })
    .join("");
}
galleryEl.insertAdjacentHTML("beforeend", imgContain(galleryItems));
new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
