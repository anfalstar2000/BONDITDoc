#!/usr/bin/env python3
import os
import glob

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
        
        # Change rounded-lg to rounded (4px) for cards
        # Only for cards, not buttons or icons
        replacements = [
            ('bg-white rounded-lg border', 'bg-white rounded border'),
            ('bg-gray-50 rounded-lg border', 'bg-gray-50 rounded border'),
            ('bg-white rounded-lg p-', 'bg-white rounded p-'),
            ('bg-gray-50 rounded-lg p-', 'bg-gray-50 rounded p-'),
            ('bg-white rounded-lg hover', 'bg-white rounded hover'),
            ('bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white p-10 my-8 not-prose rounded-lg', 
             'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white p-10 my-8 not-prose rounded'),
        ]
        
        for old, new in replacements:
            if old in content:
                content = content.replace(old, new)
                modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Updated: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎨 Updated {count} files!")
print("Cards now have classic rounded corners (4px)")
