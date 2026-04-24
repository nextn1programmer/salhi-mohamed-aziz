// Smooth scrolling
document.documentElement.style.scrollBehavior = "smooth";

// Project sorting system
const projectsGrid = document.querySelector('.projects-grid');

// Define your projects with ratings
const projectData = [
    { name: "CALCULATOR", rating: 2 },
    // Same rating as Weather App — will sort alphabetically with it
];

// Sort function: by rating (highest first), then alphabetically if tied
function sortProjects() {
    const articles = Array.from(document.querySelectorAll('.projects-grid article'));
    
    // Match articles with their ratings
    const ratedArticles = articles.map(article => {
        const title = article.querySelector('h3').textContent;
        const project = projectData.find(p => p.name === title);
        return {
            element: article,
            name: title,
            rating: project ? project.rating : 0
        };
    });
    
    // Sort: highest rating first, then A-Z if tied
    ratedArticles.sort((a, b) => {
        if (b.rating !== a.rating) {
            return b.rating - a.rating; // Highest rating first
        }
        return a.name.localeCompare(b.name); // Alphabetical if tied
    });
    
    // Reorder in the DOM
    ratedArticles.forEach(item => {
        projectsGrid.appendChild(item.element);
    });
}

// Run on page load
sortProjects();
