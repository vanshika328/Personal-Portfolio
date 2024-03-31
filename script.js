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
  handleDownloadButtonClick("Vanshika.CV (8).pdf");
});

document.getElementById("featureddownloadButton").addEventListener("click", function() {
  handleDownloadButtonClick("Vanshika.CV (8).pdf");
});

document.getElementById("aboutCVButton").addEventListener("click", function() {
  handleDownloadButtonClick("Vanshika.CV (8).pdf");
});


// Hire Me button functionality
document.getElementById("hireMeButton").addEventListener("click", function() {
  window.location.href = "mailto:your.email@example.com";
});


// Function to detect screenshot attempt
function detectScreenshot() {
  // Listen for screenshot events
  document.addEventListener('cut', screenshotDetected);
  document.addEventListener('copy', screenshotDetected);
  document.addEventListener('paste', screenshotDetected);
}

let lastTime = 0;
let lastDelta = 0;

// Function to detect screenshot attempt on mobile devices
function detectScreenshotMobile(event) {
    let currentTime = new Date().getTime();
    let timeDiff = currentTime - lastTime;
    
    if (timeDiff < 100) {
        let delta = Math.abs(event.rotationRate.alpha + event.rotationRate.beta + event.rotationRate.gamma - lastDelta);
        if (delta > 15) {
            // Show alert message
            alert("Screenshots are not allowed on this website!");
        }
    }

    lastTime = currentTime;
    lastDelta = event.rotationRate.alpha + event.rotationRate.beta + event.rotationRate.gamma;
}

// Function to detect screenshot attempt on desktops/laptops
function detectScreenshotDesktop(event) {
    // Show alert message
    alert("Screenshots are not allowed on this website!");
}

// Function to detect screenshot attempt
function detectScreenshot() {
    if ('ondevicemotion' in window) {
        // Listen for devicemotion events on mobile devices
        window.addEventListener('devicemotion', detectScreenshotMobile);
    } else {
        // Listen for keyup events on desktops/laptops
        document.addEventListener('keyup', detectScreenshotDesktop);
    }
}

// Call the function when the page loads
window.onload = detectScreenshot;
