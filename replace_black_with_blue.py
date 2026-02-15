#!/usr/bin/env python3
import os
import glob

# Find all TSX files in pages
tsx_files = glob.glob('src/app/pages/**/*.tsx', recursive=True)

count = 0
for file_path in tsx_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        modified = False
        
        # Replace black backgrounds with blue gradient or blue backgrounds
        replacements = [
            # Black cards with text -> Blue gradient
            ('bg-black rounded-none text-white', 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] rounded-3xl text-white'),
            ('bg-black text-white', 'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white'),
            
            # Black icon backgrounds -> Blue
            ('size-10 bg-black flex', 'size-10 bg-[#3B82F6] flex'),
            ('size-12 bg-black', 'size-12 bg-[#3B82F6]'),
            
            # Fix gray text in these sections to white
            ('text-gray-500 text-lg mb-3', 'text-white/90 text-lg mb-3'),
        ]
        
        for old, new in replacements:
            if old in content:
                content = content.replace(old, new)
                modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Replaced black with blue: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n✨ Updated {count} files!")
print("All black backgrounds replaced with blue gradient")
