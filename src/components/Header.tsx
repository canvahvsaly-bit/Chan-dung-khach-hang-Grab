import React from 'react';
import { 
  BarChart3, 
  Store, 
  GitCompare, 
  Clock, 
  CheckSquare, 
  Calculator, 
  Printer,
  TrendingDown,
  Sparkles
} from 'lucide-react';

export type ActiveTab = 
  | 'overview' 
  | 'truong-sa' 
  | 'tran-huy-lieu' 
  | 'le-quang-dinh' 
  | 'compare' 
  | 'customers' 
  | 'actions' 
  | 'simulator';

interface HeaderProps {
  activeTab: ActiveTab;
  onSelectTab: (tab: ActiveTab) => void;
  onOpenPrint: () => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, onSelectTab, onOpenPrint }) => {
  const navItems: { id: ActiveTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    { id: 'customers', label: 'Khách Hàng & Heatmap', icon: <Clock className="w-4 h-4" /> },
    { id: 'overview', label: 'Tổng Quan Chuỗi', icon: <BarChart3 className="w-4 h-4" /> },
    { id: 'truong-sa', label: 'Trường Sa', icon: <Store className="w-4 h-4" />, badge: '43.8% DT' },
    { id: 'tran-huy-lieu', label: 'Trần Huy Liệu', icon: <Store className="w-4 h-4" />, badge: '+12.7%' },
    { id: 'le-quang-dinh', label: 'Lê Quang Định', icon: <Store className="w-4 h-4" />, badge: 'Cần tối ưu' },
    { id: 'compare', label: 'So Sánh 3 Chi Nhánh', icon: <GitCompare className="w-4 h-4" /> },
    { id: 'actions', label: 'Kế Hoạch Tháng 9', icon: <CheckSquare className="w-4 h-4" />, badge: '5 Trụ cột' },
    { id: 'simulator', label: 'Mô Phỏng Tối Ưu', icon: <Calculator className="w-4 h-4" /> },
  ];

  return (
    <header className="bg-slate-900 border-b border-slate-800 text-white sticky top-0 z-40 shadow-lg">
      {/* Top Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-400 flex items-center justify-center shadow-md shadow-teal-500/20">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="font-bold text-lg tracking-tight text-white">
                BÁO CÁO KINH DOANH ONLINE DELIVERY
              </h1>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-medium border border-emerald-500/30">
                Tháng 8 / Kỳ 2608
              </span>
            </div>
            <p className="text-xs text-slate-400">
              ShopeeFood • GrabFood • BeFood • Xanh SM | 3 Chi nhánh: Trường Sa, Trần Huy Liệu, Lê Quang Định
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2.5">
          <div className="hidden sm:flex items-center gap-2 bg-slate-800/80 px-3 py-1.5 rounded-lg border border-slate-700/60 text-xs">
            <span className="text-slate-400">Tỷ lệ chi phí:</span>
            <span className="text-rose-400 font-semibold flex items-center gap-1">
              <TrendingDown className="w-3.5 h-3.5" /> 53.41%
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Mục tiêu T9:</span>
            <span className="text-emerald-400 font-semibold">&lt; 48%</span>
          </div>

          <button
            id="btn-print-report"
            onClick={onOpenPrint}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 transition-colors text-xs font-semibold text-white shadow-sm cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Xem &amp; In Bản Báo Cáo A4</span>
          </button>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-800/80">
        <nav className="flex space-x-1 overflow-x-auto py-2 scrollbar-thin scrollbar-thumb-slate-700">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`nav-tab-${item.id}`}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap transition-all cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/70 border border-transparent'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
                {item.badge && (
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                      item.badge.includes('+')
                        ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700/50'
                        : item.badge.includes('Cần')
                        ? 'bg-rose-900/60 text-rose-300 border border-rose-700/50'
                        : 'bg-slate-700 text-slate-300'
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
