
import os
import sys
import mimetypes


def is_video(file):
	file_type = mimetypes.guess_type('/Users/obama/Movies/youtube/' + file)[0]
	return file_type is not None and file_type.startswith('video')

link = sys.argv[1]
code = link.split('=')[1]
for file in os.listdir('/Users/obama/Movies/youtube'):
	if code in file and is_video(file):
		print("open -a mpv \"/Users/obama/Movies/youtube/"+file + "\" --args --ytdl-format=best")
		exit()

print("open -a mpv \"" + link + "\" --args --ytdl-format=best")

