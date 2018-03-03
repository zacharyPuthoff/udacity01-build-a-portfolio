// gonna try a little javascript in conjunction an image processing script
// that I found called "primitive"; it makes low-low-low size svg image
// files out of a jog by using shape ID and placement; the idea is to
// load them first, and then once the page finishes loading, use javascript
// to load up the high resolution, larger size pictures; possibly step
// by step for a cool affect

function imageUpRes() {
  setTimeout(function() {
    document.getElementById("splash-img").src = "img/*02.svg";
  }, 1000);
  setTimeout(function() {
    document.getElementById("splash-img").src = "img/*03.svg";
  }, 1200);
  setTimeout(function() {
    document.getElementById("splash-img").src = "img/*.jpg";
    document.getElementById("project-01-img").src = "img/James Baldwin.jpg";
    document.getElementById("project-02-img").src = "img/RFK.jpg";
    document.getElementById("project-03-img").src = "img/Muhammad Ali.jpg";
  }, 1400);
}
