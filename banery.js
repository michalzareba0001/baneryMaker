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
        textOut1.style.marginTop = '13%';   
        var x = 100;
        var y = 100;
        return x, y;
    }
    if (banerSize == '200100') {
        document.getElementById('baner_image').style.width = '1000px';
        document.getElementById('baner_image').style.height = '500px';  
        textOut1.style.marginTop = '13%';  
        var x = 200;
        var y = 100; 
        return x, y;
    }
    if (banerSize =='300100') {
        document.getElementById('baner_image').style.width = '1000px';
        document.getElementById('baner_image').style.height = '333px';
        textOut1.style.marginTop = '6%';   
        var x = 300;
        var y = 100;
        return x, y;
    }

};

function generatePDF(x, y) {
    const element = document.getElementById('baner_image');
    var opt = {
        margin: 0,
        filename: 'test.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 5, width: 1000, height: 500, y: 130 },
        jsPDF: {
            unit: 'cm',
            format: [x, y],
            layout: 'single',
            zoom: 'fullheight',
            orientation: 'landscape',
        }
    };
    // Choose the element that our invoice is rendered in.
    html2pdf().set(opt).from(element).save();
};

function generatePDF2(){
    const element = document.getElementById('baner_image');
    var textOut1 = document.getElementById('text_out1');

    var doc = new jsPDF({
        orientation: 'landscape',
        unit: 'cm',
        format: [200, 100],
        layout: 'single',
        zoom: 'fullpage'
    });

    

    html2canvas(element, { scale:5 }).then(function (canvas) {
        var imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 0, 0, 200, 100);
        doc.save('test.pdf');
    });
 
        

}

function generatePDF3 (){
    var node = document.getElementById('baner_image');

    domtoimage.toJpeg(node, { width: 6000, height:3000, quality: 0.99 })
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = 'my-image-name.jpeg';
        link.href = dataUrl;
        link.click();
    });
}





//https://redstapler.co/create-pdf-javascript/
//https://www.npmjs.com/package/jspdf
