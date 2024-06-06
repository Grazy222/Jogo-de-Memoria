//função para ablitar o botão 
const input = document.querySelector('.login__input');
const button = document.querySelector(".login__button");
const form = document.querySelector('.login__form'); // trazendo o formulario

const validateInput = ({ target }) => { // pegando o valor de 3 digitos
    if (target.value.length > 3){ // tamanho da escrita, se tiver maior que dois
        button.removeAttribute('disabled');  // removendo o atributo colocadono butão
        return;
    }

    button.setAttribute('disabled', ''); //desabilitando o atributo
}

const handleSubmit = (event) => {// criando a função enviar
    event.preventDefault(); // previnir carregamento, bloqueio padrão de carregamento. Aquela parte que recarrega a pagina  

    localStorage.setItem('player', input.value); //salvando uma chave player ,quando escreve no input  
    window.location = '/pages/game.html'; // criando uma direcionamento para outra pagina
}

input.addEventListener('input', validateInput);// sempre que digitar no botão
form.addEventListener('submit', handleSubmit);//salvando a informação digitada e direcionando para o jogo
















// const cardsArray = [
//     { id: 1, audio: 'audio1.mp3' },
//     { id: 2, audio: 'audio2.mp3' },
//     { id: 3, audio: 'audio3.mp3' },
//     { id: 4, audio: 'audio4.mp3' },
//     { id: 5, audio: 'audio5.mp3' },
//     { id: 6, audio: 'audio6.mp3' },
//     { id: 7, audio: 'audio7.mp3' },
//     { id: 8, audio: 'audio8.mp3' },
//     { id: 9, audio: 'audio9.mp3' },
//     { id: 10, audio: 'audio10.mp3' },
//     { id: 11, audio: 'audio11.mp3' },
//     { id: 12, audio: 'audio12.mp3' }
// ];

// let gameBoard = document.getElementById('gameBoard');
// let shuffledCards = shuffle([...cardsArray, ...cardsArray]); // Duplicar e embaralhar
// let firstCard = null;
// let secondCard = null;
// let lockBoard = false;
// let matchedPairs = 0;

// shuffledCards.forEach(card => {
//     let cardElement = document.createElement('div');
//     cardElement.classList.add('card');
//     cardElement.dataset.id = card.id;
//     cardElement.dataset.audio = card.audio;
//     cardElement.addEventListener('click', flipCard);
//     gameBoard.appendChild(cardElement);
// });

// function flipCard() {
//     if (lockBoard) return;
//     if (this === firstCard) return;

//     this.classList.add('flipped');
//     playAudio(this.dataset.audio);

//     if (!firstCard) {
//         firstCard = this;
//         return;
//     }

//     secondCard = this;
//     lockBoard = true;

//     checkForMatch();
// }

// function checkForMatch() {
//     if (firstCard.dataset.id === secondCard.dataset.id) {
//         disableCards();
//         matchedPairs++;
//         if (matchedPairs === cardsArray.length) {
//             setTimeout(() => alert('Você venceu!'), 500);
//         }
//     } else {
//         unflipCards();
//     }
// }
// function disableCards() {
//     stopAudio();
//     firstCard.removeEventListener('click', flipCard);
//     secondCard.removeEventListener('click', flipCard);
//     firstCard.classList.add('matched');
//     secondCard.classList.add('matched');
//     resetBoard();
// }

// function unflipCards() {
//     stopAudio();
//     setTimeout(() => {
//         firstCard.classList.remove('flipped');
//         secondCard.classList.remove('flipped');
//         resetBoard();
//     }, 1000);
// }

// function resetBoard() {
//     [firstCard, secondCard] = [null, null];
//     lockBoard = false;
// }

// function playAudio(audio) {
//     stopAudio();
//     let audioElement = new Audio(`audio/${audio}`);
//     audioElement.play();
// }

// function stopAudio() {
//     let audios = document.querySelectorAll('audio');
//     audios.forEach(audio => audio.pause());
// }

// function shuffle(array) {
//     for (let i = array.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [array[i], array[j]] = [array[j], array[i]];
//     }
//     return array;
// }