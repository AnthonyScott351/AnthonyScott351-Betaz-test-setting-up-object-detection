accessCameraButton.addEventListener('click', function() {
    navigator.mediaDevices.getUserMedia({ video: true })
      .then(function(stream) {
        var video = document.getElementById('webcam');
        video.srcObject = stream;
        video.onloadedmetadata = function(e) {
          video.play();
          accessCameraButton.style.display = "none";
        };
      })
      .catch(function(err) {
        console.log("An error occurred: " + err);
        accessCameraButton.style.display = "block";
      });
  });
  // Get the access camera button
var accessCameraButton = document.getElementById('access-camera');

// Add an event listener to the button
accessCameraButton.addEventListener('click', function() {
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
});