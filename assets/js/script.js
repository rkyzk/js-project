
let card1 = document.getElementById("card1");
card1.addEventListener("click", displayImg);

function displayImg () {
  if (card1.innerHTML !== undefined) {
  let cherries = document.createElement("img");
  cherries.src = "../images/cherries.png";
  cherries.alt = "cherries";
  card1.style.backgroundColor = "none";
  card1.appendChild(cherries);
  } else {
    let images = document.getElementsByTagName("img")[0];
    images.remove();
    card1.style.backgroundColor = "rgb(38, 132, 180)";
  }
}


