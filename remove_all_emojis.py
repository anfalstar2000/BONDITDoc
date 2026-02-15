#!/usr/bin/env python3
import os
import glob
import re

# Find all TSX files
tsx_files = glob.glob('src/**/*.tsx', recursive=True)

count = 0
emoji_count = 0

for file_path in tsx_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove ALL emoji patterns - comprehensive list
        emoji_pattern = re.compile(
            "["
            "\U0001F1E0-\U0001F1FF"  # flags (iOS)
            "\U0001F300-\U0001F5FF"  # symbols & pictographs
            "\U0001F600-\U0001F64F"  # emoticons
            "\U0001F680-\U0001F6FF"  # transport & map symbols
            "\U0001F700-\U0001F77F"  # alchemical symbols
            "\U0001F780-\U0001F7FF"  # Geometric Shapes Extended
            "\U0001F800-\U0001F8FF"  # Supplemental Arrows-C
            "\U0001F900-\U0001F9FF"  # Supplemental Symbols and Pictographs
            "\U0001FA00-\U0001FA6F"  # Chess Symbols
            "\U0001FA70-\U0001FAFF"  # Symbols and Pictographs Extended-A
            "\U00002702-\U000027B0"  # Dingbats
            "\U000024C2-\U0001F251" 
            "]+", flags=re.UNICODE
        )
        
        content = emoji_pattern.sub('', content)
        
        # Also remove specific text emojis we've seen
        text_emojis = [
            '⭐', '✓', '✅', '❌', '→', '←', '↑', '↓', '⚡', '💡',
            '🎯', '🎉', '🎨', '📱', '💻', '🚀', '📊', '💰', '💬',
            '📹', '👑', '🏆', '🎁', '✨', '🔥', '⚙️', '🌟', '💪'
        ]
        
        for emoji in text_emojis:
            content = content.replace(emoji, '')
        
        # Clean up excessive spaces
        content = re.sub(r'  +', ' ', content)
        content = re.sub(r'\s+\n', '\n', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            print(f"✅ Cleaned: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎉 Cleaned {count} files from all emojis!")
