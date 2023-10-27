import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery');
const cardsMarcup = cardsGallery(galleryItems);

galleryList.insertAdjacentHTML('beforeend', cardsMarcup);

galleryList.addEventListener('click', onGalleryContainerClick);


function cardsGallery (gallery) {
    return galleryItems
    .map((img) => {
return `
<div class="gallery__item">
<a class="gallery__link" href=${img.original}>
    <img
    class="gallery__image"
    src=${img.preview}
    data-source=${img.original}
    alt=${img.description}
    />
</a>
</div>
`;
})
.join('');
}

