document.querySelectorAll(".likeButton").forEach(function(button) {
    button.addEventListener("click", function() {
        const likeIcon = this.querySelector(".likeIcon");
        const path = likeIcon.querySelector("path");

        // Change the fill color on click
        if (path.getAttribute("fill") === "#1D1D1D") {
            path.setAttribute("fill", "#FFCB45"); // Change to red
        } else {
            path.setAttribute("fill", "#1D1D1D"); // Change back to original color
        }
    });
});



