const fs = require('fs');

const files = [
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
];

files.forEach(file => {
    try {
        let content = fs.readFileSync(file, 'utf8');
        
        // Replace all patterns
        content = content.replace(/bg-white rounded-lg/g, 'bg-white rounded-[15px]');
        content = content.replace(/bg-\[#F7F7F7\] rounded-lg/g, 'bg-[#F7F7F7] rounded-[15px]');
        content = content.replace(/bg-\[#3B82F6\] rounded-lg text-white/g, 'bg-[#3B82F6] rounded-[15px] text-white');
        content = content.replace(/bg-black rounded-lg/g, 'bg-black rounded-[15px]');
        
        fs.writeFileSync(file, content, 'utf8');
        console.log('✅', file);
    } catch (err) {
        console.error('❌', file, err.message);
    }
});

console.log('\n🎉 Done!');
