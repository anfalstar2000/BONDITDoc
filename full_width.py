#!/usr/bin/env python3
import os
import glob

# Find all page TSX files
page_files = glob.glob('src/app/pages/**/*.tsx', recursive=True)

count = 0
for file_path in page_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        modified = False
        
        # Replace max-w-4xl with max-w-full to allow full width
        if 'max-w-4xl' in content:
            content = content.replace(
                '<div className="max-w-4xl">',
                '<div className="w-full">'
            )
            modified = True
        
        if 'max-w-5xl' in content:
            content = content.replace(
                '<div className="max-w-5xl">',
                '<div className="w-full">'
            )
            modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Full width: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n✨ Updated {count} files!")
print("Content now extends to full available width")
