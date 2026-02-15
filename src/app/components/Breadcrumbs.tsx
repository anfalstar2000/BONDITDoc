import { ChevronLeft, Home } from 'lucide-react';
import { Link, useLocation } from 'react-router';
interface BreadcrumbItem {
 label: string;
 path: string;
}
const routeConfig: Record<string, { section: string; title: string }> = {
 '/': { section: 'مرحبًا بك', title: 'ما هو BOND IT؟' },
 '/why-loyalty': { section: 'مرحبًا بك', title: 'لماذا نظام الولاء؟' },
 '/how-it-works': { section: 'البداية', title: 'كيف يعمل النظام؟' },
 '/program-types': { section: 'البداية', title: 'أنواع البرامج' },
 '/customer-experience': { section: 'تجربة العميل', title: 'رحلة العميل' },
 '/points-rewards': { section: 'الميزات', title: 'النقاط والمكافآت' },
 '/badges-tiers': { section: 'الميزات', title: 'الشارات والمستويات' },
 '/challenges': { section: 'الميزات', title: 'التحديات' },
 '/referral': { section: 'الميزات', title: 'برنامج الإحالة' },
 '/marketing-messages': { section: 'الميزات', title: 'الرسائل التسويقية' },
 '/ai-assistant': { section: 'الميزات', title: 'المساعد الذكي' },
 '/customers': { section: 'الميزات', title: 'العملاء' },
 '/integrations': { section: 'الميزات', title: 'التكاملات' },
 '/settings': { section: 'الميزات', title: 'الإعدادات وإدارة الحساب' },
 '/success-stories': { section: 'الباقات', title: 'كيف اختار الباقة المناسبة' },
};
export function Breadcrumbs() {
 const location = useLocation();
 const currentRoute = routeConfig[location.pathname];
 if (!currentRoute || location.pathname === '/') {
 return null;
 }
 return (
 <nav className="flex items-center gap-2 text-sm mb-6 text-gray-500">
 <Link
 to="/"
 className="flex items-center gap-1 hover:text-[#3B82F6] transition-colors"
 >
 <Home className="size-4" />
 <span>الرئيسية</span>
 </Link>
 <ChevronLeft className="size-4" />
 <span className="text-gray-400">{currentRoute.section}</span>
 <ChevronLeft className="size-4" />
 <span className="text-black font-medium">{currentRoute.title}</span>
 </nav>
 );
}
