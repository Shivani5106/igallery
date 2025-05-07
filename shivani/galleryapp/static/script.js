function showImage(element) {
  var popup = document.getElementById("popup");
  var popupImg = document.getElementById("popup-img");
  popupImg.src = element.src;
  popup.style.display = "flex";
}

function hideImage() {
  document.getElementById("popup").style.display = "none";
}
