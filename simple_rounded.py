#!/usr/bin/env python3
import os
import glob

# Find all TSX files
tsx_files = glob.glob('src/**/*.tsx', recursive=True)

# Remove duplicates
tsx_files = list(set(tsx_files))

count = 0
for file_path in tsx_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        modified = False
        
        # Replace rounded-2xl with rounded-lg (8px - simple curve)
        if 'rounded-2xl' in content:
            content = content.replace('rounded-2xl', 'rounded-lg')
            modified = True
        
        # Also replace rounded-3xl if any
        if 'rounded-3xl' in content:
            content = content.replace('rounded-3xl', 'rounded-lg')
            modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Updated: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎉 Updated {count} files successfully!")
print("All rounded corners changed to rounded-lg (8px - simple curve)")
