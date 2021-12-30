let selectedImage = null;
const imageViewId = "#image-view";

function openImageView() {
  const source = this.event.target.src;
  const alt = this.event.target.alt;
  const imageView = document.querySelector(imageViewId);
  const image = imageView.querySelector("img");

  imageView.style.display = "block";
  image.setAttribute("src", source);
  image.setAttribute("alt", alt);

  disableScroll();
}

function closeImageView() {
  const imageView = document.querySelector(imageViewId);
  imageView.style.display = "none";
  enableScroll();
}

function stopBubbling() {
  this.event.stopPropagation();
}

function enableScroll() {
  const body = document.querySelector("body");
  body.style.overflow = "auto";
}

function disableScroll() {
  const body = document.querySelector("body");
  body.style.overflow = "hidden";
}
