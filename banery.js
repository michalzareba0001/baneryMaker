var fontSize1 = 4;
var fontSize2 = 4;


function changeBanerSize(x, y) {
    document.getElementById('baner_image').style.width = x + 'px';
    document.getElementById('baner_image').style.height = y + 'px';
}

function textSize1Plus() {
    fontSize1++;
    if (fontSize1 > 8) {
        fontSize1 = 8;
        return;
    }
    document.getElementById('text_out1').style.fontSize = fontSize1 + 'rem';
}

function textSize1Minus() {
    fontSize1--;
    if (fontSize1 < 1) {
        fontSize1 = 1;
        return;
    }
    document.getElementById('text_out1').style.fontSize = fontSize1 + 'rem';
}

function textSize2Plus() {
    fontSize2++;
    if (fontSize2 > 8) {
        fontSize2 = 8;
        return;
    }
    document.getElementById('text_out2').style.fontSize = fontSize2 + 'rem';
}

function textSize2Minus() {
    fontSize2--;
    if (fontSize2 < 1) {
        fontSize2 = 1;
        return;
    }
    document.getElementById('text_out2').style.fontSize = fontSize2 + 'rem';
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





