document.addEventListener("DOMContentLoaded", () => {

  document.querySelectorAll(".skill-bar div").forEach(bar => {
    bar.style.width = bar.dataset.skill + "%";
  });


  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      document.getElementById("formMessage").textContent =
        "Message sent successfully!";
    });
  }

});

function openModal(id) {
  const title = document.getElementById("modalTitle");
  const text = document.getElementById("modalText");
  const modal = document.getElementById("modal");
const image = document.getElementById("modalImage");

image.style.display = "block";


  if (id === 1) {
    title.textContent = "Portfolio Website";
 image.src = "portfolio.jpg";
    text.textContent =
      "I designed and developed an interactive and visually attractive personal portfolio website using HTML, CSS animations, and JavaScript. The website showcases my skills, projects, and achievements in a professional manner while maintaining a modern design aesthetic. CSS animations and visual effects were used to enhance the overall user experience, while JavaScript was implemented to add interactivity such as animated skill bars and form validation. The portfolio is fully responsive, ensuring compatibility across desktop, tablet, and mobile devices.";
  }

  if (id === 2) {
    title.textContent = "Movie Gallery";
 image.src = "movie.jpg";
    text.textContent =
      "I designed and developed an interactive movie gallery using HTML, CSS Grid, hover animations, and JavaScript. The gallery layout dynamically adapts to different screen sizes using CSS Grid, making it responsive and visually structured. Hover effects were applied to enhance user interaction and provide additional information about each movie. JavaScript was used to improve interactivity and user engagement, resulting in a smooth and modern browsing experience for users exploring the movie collection.";
  }

  if (id === 3) {
    title.textContent = "Student Behavior Analyzer";
image.src = "Research.jpg";
    text.textContent =
      "I conducted a research study to analyze how student behavior affects academic performance using statistical and scientific methods. The study involved applying techniques such as ANOVA, T-tests, and Spearman correlation to examine relationships between various behavioral factors and academic results. Data analysis was performed systematically to identify meaningful patterns and trends. This project enhanced my analytical thinking, research skills, and understanding of how data-driven approaches can be used to draw valid conclusions in real-world academic scenarios.";
  }

  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

