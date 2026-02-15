import { ChevronRight, ChevronLeft } from 'lucide-react';

export function PrevNext() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 pt-8">
      <a
        href="#"
        className="flex items-center gap-3 p-4 rounded-none bg-white hover:bg-gray-50 transition-all group"
      >
        <ChevronRight className="size-5 text-gray-500 group-hover:text-[#3B82F6] flex-shrink-0" />
        <div>
          <div className="text-xs text-gray-500 mb-1">السابق</div>
          <div className="text-sm font-medium text-black">مقدمة BOND IT</div>
        </div>
      </a>

      <a
        href="#"
        className="flex items-center justify-end gap-3 p-4 rounded-none bg-white hover:bg-gray-50 transition-all group text-right"
      >
        <div>
          <div className="text-xs text-gray-500 mb-1">التالي</div>
          <div className="text-sm font-medium text-black">إعدادات متقدمة</div>
        </div>
        <ChevronLeft className="size-5 text-gray-500 group-hover:text-[#3B82F6] flex-shrink-0" />
      </a>
    </div>
  );
}