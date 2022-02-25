var comScore = 0;
var comHand = 0;
var playerScore = 0;
var playHand = 0;
var gameDone = false;
var playAgain = "y";
var hos = 0;
var rng = Math.floor(Math.random() * 10) + 1;
var play = prompt(`Welcome to 20! The aim of the game is to get as close to 20 as you can without going over it. Do you want to play 20? Type "y" for yes and type "n" for no.`);
if (play == "y") {
   do {
       alert("The computer will start");
       comHand = 0;
  gameDone = false;
  do {
      rng = Math.floor(Math.random() * 10) + 1;
      comHand = comHand + rng;
      alert(`The computer drew a ${rng}. Its total is ${comHand}`);
  } while (comHand <= 16);
  if (comHand > 20) {
      alert(`The computer busted! It got a ${comHand}. You won this round!`);
      playerScore++;
      gameDone = true;
  } else if (comHand == 20) {
      alert(`The computer won this round!`);
      comScore++;
      gameDone = true;
  }else {
      alert(`The computer stopped at ${comHand}`);
  }
  if (gameDone == false) {
      playHand = 0;
      do {
          hos = prompt(`You have ${playHand}. Do you want to hit or stand? Type "hit" for hit or "stand" for stand.`);
          if (hos == "hit") {
              rng = Math.floor(Math.random() * 10) + 1;
              playHand = playHand + rng;
          } else {
              break;
          }
      } while ((hos == "hit") && (playHand <= 20));
       if (playHand > 20) {
          alert(`You busted! You got a ${playHand}. The computer won this round!`);
          comScore++;
          gameDone = true;
      } else if (playHand == 20) {
       //    alert(`You won this round!`);
          playerScore++;
          gameDone = true;
      }else {
          alert(`You stopped at ${playHand}`);
      }
 
      if ((playHand > comHand) && (playHand < 21) && (gameDone == false)) {
          playerScore++;
          alert(`You won this game!`);
      } else if ((comHand > playHand) && (comHand < 21) && (gameDone == false)) {
          comScore++;
          alert(`The computer won this round!`);
      } else if ((playHand == comHand) && (gameDone == false)){
          alert(`The game is tied!`);
      };
 
      playAgain = prompt(`Would you like to play again? Type "y" for yes or "n" for no.`);
  } else {
      playAgain = prompt(`Would you like to play again? Type "y" for yes or "n" for no.`);
    
  };
   } while(playAgain == "y");
 
   if (comScore > playerScore) {
       alert(`Thanks for playing! The computer won in total with ${comScore} wins. You had ${playerScore} wins`)
   } else if (playerScore > comScore) {
       alert(`Thanks for playing! You won in total with ${playerScore} wins. The computer had ${comScore} wins`)
   } else {
       alert(`Thanks for playing! You and the computer tied with ${playerScore} wins`)
   }
} else if (play == "n") {
   stop();
} else {
   alert(`Not valid answer. Closing program.`)
}
 
 
 

