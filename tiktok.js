console.log("welcome to tic tac toe")
let music=new Audio("music.mp3")
let turn1 = new Audio("ting.mp3")
let gameover = new Audio("gameover.mp3")
let turn   = "X"
let isgameover = false;
//function to check the turn
 const ChangeTurn = ()=>{
    return turn === "X"?"0":"X"
 }

 //function to check for a win
  const checkwin = ()=>{

  }

  //game logic
  let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', ()=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
            if (!isgameover){
                document.getElementsByClassName("info")[0].innerText  = "Turn for " + turn;
            } 
        }
    })
})