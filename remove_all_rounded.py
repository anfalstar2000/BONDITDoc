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
        
        # Replace all rounded-* with rounded-none (no curve at all)
        patterns = [
            'rounded-lg',
            'rounded-xl',
            'rounded-2xl',
            'rounded-3xl',
            'rounded-md',
            'rounded-sm'
        ]
        
        for pattern in patterns:
            if pattern in content:
                content = content.replace(pattern, 'rounded-none')
                modified = True
            
        if modified:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Updated: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎉 Updated {count} files successfully!")
print("All rounded corners removed - sharp edges everywhere!")
