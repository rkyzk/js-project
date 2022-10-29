
let card1 = document.getElementById("card1");
card1.addEventListener("click", displayImg);

function displayImg () {
if (card1.childNodes[0] === undefined) {
    let cherries = document.createElement("img");
    cherries.src = "assets/images/cherries.png";
    cherries.alt = "cherries";
    card1.style.backgroundColor = "beige";
    card1.appendChild(cherries);
  } else {
    card1.removeChild(card1.firstElementChild);
    card1.style.backgroundColor = "rgb(38, 132, 180)";
  }  
}  

