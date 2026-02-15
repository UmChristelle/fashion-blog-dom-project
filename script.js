let score = 0;

const searchBar = document.querySelector('#searchBar');
const scoreValue = document.querySelector('#scoreValue');
const backToTopBtn = document.querySelector('#backToTop');
const likeButtons = document.querySelectorAll('.like-btn');
const tags = document.querySelectorAll('.tag');
const posts = document.querySelectorAll('.post');
const blogTitle = document.querySelector('#blogTitle');

if (searchBar) {
    searchBar.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        posts.forEach(post => {
            post.classList.toggle('hidden', !post.innerText.toLowerCase().includes(searchTerm));
        });
    });
}

function updateScore() {
    score += 1;
    if (scoreValue) {
        scoreValue.innerText = score;
        if (score >= 10) scoreValue.classList.add('gold');
    }
}

likeButtons.forEach(button => {
    button.addEventListener('click', function() {
        updateScore();
        if (this.innerText.includes('Like')) {
            this.innerText = '✓ Liked';
        }
    });
});

tags.forEach(tag => {
    tag.addEventListener('click', function() {
        const tagName = this.getAttribute('data-tag');
        if (blogTitle) blogTitle.innerHTML = `Jane's<br>${tagName.toUpperCase()} BLOG`;
        posts.forEach(post => {
            const postTags = post.getAttribute('data-tags');
            post.classList.toggle('hidden', !(postTags && postTags.includes(tagName)));
        });
    });
});

if (backToTopBtn) {
    window.addEventListener('scroll', function() {
        backToTopBtn.classList.toggle('hidden', window.scrollY < 200);
    });

    backToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}
