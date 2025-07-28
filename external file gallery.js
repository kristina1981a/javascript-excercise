

function upDate(previewPic) {
  // 1) Change the background image of the div with id="image" 
  document.getElementById("image").style.backgroundImage = "url('" + previewPic.src + "')";

  // 2) Change the text of the div with id="image" to the alt text of the preview image
  document.getElementById("image").innerHTML = previewPic.alt;
}
  
function unDo() {
  // 1) Reset the background image to the original URL
  document.getElementById("image").style.backgroundImage = "url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/389177/bacon.jpg')";

  // 2) Reset the text back to the original message
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
}