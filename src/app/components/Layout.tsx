import { Outlet } from 'react-router';
import { TopNav } from './TopNav';
import { Sidebar } from './Sidebar';
import { TableOfContents } from './TableOfContents';

export default function Layout() {
  return (
    <div className="min-h-screen bg-[#F7F7F7]" dir="rtl">
      <TopNav />
      
      <div className="flex">
        <Sidebar />
        
        <main className="flex-1 lg:mr-64">
          <div className="max-w-[1400px] mx-auto flex">
            <div className="flex-1 px-4 md:px-8 py-8">
              <Outlet />
            </div>
            
            <TableOfContents />
          </div>
        </main>
      </div>
    </div>
  );
}