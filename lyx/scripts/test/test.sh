echo $@ > "/Users/obama/Library/Application Support/LyX-2.3/scripts/test/a.txt"

cp $1 "/Users/obama/Library/Application Support/LyX-2.3/scripts/test/new_test.tex"

python -tt "/Users/obama/Library/Application Support/LyX-2.3/scripts/lyxpreview2bitmap.py" --png -v $@
