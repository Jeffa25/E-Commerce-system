document.addEventListener("DOMContentLoaded", function() {
    let slides = document.querySelectorAll(".slides img");
    let index = 0;

    function showSlide() {
        slides.forEach(slide => slide.style.display = "none");
        slides[index].style.display = "block";
        index = (index + 1) % slides.length;
    }

    showSlide();
    setInterval(showSlide, 3000);
});
