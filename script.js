//your JS code here. If required.
// Get DOM elements
const searchContainer = document.getElementById("search-container");
const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

// Add click event to button
searchBtn.addEventListener("click", () => {
    // Add 'active' class to search container
    searchContainer.classList.toggle("active");

    // Focus the input field when button is clicked
    if (searchContainer.classList.contains("active")) {
        searchInput.focus();
    } else {
        searchInput.blur();
    }
});

// Optional: Hide active search if clicked outside
document.addEventListener("click", (e) => {
    if (!searchContainer.contains(e.target) && e.target !== searchBtn) {
        searchContainer.classList.remove("active");
        searchInput.blur();
    }
});
