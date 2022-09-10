var changeText = function () {
    var text1 = document.getElementById('baner_text_i1').value;
    var text2 = document.getElementById('baner_text_i2').value;
    var banerColor = document.getElementById('baner_color').value;
    document.getElementById('text_out1').innerHTML = text1;
    document.getElementById('text_out2').innerHTML = text2;
    document.getElementById('baner_image').style.backgroundColor = banerColor;
    console.log(text1);
    console.log(text2);
};
//https://redstapler.co/create-pdf-javascript/
//https://www.npmjs.com/package/jspdf
