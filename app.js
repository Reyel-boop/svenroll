document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("enrollmentForm");
    const successMessage = document.getElementById("successMessage");

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        // Optionally: you can validate here

        form.classList.add("hidden");
        successMessage.classList.remove("hidden");

        // Simple fade effect
        successMessage.style.opacity = 0;
        setTimeout(() => {
            successMessage.style.transition = "opacity 1s ease";
            successMessage.style.opacity = 1;
        }, 100);
    });
});
