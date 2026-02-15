#!/usr/bin/env python3
import os
import glob

# Find all TSX page files
page_files = glob.glob('src/app/pages/**/*.tsx', recursive=True)

count = 0
for file_path in page_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        modified = False
        
        # 1. Simplify spacing - remove excessive padding
        if 'p-8' in content:
            content = content.replace(' p-8 ', ' p-6 ')
            content = content.replace(' p-8"', ' p-6"')
            modified = True
        
        # 2. Reduce vertical spacing between sections
        if 'my-12' in content:
            content = content.replace(' my-12 ', ' my-8 ')
            content = content.replace(' my-12"', ' my-8"')
            modified = True
            
        if 'my-10' in content:
            content = content.replace(' my-10 ', ' my-8 ')
            content = content.replace(' my-10"', ' my-8"')
            modified = True
        
        # 3. Simplify card spacing
        if 'space-y-6' in content:
            content = content.replace(' space-y-6 ', ' space-y-4 ')
            content = content.replace(' space-y-6"', ' space-y-4"')
            modified = True
        
        # 4. Clean backgrounds - ensure consistent white cards
        if 'bg-white' in content and 'rounded-none' in content:
            # Add subtle borders for definition
            content = content.replace('bg-white rounded-none', 'bg-white rounded-none border border-gray-100')
            modified = True
        
        # 5. Simplify text sizes - reduce overly large text
        if 'text-5xl' in content:
            content = content.replace(' text-5xl ', ' text-4xl ')
            content = content.replace(' text-5xl"', ' text-4xl"')
            modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Simplified: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎉 Simplified {count} page files!")
print("Documentation is now cleaner and more organized")
