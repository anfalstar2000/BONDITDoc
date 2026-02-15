import { ChevronLeft } from 'lucide-react';

export function Breadcrumbs() {
 return (
 <nav className="flex items-center gap-2 text-sm text-gray-500 mb-4">
 <a href="#" className="hover:text-gray-900 transition-colors">
 الرئيسية
 </a>
 <ChevronLeft className="size-4" />
 <span className="text-gray-900">مرحبًا بك في BOND IT</span>
 </nav>
 );
}
