#!/usr/bin/env python3
import os
import glob
import re

# Find all TSX files
tsx_files = glob.glob('src/**/*.tsx', recursive=True)

# Common emoji patterns to remove
emoji_patterns = [
    r'[🎯🎉🎨📱💻✨🚀📊💡🔥⚡🎁✅❌⭐👑💬📹🌟💪🏆🎊🎈👍✔️📈📉🔔🔗💰🎮🎵🎶📢📣🎤🎧🎬📺📷📸🖼️🎭🎪🗣️💭🗨️💬🗯️💫🌈🌟⚙️🛠️🔧🔩⚒️🛡️🏅🥇🥈🥉🏆📱☎️📞📟📠💻🖥️⌨️🖱️🖨️💾💿📀🖲️💽]',
    r'[➡️⬅️⬆️⬇️↗️↘️↙️↖️↕️↔️↩️↪️⤴️⤵️🔀🔁🔂🔃🔄]',
    r'[▶️⏸️⏯️⏹️⏺️⏭️⏮️⏩⏪⏫⏬]',
]

count = 0
emoji_count = 0

for file_path in tsx_files:
    if not os.path.exists(file_path):
        continue
    
    try:
        with open(file_path, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Remove emoji patterns
        for pattern in emoji_patterns:
            # Remove standalone emojis
            content = re.sub(pattern, '', content)
        
        # Remove specific common emojis we've seen
        specific_emojis = [
            '🎉', '⭐', '💡', '⚡', '👑', '🎯', '💬', '📹', '✅',
            '❌', '→', '✓', '💰', '📱', '💻', '🎨', '🚀', '📊'
        ]
        
        for emoji in specific_emojis:
            if emoji in content:
                # Remove emoji and any trailing/leading spaces
                content = content.replace(f' {emoji} ', ' ')
                content = content.replace(f'{emoji} ', '')
                content = content.replace(f' {emoji}', '')
                content = content.replace(emoji, '')
        
        # Clean up multiple spaces
        content = re.sub(r'  +', ' ', content)
        
        # Clean up empty text in JSX
        content = re.sub(r'>\s*</>', '></>', content)
        
        if content != original_content:
            with open(file_path, 'w', encoding='utf-8') as f:
                f.write(content)
            
            # Count removed emojis
            removed = len(original_content) - len(content)
            emoji_count += removed
            
            print(f"✅ Cleaned: {file_path}")
            count += 1
    except Exception as e:
        print(f"❌ Error processing {file_path}: {e}")

print(f"\n🎉 Removed emojis from {count} files!")
print(f"Total characters removed: {emoji_count}")
print("Only icons (lucide-react) remain now")
