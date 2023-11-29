from PyPDF4 import PdfFileReader, PdfFileWriter
from reportlab.lib.colors import HexColor

def replace_background_color(pdf_path, new_color, debug=False):
    # Create a new color from the hex string
    new_color = HexColor("#" + new_color)
    # Open the PDF file using PyPDF4
    with open(pdf_path, "rb") as infile:
        reader = PdfFileReader(infile)
        # Create a new PDF writer
        writer = PdfFileWriter()
        # Loop through each page of the PDF document
        for i in range(reader.getNumPages()):
            # Get the page object
            page = reader.getPage(i)
            # Set the new background color for the page
            page["/Resources"].setdefault("/ExtGState", {}).update(
                {"/GS1": "/TransparentType /Normal /ca 1.0 /BM /Normal"})
            page["/Contents"].append(
                f"\nq {new_color.getRed()} {new_color.getGreen()} {new_color.getBlue()} rg\n"
                f"{page.mediaBox.getWidth()} 0 0 {page.mediaBox.getHeight()} re\nf\nQ\n".encode("ascii"))
            # Add the modified page to the PDF writer
            writer.addPage(page)
        # Save the modified PDF document with the same filename (overwrite the original file)
        with open(pdf_path, "wb") as outfile:
            writer.write(outfile)
        # Display the first page of the PDF document before and after the change if debug flag is True
        if debug:
            with open(pdf_path, "rb") as doc_before, open("output_before.pdf", "wb") as out_before:
                out_before.write(doc_before.read())
                doc_before.seek(0)
                reader_before = PdfFileReader(doc_before)
                page_before = reader_before.getPage(0)
                page_before.compressContentStreams()
                page_before.cropBox.upperRight = (
                    page_before.mediaBox.getWidth(), page_before.mediaBox.getHeight())
                page_before.trimBox.upperRight = (
                    page_before.mediaBox.getWidth(), page_before.mediaBox.getHeight())
                page_before.writeToStream(out_before)
            with open(pdf_path, "rb") as doc_after, open("output_after.pdf", "wb") as out_after:
                out_after.write(doc_after.read())
                doc_after.seek(0)
                reader_after = PdfFileReader(doc_after)
                page_after = reader_after.getPage(0)
                page_after.compressContentStreams()
                page_after.cropBox.upperRight = (
                    page_after.mediaBox.getWidth(), page_after.mediaBox.getHeight())
                page_after.trimBox.upperRight = (
                    page_after.mediaBox.getWidth(), page_after.mediaBox.getHeight())
                page_after.writeToStream(out_after)
