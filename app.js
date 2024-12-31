const reset = document.getElementById("reset");
const hourBox = document.getElementById("hours");
const minuteBox = document.getElementById("minutes");
const secondBox = document.getElementById("seconds");
const dayBox = document.getElementById("days");
const modal = document.getElementById("Modal");
const setCountdown = document.getElementById("setCountdown");
const ModalClosing = document.getElementById("modalClosing");
const setDate = document.getElementById("setDate");
const userInput = document.getElementById("userInput");

let countdown;
let end;
let start;


function startCountdown() {
    countdown = setInterval(() => {
        let start = new Date().getTime();
        let timer = (end - start)+1;

        let days = Math.floor(timer / (1000 * 60 * 60 * 24));
        let hours = Math.floor((timer % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((timer % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((timer % (1000 * 60)) / (1000));

        dayBox.textContent = days;
        hourBox.textContent = hours;
        minuteBox.textContent = minutes;
        secondBox.textContent = seconds;
    }, 1000);
}

setDate.onclick = () => {
    end = new Date(userInput.value).getTime(); 
    userInput.value = "";
    modal.style.display = "none";  
    startCountdown(); 
}

function stopCountdown() {
    clearInterval(countdown);
}

reset.addEventListener("click", () => {
    stopCountdown();
    secondBox.textContent = "00";
    dayBox.textContent = "00";
    hourBox.textContent = "00";
    minuteBox.textContent = "00";
})
  
setCountdown.onclick = () => {
    modal.style.display = "flex"; 
}

ModalClosing.onclick = () => {
    modal.style.display = "none";  
}

window.onclick = function(event) {

    if (event.target === modal) {
        modal.style.display = "none";  
    }
}








