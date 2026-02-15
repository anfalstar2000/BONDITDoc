import { ExternalLink } from 'lucide-react';
import { MobileNav } from './MobileNav';
import { SearchBar } from './SearchBar';
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
 
 <div className="hidden md:block">
 <SearchBar />
 </div>
 </div>

 <a 
 href="https://app.bonditloyalty.io/login"
 target="_blank"
 rel="noopener noreferrer"
 className="px-6 py-2 bg-[#3B82F6] text-white text-xs md:text-sm rounded-full hover:opacity-90 transition-all flex items-center gap-2"
 >
 <ExternalLink className="size-4" />
 <span className="hidden sm:inline">انتقل إلى لوحة التحكم</span>
 <span className="sm:hidden">لوحة التحكم</span>
 </a>
 </div>
 </nav>
 );
}