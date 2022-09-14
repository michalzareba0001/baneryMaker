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

function generatePDF2() {
    const element = document.getElementById('baner_image');
    var textOut1 = document.getElementById('text_out1');

    var doc = new jsPDF({
        orientation: 'landscape',
        unit: 'cm',
        format: [200, 100],
        layout: 'single',
        zoom: 'fullpage'
    });



    html2canvas(element, { scale: 5 }).then(function (canvas) {
        var imgData = canvas.toDataURL('image/png');
        doc.addImage(imgData, 'PNG', 0, 0, 200, 100);
        doc.save('test.pdf');
    });



}