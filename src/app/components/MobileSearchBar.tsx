import { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { useNavigate } from 'react-router';

interface SearchResult {
  title: string;
  path: string;
  section: string;
}

const searchableContent: SearchResult[] = [
  { title: 'ما هو BOND IT؟', path: '/', section: 'مرحبًا بك' },
  { title: 'لماذا نظام الولاء؟', path: '/why-loyalty', section: 'مرحبًا بك' },
  { title: 'كيف يعمل النظام؟', path: '/how-it-works', section: 'البداية' },
  { title: 'أنواع البرامج', path: '/program-types', section: 'البداية' },
  { title: 'رحلة العميل', path: '/customer-experience', section: 'تجربة العميل' },
  { title: 'النقاط والمكافآت', path: '/points-rewards', section: 'الميزات' },
  { title: 'الشارات والمستويات', path: '/badges-tiers', section: 'الميزات' },
  { title: 'التحديات', path: '/challenges', section: 'الميزات' },
  { title: 'برنامج الإحالة', path: '/referral', section: 'الميزات' },
  { title: 'الرسائل التسويقية', path: '/marketing-messages', section: 'الميزات' },
  { title: 'المساعد الذكي', path: '/ai-assistant', section: 'الميزات' },
  { title: 'العملاء', path: '/customers', section: 'الميزات' },
  { title: 'التكاملات', path: '/integrations', section: 'الميزات' },
  { title: 'الإعدادات وإدارة الحساب', path: '/settings', section: 'الميزات' },
  { title: 'كيف اختار الباقة المناسبة', path: '/success-stories', section: 'الباقات' },
];

interface MobileSearchBarProps {
  onNavigate?: () => void;
}

export function MobileSearchBar({ onNavigate }: MobileSearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (query.trim().length < 2) {
      setResults([]);
      return;
    }

    const searchQuery = query.toLowerCase();
    const filtered = searchableContent.filter(
      (item) =>
        item.title.toLowerCase().includes(searchQuery) ||
        item.section.toLowerCase().includes(searchQuery)
    );

    setResults(filtered.slice(0, 5)); // Show max 5 results on mobile
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    setQuery('');
    setResults([]);
    onNavigate?.();
  };

  return (
    <div className="mb-6">
      <div className="relative">
        <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-500 z-10" />
        <input
          type="text"
          placeholder="البحث في التوثيق..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full pr-10 pl-10 py-2 bg-white border border-gray-200 text-sm focus:outline-none focus:border-[#3B82F6] rounded-none transition-colors"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 z-10"
          >
            <X className="size-4" />
          </button>
        )}
      </div>

      {results.length > 0 && (
        <div className="mt-2 bg-gray-50 rounded-none border border-gray-200">
          {results.map((result, index) => (
            <button
              key={index}
              onClick={() => handleSelect(result.path)}
              className="w-full text-right px-3 py-2 hover:bg-white transition-colors border-b border-gray-100 last:border-b-0"
            >
              <p className="text-sm font-medium text-black">{result.title}</p>
              <p className="text-xs text-gray-500 mt-0.5">{result.section}</p>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
