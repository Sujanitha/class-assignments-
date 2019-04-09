// Let's revisit Rock Paper Scissors...
//     Define a hands array with the values 'rock', 'paper', and 'scissors';
//     Define a function called getHand() that returns a hand from the array using parseInt(Math.random()*10)%3
//     Define two objects for two players. Each player has name and getHand() properties.
//     Define a function called playRound() that
//         Takes two player objects as arguments
//         Gets hands from each
//         Determines the winner
//         Logs the hands played and name of the winner.
//         If its a tie, log the hands played and "it's a tie".
//         Returns the winner object (null if no winner)
//     Define a function called playGame() that takes arguments player1, player2, and playUntil.
//         Play rounds until one of the players wins playUntil hands
//         When one player has won enough games, return the winning player object
//     Play a game to 5 wins
// !!!!Bonus!!!!!
//     Define a function caled playTournament()
//         Take 4 players and playUntil as arguments
//         Play a game between the first two players, and the second two players
//         Play a game between the winners of the first round.
//         Announce the tournament winner's name "[name] is the world champion";
// Collapse







var hands=['rock','paper','scissors'];
var counter = 0;
function getHand() {
   // console.log("getHand"+counter++)
  return hands[parseInt(Math.random()*10)%3];
}

var playerA={
     name : "A",
     play : undefined
     //play :  hands[parseInt(Math.random()*10)%3]
}

var playerB={
    name : "B",
    play : undefined
    //play :  hands[parseInt(Math.random()*10)%3]
}

//  function playRound(){
//      playerA.play=getHand();
//      playerA.play=getHand();
//      counterA=0;
//      counterB=0;
//      if (playerA.play===playerB.play)
//      return (playerA.play+"it's a tie");
//      else if (playerA.play==="rock"&&playerB.play==="scissors"||
//          playerA.play==="scissors" && playerB.play==="paper"||
//          playerA.play==="paper" && playerB.play==="rock"){
//      console.log("A is winner");
//      counterA++;
//        return 'A' ;}
//      else if (playerB.play==="rock" && playerA.play==="scissors"||
//               playerB.play==="scissors" && playerB.play==="paper"||
//               playerB.play==="paper" && playerA.play==="rock"){
//       console.log ("B is winner");
//       counterB++;
//          return 'B'; }       
// }
 //console.log(playRound());
    //  switch (playerA.play){
    //      case rock: if (playerB.play==="rock")
    //                console.log("rock,it's a tie");
    //                else if (playerB.play==="paper")
    //                console.log("rock,paper,B is winner");
    //                else if (playerB.play==="scissors")
    //                console.log("rock,scissors,A is winner");
     //}
        
 //}
function playRound(){
    playerA.play = getHand()
    playerB.play = getHand()
    console.log (playerA.play + " Vs "+playerB.play);
    if (playerA.play === playerB.play){
        console.log (playerA.play + " it's a tie");
        return 'Tie';
    } else if (playerA.play === "rock" && playerB.play === "paper"){
        console.log(playerA.play + " " + playerB.play + " " + playerB.name + " is winner");
        return 'B';
    } else if (playerA.play === "rock" && playerB.play === "scissors"){
        console.log (playerA.play + " " + playerB.play + " " + playerA.name + " is winner");
        return 'A';
    } else if (playerA.play === "paper" && playerB.play === "rock"){
        console.log(playerA.play + " " + playerB.play + " " + playerA.name + " is winner")
        return 'A';
    } else if (playerA.play === "paper" && playerB.play === "scissors"){
        console.log (playerA.play + " " + playerB.play + " " + playerB.name + " is winner");
        return 'B';
    } else if (playerA.play === "scissors" && playerB.play === "paper"){
        console.log (playerA.play + " " + playerB.play + " " + playerA.name + " is winner");
        return 'A';
    } else if (playerA.play === "scissors" && playerB.play === "rock"){
        console.log (playerA.play + " " + playerB.play + " " + playerB.name + " is winner");
        return 'B';
    }

}
//console.log(playRound(playerA,playerB));


function playGame(_playUntil) {
    counterA =1;
    counterB =1;
    

    while (counterA <= _playUntil && counterB <= _playUntil) {
       
        if (playRound(playerA, playerB) === 'A') {
            
           console.log("A wins "+ counterA++ +"times");

        } else if (playRound(playerA, playerB) === 'B') {
           console.log("B wins "+ counterB++ +"times");
        } 
        
        //  }else {
        //      console.log("Not sure");
        //  }
         
    } 
    
    if (counterA >=_playUntil){
        return "A is the winner";
    } else if(counterB >= _playUntil) {
        return "B is the winner";
    }
}
console.log(playGame(5));