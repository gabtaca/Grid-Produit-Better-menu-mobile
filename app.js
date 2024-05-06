document.addEventListener("DOMContentLoaded", function() {
    // Get the dropdown menu element
    const menuDropdown = document.getElementById("menuDropdown");

    // Set the initial state to closed
    menuDropdown.style.display = "none";
});

document.addEventListener("DOMContentLoaded", function() {
    const menuDropdown = document.getElementById("menuDropdown");
    const burgerBtn = document.querySelector(".drop__btn-burger");
    const menuVeil = document.getElementById("menuVeil");

    // Function to toggle the dropdown menu and veil
    function toggleMenuDropdown() {
        if (menuDropdown.style.display === "none") {
            menuDropdown.style.display = "block";
            menuVeil.style.display = "block";
        } else {
            menuDropdown.style.display = "none";
            menuVeil.style.display = "none";
        }
    }

    // Event listener for the burger menu button
    burgerBtn.addEventListener("click", function(event) {
        event.stopPropagation(); // Prevent the event from bubbling up to the document
        toggleMenuDropdown();
    });

    // Event listener to close the dropdown menu when clicking outside of it
    document.addEventListener("click", function(event) {
        if (!menuDropdown.contains(event.target) && event.target !== burgerBtn) {
            menuDropdown.style.display = "none";
            menuVeil.style.display = "none";
        }
    });
});