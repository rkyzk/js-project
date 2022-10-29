
// let card1 = document.getElementById("card1");
// card1.addEventListener("click", displayImg);

let num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

function shuffle(num) {
  for (let i = 0; i < num.length; i++) {
    let j = Math.floor(Math.random() * num.length);
    [num[i], num[j]] = [num[j], num[i]];
  }
}
console.log(num);
shuffle(num);
console.log(num);

let colors = ["green", "green", "yellow", "yellow", "pink", "pink", "aquamarine",
"aquamarine", "purple", "purple", "orange", "orange"];

let cards = document.getElementsByClassName("cards");
let twoColors = [];

for (i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", function () {
  let cardNum = parseInt(this.getAttribute('id').substr(4));
  console.log(cardNum);
  this.style.backgroundColor = colors[num[cardNum - 1]];
  
  twoColors.push([cardNum, colors[num[cardNum - 1]]]);
  console.log(twoColors);
  if (twoColors.length === 2) {
    if (twoColors[0][1] === twoColors[1][1]) {
        setTimeout (function () {
          cards[twoColors[0][0]].display = hidden;
          cards[twoColors[1][0]].display = hidden;
        }, 1000);
      } else {
      setTimeout (function () {
        cards[twoColors[0][0]].style.backgroundColor = "darkOliveGreen";
        cards[twoColors[1][0]].style.backgroundColor = "darkOliveGreen";
      }, 1000);
  }
  }
  });

}


 


/** 
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
}  */

