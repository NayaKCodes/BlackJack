let cards = []
let sum = 0
let hasBlackJack =false
let isAlive = false
let message = ""
let playername=""
let money=0
let rounds=0
let messageEl=document.getElementById("p1")
let cardsEl =document.getElementById("p2")
let sumEl =document.querySelector("#p3")
let player = 
{
name : "Yash",
chips : 69
}
let playerEl = document.getElementById("player-el")
playerEl.textContent= player.name + " : $" + player.chips 
function startGame()
{
    playername =prompt("Enter Your Name")
    money =Number(prompt("Enter Amount of Money You Have"))
    rounds =Number(prompt("Enter number of rounds you want to play"))
    playerEl.textContent =  playername +": $" +money + " rounds"+rounds
    hasBlackJack=false
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum= firstCard+ secondCard
    for(let j=1;j<=rounds;j++)
    {
         if(money >=500)
           {
              renderGame()
           }
           else
           {
             messageEl.textContent("Minimum balance must be $500")
             break
           }
    }
}

function reset()
{
    cardsEl.textContent= "Cards :"+ " "
    sumEl.textContent= "Sum :" + " "
}
function getRandomCard()
{
  let x=((Math.floor(Math.random()*13))+1)
  if( x==1)
  {
    return 11
  }
else if(x>10)
{
    return 10
}
else
{
return x
}
}
function renderGame()
{
    cardsEl.textContent= " Cards: "
    for(let i=0; i<cards.length;i++)
    {
        cardsEl.textContent += cards[i] + " "
    }
    if (sum<=20)
    {
        message = "Do you want to draw a new card ? "
        sumEl.textContent= "Sum : " + sum

    }
    else if(sum==21)
    {
        message="WOOHOO! You've got BlackJack! "
        hasBlackJack = true
        sumEl.textContent= "Sum : "+sum
        money+=500;
        playerEl.textContent =  playername +": $" +money
    }
    else if(sum>21)
    {
        message="You're out of the game!"
        sumEl.textContent= "Sum : "+sum
        isAlive = false
        money-=50
        reset()
        playerEl.textContent =  playername +": $" +money
    }
    messageEl.textContent = message
}
function newcard()
{
    if(isAlive==true && hasBlackJack==false)
    {
    let card = getRandomCard()
    sum +=card
    cards.push(card)
    }
    renderGame()
}