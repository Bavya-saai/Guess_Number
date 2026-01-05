var number=document.getElementById("num")
var result=document.getElementById("result")
var chance=document.getElementById("chance")
var score=document.getElementById("score")
var total_chance=10
var total_score=0
var randomNumber=Math.floor(Math.random()*10)+1
function check(){
    enterdedNum=number.value
    if(enterdedNum>=10){
        alert("invalid number")
    }
    else if(randomNumber==enterdedNum){
        console.log("RIGHT");
        result.textContent="RIGHT"
        alert("you won")
        total_score=total_score+1
        score.textContent="SCORE: "+ total_score
    }
    else{
        total_chance=total_chance-1
        chance.textContent="CHANCE: "+ total_chance
        result.textContent="WRONG"

        if(total_chance==0){
            alert("your game is over , this page is refresh automatically")
            location.reload()
        }
    }
}