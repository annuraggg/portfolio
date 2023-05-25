// Select all the sections on the page
const sections = document.querySelectorAll('section');
console.log("SEC TEST")

// Iterate over each section and add an event listener to handle scroll events
sections.forEach((section) => {
  section.addEventListener('wheel', (event) => {
    // Prevent the default scroll behavior
    event.preventDefault();

    // Calculate the distance to scroll based on the height of the viewport
    const scrollDistance = window.innerHeight;

    // Check the scroll direction (up or down)
    const scrollDirection = event.deltaY > 0 ? 1 : -1;

    // Find the index of the current section
    const currentSectionIndex = Array.from(sections).indexOf(section);

    // Calculate the index of the next section to scroll to
    const nextSectionIndex = currentSectionIndex + scrollDirection;

    // Check if the next section exists and scroll to it
    if (sections[nextSectionIndex]) {
      sections[nextSectionIndex].scrollIntoView({
        behavior: 'smooth' // Enable smooth scrolling to the next section
      });
    }
  });
});
