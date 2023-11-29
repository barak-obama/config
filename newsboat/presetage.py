#!/usr/local/bin/python3

with open('/Users/obama/.newsboat/presetage.txt', 'rb') as fh:
	first = next(fh).decode()
	fh.seek(-1024, 2)
	last = fh.readlines()[-1].decode()
	if len(last.split('[download]')) > 1:
		print(last.split('[download]')[1].split(' of')[0].strip())
	else:
		print(' ')
#with open('/Users/obama/.newsboat/presetage.txt') as f:
#	last = f.readlines()[-1].decode()
#	print(last.split('[download]   ')[1].split(' of')[0])
#	f.close()
