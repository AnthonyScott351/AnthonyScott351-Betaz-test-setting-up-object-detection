navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    var video = document.getElementById('video');
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
  })
  .catch(function(err) {
    console.log("An error occurred: " + err);
  });
// Get the webcam stream
navigator.mediaDevices.getUserMedia({ video: true })
  .then(function(stream) {
    var video = document.getElementById('webcam');
    video.srcObject = stream;
    video.onloadedmetadata = function(e) {
      video.play();
    };
  })
  .catch(function(err) {
    console.log("An error occurred: " + err);
  });
  // Get the access camera button
var accessCameraButton = document.getElementById('access-camera');







