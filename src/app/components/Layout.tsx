import { Outlet } from 'react-router';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { Breadcrumbs } from './Breadcrumbs';
import { PrevNext } from './PrevNext';
import { ScrollToTop } from './ScrollToTop';
export default function Layout() {
 return (
 <div className="min-h-screen bg-gray-50" dir="rtl">
 <TopNav />
 <div className="flex">
 <Sidebar />
 <main className="flex-1 lg:mr-64">
 <div className="max-w-[1400px] mx-auto">
 <div className="px-4 md:px-8 py-8">
 <Breadcrumbs />
 <Outlet />
 <PrevNext />
 </div>
 </div>
 </main>
 </div>
 <ScrollToTop />
 </div>
 );
}