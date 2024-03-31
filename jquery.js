$(document).ready(() => {
  let darkMode = false;

  $(".nav-link-mode-change i").click(() => {
    darkMode = !darkMode; // Toggle dark mode

    if (darkMode) {
      // Dark mode activated
      $("body").css("background", "linear-gradient(to right, #000, #000)");
      $("body").css("color", "#fff"); // Change text color to white
      $(".featured-text-box").css("background-color", "#000"); // Change featured text box color to black
      $(".featured-image img").attr(
        "src",
        "https://i.pinimg.com/474x/90/ff/8f/90ff8f556ef67b8dd71c96dea05e5e92.jpg"
      );
      $(".featured-name>p").css("color", "#fff");
      $(" .typedText").css("color", "#fff"); // Change typed text color to white
      $(".social_icons .icon a").css("color", "#fff"); // Change social icons color to white
      $(".input-field").css("background-color", "#fff"); // Change input field background color to white
      $(".input-field, textarea").css("color", "#fff"); // Change input and textarea text color to white
      $(".skills-header > h3").css("color", "#fff"); // Change skills header text color to white
      $(".featured-text-info>p").css("color", "#fff");
    } else {
      // Light mode activated
      $("body").css("background", "var(--body-color)"); // Set background color to the variable defined in CSS
      $("body").css("color", "var(--text-color-second)"); // Set text color to the variable defined in CSS
      $(".featured-text-box").css("background-color", "var(--second-color)"); // Set featured text box color to the variable defined in CSS

      $(".featured-name > p > .typedText").css(
        "color",
        "var(--text-color-second)"
      ); // Set typed text color to the variable defined in CSS
      $(".social_icons .icon a").css("color", "var(--text-color-second)"); // Set social icons color to the variable defined in CSS
      $(".input-field").css("background-color", "var(--third-color)"); // Set input field background color to the variable defined in CSS
      $(".input-field, textarea").css("color", "var(--text-color-second)"); // Set input and textarea text color to the variable defined in CSS
      $(".skills-header > h3").css("color", "var(--text-color-second)"); // Set skills header text color to the variable defined in CSS
      $(".featured-text-info>p").css("color", "var(--text-color-second)"); // Set featured text info color to the variable defined in CSS
    }
  });
});

$(document).ready(function () {
  // Mouse move event
  $(document).mousemove(function (event) {
    $(".cursor").css({
      left: event.pageX,
      top: event.pageY,
    });
  });

  // Mouse enter event
  $(".cursor").mouseenter(function () {
    $(this).css("background-color", "#000");
  });

  // Mouse leave event
  $(".cursor").mouseleave(function () {
    $(this).css("background-color", "pink");
  });
});
$(document).ready(function () {
  $(document).on("keydown", function (e) {
    if (e.ctrlKey && (e.keyCode == 83 || e.keyCode == 85)) {
      // Ctrl + S or Ctrl + U was pressed
      alert(
        "Sorry, taking screenshots or viewing page source is not allowed on this website."
      );
      return false;
    }
  });

  $(document).on("contextmenu", function (e) {
    // Prevent right-click context menu
    e.preventDefault();
    alert("Sorry, right-click context menu is disabled on this website.");
  });
});
$(document).ready(function () {
  $(window).on("touchstart", function (e) {
    if (e.originalEvent.touches.length > 1) {
      // Multiple fingers touch detected, possibly indicating a pinch gesture for screenshot
      alert("Sorry, taking screenshots is not allowed on this website.");
      return false;
    }
  });
});
