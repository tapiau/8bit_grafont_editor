var imageCanvas = $('#img')[0];
var imageContext = imageCanvas.getContext('2d');
var imageData = imageContext.getImageData(0,0,imageCanvas.width,imageCanvas.height);

var imageObj = new Image();

imageObj.onload = function(){

    alert('aaa');
    imageContext.drawImage(imageObj, 0, 0);

    var pixels = imageData.data;

    for (var i = 0, n = pixels.length; i < n; i += 4) {
        var grayscale = pixels[i] * .3 + pixels[i+1] * .59 + pixels[i+2] * .11;
        pixels[i  ] = grayscale;        // red
        pixels[i+1] = grayscale;        // green
        pixels[i+2] = grayscale;        // blue
        //pixels[i+3]              is alpha
    }

    imageContext.putImageData(imgData, 0, 0);
};

imageObj.src = 'img/IMG_5726_DxO.jpg';

var image = {

}