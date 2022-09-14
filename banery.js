var changeText = function () {
    var text1 = document.getElementById('baner_text_i1').value;
    var text2 = document.getElementById('baner_text_i2').value;
    var banerColor = document.getElementById('baner_color').value;
    var textOut1 = document.getElementById('text_out1');
    var textOut2 = document.getElementById('text_out2');

    document.getElementById('text_out1').innerHTML = text1;
    document.getElementById('text_out2').innerHTML = text2;
    document.getElementById('baner_image').style.backgroundColor = banerColor;


    console.log(text1);
    console.log(text2);
    var checkSize = document.getElementsByName('baner_size');
    for (var i = 0; i < checkSize.length; i++) {
        if (checkSize[i].checked) {
            var banerSize = checkSize[i].value;
        }
    }

    console.log(banerSize);
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





//https://redstapler.co/create-pdf-javascript/
//https://www.npmjs.com/package/jspdf
