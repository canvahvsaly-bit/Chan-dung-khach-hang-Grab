import React, { useState } from 'react';
import { Header, ActiveTab } from './components/Header';
import { OverviewChain } from './components/OverviewChain';
import { BranchDeepDive } from './components/BranchDeepDive';
import { BranchComparison } from './components/BranchComparison';
import { CustomerHeatmapView } from './components/CustomerHeatmapView';
import { ActionPlanView } from './components/ActionPlanView';
import { CostSimulator } from './components/CostSimulator';
import { PrintReportModal } from './components/PrintReportModal';
import { 
  Building2, 
  Store, 
  HelpCircle, 
  Download, 
  TrendingUp,
  FileSpreadsheet
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>('overview');
  const [isPrintModalOpen, setIsPrintModalOpen] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col font-sans antialiased">
      {/* Navigation Header */}
      <Header 
        activeTab={activeTab} 
        onSelectTab={setActiveTab} 
        onOpenPrint={() => setIsPrintModalOpen(true)} 
      />

      {/* Main Workspace Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {activeTab === 'overview' && (
          <OverviewChain 
            onNavigateBranch={(branchId) => setActiveTab(branchId)}
            onNavigateActions={() => setActiveTab('actions')}
          />
        )}

        {activeTab === 'truong-sa' && (
          <BranchDeepDive 
            branchId="truong-sa" 
            onNavigateTab={setActiveTab} 
          />
        )}

        {activeTab === 'tran-huy-lieu' && (
          <BranchDeepDive 
            branchId="tran-huy-lieu" 
            onNavigateTab={setActiveTab} 
          />
        )}

        {activeTab === 'le-quang-dinh' && (
          <BranchDeepDive 
            branchId="le-quang-dinh" 
            onNavigateTab={setActiveTab} 
          />
        )}

        {activeTab === 'compare' && (
          <BranchComparison />
        )}

        {activeTab === 'customers' && (
          <CustomerHeatmapView />
        )}

        {activeTab === 'actions' && (
          <ActionPlanView />
        )}

        {activeTab === 'simulator' && (
          <CostSimulator />
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-700">Hệ Thống Báo Cáo Kinh Doanh Online Delivery</span>
            <span>•</span>
            <span>Kỳ 2608 (Tháng 8) &amp; Định hướng Kế hoạch Tháng 9</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>Dữ liệu: ShopeeFood, GrabFood, BeFood, Xanh SM</span>
            <span>•</span>
            <button 
              onClick={() => setIsPrintModalOpen(true)}
              className="text-emerald-700 font-semibold hover:underline cursor-pointer"
            >
              In Báo Cáo A4
            </button>
          </div>
        </div>
      </footer>

      {/* Full Executive Print / PDF Modal */}
      <PrintReportModal 
        isOpen={isPrintModalOpen} 
        onClose={() => setIsPrintModalOpen(false)} 
      />
    </div>
  );
}
