filename=${1}latex

mkdir $filename

cp "${filename}.tex" "${filename}/${filename}_copy.tex"

cd ${filename}


python -tt "/Users/obama/Library/Application Support/LyX-2.3/scripts/lyxpreview2bitmap.py" --png -v ${filename}_copy.tex --dpi 106 --fg 000000 --bg faf0e6 --latex=${filename} --bibtex=bibtex

open "${filename}_copy.pdf"