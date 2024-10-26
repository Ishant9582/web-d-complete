const test = document.getElementById("test");
test.addEventListener(
  "mouseleave",
  (event) => {
    // highlight the mouseleave target
    event.target.style.color = "purple";

    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 1000);
  },
  false,
);
// Briefly make an <li> orange when the mouse moves off of it
test.addEventListener(
  "mouseout",
  (event) => {
    // highlight the mouseout target
    event.target.style.color = "orange";
    // reset the color after a short delay
    setTimeout(() => {
      event.target.style.color = "";
    }, 500);
  },
  false,
);

