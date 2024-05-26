// Function to toggle responsive class for the navigation menu
function Menu() {
  let menuBtn = document.getElementById("Navigation");
  if (menuBtn.classList.contains("responsive")) {
    menuBtn.classList.remove("responsive");
  } else {
    menuBtn.classList.add("responsive");
  }
}


// Function to add shadow on navigation bar while scrolling
window.addEventListener("scroll", function() {
  let navHeader = document.getElementById("header");
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
});

// Typed.js typing effect
var typingEffect = new Typed(".typedText", {
  strings: ["Developer", "Artist"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
});

// ScrollReveal animations
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});

// Reveal elements
sr.reveal('.featured-text-card, .featured-name, .featured-text-info, .featured-text-btn, .social_icons, .featured-image, .project-box', { interval: 200 });
sr.reveal('.top-header', {});

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
});

srLeft.reveal('.about-info, .contact-info', { delay: 100 });

const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
});

srRight.reveal('.skills-box, .form-control', { delay: 100 });

// Change active link based on scroll position
const sections = document.querySelectorAll('section[id]');
function scrollActive() {
  const scrollY = window.scrollY;
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
window.addEventListener('scroll', scrollActive);
// Function to handle download button click
function handleDownloadButtonClick(cvFileName) {
  let downloadLink = document.createElement("a");
  downloadLink.href = cvFileName;
  downloadLink.setAttribute("download", cvFileName);
  document.body.appendChild(downloadLink);
  downloadLink.click();
  document.body.removeChild(downloadLink);
}

// Add event listeners to the download buttons
document.getElementById("downloadButton").addEventListener("click", function() {
  handleDownloadButtonClick("");
});

document.getElementById("featureddownloadButton").addEventListener("click", function() {
  handleDownloadButtonClick("");
});

document.getElementById("aboutCVButton").addEventListener("click", function() {
  handleDownloadButtonClick("");
});


// Hire Me button functionality
document.getElementById("hireMeButton").addEventListener("click", function() {
  window.location.href = "mailto:your.email@example.com";
});






