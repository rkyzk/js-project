let cardImages = [];

document.addEventListener("DOMContentLoaded", function() {
  cardImages = assignImgToCards();
  let cards = document.getElementsByClassName("cards");   
  for (let card of cards) {
    card.addEventListener("mouseover", changeColor);
    card.addEventListener("mouseout", changeColorBack); 
  }
  let allCards = document.querySelector('#cards-wrapper'); 
  allCards.addEventListener("click", flipCards);
});

/**
 * assign images to the cards.
 */
function assignImgToCards() {
  let images = ["elephant.png", "flamingo.png", "giraffe.png", "lion.png", "savanna-tree.jpg", "zebra.png",
    "elephant.png", "flamingo.png", "giraffe.png", "lion.png", "savanna-tree.jpg", "zebra.png"];
  shuffle(images);
  for (i = 0; i < images.length; i++) {
    cardImages.push(images[i]);
  }
  return cardImages;
}

function shuffle(images) {
  for (let i = 0; i < images.length; i++) {
    let j = Math.floor(Math.random() * images.length);
    [images[i], images[j]] = [images[j], images[i]];
  }
}

function changeColor(event) {
  event.target.style.backgroundColor = "lightslategray";
}

function changeColorBack(event) {
  event.target.style.backgroundColor = "lightsteelblue";
}

/**
 * append an image to the flipped card, disable some eventListeners
 * and call the check function after two cards have been flipped.
 * @param {*} event 
 */
function flipCards(event){
  // append an image to the target card 
  if (event.target.getAttribute('src') === null) { 
    let num = event.target.getAttribute('id').substr(4);
    let image = document.createElement('img');
    image.src = 'assets/images/' + cardImages[num - 1];
    image.alt = cardImages[num - 1].substr(0, cardImages[num -1].length - 4);
    image.style.backgroundColor = "beige";
    event.target.appendChild(image);
    event.target.classList.add('flipped');
  }  
  
  // remove mouseover and mouseout events from the flipped card
  event.target.removeEventListener('mouseover', changeColor); 
  event.target.removeEventListener('mouseout', changeColorBack);  

  // disable eventListener (flipCards) from all cards after two cards have been flipped
  let flipped = document.getElementsByClassName('flipped');   
  if (flipped.length === 2) {
    let allCards = document.querySelector("#cards-wrapper");
    allCards.removeEventListener("click", flipCards);
    // check if the two cards are the same
    check(flipped[0], flipped[1]);
  }  
}

/**
 * check if the two flipped cards are the same
 * and handle them accordingly
 * @param flipped0
 */
function check(flipped0, flipped1) {
  let cards = document.querySelector("#cards-wrapper");  
  // if the two cards are the same, let them disappear after 1 second
  if (flipped0.firstElementChild.getAttribute('src') === 
    flipped1.firstElementChild.getAttribute('src')) {
    setTimeout (function () {
      flipped0.style.visibility = "hidden";
      flipped1.style.visibility = "hidden";
      flipped0.classList.remove('flipped');
      flipped1.classList.remove('flipped');
      // put back the eventListener (flipCards) to the rest of the cards
      cards.addEventListener("click", flipCards);
      // check if it's over and reward
      reward();
    }, 1000);
  } else {
    // if the cards are different, flip them back after 2 seconds.
    setTimeout (function () {
      flipped0.removeChild(flipped0.firstElementChild);
      flipped1.removeChild(flipped1.firstElementChild);
      flipped0.style.backgroundColor = "lightsteelblue";
      flipped1.style.backgroundColor = "lightsteelblue";
      flipped0.classList.remove('flipped');
      flipped1.classList.remove('flipped');
      // let eventListener (flipCards) resume
      cards.addEventListener("click", flipCards);
    }, 2000);
  }
}

/**
 * check if all the cards have disappeared, and if so,
 * display a reward message.
 */
function reward() {    
  let count = 0;
  let cards = document.getElementsByClassName("cards");
  for (let card of cards) {
    if (card.style.visibility === "hidden") {
      count++;
    }
  }
  if (count === 2) {
    let myNode = document.getElementById('cards-wrapper');
    myNode.innerHTML = '';
    let message = document.createElement('h2');
    message.innerHTML = `<em>Well Done!</em>`;
    message.id = "message";
    let graphics = document.createElement('img');
    graphics.src = 'assets/images/savanna-forest.jpg';
    graphics.alt = 'savanna forest';
    myNode.append(message);
    myNode.append(graphics);
  } 
}