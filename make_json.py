import os
import json
from os import listdir
from os.path import isfile, join, basename, splitext


def list_elements(path):
    out = []
    for f in listdir(path): 
        base = basename(join(path,f))
        name = splitext(base)[0]
        if name not in out:
            out.append(name)
    out.sort()
    return out

def path_to_dict(path):
    d = {}
    d['name'] = basename(path)
    d['color'] = 'red'
    d['elementos'] = list_elements(join(path,'elementos'))
    return d

o=[]
for f in listdir('categorias'):
    o.append(path_to_dict(join('categorias',f)))

str_output = json.dumps(o)

f = open('output.json', 'w')
f.write(str_output)
f.close()

