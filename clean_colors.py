#!/usr/bin/env python3
import os
import glob

# Find all TSX files
tsx_files = glob.glob('src/app/**/*.tsx', recursive=True)

count = 0
for file_path in tsx_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        modified = False
        original_content = content
        
        # Simplify colors - use more consistent gray tones
        # Replace various gray shades with standard ones
        replacements = [
            ('text-[#939393]', 'text-gray-500'),
            ('bg-[#F7F7F7]', 'bg-gray-50'),
            ('hover:bg-[#F7F7F7]', 'hover:bg-gray-50'),
            ('text-gray-400', 'text-gray-500'),
            ('text-gray-600', 'text-gray-700'),
        ]
        
        for old, new in replacements:
            if old in content:
                content = content.replace(old, new)
                modified = True
        
        if modified and content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Updated colors: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎨 Updated colors in {count} files!")
print("Colors are now more consistent and clean")
