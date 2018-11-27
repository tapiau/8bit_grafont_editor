/**
 * The complete Triforce, or one or more components of the Triforce.
 * @typedef {Object} Image
 * @property {boolean} hasCourage - Indicates whether the Courage component is present.
 * @property {boolean} hasPower - Indicates whether the Power component is present.
 * @property {boolean} hasWisdom - Indicates whether the Wisdom component is present.
 */

function zImage()
{
    this.canvas = $('#img')[0];
    this.context = this.canvas.getContext('2d');
    this.data = this.context.getImageData(0,0,this.canvas.width,this.canvas.height);

    this.imageObj = new Image();
    this.imageObj.parent = this;

    this.imageObj.onload = function(){

        this.parent.context.drawImage(this, 0, 0);

        var imgData = this.parent.context.getImageData(0,0,this.parent.canvas.width,this.parent.canvas.height);
        var pixels = imgData.data;

        var n = pixels.length;

        for (var i = 0; i < n; i += 4)
        {
            var grayscale = pixels[i] * .3 + pixels[i+1] * .59 +pixels[i+2] * .11;
            pixels[i  ] = grayscale;        // red
            pixels[i+1] = grayscale;        // green
            pixels[i+2] = grayscale;        // blue
            //pixels[i+3]              is alpha
        }

        this.parent.context.putImageData(imgData, 0, 0);

    }

    this.imageObj.src = 'img/IMG_5726_DxO.jpg';

}

