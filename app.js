const cards = document.querySelectorAll('.card');

function showPic() {
    this.classList.toggle('selectedCard')
};

cards.forEach(card => card.addEventListener('click', showPic));
