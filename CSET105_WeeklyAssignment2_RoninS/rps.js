var playerScore = 0;
var computerScore = 0;
var rpsData = {
    "Rock": {'Scissors': 1, 'Rock': 0.5, "Paper": 0},
    "Paper": {'Rock': 1, 'Paper': 0.5, "Scissors": 0},
    "Scissors": {'Paper': 1, 'Scissors': 0.5, "Rock": 0}
} 
function getComputerInput(){
    let option = Math.floor(Math.random()*3 + 1)
    switch(option){
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}
function rock(){
    finishGame("Rock");
}
function paper(){
    finishGame("Paper")
}
function scissors(){
    finishGame("Scissors")
}
function finishGame(playerMove){
    compMove = getComputerInput()
    //get html
    let container = document.body.getElementsByClassName('a2con2')[0];
    let left = container.getElementsByClassName('left')[0];
    let right = container.getElementsByClassName('right')[0];
    let result = document.body.getElementsByClassName('a2-result')[0]
    //Set moves
    left.innerHTML = "You - " + playerMove;
    right.innerHTML = "Computer - " + compMove;
    //Set scrores
    playerScore += rpsData[playerMove][compMove];
    computerScore += rpsData[compMove][playerMove];

    result.innerHTML = "You : " + playerScore + ' | Computer : ' + computerScore
}
