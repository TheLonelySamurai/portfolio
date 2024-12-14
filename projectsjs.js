// Selecting the main projects page and project sections
const projectsPage = document.querySelector('.projects-page');
const projectSections = document.querySelectorAll('.project-page-source');

// Function to handle hover effect for different project sections
function handleHover(element) {
    // Add styles to expand the page height
    window.scroll(0, 1100);
    projectsPage.style.minHeight = "150vh";

    // Loop through all project sections and apply styling
    projectSections.forEach(section => {
        // Reset each section's display to block by default
        section.style.display = "flex";
        section.style.minHeight = ""; // Remove any previous height restrictions
        section.style.borderRadius = ""; // Reset corner rounding
    });

    // Apply styling specific to the hovered element
    if (element) {
        element.style.width = "100%";
        element.style.minHeight = "150vh"; // Taller section
        element.style.borderRadius = "200px"; // Significant rounding
        // Hide all sections except the hovered section
        projectSections.forEach(section => {
            if (!section.contains(element)) {
                section.style.display = "none"; // Hide sections other than the hovered one
            }
        });
    }
}

// Add event listeners for hover interactions
document.querySelectorAll('.project-page-source').forEach(project => {
    project.addEventListener('mouseenter', () => {
        handleHover(project);
    });

    project.addEventListener('mouseleave', () => {
        window.scroll(0, 1100);
        // Reset the styling when the hover ends
        projectsPage.style.minHeight = "";
        projectSections.forEach(section => {
            section.style.display = "";
            section.style.minHeight = "";
            section.style.borderRadius = "";
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const projectSections = document.querySelectorAll('.project-page-source');

    projectSections.forEach(section => {
        const innerContent = section.querySelector('.innercontent');
        const image = section.querySelector('img');
        
        // When hovering over the project section
        section.addEventListener('mouseenter', function() {
            // Apply height, width, and border-radius changes to innercontent
            if (innerContent) {
                innerContent.style.transition = 'all 7s ease'; // Smooth transition for all properties
                innerContent.style.height = '100%'; // Allow height to expand based on content
                innerContent.style.opacity = 1; // Make innercontent visible
            }
            if (image) {
                image.style.opacity = 0; // Fade out image
            }
        });

        // When leaving the project section
        section.addEventListener('mouseleave', function() {
            // Reset innercontent to default styles
            if (innerContent) {
                innerContent.style.height = '0'; // Hide innercontent
                innerContent.style.opacity = 0; // Make innercontent invisible
            }
            if (image) {
                image.style.opacity = 1; // Fade image back in
            }
        });
    });
});

