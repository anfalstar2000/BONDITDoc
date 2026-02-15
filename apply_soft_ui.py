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
        
        # 1. Change card rounding from 'rounded' (4px) to 'rounded-3xl' (24px)
        replacements = [
            ('bg-white rounded border', 'bg-white rounded-3xl'),
            ('bg-gray-50 rounded border', 'bg-gray-50 rounded-3xl'),
            ('bg-white rounded p-', 'bg-white rounded-3xl p-'),
            ('bg-gray-50 rounded p-', 'bg-gray-50 rounded-3xl p-'),
            ('bg-white rounded hover', 'bg-white rounded-3xl hover'),
            # Gradient backgrounds
            ('bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white p-10 my-8 not-prose rounded',
             'bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white p-10 my-8 not-prose rounded-3xl'),
        ]
        
        for old, new in replacements:
            if old in content:
                content = content.replace(old, new)
                modified = True
        
        # 2. Remove borders and rely on soft backgrounds
        if 'border-2 border-gray-200' in content:
            content = content.replace('border-2 border-gray-200', '')
            modified = True
        
        if 'border border-gray-200' in content:
            content = content.replace(' border border-gray-200', '')
            modified = True
            
        # 3. Increase padding for cards
        if 'p-4 bg-white' in content or 'p-4 bg-gray-50' in content:
            content = content.replace('p-4 bg-white', 'p-6 bg-white')
            content = content.replace('p-4 bg-gray-50', 'p-6 bg-gray-50')
            modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Updated: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎨 Updated {count} files!")
print("Applied Soft UI design matching dashboard")
