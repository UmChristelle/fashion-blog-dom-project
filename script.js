let score = 0;

// DOM element references using const (elements that don't change)
const searchBar = document.querySelector('#searchBar');
const scoreValue = document.querySelector('#scoreValue');
const backToTopBtn = document.querySelector('#backToTop');
const likeButtons = document.querySelectorAll('.like-btn');
const tags = document.querySelectorAll('.tag');
const posts = document.querySelectorAll('.post');
const blogTitle = document.querySelector('#blogTitle');

// Dynamic Search & Navigation
// Filters blog posts in real-time as user types
searchBar.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    
    // Loop through all posts and show/hide based on search term
    posts.forEach(post => {
        const postText = post.innerText.toLowerCase();
        
        if (postText.includes(searchTerm)) {
            post.classList.remove('hidden');
        } else {
            post.classList.add('hidden');
        }
    });
});

// Engagement Score Logic
// Updates score counter and changes color to gold at 10
function updateScore() {
    score = score + 1;
    scoreValue.innerText = score;
    
    // Change color to gold when score reaches 10
    if (score >= 10) {
        scoreValue.classList.add('gold');
    }
}

// Attach event listeners to all Like buttons
likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Update the global score
        updateScore();
        
        // Change button text to show it's been liked
        if (this.innerText.includes('Like')) {
            this.innerText = '✓ Liked';
        }
    });
});

// Tag Cloud Filtering
// Changes blog heading and filters posts when tag is clicked
tags.forEach(tag => {
    tag.addEventListener('click', function() {
        const tagName = this.getAttribute('data-tag');
        
        // Change the blog title heading to show selected tag
        blogTitle.innerHTML = `Jane's<br>${tagName.toUpperCase()} BLOG`;
        
        // Filter posts to show only those matching the selected tag
        posts.forEach(post => {
            const postTags = post.getAttribute('data-tags');
            
            if (postTags && postTags.includes(tagName)) {
                post.classList.remove('hidden');
            } else {
                post.classList.add('hidden');
            }
        });
    });
});

// Back to Top Button Logic
// Shows button after scrolling down 200px
window.addEventListener('scroll', function() {
    if (window.scrollY > 200) {
        backToTopBtn.classList.remove('hidden');
    } else {
        backToTopBtn.classList.add('hidden');
    }
});

// Back to Top button click handler
// Smoothly scrolls to top of page
backToTopBtn.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});