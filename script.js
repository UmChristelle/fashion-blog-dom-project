let score = 0;

const scoreDisplay = document.getElementById("score");

const likeButtons = document.querySelectorAll(".like-btn");
function updateScore() {
    score++; 
    scoreDisplay.innerText = score; 

    if (score >= 10) {
        scoreDisplay.style.color = "gold";
    }
}

likeButtons.forEach(button => {
    button.addEventListener("click", updateScore);
});
