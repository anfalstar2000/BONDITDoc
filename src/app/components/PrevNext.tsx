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
    <div className="flex items-center justify-between gap-4 mt-16 pt-8 border-t border-gray-200">
      {prevPage ? (
        <Link
          to={prevPage.path}
          className="group flex items-center gap-3 px-6 py-4 bg-white border-2 border-gray-200 rounded hover:border-[#3B82F6] transition-all flex-1"
        >
          <div className="size-10 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-[#3B82F6] transition-colors">
            <ChevronRight className="size-5 text-gray-600 group-hover:text-white transition-colors" />
          </div>
          <div className="flex-1 text-right">
            <p className="text-xs text-gray-500 mb-1 font-medium">السابق</p>
            <p className="text-sm font-bold text-black group-hover:text-[#3B82F6] transition-colors">
              {prevPage.title}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextPage && (
        <Link
          to={nextPage.path}
          className="group flex items-center gap-3 px-6 py-4 bg-[#3B82F6] border-2 border-[#3B82F6] rounded hover:bg-[#2563EB] hover:border-[#2563EB] transition-all flex-1"
        >
          <div className="flex-1 text-right">
            <p className="text-xs text-white/80 mb-1 font-medium">التالي</p>
            <p className="text-sm font-bold text-white">
              {nextPage.title}
            </p>
          </div>
          <div className="size-10 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
            <ChevronLeft className="size-5 text-white" />
          </div>
        </Link>
      )}
    </div>
  );
}
