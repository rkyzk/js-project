
let card1 = document.getElementById("card1");

card1.addEventListener("click", displayImg);
function displayImg () {
  let newElement = document.createElement("div");
  let html = "<img src='../images/cherries.png' alt='cherries'>";  
  newElement.innerHTML = html;
  card1.appendChild(newElement);
}
