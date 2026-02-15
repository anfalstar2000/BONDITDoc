import { ChevronRight, ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router';

interface PageLink {
  title: string;
  path: string;
}

const pages: PageLink[] = [
  { title: 'ما هو BOND IT؟', path: '/' },
  { title: 'لماذا نظام الولاء؟', path: '/why-loyalty' },
  { title: 'كيف يعمل النظام؟', path: '/how-it-works' },
  { title: 'أنواع البرامج', path: '/program-types' },
  { title: 'رحلة العميل', path: '/customer-experience' },
  { title: 'النقاط والمكافآت', path: '/points-rewards' },
  { title: 'الشارات والمستويات', path: '/badges-tiers' },
  { title: 'التحديات', path: '/challenges' },
  { title: 'برنامج الإحالة', path: '/referral' },
  { title: 'الرسائل التسويقية', path: '/marketing-messages' },
  { title: 'المساعد الذكي', path: '/ai-assistant' },
  { title: 'العملاء', path: '/customers' },
  { title: 'التكاملات', path: '/integrations' },
  { title: 'الإعدادات وإدارة الحساب', path: '/settings' },
  { title: 'كيف اختار الباقة المناسبة', path: '/success-stories' },
];

export function PrevNext() {
  const location = useLocation();
  const currentIndex = pages.findIndex((page) => page.path === location.pathname);

  if (currentIndex === -1) {
    return null;
  }

  const prevPage = currentIndex > 0 ? pages[currentIndex - 1] : null;
  const nextPage = currentIndex < pages.length - 1 ? pages[currentIndex + 1] : null;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-8 border-t border-gray-200">
      {prevPage ? (
        <Link
          to={prevPage.path}
          className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-none hover:bg-gray-50 hover:border-[#3B82F6] transition-all"
        >
          <ChevronRight className="size-5 text-gray-400 group-hover:text-[#3B82F6] transition-colors" />
          <div className="flex-1 text-right">
            <p className="text-xs text-gray-500 mb-1">السابق</p>
            <p className="text-sm font-medium text-black group-hover:text-[#3B82F6] transition-colors">
              {prevPage.title}
            </p>
          </div>
        </Link>
      ) : (
        <div />
      )}

      {nextPage && (
        <Link
          to={nextPage.path}
          className="group flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-none hover:bg-gray-50 hover:border-[#3B82F6] transition-all"
        >
          <div className="flex-1 text-right">
            <p className="text-xs text-gray-500 mb-1">التالي</p>
            <p className="text-sm font-medium text-black group-hover:text-[#3B82F6] transition-colors">
              {nextPage.title}
            </p>
          </div>
          <ChevronLeft className="size-5 text-gray-400 group-hover:text-[#3B82F6] transition-colors" />
        </Link>
      )}
    </div>
  );
}
