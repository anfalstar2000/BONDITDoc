import { Outlet } from 'react-router';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { Breadcrumbs } from './Breadcrumbs';
import { ScrollToTop } from './ScrollToTop';
export default function Layout() {
 return (
 <div className="min-h-screen bg-[#F8F9FA]" dir="rtl">
 <TopNav />
 <div className="flex">
 <Sidebar />
 <main className="flex-1 lg:mr-64">
 <div className="w-full">
 <div className="px-6 md:px-12 py-8 max-w-7xl mx-auto">
 <Breadcrumbs />
 <Outlet />
 </div>
 </div>
 </main>
 </div>
 <ScrollToTop />
 </div>
 );
}