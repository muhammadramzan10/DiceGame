// variables



let player1Turn = true
const  imgArray = ["./dice/1.png", "./dice/2.png", "./dice/3.png", "./dice/4.png", "./dice/5.png", "./dice/6.png"]


// Buttons & Elements
const playersContent = document.getElementById("all-players")
const winnerText = document.getElementById("finaltext")
const closeBtn = document.getElementById("close")
const rulesBtn = document.getElementById("rules")
const modalVisibility = document.getElementById("visible")
const displayMessage = document.getElementById("message")
const rollDice = document.getElementById("roll-btn")
const resetGame = document.getElementById("reset-btn")
const winner = document.getElementById("winner")
const displayScore = document.getElementById("winner-score")


//Scores

let player1Score = 0
let player2Score = 0
const player1ScoreBoard = document.getElementById("player1-score")
const player2ScoreBoard = document.getElementById("player2-score")

//player1Dice
const player1DiceBox1 = document.getElementById("player1-dice-box1")
const player1DiceBox2 = document.getElementById("player1-dice-box2")
const player1DiceBox3 = document.getElementById("player1-dice-box3")
const player1DiceBox4 = document.getElementById("player1-dice-box4")
const player1DiceBox5 = document.getElementById("player1-dice-box5")


//player2Dice
const player2DiceBox1 = document.getElementById("player2-dice-box1")
const player2DiceBox2 = document.getElementById("player2-dice-box2")
const player2DiceBox3 = document.getElementById("player2-dice-box3")
const player2DiceBox4 = document.getElementById("player2-dice-box4")
const player2DiceBox5 = document.getElementById("player2-dice-box5")



// function for random number

function getRandomNumber(){
    return number = Math.floor(Math.random()*6)
}

//Functions for rules POPUP modal

rulesBtn.addEventListener('click', function(){
    modalVisibility.style.display = "block";
})

closeBtn.addEventListener('click', function(){
    modalVisibility.style.display = "none";
})

//Function for Rolling the Dice

rollDice.addEventListener("click", function(){

    if(player1Turn){
        let player1RandomArray = []
        for (let i = 0; i < 5; i++){
            player1RandomArray.push(getRandomNumber())
            player1Score += (player1RandomArray[i] + 1)
        }
        player1DiceBox1.innerHTML = `<img src=${imgArray[player1RandomArray[0]]} alt="">`
        player1DiceBox2.innerHTML = `<img src=${imgArray[player1RandomArray[1]]} alt="">`
        player1DiceBox3.innerHTML = `<img src=${imgArray[player1RandomArray[2]]} alt="">`
        player1DiceBox4.innerHTML = `<img src=${imgArray[player1RandomArray[3]]} alt="">`
        player1DiceBox5.innerHTML = `<img src=${imgArray[player1RandomArray[4]]} alt="">`
        player1DiceBox1.classList.remove("active")
        player1DiceBox2.classList.remove("active")
        player1DiceBox3.classList.remove("active")
        player1DiceBox4.classList.remove("active")
        player1DiceBox5.classList.remove("active")
        player2DiceBox1.classList.add("active")
        player2DiceBox2.classList.add("active")
        player2DiceBox3.classList.add("active")
        player2DiceBox4.classList.add("active")
        player2DiceBox5.classList.add("active")
        displayMessage.textContent = "Player 2 Turn"
        player1ScoreBoard.textContent = player1Score;



    }else{
        let player2RandomArray = []
        for (let i = 0; i < 5; i++){
            player2RandomArray.push(getRandomNumber())
            player2Score += (player2RandomArray[i] + 1)
        }
        player2DiceBox1.innerHTML = `<img src=${imgArray[player2RandomArray[0]]} alt="">`
        player2DiceBox2.innerHTML = `<img src=${imgArray[player2RandomArray[1]]} alt="">`
        player2DiceBox3.innerHTML = `<img src=${imgArray[player2RandomArray[2]]} alt="">`
        player2DiceBox4.innerHTML = `<img src=${imgArray[player2RandomArray[3]]} alt="">`
        player2DiceBox5.innerHTML = `<img src=${imgArray[player2RandomArray[4]]} alt="">`


        player2DiceBox1.classList.remove("active")
        player2DiceBox2.classList.remove("active")
        player2DiceBox3.classList.remove("active")
        player2DiceBox4.classList.remove("active")
        player2DiceBox5.classList.remove("active")
        player1DiceBox1.classList.add("active")
        player1DiceBox2.classList.add("active")
        player1DiceBox3.classList.add("active")
        player1DiceBox4.classList.add("active")
        player1DiceBox5.classList.add("active")   


        displayMessage.textContent = "Player 1 Turn"
        player2ScoreBoard.textContent = player2Score;


    }


    if(player1Score >= 100){
        playersContent.style.display = "none"
        winnerText.style.display = "block"
        rollDice.style.display = "none"
        resetGame.style.display = "block"
        displayMessage.textContent = "Player 1 has won"
        winner.textContent = "Player 1"
        displayScore.textContent = player1Score

    }else if (player2Score >= 100){
        playersContent.style.display = "none"
        winnerText.style.display = "block"
        rollDice.style.display = "none"
        resetGame.style.display = "block"
        displayMessage.textContent = "Player 2 has won"
        winner.textContent = "Player 2"
        displayScore.textContent = player2Score
    }

    player1Turn = !player1Turn
    
})


// Function for Resetting the game

resetGame.addEventListener('click',function(){


    player1Score = 0
    player2Score = 0
    player1Turn = true
    displayMessage.textContent = "Player 1 Turn"
    player1ScoreBoard.textContent = 0;
    player2ScoreBoard.textContent = 0;

 
    // for resetting dice 
    
    player1DiceBox1.innerHTML = `<img src=${imgArray[0]} alt="">`
    player1DiceBox2.innerHTML = `<img src=${imgArray[0]} alt="">`
    player1DiceBox3.innerHTML = `<img src=${imgArray[0]} alt="">`
    player1DiceBox4.innerHTML = `<img src=${imgArray[0]} alt="">`
    player1DiceBox5.innerHTML = `<img src=${imgArray[0]} alt="">`
    player2DiceBox1.innerHTML = `<img src=${imgArray[0]} alt="">`
    player2DiceBox2.innerHTML = `<img src=${imgArray[0]} alt="">`
    player2DiceBox3.innerHTML = `<img src=${imgArray[0]} alt="">`
    player2DiceBox4.innerHTML = `<img src=${imgArray[0]} alt="">`
    player2DiceBox5.innerHTML = `<img src=${imgArray[0]} alt="">`
    

    // for active shadow
    player2DiceBox1.classList.remove("active")
    player2DiceBox2.classList.remove("active")
    player2DiceBox3.classList.remove("active")
    player2DiceBox4.classList.remove("active")
    player2DiceBox5.classList.remove("active")
    player1DiceBox1.classList.add("active")
    player1DiceBox2.classList.add("active")
    player1DiceBox3.classList.add("active")
    player1DiceBox4.classList.add("active")
    player1DiceBox5.classList.add("active")   

    winnerText.style.display = "none"
    resetGame.style.display = "none"
    playersContent.style.display = "flex"
    rollDice.style.display = "block"

})
