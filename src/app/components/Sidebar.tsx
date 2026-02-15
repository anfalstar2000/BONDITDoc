import { Link, useLocation } from 'react-router';
import { 
  Home, HelpCircle, Settings, Users, Gift, Award, 
  Target, MessageSquare, Bot, Package, Layers, ShoppingBag 
} from 'lucide-react';
import { useState } from 'react';

interface NavItem {
  title: string;
  path: string;
  icon: any;
}

const navigationItems: NavItem[] = [
  { title: 'ما هو BOND IT؟', path: '/', icon: Home },
  { title: 'لماذا نظام الولاء؟', path: '/why-loyalty', icon: HelpCircle },
  { title: 'كيف يعمل النظام؟', path: '/how-it-works', icon: Settings },
  { title: 'أنواع البرامج', path: '/program-types', icon: Layers },
  { title: 'رحلة العميل', path: '/customer-experience', icon: Users },
  { title: 'النقاط والمكافآت', path: '/points-rewards', icon: Gift },
  { title: 'الشارات والمستويات', path: '/badges-tiers', icon: Award },
  { title: 'التحديات', path: '/challenges', icon: Target },
  { title: 'برنامج الإحالة', path: '/referral', icon: Users },
  { title: 'الرسائل التسويقية', path: '/marketing-messages', icon: MessageSquare },
  { title: 'المساعد الذكي', path: '/ai-assistant', icon: Bot },
  { title: 'العملاء', path: '/customers', icon: Users },
  { title: 'التكاملات', path: '/integrations', icon: Package },
  { title: 'الإعدادات وإدارة الحساب', path: '/settings', icon: Settings },
  { title: 'كيف اختار الباقة المناسبة', path: '/success-stories', icon: ShoppingBag },
];

export function Sidebar() {
  const location = useLocation();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside className={`hidden lg:block fixed right-0 top-16 bottom-0 overflow-y-auto bg-white border-l border-gray-100 transition-all duration-300 ${
      isCollapsed ? 'w-20' : 'w-64'
    }`}>
      <nav className="p-4">
        <ul className="space-y-1">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all ${
                    isActive
                      ? 'bg-[#3B82F6] text-white font-medium'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-[#3B82F6]'
                  }`}
                  title={isCollapsed ? item.title : undefined}
                >
                  <Icon className={`size-5 shrink-0 ${isActive ? 'text-white' : 'text-gray-500'}`} />
                  {!isCollapsed && <span className="flex-1">{item.title}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}