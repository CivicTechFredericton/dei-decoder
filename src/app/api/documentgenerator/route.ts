import { NextRequest, NextResponse } from 'next/server';
import { jsPDF } from 'jspdf';

export async function POST(req: NextRequest) {
  const { text } = await req.json();

  // Create a new PDF
  const pdf = new jsPDF();
  const pageWidth = pdf.internal.pageSize.width;
  const margin = 15;
  const maxWidth = pageWidth - 2 * margin; // Available width for text

  // Split text into lines that fit within the page width
  const wrappedText = pdf.splitTextToSize(text, maxWidth);

  // Add the wrapped text to the PDF
  pdf.text(wrappedText, margin, margin);

  const pdfBlob = pdf.output('blob');
  const buffer = Buffer.from(await pdfBlob.arrayBuffer());

  return new NextResponse(buffer, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Job_Posting.pdf"',
    },
  });
}
