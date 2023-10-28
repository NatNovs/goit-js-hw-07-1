import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


const galleryList = document.querySelector(".gallery");
const cardsItem = createGalleryCards(galleryItems);

galleryList.insertAdjacentHTML("beforeend", cardsItem);

function createGalleryCards(galleryList) {
    return galleryList
    .map(({ preview, original, description }) => {
return `<li>
<a class="gallery__item" href="${original}">
<img 
    class="gallery__image"
    src="${preview}"
    alt="${description}" 
    />
    </a>
</li>`;
    })
    .join("");
}


let lightbox = new SimpleLightbox(".gallery__item", { 
    captionPosition: "button",
    captionsData: "alt",
    disableRightClick: true,
    captionDelay: 250,
    fadeSpeed: 500,
});

console.log(galleryList);
console.log(lightbox);

