function changeBanerSize(x, y){
    document.getElementById('baner_image').style.width = x + 'px';
    document.getElementById('baner_image').style.height = y + 'px';
}

function generateJpeg() {
    var node = document.getElementById('baner_image');

    domtoimage.toJpeg(node, {
        quality: 0.99,
        width: node.clientWidth * 10,
        height: node.clientHeight * 10,
        style: {
            'transform': 'scale(10)',
            'transform-origin': '50% 50%',
        }
    })
        .then(function (dataUrl) {
            var link = document.createElement('a');
            link.download = 'TwójBaner.jpeg';
            link.href = dataUrl;
            link.click();
        });
}





