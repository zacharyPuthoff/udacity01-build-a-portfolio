# Build A Portfolio Site

This is my first Udacity project for the Front End Developer Nanodegree

I worked up to a much better understanding of a lot of the fundamentals of front end development through this section of the FEND. Html and css seem capable of a mountain of styles -- I'm enjoying exploring it a bit.

I also stumbled upon the world of image optimization, LQIP, svg's, Inkscape, and all of that. I'm very interested in this subject and plan on diving into it further. I was able to create a pretty nice image transition effect with just a bit of basic javascript. This was something that I had to search around for quite a bit, so I'll go over it here. 

## Low Quality Image Placeholders

The first thing I want to talk about is why you would use low quality images and transitions at all to begin with. The idea is simple -- use a low quality image on the initial page load to shorten the load time and allow the user to start browsing the page as soon as possible. This concept is often referred to as using a Low Quality Image Placeholder (LQIP). Then, once the page is fully loaded, transition those low quality images to higher resolution images. 

For creating a LQIP from your full resolution image, there's a few ways to go. A simple silhouette can be created via potrace on GIMP and most other image manipulation software. Another novel way to get an artistic and abstract LQIP from your image is [Primitive](https://github.com/fogleman/primitive) by Michael Fogleman. He explains how it works:

> A target image is provided as input. The algorithm tries to find the single most optimal shape that can be drawn to minimize the error between the target image and the drawn image. It repeats this process, adding one shape at a time. Around 50 to 200 shapes are needed to reach a result that is recognizable yet artistic and abstract.

The results are almost always impressive, and you can vary the number of shapes used, and then transition from a low shape number image to high shape number image. Very cool effect. But, whichever technique you use, saving the LQIP file as a svg can turn a 2MB jpg in to a 10KB svg that is scalable and looks great. Quite a difference, especially if your site has a large number of images.

## Implementing a Transition

For the smaller images in this project, I used svg silhouettes created via potrace, the full resolution jpgs, and a bit of javascript for a LQIP "fade in" technique. I called my javascript function at the "onload" event by adding the call to the body tag in the HTML: 

```
  <body onload="imageUpRes();">
```

In the script that is called, I set the `transition` and `opacity` style attributes of my initial svg image, and nest it in a for-loop to iterate through all of the images I want to apply the transition to. This will start fading out the svg's I initially loaded:

```
  for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("project-imgs")[i].style.transition = "opacity 2s ease";
    document.getElementsByClassName("project-imgs")[i].style.opacity = "0";
  }
```
Next, after 1 second has passed, the image is halfway faded out. At that point, I set a new img src and immediately begin to fade in the new image:

```
  for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("project-imgs")[i].style.transition = "opacity 1s ease";
    document.getElementsByClassName("project-imgs")[i].style.opacity = "1";
  }
  document.getElementById("project-01-img").src = "img/image01.jpg";
  document.getElementById("project-02-img").src = "img/image02.jpg";
  document.getElementById("project-03-img").src = "img/image03.jpg";  
```
Now, the last questions is how I started the "fade in" code at exactly 1 second after the "fade out" code began. I simply used the [`setTimeout()`](https://www.w3schools.com/jsref/met_win_settimeout.asp) function built into javascript. The final code looks as follows:

```
  for (var i = 0; i < 3; i++) {
    document.getElementsByClassName("project-imgs")[i].style.transition = "opacity 2s ease"; 
    document.getElementsByClassName("project-imgs")[i].style.opacity = "0";
  }
  
  setTimeout(function() {
    for (var i = 0; i < 3; i++) {
      document.getElementsByClassName("project-imgs")[i].style.transition = "opacity 1s ease";
      document.getElementsByClassName("project-imgs")[i].style.opacity = "1";
    }
  document.getElementById("project-01-img").src = "img/image01.jpg";
  document.getElementById("project-02-img").src = "img/image02.jpg";
  document.getElementById("project-03-img").src = "img/image03.jpg"; 
  }, 1000);
```

The effect is pretty nice for a simple, short implementation. 
