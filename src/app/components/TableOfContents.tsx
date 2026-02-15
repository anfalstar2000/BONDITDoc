import { useLocation } from 'react-router';

interface TOCSection {
  title: string;
  items: { id: string; title: string }[];
}

const tocData: Record<string, TOCSection> = {
  '/': {
    title: 'في هذه الصفحة',
    items: [
      { id: 'what-is', title: 'ما هو BOND IT؟' },
      { id: 'how-simple', title: 'كيف يعمل؟' },
      { id: 'no-tech', title: 'لا تحتاج خبرة تقنية' },
    ],
  },
  '/why-loyalty': {
    title: 'في هذه الصفحة',
    items: [
      { id: 'problem', title: 'المشكلة الحقيقية' },
      { id: 'solution', title: 'الحل: نظام الولاء' },
      { id: 'real-example', title: 'مثال واقعي' },
      { id: 'cost', title: 'هل التكلفة تستاهل؟' },
    ],
  },
  '/how-it-works': {
    title: 'في هذه الصفحة',
    items: [
      { id: 'integration', title: 'التكامل مع الكاشير' },
    ],
  },
  '/settings': {
    title: 'في هذه الصفحة',
    items: [
      { id: 'tips', title: 'نصائح ذهبية' },
    ],
  },
  '/reports': {
    title: 'في هذه الصفحة',
    items: [
      { id: 'dashboard', title: 'لوحة التحكم' },
      { id: 'important-metrics', title: 'الأرقام المهمة' },
      { id: 'insights', title: 'رؤى ذكية' },
      { id: 'export', title: 'تصدير التقارير' },
    ],
  },
  '/success-stories': {
    title: 'في هذه الصفحة',
    items: [
      { id: 'common', title: 'القاسم المشترك' },
    ],
  },
  '/next-steps': {
    title: 'في هذه الصفحة',
    items: [
      { id: 'checklist', title: 'قائمة الاستعداد' },
      { id: 'launch', title: 'خطوات الإطلاق' },
      { id: 'pricing', title: 'الأسعار' },
      { id: 'support', title: 'محتاج مساعدة؟' },
    ],
  },
};

export function TableOfContents() {
  const location = useLocation();
  const currentTOC = tocData[location.pathname];

  if (!currentTOC || currentTOC.items.length === 0) {
    return null;
  }

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <aside className="hidden xl:block w-64 pl-8 py-8 sticky top-24 self-start">
      <div className="space-y-3">
        <h3 className="text-xs font-semibold text-black uppercase tracking-wider mb-4">
          {currentTOC.title}
        </h3>
        <ul className="space-y-2">
          {currentTOC.items.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-right px-4 py-1.5 text-sm text-[#939393] hover:text-[#3B82F6] hover:bg-white rounded-2xl transition-colors"
              >
                {item.title}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}