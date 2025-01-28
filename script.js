let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");


let turn0 = true;  //Player 0 and Player X;
let count = 0;  

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () => {
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

const gameDraw = () => {
    msg.innerText = `Game was a draw.`;
    msgContainer.classList.remove("hide");
    disableBoxes();
};


boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turn0) { 
            //player0
         box.innerHTML = "0";
         turn0 = false;
        } else{
            // Player X
            box.innerHTML = "X";
            turn0 = true;  
        }
        box.disabled = true;
        count++;

         let isWinner = checkWinner();

         if(count === 9 && !isWinner){
            gameDraw();
         }
        });
});

const disableBoxes = () => {
    for(let box of boxes) {
        box.disable = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes){
        box.disable = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

