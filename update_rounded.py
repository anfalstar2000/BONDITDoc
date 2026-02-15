import os
import re

# All page files
files = [
    '/src/app/pages/HowItWorksPage.tsx',
    '/src/app/pages/ProgramTypesPage.tsx',
    '/src/app/pages/PointsRewardsPage.tsx',
    '/src/app/pages/BadgesTiersPage.tsx',
    '/src/app/pages/ChallengesPage.tsx',
    '/src/app/pages/ReferralPage.tsx',
    '/src/app/pages/CustomerExperiencePage.tsx',
    '/src/app/pages/MarketingMessagesPage.tsx',
    '/src/app/pages/CustomersPage.tsx',
    '/src/app/pages/ReportsPage.tsx',
    '/src/app/pages/AIAssistantPage.tsx',
    '/src/app/pages/IntegrationsPage.tsx',
    '/src/app/pages/SettingsPage.tsx',
    '/src/app/pages/SuccessStoriesPage.tsx',
    '/src/app/components/MainContent.tsx',
]

for file_path in files:
    if not os.path.exists(file_path):
        continue
        
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Replace all patterns carefully - only for cards, not small icons
    # Pattern 1: bg-white rounded-lg (cards)
    content = content.replace('bg-white rounded-lg', 'bg-white rounded-[15px]')
    
    # Pattern 2: bg-[#F7F7F7] rounded-lg (cards)
    content = content.replace('bg-[#F7F7F7] rounded-lg', 'bg-[#F7F7F7] rounded-[15px]')
    
    # Pattern 3: bg-[#3B82F6] rounded-lg text-white (blue cards)
    content = content.replace('bg-[#3B82F6] rounded-lg text-white', 'bg-[#3B82F6] rounded-[15px] text-white')
    
    # Pattern 4: bg-black rounded-lg (black cards)
    content = content.replace('bg-black rounded-lg', 'bg-black rounded-[15px]')
    
    with open(file_path, 'w', encoding='utf-8') as f:
        f.write(content)
    
    print(f"✅ Updated: {file_path}")

print("\n🎉 All files updated successfully!")
