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
        let x = 100;
        let y = 100;
        generatePDF(100, 100);
    }
    if (banerSize == '200100') {
        document.getElementById('baner_image').style.width = '1000px';
        document.getElementById('baner_image').style.height = '500px';  
        textOut1.style.marginTop = '13%';   
 
    }
    if (banerSize =='300100') {
        document.getElementById('baner_image').style.width = '1000px';
        document.getElementById('baner_image').style.height = '333px';
        textOut1.style.marginTop = '6%';   
    }

};
//https://redstapler.co/create-pdf-javascript/
//https://www.npmjs.com/package/jspdf
