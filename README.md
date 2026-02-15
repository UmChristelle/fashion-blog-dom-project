Jane's Fashion Blog - DOM Manipulation Project
📌 Overview

A dynamic fashion blog demonstrating Engagement Score functionality and tag-based filtering using JavaScript.

Live Demo: View Site

💖 Engagement Score

Every "Like" button click increases a global engagement score at the top of the page.

Score starts at 0 and increments by 1 for each click.

Turns gold when the score reaches 10.

Implementation Example:

let score = 0;
function updateScore() {
    score += 1;
    scoreValue.innerText = score;
    if(score >= 10) scoreValue.classList.add('gold');
}

likeButtons.forEach(button => {
    button.addEventListener('click', updateScore);
});

🏷️ Tag Filtering

Clicking a tag filters blog posts to only show those matching the tag.

The blog heading updates dynamically based on the selected tag.

Implemented using forEach() on both tags and posts.

Implementation Example:

tags.forEach(tag => {
    tag.addEventListener('click', function() {
        const tagName = this.getAttribute('data-tag');
        blogTitle.innerHTML = `Jane's<br>${tagName.toUpperCase()} BLOG`;

        posts.forEach(post => {
            const postTags = post.getAttribute('data-tags');
            if(postTags && postTags.includes(tagName)){
                post.classList.remove('hidden');
            } else {
                post.classList.add('hidden');
            }
        });
    });
});

👤 Author

Christella Umutoni
