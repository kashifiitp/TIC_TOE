let boxes=document.querySelectorAll(".box");

let resetBtn=document.querySelector("#endGame");
let NewGame=document.querySelector("#end-Game")
let msgcontainer=document.querySelector(".msg-container")
let msg=document.querySelector("#msg")
let  turnO=true
 
const winpattern=[
    [0,1,2] , [0,3,6],
    [0,4,8] ,[1,4,7],
    [2,5,8] ,[2,4,6] ,
    [3,4,5], [6,7,8]
 
];

boxes.forEach((box)=>{
    box.addEventListener("click" ,()=>{
        console.log("box was click");
       if(turnO===true){
        box.innerText=" O";
        turnO=false
       } else{
        box.innerText="X";
         turnO=true
       }
       box.disabled=true

       checkWinner();

        
    } )
})
const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}
const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const Showwinner = (winner) =>{
   msg.innerText=`Congratulatoin , winner is  ${winner}`
   msgcontainer.classList.remove("hide")
   disableBoxes();
}

const  checkWinner=()=>{
    for(pattern of winpattern){
  let posval1=boxes[pattern[0]].innerText;
   let posval2=boxes[pattern[1]] .innerText;
    let posval3=boxes[pattern[2]]. innerText;
 
    if (posval1!="" && posval2!="" && posval3!=""){
        if(posval1===posval2 && posval2===posval3){
           console.log("winner", posval1);
           Showwinner(posval1)
        }
    }
        
    }
}

const Resetgame=()=>{
    turnO=true
    enableBoxes();
    msgcontainer.classList.add("hide")
}

resetBtn.addEventListener("click" , Resetgame);
NewGame.addEventListener("click" , Resetgame);
