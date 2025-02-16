document.addEventListener("DOMContentLoaded", function() {
    const tabs = document.querySelectorAll(".tab-link");
    const contents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", function(event) {
            event.preventDefault();

            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove("active"));
            contents.forEach(c => c.classList.remove("active"));

            // Add active class to clicked tab and corresponding content
            this.classList.add("active");
            document.getElementById(this.dataset.tab).classList.add("active");
        });
    });
});
