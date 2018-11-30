// This uses an idea I read about called Low Quality Image Placeholders (LQIP);
// the concept is to load the page initially with very small svg image files
// and once the page is loaded, then replace the low quality svgs with higher a
// resolution jpg, or whatever the final, larger picture is; this allows the
// user to interact with the page without having to wait for some large images
// to load, but still ultimately gets those images into the site; the function
// is called in the <body> tag after the "onload" event


function imageUpRes() {
  // This section iterates the src of the img, with each successive svg
  // containing a larger number of polygons to approximate the underlying
  // picture; the original jpg was processed with the Primitive protocol written
  // by Michael Fogleman (https://github.com/fogleman/primitive)
  setTimeout(function() {
    document.getElementById("splash-img").src = "img/fencing-polygons-100.svg";
  }, 300);
  setTimeout(function() {
    document.getElementById("splash-img").src = "img/fencing-polygons-200.svg";
  }, 600);
  setTimeout(function() {
    document.getElementById("splash-img").src = "img/fencing-polygons-800.jpg";
  }, 1000);


  // This fades out the initial low-res silhouette create via the potrace
  // protocol; halfway through the fade out, the higher resolution images are
  // faded in, giving a nice affect using just a bit of simple javascript and css
  setTimeout(function() {
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("project-imgs")[i].style.transition = "opacity 2s ease";
      document.getElementsByClassName("project-imgs")[i].style.opacity = "0";
    }
  }, 2000);
  setTimeout(function() {
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("project-imgs")[i].style.transition = "opacity 1s ease";
      document.getElementsByClassName("project-imgs")[i].style.opacity = "1";
    }
    document.getElementById("project-01-img").src = "img/JamesBaldwin.jpg";
    document.getElementById("project-02-img").src = "img/RFK.jpg";
    document.getElementById("project-03-img").src = "img/MuhammadAli.jpg";
  }, 3000);
}
