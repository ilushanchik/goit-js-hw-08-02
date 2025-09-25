const galleryList = document.querySelector(".gallery");
console.log(galleryList)
galleryList.insertAdjacentHTML("afterBegin", images.map(({original, preview, description}) => 
`<li class="gallery-item">
  <a class="gallery-link" href="${original}">
    <img
      class="gallery-image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
      width=400
    />
  </a>
</li>`).join(""))

galleryList.addEventListener("click", (event) => {
    event.preventDefault();
    if(event.target === event.currentTarget) return;

const instance = basicLightbox.create(`
	   <img src="${event.target.dataset.source}" width="800" />`)
instance.show();
const onKeyDown = (e) => {
    if (e.key === "Escape") {
      instance.close();
      window.removeEventListener("keydown", onKeyDown);
    }
  };
  window.addEventListener("keydown", onKeyDown);
});



  


