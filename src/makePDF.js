module.exports = (PDFDocument, blobStream, lorem, iframe) => {
  // create a document and pipe to a blob
  var doc = new PDFDocument();
  var stream = doc.pipe(blobStream());

  doc.registerFont('Roboto', 'fonts/Roboto-Regular.ttf')

  // draw some text
  doc.fontSize(25).text('Here is some vector graphics...', 100, 80);

  // some vector graphics
  doc
    .save()
    .moveTo(100, 150)
    .lineTo(100, 250)
    .lineTo(200, 250)
    .fill('#FF3300');

  doc.circle(280, 200, 50).fill('#6600FF');

  // an SVG path
  doc
    .scale(0.6)
    .translate(470, 130)
    .path('M 250,75 L 323,301 131,161 369,161 177,301 z')
    .fill('red', 'even-odd')
    .restore();

  // and some justified text wrapped into columns
  doc
    .font('Roboto')
    .text('And here is some wrapped text...', 100, 300)
    .fontSize(13)
    .moveDown()
    .text(lorem, {
      width: 412,
      align: 'justify',
      indent: 30,
      columns: 2,
      height: 300,
      ellipsis: true
    });

  doc.addPage();

  doc
    .fontSize(25)
    .font('Courier')
    .text('And an image...')
    .image('images/bee.png')

  doc
    .font('Courier-Bold')
    .text('Finish...')

  // end and display the document in the iframe to the right
  doc.end();
  stream.on('finish', function () {
    iframe.src = stream.toBlobURL('application/pdf');
  });
}