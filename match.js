const main = document.getElementById("main")

const values = [
    "🍇",
    "🍇",
    "🍎",
    "🍎",
    "🍓",
    "🍓",
    "🍉",
    "🍉",
    "🥥",
    "🥥",
    "🫐",
    "🫐",
    "🍒",
    "🍒",
    "🥚",
    "🥚"
]

let firstSelect = null;
let secondSelect = null;
let lockboard = false

const card = document.createElement("div")
card.className = "card"
card.id = "card"
function shuffleCards(cards) {
    let currentIndex = cards.length;
    let randomIndex;
    let temporaryValue;
    for (let i = currentIndex; i>0; i--) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = cards[currentIndex];
      cards[currentIndex] = cards[randomIndex];
      cards[randomIndex] = temporaryValue;
    }
    return cards
}
console.log(shuffleCards(values))

let count = 0;
values.forEach((element) =>{
    const card = document.createElement("div")
    card.classList.add("hidden")
    card.setAttribute("id", "card")
    card.value = element;
    card.innerHTML = "<span>"+element+"<span/>"
    card.addEventListener('click', flipcard)
    main.appendChild(card)

})
    
function flipcard(){
    card.setAttribute("class", "card")
}
