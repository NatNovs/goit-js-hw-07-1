import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector(".gallery");
const cardsItem = createCardsElement(galleryItems);

galleryList.insertAdjacentHTML("beforeend", cardsItem);

function createCardsElement(gallery) {
    return gallery
    .map(({ preview, original, description }) => {
return `
<div class="gallery__item">
<a class="gallery__link" href="${original}">
<img
    class="gallery_image"
    src="${preview}"
    data-source="${original}"
    alt="${description}"
/>
</a>
</div>`;
    })
    .join("");
}
// console.log(cardsItem);

galleryList.addEventListener("click", onGalleryClick);

function onGalleryClick(event) {
    if (event.target.nodeName !== "IMG") {
        return;
    }

event.preventDefault();

const onCloseModal = (event) => {
    const ESC_KEY = "Escape";

    if (event.code === ESC_KEY) {
        instance.close();
    }
};

const instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}" width="800" height="600">
    `,
    {
        onShow: () => {
        window.addEventListener("keydown", onCloseModal);
    },

    onclose: () => {
        window.removeEventListener("keydown", onCloseModal);
    },
    }
);

    instance.show();
}
console.log(galleryItems);
