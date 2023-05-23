const { PDFDocument } = require('pdf-lib');
const fs = require('fs');
const path = require('path');

const inputDirectory = path.join(__dirname, 'input');

async function mergePDFs(inputDirectory) {
  const mergedPdf = await PDFDocument.create();
  const files = fs.readdirSync(inputDirectory);

  // Filter out non-PDF files
  const pdfFiles = files.filter(file => file.endsWith('.pdf'));

  for (const pdfFile of pdfFiles) {
    const pdfPath = path.join(inputDirectory, pdfFile);
    const pdfBytes = fs.readFileSync(pdfPath);
    const pdfDoc = await PDFDocument.load(pdfBytes);
    const copiedPages = await mergedPdf.copyPages(pdfDoc, pdfDoc.getPageIndices());
    copiedPages.forEach((page) => {
      mergedPdf.addPage(page);
    });
  }
  
  const mergedPdfFile = await mergedPdf.save();
  fs.writeFileSync('merged.pdf', mergedPdfFile);
}

mergePDFs(inputDirectory);

