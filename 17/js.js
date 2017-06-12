var canvas = document.getElementById('res');
var image = document.getElementById('img');

canvas.ondragenter = function () {
    canvas.classList.toggle('enter');
};

canvas.ondragleave = function () {
    canvas.classList.toggle('enter');
};

canvas.ondragover = function (e) {
    e.preventDefault();
};

canvas.ondrop = function (e) {
    e.preventDefault();
    var dT = e.dataTransfer;
    var reader = new FileReader();
    reader.onload = function () {
        image.src = this.result;
        image.height = "500";
        image.width = "370";
    };
    reader.readAsDataURL(dT.files[0]);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(image, 0, 0);
    var sepia = function (imageData) {
        var pixels = imageData.data;
        for(var i = 0; i < pixels.length; i+= 4){
            var r = pixels[i];
            var g = pixels[i+1];
            var b = pixels[i+2];
            pixels[i] = (r*0.393)+(g*0.769)+(b*0.189);
            pixels[i+1] = (r*0.349)+(g*0.686)+(b*0.168);
            pixels[i+2] = (r*0.272)+(g*0.534)+(b*0.131);
        }
        return imageData;
    };
    var imageData = ctx.getImageData(0, 0, 400, 600);
    var imageDataFiltred = sepia(imageData);
    ctx.putImageData(imageDataFiltred, 0, 0);
};