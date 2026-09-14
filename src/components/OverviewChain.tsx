import React from 'react';
import { 
  DollarSign, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  Percent, 
  ShoppingBag, 
  Megaphone, 
  ArrowRight,
  ShieldAlert,
  CheckCircle2,
  PieChart as PieIcon
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell 
} from 'recharts';
import { CHAIN_SUMMARY, BRANCHES_DATA } from '../data/reportData';
import { formatVND, formatMillionVND } from '../utils/format';
import { ActiveTab } from './Header';

interface OverviewChainProps {
  onNavigateBranch: (branchId: ActiveTab) => void;
  onNavigateActions: () => void;
}

export const OverviewChain: React.FC<OverviewChainProps> = ({ onNavigateBranch, onNavigateActions }) => {
  const branchComparisonData = [
    {
      name: 'Trường Sa',
      id: 'truong-sa' as ActiveTab,
      'DT Trước CK': BRANCHES_DATA['truong-sa'].grossRevenue / 1000000,
      'Tổng Chi Phí': BRANCHES_DATA['truong-sa'].totalCost / 1000000,
      'DT Thực Nhận': BRANCHES_DATA['truong-sa'].netRevenue / 1000000,
      costRatio: BRANCHES_DATA['truong-sa'].costRatio,
      growth: BRANCHES_DATA['truong-sa'].netRevenueMoM,
      share: ((BRANCHES_DATA['truong-sa'].netRevenue / CHAIN_SUMMARY.netRevenue) * 100).toFixed(1)
    },
    {
      name: 'Lê Quang Định',
      id: 'le-quang-dinh' as ActiveTab,
      'DT Trước CK': BRANCHES_DATA['le-quang-dinh'].grossRevenue / 1000000,
      'Tổng Chi Phí': BRANCHES_DATA['le-quang-dinh'].totalCost / 1000000,
      'DT Thực Nhận': BRANCHES_DATA['le-quang-dinh'].netRevenue / 1000000,
      costRatio: BRANCHES_DATA['le-quang-dinh'].costRatio,
      growth: BRANCHES_DATA['le-quang-dinh'].netRevenueMoM,
      share: ((BRANCHES_DATA['le-quang-dinh'].netRevenue / CHAIN_SUMMARY.netRevenue) * 100).toFixed(1)
    },
    {
      name: 'Trần Huy Liệu',
      id: 'tran-huy-lieu' as ActiveTab,
      'DT Trước CK': BRANCHES_DATA['tran-huy-lieu'].grossRevenue / 1000000,
      'Tổng Chi Phí': BRANCHES_DATA['tran-huy-lieu'].totalCost / 1000000,
      'DT Thực Nhận': BRANCHES_DATA['tran-huy-lieu'].netRevenue / 1000000,
      costRatio: BRANCHES_DATA['tran-huy-lieu'].costRatio,
      growth: BRANCHES_DATA['tran-huy-lieu'].netRevenueMoM,
      share: ((BRANCHES_DATA['tran-huy-lieu'].netRevenue / CHAIN_SUMMARY.netRevenue) * 100).toFixed(1)
    },
  ];

  // Cost structure pie data
  const costStructureData = [
    { name: 'Khuyến mãi (Giảm giá/Voucher)', value: CHAIN_SUMMARY.promoCost, color: '#f43f5e', percent: '71.0%' },
    { name: 'Chiết khấu nền tảng sàn', value: CHAIN_SUMMARY.commissionCost, color: '#f59e0b', percent: '25.9%' },
    { name: 'Chi phí Quảng cáo (Ads)', value: CHAIN_SUMMARY.adsCost, color: '#3b82f6', percent: '3.1%' },
  ];

  // App breakdown aggregation across all branches
  const appAggregated = [
    {
      appName: 'GrabFood',
      gross: BRANCHES_DATA['truong-sa'].apps[0].grossRevenue + BRANCHES_DATA['tran-huy-lieu'].apps[1].grossRevenue + BRANCHES_DATA['le-quang-dinh'].apps[0].grossRevenue,
      net: BRANCHES_DATA['truong-sa'].apps[0].netRevenue + BRANCHES_DATA['tran-huy-lieu'].apps[1].netRevenue + BRANCHES_DATA['le-quang-dinh'].apps[0].netRevenue,
      orders: 591 + 248 + 586,
      color: '#059669'
    },
    {
      appName: 'ShopeeFood',
      gross: BRANCHES_DATA['truong-sa'].apps[1].grossRevenue + BRANCHES_DATA['tran-huy-lieu'].apps[0].grossRevenue + BRANCHES_DATA['le-quang-dinh'].apps[1].grossRevenue,
      net: BRANCHES_DATA['truong-sa'].apps[1].netRevenue + BRANCHES_DATA['tran-huy-lieu'].apps[0].netRevenue + BRANCHES_DATA['le-quang-dinh'].apps[1].netRevenue,
      orders: 494 + 409 + 370,
      color: '#ea580c'
    },
    {
      appName: 'BeFood',
      gross: BRANCHES_DATA['truong-sa'].apps[2].grossRevenue + BRANCHES_DATA['tran-huy-lieu'].apps[2].grossRevenue + BRANCHES_DATA['le-quang-dinh'].apps[2].grossRevenue,
      net: BRANCHES_DATA['truong-sa'].apps[2].netRevenue + BRANCHES_DATA['tran-huy-lieu'].apps[2].netRevenue + BRANCHES_DATA['le-quang-dinh'].apps[2].netRevenue,
      orders: 273 + 135 + 88,
      color: '#eab308'
    },
    {
      appName: 'Xanh SM',
      gross: BRANCHES_DATA['truong-sa'].apps[3].grossRevenue + BRANCHES_DATA['tran-huy-lieu'].apps[3].grossRevenue + BRANCHES_DATA['le-quang-dinh'].apps[3].grossRevenue,
      net: BRANCHES_DATA['truong-sa'].apps[3].netRevenue + BRANCHES_DATA['tran-huy-lieu'].apps[3].netRevenue + BRANCHES_DATA['le-quang-dinh'].apps[3].netRevenue,
      orders: 202 + 100 + 80,
      color: '#06b6d4'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Alert Banner */}
      <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xs">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <div className="font-semibold text-sm text-amber-900">
              Cảnh báo Quản trị Toàn Hệ Thống Tháng 8: Chi phí chiếm 53,41% Doanh thu Gộp
            </div>
            <p className="text-xs text-amber-700 mt-0.5">
              Doanh thu bán ra đạt <strong>514,4 triệu đ</strong> nhưng chi phí sàn &amp; khuyến mãi ngốn tới <strong>274,74 triệu đ</strong>. Cứ làm ra 100 đồng doanh thu, chuỗi chỉ giữ lại được <strong>43,18 đồng</strong> thực nhận.
            </p>
          </div>
        </div>
        <button
          onClick={onNavigateActions}
          className="px-3 py-1.5 rounded-lg bg-amber-700 hover:bg-amber-800 text-white text-xs font-medium shrink-0 flex items-center gap-1.5 transition-colors cursor-pointer"
        >
          <span>Xem Kế Hoạch Cải Thiện Tháng 9</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Card 1: Gross Revenue */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Doanh Thu Trước CK</span>
            <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center">
              <DollarSign className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-slate-900">
            {formatVND(CHAIN_SUMMARY.grossRevenue)}
          </div>
          <div className="text-xs text-slate-500 mt-1 flex items-center gap-1">
            <span>&gt; Nửa tỷ đồng gộp (3 cơ sở)</span>
          </div>
        </div>

        {/* Card 2: Net Revenue */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">DT Thực Nhận Về TK</span>
            <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <ShoppingBag className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-emerald-600">
            {formatVND(CHAIN_SUMMARY.netRevenue)}
          </div>
          <div className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
            <TrendingDown className="w-3.5 h-3.5" />
            <span>-2,07% MoM (-4,69M so với T7)</span>
          </div>
        </div>

        {/* Card 3: Total Cost */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Tổng Chi Phí Phát Sinh</span>
            <div className="w-7 h-7 rounded-lg bg-rose-50 text-rose-600 flex items-center justify-center">
              <TrendingDown className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-rose-600">
            {formatVND(CHAIN_SUMMARY.totalCost)}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Tỷ lệ chi phí: <strong className="text-rose-600 font-semibold">{CHAIN_SUMMARY.costRatio}%</strong>
          </div>
        </div>

        {/* Card 4: Promo Cost */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Chi Phí Khuyến Mãi</span>
            <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center">
              <Percent className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-purple-700">
            {formatVND(CHAIN_SUMMARY.promoCost)}
          </div>
          <div className="text-xs text-purple-600 font-medium mt-1">
            Chiếm 71.0% tổng chi phí
          </div>
        </div>

        {/* Card 5: Ads Cost */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs hover:border-slate-300 transition-colors">
          <div className="flex items-center justify-between text-slate-500 mb-1">
            <span className="text-xs font-medium">Ngân Sách Quảng Cáo</span>
            <div className="w-7 h-7 rounded-lg bg-orange-50 text-orange-600 flex items-center justify-center">
              <Megaphone className="w-4 h-4" />
            </div>
          </div>
          <div className="text-xl font-bold text-orange-600">
            {formatVND(CHAIN_SUMMARY.adsCost)}
          </div>
          <div className="text-xs text-rose-600 font-medium mt-1 flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Tăng +37.1% nhưng giảm đơn!</span>
          </div>
        </div>
      </div>

      {/* Main Table: Branch breakdown */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h2 className="text-base font-bold text-slate-900">
              Bảng Tổng Hợp Số Liệu Tháng 8 Theo Chi Nhánh (Kỳ 2608)
            </h2>
            <p className="text-xs text-slate-500">
              So sánh hiệu quả tài chính và tăng trưởng Doanh thu thực nhận giữa 3 cơ sở
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 bg-slate-100 text-slate-600 rounded-md font-medium">
            3 Cơ sở: 3.576 đơn hàng
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <th className="py-3 px-3">Chi nhánh</th>
                <th className="py-3 px-3 text-right">Doanh thu Trước CK</th>
                <th className="py-3 px-3 text-right">Khuyến mãi</th>
                <th className="py-3 px-3 text-right">Chiết khấu sàn</th>
                <th className="py-3 px-3 text-right">Quảng cáo</th>
                <th className="py-3 px-3 text-right">Tổng chi phí</th>
                <th className="py-3 px-3 text-right bg-emerald-50/50 text-emerald-900 font-bold">DT Thực nhận</th>
                <th className="py-3 px-3 text-right">% CP / DT gộp</th>
                <th className="py-3 px-3 text-right">Tăng/Giảm MoM</th>
                <th className="py-3 px-3 text-center">Thao tác</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              {branchComparisonData.map((branch) => {
                const isPositive = branch.growth >= 0;
                const isHighestCost = branch.costRatio > 55;
                const isSafeCost = branch.costRatio < 50;

                return (
                  <tr key={branch.name} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-3 font-semibold text-slate-900">
                      <div className="flex items-center gap-2">
                        <span>{branch.name}</span>
                        {isSafeCost && (
                          <span className="text-[10px] px-1.5 py-0.5 bg-emerald-100 text-emerald-800 rounded font-semibold">
                            Hiệu quả nhất
                          </span>
                        )}
                        {isHighestCost && (
                          <span className="text-[10px] px-1.5 py-0.5 bg-rose-100 text-rose-800 rounded font-semibold">
                            Chi phí cao nhất
                          </span>
                        )}
                      </div>
                      <span className="text-[11px] text-slate-400 font-normal">
                        Chiếm {branch.share}% DT chuỗi
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right font-medium">
                      {formatVND(branch['DT Trước CK'] * 1000000)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-purple-700">
                      {formatVND(BRANCHES_DATA[branch.id as 'truong-sa'].promoCost)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-amber-700">
                      {formatVND(BRANCHES_DATA[branch.id as 'truong-sa'].commissionCost)}
                    </td>
                    <td className="py-3.5 px-3 text-right text-orange-700">
                      {formatVND(BRANCHES_DATA[branch.id as 'truong-sa'].adsCost)}
                    </td>
                    <td className="py-3.5 px-3 text-right font-medium text-rose-600">
                      {formatVND(branch['Tổng Chi Phí'] * 1000000)}
                    </td>
                    <td className="py-3.5 px-3 text-right font-bold text-emerald-700 bg-emerald-50/40 text-sm">
                      {formatVND(branch['DT Thực Nhận'] * 1000000)}
                    </td>
                    <td className="py-3.5 px-3 text-right font-semibold">
                      <span className={`px-2 py-0.5 rounded ${
                        isSafeCost 
                          ? 'bg-emerald-100 text-emerald-800' 
                          : isHighestCost 
                          ? 'bg-rose-100 text-rose-800' 
                          : 'bg-amber-100 text-amber-800'
                      }`}>
                        {branch.costRatio.toFixed(2)}%
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-right font-semibold">
                      <span className={`inline-flex items-center gap-0.5 ${isPositive ? 'text-emerald-600' : 'text-rose-600'}`}>
                        {isPositive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                        {isPositive ? `+${branch.growth}%` : `${branch.growth}%`}
                      </span>
                    </td>
                    <td className="py-3.5 px-3 text-center">
                      <button
                        onClick={() => onNavigateBranch(branch.id)}
                        className="px-2.5 py-1 text-xs font-medium text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded transition-colors cursor-pointer"
                      >
                        Chi tiết &rarr;
                      </button>
                    </td>
                  </tr>
                );
              })}

              {/* Total Row */}
              <tr className="bg-slate-50/90 font-bold text-slate-900 border-t-2 border-slate-300">
                <td className="py-3.5 px-3 text-slate-900">
                  TỔNG CỘNG 3 CƠ SỞ
                </td>
                <td className="py-3.5 px-3 text-right text-slate-900">
                  {formatVND(CHAIN_SUMMARY.grossRevenue)}
                </td>
                <td className="py-3.5 px-3 text-right text-purple-700">
                  {formatVND(CHAIN_SUMMARY.promoCost)}
                </td>
                <td className="py-3.5 px-3 text-right text-amber-700">
                  {formatVND(CHAIN_SUMMARY.commissionCost)}
                </td>
                <td className="py-3.5 px-3 text-right text-orange-700">
                  {formatVND(CHAIN_SUMMARY.adsCost)}
                </td>
                <td className="py-3.5 px-3 text-right text-rose-600">
                  {formatVND(CHAIN_SUMMARY.totalCost)}
                </td>
                <td className="py-3.5 px-3 text-right text-emerald-800 bg-emerald-100/50 text-sm">
                  {formatVND(CHAIN_SUMMARY.netRevenue)}
                </td>
                <td className="py-3.5 px-3 text-right text-rose-700">
                  {CHAIN_SUMMARY.costRatio.toFixed(2)}%
                </td>
                <td className="py-3.5 px-3 text-right text-rose-600">
                  -2.07% (-4.69M)
                </td>
                <td className="py-3.5 px-3 text-center text-slate-400">
                  Toàn chuỗi
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Charts Section: 2 Columns */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Bar Chart: Revenue & Cost Comparison by Branch */}
        <div className="lg:col-span-7 p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-slate-900">
                So Sánh Quy Mô Doanh Thu &amp; Chi Phí (Triệu VNĐ)
              </h3>
              <span className="text-xs text-slate-500">Đơn vị: Triệu VNĐ</span>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={branchComparisonData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
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
          <p className="text-xs text-slate-500 mt-2 italic">
            * Lê Quang Định chịu chi phí cao nhất (55.64%), trong khi Trần Huy Liệu là cơ sở duy nhất kiểm soát chi phí dưới 50% (49.50%).
          </p>
        </div>

        {/* Pie Chart: Cost Structure & Distribution */}
        <div className="lg:col-span-5 p-5 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-slate-900">
                Cơ Cấu Chi Phí Phát Sinh (274,74M)
              </h3>
              <span className="text-xs text-slate-500">Tháng 8</span>
            </div>
            <div className="h-48 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={costStructureData}
                    cx="50%"
                    cy="50%"
                    innerRadius={45}
                    outerRadius={75}
                    paddingAngle={3}
                    dataKey="value"
                  >
                    {costStructureData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(val: number) => [formatVND(val), 'Số tiền']}
                    contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="space-y-2 mt-2">
              {costStructureData.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-slate-700">{item.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="font-bold text-slate-900">{item.percent}</span>
                    <span className="text-slate-400 ml-1">({formatMillionVND(item.value)})</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="p-2.5 mt-3 rounded-lg bg-rose-50 text-rose-800 text-xs border border-rose-100">
            <strong>Báo động đỏ:</strong> Khuyến mãi chiếm tới 71% tổng chi phí và 38% doanh thu bán ra.
          </div>
        </div>
      </div>

      {/* Aggregated Platform Performance Cards */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <h3 className="font-bold text-sm text-slate-900 mb-1">
          Cơ Cấu Đóng Góp Của 4 Ứng Dụng Toàn Chuỗi (Gộp 3 Chi Nhánh)
        </h3>
        <p className="text-xs text-slate-500 mb-4">
          Quy mô doanh thu gộp, doanh thu thực nhận và số đơn hàng của từng ứng dụng
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {appAggregated.map((app) => {
            const costRatio = ((app.gross - app.net) / app.gross) * 100;
            return (
              <div key={app.appName} className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-bold text-sm text-slate-900" style={{ color: app.color }}>
                    {app.appName}
                  </span>
                  <span className="text-xs px-2 py-0.5 bg-slate-200 text-slate-700 rounded-full font-medium">
                    {app.orders} đơn
                  </span>
                </div>
                <div className="space-y-1.5 text-xs">
                  <div className="flex justify-between text-slate-600">
                    <span>DT Trước CK:</span>
                    <span className="font-medium text-slate-900">{formatMillionVND(app.gross)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>DT Thực nhận:</span>
                    <span className="font-bold text-emerald-700">{formatMillionVND(app.net)}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>Tỷ lệ chi phí:</span>
                    <span className="font-semibold text-rose-600">{costRatio.toFixed(1)}%</span>
                  </div>
                </div>
                <div className="mt-3 pt-2 border-t border-slate-200 text-[11px] text-slate-500">
                  {app.appName === 'GrabFood' && 'AOV cao nhất (~195k) nhưng ngốn 61% chi phí'}
                  {app.appName === 'ShopeeFood' && 'Đơn giảm sút, AOV tăng bù đắp, 49.7% chi phí'}
                  {app.appName === 'BeFood' && 'Phục hồi mạnh mẽ số đơn (+70% MoM), 42.8% chi phí'}
                  {app.appName === 'Xanh SM' && 'Ngôi sao tăng trưởng, 0đ KM/Ads, chi phí chỉ 19.5%'}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Deep Executive Insights */}
      <div className="p-5 rounded-xl bg-slate-900 text-white shadow-md">
        <h3 className="font-bold text-base text-white mb-4 flex items-center gap-2">
          <ShieldAlert className="w-5 h-5 text-amber-400" />
          <span>4 Nhận Xét &amp; Đánh Giá Chiến Lược Dành Cho Ban Quản Trị</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs leading-relaxed">
          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-amber-400 mb-1.5 flex items-center gap-1.5">
              <span>1. Dòng tiền thực nhận sụt giảm (-2,07% MoM)</span>
            </div>
            <p className="text-slate-300">
              Tổng dòng tiền thực nhận đạt <strong>222,13 triệu đ</strong>, mất ~4,69 triệu đ so với tháng 7 và thấp hơn mức đỉnh 275,37M ở tháng 1. Nguyên nhân chính do <strong>Lê Quang Định giảm mạnh 9,17M</strong> và <strong>Trường Sa giảm nhẹ 1,60M</strong>.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-rose-400 mb-1.5 flex items-center gap-1.5">
              <span>2. Gánh nặng chi phí &amp; Lạm phát khuyến mãi (71% CP)</span>
            </div>
            <p className="text-slate-300">
              Chi phí khuyến mãi ngốn tới <strong>195,19 triệu đ</strong> (chiếm 71% tổng chi phí và 38% DT gộp). Chuỗi đang bị lệ thuộc quá lớn vào việc trợ giá sâu trên GrabFood &amp; ShopeeFood để giữ chân khách.
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-orange-400 mb-1.5 flex items-center gap-1.5">
              <span>3. Nghịch lý Quảng Cáo GrabAds (Tăng +37.1% ngân sách)</span>
            </div>
            <p className="text-slate-300">
              Tổng ngân sách ads tăng từ 6,17M lên <strong>8,46M</strong>, nhưng doanh thu gộp và số lượng đơn hàng toàn chuỗi đều suy giảm. Đặc biệt tại Lê Quang Định (chi gần 3 triệu tiền ads nhưng đơn rơi -16.9%) và Trần Huy Liệu (đơn đi ngang 248 đơn).
            </p>
          </div>

          <div className="p-3.5 rounded-lg bg-slate-800/80 border border-slate-700">
            <div className="font-bold text-emerald-400 mb-1.5 flex items-center gap-1.5">
              <span>4. Cơ hội bứt phá từ dòng tiền sạch (Xanh SM &amp; BeFood)</span>
            </div>
            <p className="text-slate-300">
              Xanh SM bùng nổ đơn hàng với chi phí chỉ ~19.5% (không tốn khuyến mãi, không tốn ads). BeFood hồi sinh mạnh mẽ tại cả 3 cơ sở. Đây là 2 kênh mang lại biên lợi nhuận ròng cao cần ưu tiên đẩy mạnh trong tháng 9.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
