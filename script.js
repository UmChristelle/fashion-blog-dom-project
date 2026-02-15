let score = 0;

const searchBar = document.querySelector('#searchBar');
const scoreValue = document.querySelector('#scoreValue');
const backToTopBtn = document.querySelector('#backToTop');
const likeButtons = document.querySelectorAll('.like-btn');
const tags = document.querySelectorAll('.tag');
const posts = document.querySelectorAll('.post');
const blogTitle = document.querySelector('#blogTitle');

if (searchBar && posts.length > 0) {
    searchBar.addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase().trim();

        posts.forEach(function (post) {
            const postText = post.innerText.toLowerCase();

            if (searchTerm === '' || postText.includes(searchTerm)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
}

function updateScore() {
    score = score + 1;
    scoreValue.innerText = score;
    
    if (score >= 10) {
        scoreValue.classList.add('gold');
    }
}

likeButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        updateScore();
        this.innerText = '✓ Liked';
    });
});

tags.forEach(function(tag) {
    tag.addEventListener('click', function() {
        const tagName = this.getAttribute('data-tag');
        
        if (blogTitle) {
            blogTitle.innerHTML = `Jane's<br>${tagName.toUpperCase()} BLOG`;
        }
        
        posts.forEach(function(post) {
            const postTags = post.getAttribute('data-tags');
            if (postTags && postTags.includes(tagName)) {
                post.style.display = 'block';
            } else {
                post.style.display = 'none';
            }
        });
    });
});

if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        if (window.scrollY >= 200) {
            backToTopBtn.classList.remove('hidden');
        } else {
            backToTopBtn.classList.add('hidden');
        }
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}