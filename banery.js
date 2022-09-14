var changeSize = function () {
    var checkSize = document.getElementsByName('baner_size');
    for (var i = 0; i < checkSize.length; i++) {
        if (checkSize[i].checked) {
            var banerSize = checkSize[i].value;
        }
    }

    if (banerSize == '100100') {
        document.getElementById('baner_image').style.width = '500px';
        document.getElementById('baner_image').style.height = '500px';
        
       
    }
    if (banerSize == '200100') {
        document.getElementById('baner_image').style.width = '1000px';
        document.getElementById('baner_image').style.height = '500px';
        
    
    }
    if (banerSize == '300100') {
        document.getElementById('baner_image').style.width = '1000px';
        document.getElementById('baner_image').style.height = '333px';
           
    }

};

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





