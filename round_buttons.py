#!/usr/bin/env python3
import os
import glob
import re

# Find all TSX files
tsx_files = glob.glob('src/**/*.tsx', recursive=True)

count = 0
for file_path in tsx_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        modified = False
        
        # Make buttons fully rounded
        patterns = [
            # Button patterns
            (r'className="([^"]*\s)?px-\d+\s+py-\d+\s+bg-\[#3B82F6\]([^"]*?)rounded-none', r'className="\1px-\2 py-\3 bg-[#3B82F6]\4rounded-full'),
            (r'className="([^"]*\s)?px-\d+\s+py-\d+\s+bg-black([^"]*?)rounded-none', r'className="\1px-\2 py-\3 bg-black\4rounded-full'),
            (r'className="([^"]*\s)?px-\d+\s+py-\d+\s+bg-white([^"]*?)rounded-none', r'className="\1px-\2 py-\3 bg-white\4rounded-full'),
            
            # Icon backgrounds - small square icons should be circular
            (r'className="size-\d+\s+bg-\[#3B82F6\]\s+rounded-none', r'className="size-\g<0> rounded-full'.replace('rounded-none', '')),
            (r'className="size-\d+\s+bg-\[#3B82F6\]\s+rounded-lg', r'className="size-\g<0> rounded-full'.replace('rounded-lg', '')),
            
            # Search button and other small buttons
            (r'rounded-none([^"]*)"([^>]*>[\s\n]*<(Search|ExternalLink|Menu|X|Check)', r'rounded-full\1"\2<\3'),
        ]
        
        # Simpler approach - replace specific button patterns
        if 'bg-[#3B82F6]' in content and 'rounded-none' in content:
            # Replace button rounded-none with rounded-full for blue buttons
            content = re.sub(
                r'(px-\d+\s+py-\d+[^"]*bg-\[#3B82F6\][^"]*?)rounded-none',
                r'\1rounded-full',
                content
            )
            modified = True
        
        # Icon container backgrounds (size-8, size-10, size-12 etc with bg color)
        if re.search(r'size-\d+\s+bg-\[#3B82F6\]\s+rounded-', content):
            content = re.sub(
                r'(size-\d+\s+bg-\[#3B82F6\])\s+rounded-\w+',
                r'\1 rounded-full',
                content
            )
            modified = True
        
        if re.search(r'size-\d+\s+bg-black\s+rounded-', content):
            content = re.sub(
                r'(size-\d+\s+bg-black)\s+rounded-\w+',
                r'\1 rounded-full',
                content
            )
            modified = True
            
        if re.search(r'size-\d+\s+bg-white\s+rounded-', content):
            content = re.sub(
                r'(size-\d+\s+bg-white)\s+rounded-\w+',
                r'\1 rounded-full',
                content
            )
            modified = True
        
        # Small circular number badges
        if re.search(r'size-6\s+[^"]*?rounded-', content):
            content = re.sub(
                r'(size-6[^"]*?)rounded-\w+',
                r'\1rounded-full',
                content
            )
            modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Updated: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎨 Updated {count} files!")
print("Buttons and icon backgrounds are now fully rounded")
