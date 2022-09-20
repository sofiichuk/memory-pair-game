//=============opening cards=============
const cards = document.querySelectorAll('.card');
function showHiddenPic() {
    this.classList.toggle('selectedCard')
}
cards.forEach(card => card.addEventListener('click', showHiddenPic));

//============comparing cards==============

// (A) FLAG FOR "ALREADY CLICKED".
let booleanFlag = false;
let firstCard, secondCard;

if (!booleanFlag) {
    booleanFlag = true;
    firstCard = this;
}
// (B) FUNCTION - WILL ONLY RUN IF NOT CLICKED
function getTwoCardsToCompare () { if (!booleanFlag) {
    // (B1) SET CLICKED TO TRUE
    booleanFlag = true;

    // (B2) DO YOUR PROCESSING HERE
    alert("Something is done!");

    // (B3) RE-ENABLE AFTER PROCESSING IF YOU WANT
    // booleanFlag = false;
}}

//==================================================================

// firstCard=document.querySelectorAll('.selectedCard');
// const clickedCards = document.querySelectorAll('.card.selectedCard');
// if (clickedCards[0].getAttribute.src === clickedCards[1].getAttribute.src)
//    {console.log('Same!')}
// console.log(clickedCards[0], clickedCards[1])