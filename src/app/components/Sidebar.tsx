import { Link, useLocation } from 'react-router';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  title: string;
  path: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigationData: NavSection[] = [
  {
    title: 'مرحبًا بك',
    items: [
      { title: 'ما هو BOND IT؟', path: '/' },
      { title: 'لماذا نظام الولاء؟', path: '/why-loyalty' },
    ],
  },
  {
    title: 'البداية',
    items: [
      { title: 'كيف يعمل النظام؟', path: '/how-it-works' },
      { title: 'أنواع البرامج', path: '/program-types' },
    ],
  },
  {
    title: 'تجربة العميل',
    items: [
      { title: 'رحلة العميل', path: '/customer-experience' },
    ],
  },
  {
    title: 'الإعدادات والميزات',
    items: [
      { title: 'النقاط والمكافآت', path: '/points-rewards' },
      { title: 'الشارات والمستويات', path: '/badges-tiers' },
      { title: 'التحديات', path: '/challenges' },
      { title: 'برنامج الإحالة', path: '/referral' },
      { title: 'الرسائل التسويقية', path: '/marketing-messages' },
      { title: 'المساعد الذكي', path: '/ai-assistant' },
      { title: 'العملاء', path: '/customers' },
      { title: 'التكاملات', path: '/integrations' },
      { title: 'الإعدادات وإدارة الحساب', path: '/settings' },
    ],
  },
  {
    title: 'قصص النجاح',
    items: [
      { title: 'كيف اختار الباقة المناسبة', path: '/success-stories' },
    ],
  },
];

export function Sidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({
    'مرحبًا بك': true,
    'البداية': true,
    'تجربة العميل': true,
    'الإعدادات والميزات': true,
    'قصص النجاح': true,
  });

  const toggleSection = (sectionTitle: string) => {
    setOpenSections((prev) => ({
      ...prev,
      [sectionTitle]: !prev[sectionTitle],
    }));
  };

  return (
    <aside className="hidden lg:block w-64 fixed right-0 top-16 bottom-0 overflow-y-auto bg-white">
      <nav className="p-6 space-y-6">
        {navigationData.map((section) => (
          <div key={section.title}>
            <button
              onClick={() => toggleSection(section.title)}
              className="flex items-center justify-between w-full text-xs font-semibold text-black uppercase tracking-wider mb-3 hover:text-[#3B82F6] transition-colors"
            >
              {section.title}
              <ChevronDown
                className={`size-4 transition-transform ${
                  openSections[section.title] ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openSections[section.title] && (
              <ul className="space-y-2">
                {section.items.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className={`block px-3 py-2 rounded-none text-sm transition-colors ${
                        location.pathname === item.path
                          ? 'bg-[#3B82F6] text-white font-medium'
                          : 'text-black hover:bg-white hover:text-[#3B82F6]'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}