const searchInput = document.getElementById("searchInput");
const posts = document.querySelectorAll(".post");
searchInput.addEventListener("input", function() {
    const query = searchInput.value.toLowerCase(); 

    posts.forEach(post => {
        const postText = post.innerText.toLowerCase();

        if (postText.includes(query)) {
            post.style.display = "block"; 
        } else {
            post.style.display = "none"; 
        }
    });
});

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
