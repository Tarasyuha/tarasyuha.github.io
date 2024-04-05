document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll(".carousel-item");
    const lines = document.querySelectorAll(".lines div");
    const closeButton = document.querySelector(".close");

    let currentIndex = 0;
    let touchstartX = 0;
    let touchendX = 0;

    // Function to update the carousel display
    function showSlide(index) {
        // Hide all items
        carouselItems.forEach(item => {
            item.style.display = "none";
        });

        // Show the current item
        carouselItems[index].style.display = "block";

        // Update line colors
        lines.forEach(line => {
            line.classList.remove("active");
        });
        lines[index].classList.add("active");

        // Show or hide close button based on the index
        if (index === carouselItems.length - 1) {
            closeButton.style.display = "block";
        } else {
            closeButton.style.display = "none";
        }
    }

    // Initial display
    showSlide(currentIndex);

    // Event listeners for clicking and swiping
    document.addEventListener("click", function(event) {
        // Check if the click target is the close button
        if (event.target.closest('.close')) {
            // If so, do nothing if it's on the last slide
            if (currentIndex === carouselItems.length - 1) {
                return;
            }
        }
        nextSlide();
    });

    document.addEventListener('touchstart', function(event) {
        touchstartX = event.changedTouches[0].screenX;
    }, false);

    document.addEventListener('touchend', function(event) {
        touchendX = event.changedTouches[0].screenX;
        handleGesture();
    }, false);

    function handleGesture() {
        const difference = touchendX - touchstartX;
        const threshold = 50; // Minimum distance to be considered a swipe

        if (Math.abs(difference) >= threshold) {
            if (difference > 0) {
                prevSlide();
            } else {
                nextSlide();
            }
        }
    }

    function nextSlide() {
        // Check if the close button is visible on the last slide
        if (currentIndex === carouselItems.length - 1 && closeButton.style.display === "block") {
            return;
        }
        currentIndex = (currentIndex + 1) % carouselItems.length;
        showSlide(currentIndex);
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
        showSlide(currentIndex);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const closeButton = document.getElementById("closeButton");

    // Event listener for clicks on the close button image
    closeButton.addEventListener("click", function() {
        // Navigate to trivia.html
        window.location.href = "trivia.html";
    });
});
