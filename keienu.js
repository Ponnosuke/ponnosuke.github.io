
function changeBackgroundImage(){
    const images = ["VRC1.png", "VRC2.png", "VRC3.png"];
    const index = Math.floor(Math.random() * (images.length));
    document.querySelector("body").style.backgroundImage = `url(./assets/image/${images[index]})`;
}

document.addEventListener("DOMContentLoaded", changeBackgroundImage);