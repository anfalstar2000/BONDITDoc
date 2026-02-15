#!/usr/bin/perl
use strict;
use warnings;

my @files = (
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
);

foreach my $file (@files) {
    next unless -f $file;
    
    open(my $fh, '<:utf8', $file) or die "Cannot open $file: $!";
    my $content = do { local $/; <$fh> };
    close($fh);
    
    # Replace patterns
    $content =~ s/bg-white rounded-lg/bg-white rounded-[15px]/g;
    $content =~ s/bg-\[#F7F7F7\] rounded-lg/bg-[#F7F7F7] rounded-[15px]/g;
    $content =~ s/bg-\[#3B82F6\] rounded-lg text-white/bg-[#3B82F6] rounded-[15px] text-white/g;
    $content =~ s/bg-black rounded-lg/bg-black rounded-[15px]/g;
    
    open($fh, '>:utf8', $file) or die "Cannot write $file: $!";
    print $fh $content;
    close($fh);
    
    print "✅ Updated: $file\n";
}

print "\n🎉 All files updated!\n";
