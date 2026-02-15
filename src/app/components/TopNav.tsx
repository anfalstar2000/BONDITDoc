import { Search, ExternalLink } from 'lucide-react';
import { MobileNav } from './MobileNav';
import Logo from '../../imports/Group435';

export function TopNav() {
  return (
    <nav className="sticky top-0 z-50 bg-white">
      <div className="px-4 md:px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-4 md:gap-8">
          <MobileNav />
          <div className="w-24 md:w-28">
            <Logo />
          </div>
          
          <div className="relative hidden md:block">
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 size-4 text-gray-400" />
            <input
              type="text"
              placeholder="البحث في التوثيق..."
              className="w-[400px] pr-10 pl-4 py-2 bg-white text-sm focus:outline-none rounded-lg"
            />
          </div>
        </div>

        <button className="px-6 py-2 bg-[#3B82F6] text-white text-xs md:text-sm rounded-[15px] hover:opacity-90 transition-all flex items-center gap-2">
          <ExternalLink className="size-4" />
          <span className="hidden sm:inline">انتقل إلى لوحة التحكم</span>
          <span className="sm:hidden">لوحة التحكم</span>
        </button>
      </div>
    </nav>
  );
}