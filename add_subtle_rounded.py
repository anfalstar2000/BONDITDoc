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
        
        # Add subtle rounded corners to cards
        # Change rounded-none to rounded-lg for cards (bg-white or bg-gray-50)
        replacements = [
            ('bg-white rounded-none border', 'bg-white rounded-lg border'),
            ('bg-gray-50 rounded-none border', 'bg-gray-50 rounded-lg border'),
            ('bg-white rounded-none p-', 'bg-white rounded-lg p-'),
            ('bg-gray-50 rounded-none p-', 'bg-gray-50 rounded-lg p-'),
            # Keep inputs and specific elements as rounded-none
            # Only affect card-like divs
        ]
        
        for old, new in replacements:
            if old in content:
                content = content.replace(old, new)
                modified = True
        
        # Also update gradient backgrounds
        if 'bg-gradient-to-br' in content and 'rounded-none' in content:
            content = content.replace(
                'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white p-10 my-8 not-prose rounded-none',
                'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white p-10 my-8 not-prose rounded-lg'
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
print("Cards now have subtle rounded corners")
