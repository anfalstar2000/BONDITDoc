import { useState } from 'react';
import { Menu, X, ExternalLink, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { MobileSearchBar } from './MobileSearchBar';
import Logo from '../../imports/Group435';

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
 title: 'الباقات',
 items: [
 { title: 'كيف اختار الباقة المناسبة', path: '/success-stories' },
 ],
 },
];

export function MobileNav() {
 const [isOpen, setIsOpen] = useState(false);
 const location = useLocation();
 const [openSections, setOpenSections] = useState<{ [key: string]: boolean }>({});

 const toggleSection = (sectionTitle: string) => {
 setOpenSections((prev) => ({
 ...prev,
 [sectionTitle]: !prev[sectionTitle],
 }));
 };

 const handleLinkClick = () => {
 setIsOpen(false);
 };

 return (
 <>
 <button
 onClick={() => setIsOpen(!isOpen)}
 className="lg:hidden p-2 hover:bg-gray-50 rounded-none transition-colors"
 >
 <Menu className="size-6 text-black" />
 </button>

 {isOpen && (
 <>
 <div
 className="fixed inset-0 bg-black/50 z-40 lg:hidden"
 onClick={() => setIsOpen(false)}
 />

 <div className="fixed top-0 right-0 bottom-0 w-80 bg-white z-50 overflow-y-auto lg:hidden">
 <div className="p-4 flex items-center justify-between">
 <div className="w-20">
 <Logo />
 </div>
 <button
 onClick={() => setIsOpen(false)}
 className="p-2 hover:bg-gray-50 rounded-none transition-colors"
 >
 <X className="size-5 text-black" />
 </button>
 </div>

 <div className="p-4">
 <MobileSearchBar onNavigate={handleLinkClick} />

 <nav className="space-y-4">
 {navigationData.map((section) => (
 <div key={section.title}>
 <button
 onClick={() => toggleSection(section.title)}
 className="flex items-center justify-between w-full text-xs font-semibold text-black uppercase tracking-wider mb-2 hover:text-[#3B82F6] transition-colors"
 >
 {section.title}
 <ChevronDown
 className={`size-4 transition-transform ${
 openSections[section.title] ? 'rotate-180' : ''
 }`}
 />
 </button>

 {openSections[section.title] && (
 <ul className="space-y-1 mb-4">
 {section.items.map((item) => (
 <li key={item.path}>
 <Link
 to={item.path}
 onClick={handleLinkClick}
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

 <div className="mt-6 pt-6">
 <a 
 href="https://app.bonditloyalty.io/login"
 target="_blank"
 rel="noopener noreferrer"
 className="w-full px-4 py-2 bg-[#3B82F6] text-white text-sm rounded-none hover:opacity-90 transition-all flex items-center justify-center gap-2"
 >
 <ExternalLink className="size-4" />
 انتقل إلى لوحة التحكم
 </a>
 </div>
 </div>
 </div></>
 )}
 </>
 );
}