#!/usr/bin/env python3
import os
import glob

# Find all TSX files
tsx_files = glob.glob('src/**/*.tsx', recursive=True)

# Also include component files
tsx_files.extend(glob.glob('src/app/components/**/*.tsx', recursive=True))

# Remove duplicates
tsx_files = list(set(tsx_files))

count = 0
for file_path in tsx_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if file contains rounded-[15px]
        if 'rounded-[15px]' in content:
            # Replace rounded-[15px] with rounded-[15%]
            new_content = content.replace('rounded-[15px]', 'rounded-[15%]')
            
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✅ Updated: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎉 Updated {count} files successfully!")
print("All rounded-[15px] changed to rounded-[15%]")
