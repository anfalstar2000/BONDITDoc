import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router';

interface SearchResult {
  title: string;
  path: string;
  section: string;
  preview: string;
}

const searchableContent: SearchResult[] = [
  { title: 'ما هو BOND IT؟', path: '/', section: 'مرحبًا بك', preview: 'نظام ولاء متكامل لمتاجر سلة' },
  { title: 'لماذا نظام الولاء؟', path: '/why-loyalty', section: 'مرحبًا بك', preview: 'أهمية برامج الولاء للمتاجر الإلكترونية' },
  { title: 'كيف يعمل النظام؟', path: '/how-it-works', section: 'البداية', preview: 'شرح آلية عمل نظام BOND IT' },
  { title: 'أنواع البرامج', path: '/program-types', section: 'البداية', preview: 'برامج الولاء المختلفة المتاحة' },
  { title: 'رحلة العميل', path: '/customer-experience', section: 'تجربة العميل', preview: 'كيف يتفاعل العميل مع برنامج الولاء' },
  { title: 'النقاط والمكافآت', path: '/points-rewards', section: 'الميزات', preview: 'إدارة النقاط والمكافآت' },
  { title: 'الشارات والمستويات', path: '/badges-tiers', section: 'الميزات', preview: 'نظام المستويات والترقيات' },
  { title: 'التحديات', path: '/challenges', section: 'الميزات', preview: 'إنشاء تحديات لتحفيز العملاء' },
  { title: 'برنامج الإحالة', path: '/referral', section: 'الميزات', preview: 'برنامج إحالة العملاء والمكافآت' },
  { title: 'الرسائل التسويقية', path: '/marketing-messages', section: 'الميزات', preview: 'إرسال رسائل تلقائية للعملاء' },
  { title: 'المساعد الذكي', path: '/ai-assistant', section: 'الميزات', preview: 'مساعد ذكي لإنشاء المحتوى' },
  { title: 'العملاء', path: '/customers', section: 'الميزات', preview: 'إدارة قاعدة بيانات العملاء' },
  { title: 'التكاملات', path: '/integrations', section: 'الميزات', preview: 'التكامل مع منصات أخرى' },
  { title: 'الإعدادات وإدارة الحساب', path: '/settings', section: 'الميزات', preview: 'إعدادات النظام والحساب' },
  { title: 'كيف اختار الباقة المناسبة', path: '/success-stories', section: 'الباقات', preview: 'مقارنة الباقات والأسعار' },
];

export function SearchBar() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      setIsOpen(false);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.section.toLowerCase().includes(searchQuery) ||
        item.preview.toLowerCase().includes(searchQuery)
    );

    setResults(filtered);
    setIsOpen(filtered.length > 0);
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    setQuery('');
    setIsOpen(false);
  };

  const handleClear = () => {
    setQuery('');
    setResults([]);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={searchRef}>
      <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-500 z-10" />
      <input
        type="text"
        placeholder="البحث في التوثيق..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onFocus={() => query.length >= 2 && results.length > 0 && setIsOpen(true)}
        className="w-[400px] pr-10 pl-10 py-2 bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#3B82F6] rounded-none transition-colors"
      />
      {query && (
        <button
          onClick={handleClear}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
        >
          <X className="size-4" />
        </button>
      )}

      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-none shadow-lg max-h-[400px] overflow-y-auto z-50">
          <div className="p-2">
            <p className="text-xs text-gray-500 px-3 py-2">
              {results.length} نتيجة
            </p>
            {results.map((result, index) => (
              <button
                key={index}
                onClick={() => handleSelect(result.path)}
                className="w-full text-right px-3 py-2 hover:bg-gray-50 rounded-none transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <Search className="size-4 text-gray-400 mt-0.5 shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-black group-hover:text-[#3B82F6] transition-colors">
                      {result.title}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">{result.section}</p>
                    <p className="text-xs text-gray-400 mt-1 line-clamp-1">
                      {result.preview}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
