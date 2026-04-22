AFRAME.registerComponent('videoplayer', {

  init: function () {
let videosource = document.querySelector('#vid1');

let videoplay = () => {
videosource.play();
}

this.el.addEventListener('click', videoplay);

}});

AFRAME.registerComponent('videopauser', {

  init: function () {
let videosource = document.querySelector('#vid1');

let videoplay = () => {
videosource.pause();
}

this.el.addEventListener('click', videopause);

}});// JavaScript Document