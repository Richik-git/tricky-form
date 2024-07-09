const emailInput = document.querySelector("#email");
const passInput = document.querySelector("#password");
const btnMain = document.querySelector(".btnmain");
const btnLeft = document.querySelector(".btnleft");
const btnRight = document.querySelector(".btnright");
const buttons = document.querySelectorAll("button");


const checkInput = () => {
    if(emailInput.value!="" && passInput.value!="") {
        btnMain.classList.remove("hideMain");
        btnRight.classList.add("hideRight");
        btnLeft.classList.add("hideLeft");
    }
}

if(emailInput.value=="" || passInput.value=="") {
    for(let button of buttons) {
        console.log(button);
        button.addEventListener("mouseover", () => {
            if(button.classList.contains("btnmain")) {
                btnMain.classList.add("hideMain");
                btnRight.classList.remove("hideRight");
                checkInput();
            } 
            else if(button.classList.contains("btnright")) {
                btnRight.classList.add("hideRight");
                btnLeft.classList.remove("hideLeft");
                checkInput();
            } 
            else if(button.classList.contains("btnleft")) {
                btnLeft.classList.add("hideLeft");
                btnMain.classList.remove("hideMain");
                checkInput();
            }
        }
    )}
    
}





