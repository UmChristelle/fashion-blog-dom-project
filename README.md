Jane's Fashion Blog - DOM Manipulation Project
📌 Project Overview
A dynamic fashion blog website demonstrating DOM manipulation, event handling, and interactive JavaScript functionality. This project implements complex user-driven features including real-time search, engagement scoring, tag-based filtering, and smooth navigation.
🎯 Live Demo
View Live Site (Add your deployed link here)
✨ Key Features
A. Dynamic Search & Navigation
Real-time Search Filtering:

Users can type in the search bar to filter blog posts instantly
Uses querySelector to grab the input element
Uses innerText.includes() to match search terms with post content
Posts are shown/hidden dynamically without page reload

Implementation:
javascriptconst searchBar = document.querySelector('#searchBar');
searchBar.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    posts.forEach(post => {
        const postText = post.innerText.toLowerCase();
        if (postText.includes(searchTerm)) {
            post.classList.remove('hidden');
        } else {
            post.classList.add('hidden');
        }
    });
});
B. Engagement Score System
Global Score Counter:

Every "Like" button click increases a global engagement score displayed at the top
Score starts at 0 and increments by 1 with each like
Color Change Logic: Score turns gold when it reaches 10 or more

Implementation:
javascriptlet score = 0; // Global variable

function updateScore() {
    score += 1;
    scoreValue.innerText = score;
    
    // Change color to gold at 10
    if (score >= 10) {
        scoreValue.classList.add('gold');
    }
}

// Attach event listeners using forEach
likeButtons.forEach(button => {
    button.addEventListener('click', updateScore);
});
C. Tag Cloud Filtering
Contextual Display:

Clicking any tag (e.g., "Hats", "Jeans", "Fashion") filters the blog posts
Blog heading dynamically updates to show the selected tag
Only posts matching the clicked tag are displayed

Implementation using forEach:
javascripttags.forEach(tag => {
    tag.addEventListener('click', function() {
        const tagName = this.getAttribute('data-tag');
        
        // Update blog heading
        blogTitle.innerHTML = `Jane's<br>${tagName.toUpperCase()} BLOG`;
        
        // Filter posts using forEach
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
D. Back to Top Button
Smart Visibility:

Button only appears after user scrolls down 200px
Smoothly scrolls back to top when clicked
Uses classList.toggle() and scroll event listener

Implementation:
javascriptwindow.addEventListener('scroll', function() {
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
🛠️ Technologies Used

HTML5 - Semantic markup (<article>, <nav>, <aside>)
CSS3 - Grid layout, Flexbox, responsive design
JavaScript (ES6) - DOM manipulation, event handling
Git & GitHub - Version control and collaboration

📂 Project Structure
fashion-blog-dom-project/
│
├── index.html          # Main HTML structure
├── style.css           # Styling and layout
├── script.js           # All JavaScript logic
├── README.md           # Project documentation
│
└── Assets/
    ├── Images/         # Blog images
    └── Icons/          # Social media and UI icons
🚀 Getting Started
Installation

Clone the repository:

bash   git clone https://github.com/YOUR-USERNAME/fashion-blog-dom-project.git

Navigate to project directory:

bash   cd fashion-blog-dom-project

Open in browser:

Simply open index.html in your web browser
Or use Live Server extension in VS Code



Usage

Search Posts: Type keywords in the search bar to filter blog content
Like Posts: Click the "Like" button to increase engagement score
Filter by Tags: Click any tag in the sidebar to view related posts
Scroll to Top: Scroll down, then click "↑ To the top" button

💻 Professional Code Standards
✅ Clean Code Principles Applied:

No Inline Events: All JavaScript uses addEventListener() - no onclick="" in HTML
Proper Variable Scope:

const for DOM elements that don't change
let for values that update (like score)


Semantic HTML: Uses <article>, <nav>, <section>, <aside> for clear structure
100% Offline Functionality: All assets and logic are local

Code Organization:
javascript// Clear sections with comments
// A. Search Logic
// B. Score Logic  
// C. Tag Filtering
// D. Back to Top
📊 DOM Manipulation Techniques Used
TechniquePurposeExamplequerySelector()Select single elementdocument.querySelector('#searchBar')querySelectorAll()Select multiple elementsdocument.querySelectorAll('.post')addEventListener()Attach event handlersbutton.addEventListener('click', fn)forEach()Loop through NodeListstags.forEach(tag => {...})classList.add/remove()Toggle CSS classespost.classList.add('hidden')innerTextRead/update text contentscoreValue.innerText = scoregetAttribute()Get data attributespost.getAttribute('data-tags')
🎨 Features Breakdown
forEach Loop Usage:
The project extensively uses forEach() to:

Attach event listeners to multiple Like buttons
Filter posts when tags are clicked
Search through posts in real-time

Example:
javascriptposts.forEach(post => {
    const postTags = post.getAttribute('data-tags');
    // Logic to show/hide based on tag match
});
Engagement Score Logic:

Variable: let score = 0; (global scope)
Function: updateScore() increments and updates DOM
Conditional: if (score >= 10) triggers gold color
Event: Each like button click calls updateScore()

📱 Responsive Design

Mobile-friendly layout using CSS Grid
Breakpoints at 992px and 600px
Touch-friendly buttons and interactive elements

🔄 Git Workflow
This project follows best practices with meaningful commits:
✅ Initial commit with HTML structure
✅ Added CSS styling and layout
✅ Implemented engagement score logic
✅ Added tag filtering functionality  
✅ Implemented real-time search
✅ Added back to top button
✅ Final cleanup and documentation
📝 Assignment Requirements Met
RequirementStatusImplementationDynamic Search✅Real-time filtering using includes()Engagement Score✅Global score variable with gold color at 10Tag Filtering✅forEach loop on tags and postsBack to Top✅Shows after 200px scrollClean Code✅No inline events, proper variable scopeSemantic HTML✅<article>, <nav>, proper structureGitHub Commits✅5+ meaningful commitsOffline Functionality✅All assets local
🎓 Learning Outcomes
Through this project, I gained proficiency in:

Selecting and manipulating DOM elements
Event-driven programming patterns
Managing global state (score variable)
Using forEach() for iteration and event attachment
Conditional logic for dynamic UI changes
Clean code organization and best practices

🤝 Contributing
This is a student project, but feedback is welcome! Feel free to:

Fork the repository
Create a feature branch
Submit a pull request

📄 License
This project is created for educational purposes as part of a DOM manipulation assignment.
👤 Author
Your Name

GitHub: @YOUR-USERNAME
Email: your.email@example.com

🙏 Acknowledgments

Assignment provided by [Your Institution]
Design inspiration from W3.CSS templates
Icons and images from various free resources


Note: This project demonstrates core JavaScript DOM manipulation skills including event handling, dynamic filtering, and state management - all fundamental concepts for modern web development.