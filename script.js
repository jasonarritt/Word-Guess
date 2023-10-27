const message = document.querySelector('.message');
const guess = document.querySelector('input');
const button = document.querySelector('button');
const myArray = ['javascript', 'website', 'html', 'document', 'course'];
let inPlay = false;
let scramble = '';
let scrambled = '';
let score = 0;

button.addEventListener('click', function () {
  console.log('clicked');
  if (!inPlay) {
    inPlay = true;
    score = 0;
    button.innerHTML = 'Guess';
    guess.classList.toggle('hidden');
    scramble = createWord();
    scrambled = randomArray(scramble.split('')).join('');
    message.innerHTML = scrambled + ' ' + scramble;
  } else {
    let tempGuess = guess.value;
    score++;
    if (tempGuess === scramble) {
      // correct
      inPlay = false;
      message.innerHTML = 'Correct. It took ' + score + ' guesses.';
    } else {
      // incorrect
      message.innerHTML = 'Try Again';
    }
  }
});

function createWord() {
  let randomIndex = Math.floor(Math.random() * myArray.length);
  let tempWord = myArray[randomIndex];
  //   let rand = randomArray(tempWord.split(''));
  return tempWord;
}

function randomArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let temp = array[i];
    let j = Math.floor(Math.random() * (i + 1));
    // console.log(temp);
    // console.log(i);
    // console.log(j);
    array[i] = array[j];
    array[i] = array[temp];
  }
  return array;
}
