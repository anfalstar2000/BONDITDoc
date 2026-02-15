#!/usr/bin/env python3
import re
import glob

# Get all page files
files = glob.glob('/src/app/pages/*.tsx')

for file_path in files:
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace patterns for cards (big elements with padding)
    # Keep small icons with rounded-lg unchanged
    content = re.sub(
        r'(className="[^"]*)(p-\d+|py-\d+|px-\d+)[^"]*bg-(white|\[#F7F7F7\]|\[#3B82F6\]|black)[^"]*rounded-lg',
        lambda m: m.group(0).replace('rounded-lg', 'rounded-[15px]'),
        content
    )
    
    content = re.sub(
        r'(className="[^"]*)(bg-(white|\[#F7F7F7\]|\[#3B82F6\]|black))[^"]*rounded-lg[^"]*p-\d+',
        lambda m: m.group(0).replace('rounded-lg', 'rounded-[15px]'),
        content
    )
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)

print("Done!")
