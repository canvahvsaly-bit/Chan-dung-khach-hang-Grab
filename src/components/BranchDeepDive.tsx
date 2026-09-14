import React, { useState } from 'react';
import { 
  DollarSign, 
  ShoppingBag, 
  TrendingDown, 
  TrendingUp, 
  Percent, 
  AlertCircle, 
  CheckCircle2, 
  Sparkles, 
  Clock, 
  ArrowRight,
  Flame,
  HelpCircle
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';
import { BRANCHES_DATA } from '../data/reportData';
import { formatVND, formatMillionVND } from '../utils/format';
import { ActiveTab } from './Header';

interface BranchDeepDiveProps {
  branchId: 'truong-sa' | 'tran-huy-lieu' | 'le-quang-dinh';
  onNavigateTab: (tab: ActiveTab) => void;
}

export const BranchDeepDive: React.FC<BranchDeepDiveProps> = ({ branchId, onNavigateTab }) => {
  const branch = BRANCHES_DATA[branchId];
  const [completedActions, setCompletedActions] = useState<Record<string, boolean>>({});

  const toggleAction = (id: string) => {
    setCompletedActions(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const appChartData = branch.apps.map(app => ({
    name: app.appName,
    'DT Trước CK': app.grossRevenue / 1000000,
    'Tổng Chi Phí': app.totalCost / 1000000,
    'DT Thực Nhận': app.netRevenue / 1000000,
    'Chi Phí %': app.costRatio,
    AOV: app.aov / 1000,
  }));

  const isGrowthPositive = branch.netRevenueMoM >= 0;

  return (
    <div className="space-y-6">
      {/* Branch Header Banner */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white shadow-md border border-slate-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-xl font-bold text-white tracking-tight">
                {branch.name}
              </h2>
              <span className={`text-xs px-2.5 py-0.5 rounded-full font-semibold border ${
                branch.costRatio < 50
                  ? 'bg-emerald-500/20 text-emerald-300 border-emerald-500/40'
                  : branch.costRatio > 55
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40'
                  : 'bg-amber-500/20 text-amber-300 border-amber-500/40'
              }`}>
                Chi phí: {branch.costRatio.toFixed(2)}% DT Gộp
              </span>
            </div>
            <p className="text-xs text-slate-300 mt-1">
              {branch.addressSummary}
            </p>
          </div>

          {/* Quick Metrics Header */}
          <div className="flex flex-wrap items-center gap-4 bg-slate-800/80 p-3 rounded-lg border border-slate-700/60 text-xs">
            <div>
              <div className="text-slate-400">DT Thực nhận</div>
              <div className="text-base font-bold text-emerald-400">
                {formatVND(branch.netRevenue)}
              </div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div>
              <div className="text-slate-400">Tăng trưởng MoM</div>
              <div className={`text-sm font-semibold flex items-center gap-0.5 ${isGrowthPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
                {isGrowthPositive ? <TrendingUp className="w-3.5 h-3.5" /> : <TrendingDown className="w-3.5 h-3.5" />}
                {isGrowthPositive ? `+${branch.netRevenueMoM}%` : `${branch.netRevenueMoM}%`}
              </div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div>
              <div className="text-slate-400">Tổng số đơn</div>
              <div className="text-sm font-bold text-white">
                {branch.totalOrders} đơn
              </div>
            </div>
            <div className="w-px h-8 bg-slate-700" />
            <div>
              <div className="text-slate-400">AOV Trung bình</div>
              <div className="text-sm font-bold text-white">
                {formatVND(branch.aov)}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4 Cards Summary */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Doanh thu Trước CK</span>
          <div className="text-lg font-bold text-slate-900 mt-1">{formatVND(branch.grossRevenue)}</div>
          <div className="text-xs text-slate-400 mt-1">Doanh số niêm yết trên 4 app</div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Chi phí Khuyến mãi (Voucher)</span>
          <div className="text-lg font-bold text-purple-700 mt-1">{formatVND(branch.promoCost)}</div>
          <div className="text-xs text-purple-600 mt-1">
            Chiếm {((branch.promoCost / branch.grossRevenue) * 100).toFixed(1)}% Doanh thu gộp
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Chiết khấu sàn &amp; Ads</span>
          <div className="text-lg font-bold text-amber-700 mt-1">
            {formatVND(branch.commissionCost + branch.adsCost)}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Phí sàn: {formatMillionVND(branch.commissionCost)} | Ads: {formatMillionVND(branch.adsCost)}
          </div>
        </div>
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">DT Thực Nhận Về Tài Khoản</span>
          <div className="text-lg font-bold text-emerald-600 mt-1">{formatVND(branch.netRevenue)}</div>
          <div className="text-xs text-slate-500 mt-1">
            Tỷ lệ thực giữ: <strong className="text-emerald-700">{((branch.netRevenue / branch.grossRevenue) * 100).toFixed(1)}%</strong>
          </div>
        </div>
      </div>

      {/* Main Table: 4 Apps Breakdown */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-bold text-base text-slate-900">
              Chi Tiết Kết Quả Kinh Doanh 4 Ứng Dụng (Tháng 8)
            </h3>
            <p className="text-xs text-slate-500">
              Số đơn, Doanh thu trước CK, Khuyến mãi, Phí sàn, Quảng cáo, DT thực nhận và AOV
            </p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <th className="py-3 px-3">Ứng dụng</th>
                <th className="py-3 px-3 text-right">Số đơn</th>
                <th className="py-3 px-3 text-right">DT Trước CK</th>
                <th className="py-3 px-3 text-right">Khuyến mãi</th>
                <th className="py-3 px-3 text-right">Chiết khấu sàn</th>
                <th className="py-3 px-3 text-right">Quảng cáo</th>
                <th className="py-3 px-3 text-right">Tổng chi phí</th>
                <th className="py-3 px-3 text-right bg-emerald-50/50 text-emerald-900 font-bold">DT Thực nhận</th>
                <th className="py-3 px-3 text-right">% Chi phí</th>
                <th className="py-3 px-3 text-right">AOV (đ/đơn)</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {branch.apps.map((app) => {
                const isHighCost = app.costRatio > 55;
                const isClean = app.costRatio < 25;
                return (
                  <tr key={app.appName} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-3 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span className={`w-2.5 h-2.5 rounded-full ${
                          app.appName === 'GrabFood' ? 'bg-emerald-600' :
                          app.appName === 'ShopeeFood' ? 'bg-orange-600' :
                          app.appName === 'BeFood' ? 'bg-yellow-500' : 'bg-cyan-500'
                        }`} />
                        <span>{app.appName}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-3 text-right font-medium">
                      {app.orders} đơn
                      {app.ordersChangeMoM !== undefined && (
                        <div className={`text-[10px] ${app.ordersChangeMoM >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                          {app.ordersChangeMoM >= 0 ? `+${app.ordersChangeMoM}%` : `${app.ordersChangeMoM}%`}
                        </div>
                      )}
                    </td>
                    <td className="py-3.5 px-3 text-right font-medium">
                      {formatVND(app.grossRevenue)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-purple-700">
                      {formatVND(app.promoCost)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-amber-700">
                      {formatVND(app.commissionCost)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-orange-700">
                      {app.adsCost > 0 ? formatVND(app.adsCost) : '0đ'}
                    </td>
                    <td className="py-3.5 px-3 text-right font-medium text-rose-600">
                      {formatVND(app.totalCost)}
                    </td>
                    <td className="py-3.5 px-3 text-right font-bold text-emerald-700 bg-emerald-50/40 text-sm">
                      {formatVND(app.netRevenue)}
                    </td>
                    <td className="py-3.5 px-3 text-right font-semibold">
                      <span className={`px-2 py-0.5 rounded ${
                        isClean 
                          ? 'bg-cyan-100 text-cyan-800' 
                          : isHighCost 
                          ? 'bg-rose-100 text-rose-800' 
                          : 'bg-slate-100 text-slate-800'
                      }`}>
                        {app.costRatio.toFixed(2)}%
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right font-semibold text-slate-900">
                      {formatVND(app.aov)}
                    </td>
                  </tr>
                );
              })}

              {/* Total Row */}
              <tr className="bg-slate-50/90 font-bold text-slate-900 border-t-2 border-slate-300">
                <td className="py-3.5 px-3">TỔNG CỘNG CHI NHÁNH</td>
                <td className="py-3.5 px-3 text-right">{branch.totalOrders} đơn</td>
                <td className="py-3.5 px-3 text-right">{formatVND(branch.grossRevenue)}</td>
                <td className="py-3.5 px-3 text-right text-purple-700">{formatVND(branch.promoCost)}</td>
                <td className="py-3.5 px-3 text-right text-amber-700">{formatVND(branch.commissionCost)}</td>
                <td className="py-3.5 px-3 text-right text-orange-700">{formatVND(branch.adsCost)}</td>
                <td className="py-3.5 px-3 text-right text-rose-600">{formatVND(branch.totalCost)}</td>
                <td className="py-3.5 px-3 text-right text-emerald-800 bg-emerald-100/50 text-sm">
                  {formatVND(branch.netRevenue)}
                </td>
                <td className="py-3.5 px-3 text-right text-rose-700">{branch.costRatio.toFixed(2)}%</td>
                <td className="py-3.5 px-3 text-right text-slate-900">{formatVND(branch.aov)}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Chart: App Breakdown */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-sm text-slate-900">
            So Sánh Doanh Thu &amp; Chi Phí Giữa 4 App (Triệu VNĐ)
          </h3>
          <span className="text-xs text-slate-500">Tháng 8</span>
        </div>
        <div className="h-60 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={appChartData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="name" tick={{ fontSize: 11 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 11 }} stroke="#64748b" />
              <Tooltip 
                formatter={(val: number) => [`${val.toFixed(2)}M VNĐ`, '']}
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
              <Bar dataKey="DT Trước CK" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Tổng Chi Phí" fill="#f43f5e" radius={[4, 4, 0, 0]} />
              <Bar dataKey="DT Thực Nhận" fill="#10b981" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Deep Diagnosis Cards per App */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {branch.apps.map((app) => (
          <div key={app.appName} className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900">
                  {app.appName}
                </span>
                <span className="text-xs px-2 py-0.5 rounded font-semibold bg-slate-100 text-slate-700">
                  Chi phí: {app.costRatio.toFixed(1)}%
                </span>
              </div>

              {/* Strengths */}
              {app.keyStrengths.length > 0 && (
                <div className="mb-2">
                  <div className="text-[11px] font-semibold text-emerald-700 mb-1 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Điểm sáng &amp; Lợi thế:</span>
                  </div>
                  <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 pl-1">
                    {app.keyStrengths.map((st, i) => (
                      <li key={i}>{st}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Diagnosis / Issues */}
              <div>
                <div className="text-[11px] font-semibold text-rose-700 mb-1 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Vấn đề &amp; Cảnh báo:</span>
                </div>
                <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 pl-1">
                  {app.keyDiagnosis.map((diag, i) => (
                    <li key={i}>{diag}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-3 pt-2.5 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
              <span>AOV: <strong className="text-slate-900">{formatVND(app.aov)}</strong></span>
              <span>DT Thực: <strong className="text-emerald-700">{formatMillionVND(app.netRevenue)}</strong></span>
            </div>
          </div>
        ))}
      </div>

      {/* Customer & Heatmap Highlight Banner */}
      <div className="p-4 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-950 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span className="font-bold text-sm">
              Dữ Liệu Khách Hàng &amp; Giờ Vàng (GrabMerchant 90 ngày)
            </span>
            <span className="text-xs px-2 py-0.5 bg-indigo-200 text-indigo-800 rounded font-semibold">
              Sales-to-spend: {branch.customerData.salesToSpendRatio}x
            </span>
          </div>
          <p className="text-xs text-indigo-800 mt-1">
            Tổng khách: <strong>{branch.customerData.totalCustomers}</strong> | Tỷ lệ quay lại: <strong>{branch.customerData.repeatRate}%</strong> | {branch.customerData.peakPattern.lunchPeak}
          </p>
        </div>
        <button
          onClick={() => onNavigateTab('customers')}
          className="px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-semibold shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Khám Phá Heatmap Chi Tiết</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* Branch Action Items */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Flame className="w-4 h-4 text-orange-500" />
              <span>Hành Động Cải Thiện Cần Triển Khai Cho {branch.name} Trong Tháng 9</span>
            </h3>
            <p className="text-xs text-slate-500">
              Đánh dấu các hạng mục hành động để theo dõi tiến độ vận hành
            </p>
          </div>
          <span className="text-xs font-medium text-slate-500">
            {Object.values(completedActions).filter(Boolean).length}/{branch.actionItems.length} hoàn thành
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {branch.actionItems.map((item) => {
            const isDone = completedActions[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleAction(item.id)}
                className={`p-3.5 rounded-xl border transition-all cursor-pointer select-none ${
                  isDone
                    ? 'bg-emerald-50/60 border-emerald-300 text-slate-700'
                    : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-800'
                }`}
              >
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={!!isDone}
                    onChange={() => {}}
                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className={`font-semibold text-xs ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {item.title}
                      </span>
                      <span className={`text-[10px] px-1.5 py-0.2 rounded font-medium ${
                        item.priority === 'high' ? 'bg-rose-100 text-rose-700' : 'bg-amber-100 text-amber-700'
                      }`}>
                        {item.priority === 'high' ? 'Ưu tiên cao' : 'Ưu tiên vừa'}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="text-[11px] font-semibold text-emerald-700 pt-0.5">
                      Mục tiêu: {item.expectedImpact}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
