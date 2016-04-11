#!/usr/bin/env python
# -*- coding: UTF-8 -*-

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

def exist_file(path):
    return os.path.exists(path)

def read_file(path):
    f = open(path, 'rw')
    text = f.read()
    f.close()
    return text

def get_colour(path):
    _colour_default = 'red'
    if exist_file(path):
        return read_file(path)
    return _colour_default

def path_to_dict(path):
    d = {}
    d['name'] = basename(path)
    d['color'] = get_colour(join(path, "color"))
    d['elementos'] = list_elements(join(path,'elementos'))
    return d

o=[]
for f in listdir('categorias'):
    o.append(path_to_dict(join('categorias',f)))

str_output = json.dumps(o)

f = open('output.json', 'w')
f.write(str_output)
f.close()

