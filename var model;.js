var model;
mobilenet.load().then(function(loadedModel) {
    model = loadedModel;
});

// later, when you want to classify an image
var image = document.getElementById('image');
model.classify(image).then(function(predictions) {
  console.log(predictions);
});