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
        
        # Improve text contrast - make secondary text darker
        if 'text-gray-500' in content:
            # Keep text-gray-500 for now, but make sure borders are visible
            pass
        
        # Make borders more visible
        if 'border-gray-100' in content:
            content = content.replace('border-gray-100', 'border-gray-200')
            modified = True
        
        # Add hover effects to cards
        if 'bg-white rounded-none' in content and 'hover:' not in content:
            content = content.replace(
                'bg-white rounded-none',
                'bg-white rounded-none hover:bg-gray-50 transition-colors'
            )
            modified = True
        
        # Add focus states to links and buttons
        if 'focus:outline-none' in content and 'focus:ring' not in content:
            content = content.replace(
                'focus:outline-none',
                'focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2'
            )
            modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Improved: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎨 Improved {count} files!")
print("Better contrast and hover effects added")
