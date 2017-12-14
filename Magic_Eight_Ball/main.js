let userName = '';

userName ? console.log("Hello, "+ userName+ "!")
: console.log("Hello!");

let userQuestion = 'Will I travel to Tibet?';

let randomNumber = Math.floor(Math.random()*8);

let eightBall = '';

switch (randomNumber) {
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'The future is hazy, try again';
    break;
  case 3:
    eightBall = 'It looks possible, try again';
    break;
  case 4:
    eightBall = 'Don\'t count on it';
    break;
  case 5:
    eightBall = 'Signs are not in your favor';
    break;
  case 6:
    eightBall = 'Ask another question';
    break;
  case 7:
    eightball = 'Signs point to yes';
    break;
  }

console.log(userQuestion);
console.log(eightBall);
