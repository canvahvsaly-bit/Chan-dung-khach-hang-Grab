import React, { useState } from 'react';
import { 
  Users, 
  Clock, 
  TrendingDown, 
  TrendingUp, 
  AlertTriangle, 
  Flame, 
  Calendar, 
  Zap, 
  Info,
  DollarSign,
  HelpCircle
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { BRANCHES_DATA, getHeatmapData } from '../data/reportData';
import { formatVND, formatMillionVND, formatNumber } from '../utils/format';

export const CustomerHeatmapView: React.FC = () => {
  const [selectedBranchId, setSelectedBranchId] = useState<'truong-sa' | 'tran-huy-lieu' | 'le-quang-dinh'>('truong-sa');
  const [hoveredCell, setHoveredCell] = useState<{ day: string; hour: number; intensity: number } | null>(null);

  const currentBranch = BRANCHES_DATA[selectedBranchId];
  const customer = currentBranch.customerData;
  const heatmapData = getHeatmapData(selectedBranchId);

  // Intensity color styling
  const getCellBg = (intensity: number) => {
    switch (intensity) {
      case 0: return 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-300';
      case 1: return 'bg-emerald-100 hover:bg-emerald-200 border-emerald-200 text-emerald-800 font-medium';
      case 2: return 'bg-emerald-300 hover:bg-emerald-400 border-emerald-400 text-emerald-950 font-bold';
      case 3: return 'bg-emerald-600 hover:bg-emerald-700 border-emerald-700 text-white font-bold shadow-xs';
      case 4: return 'bg-slate-900 hover:bg-black border-slate-950 text-emerald-400 font-extrabold shadow-sm ring-1 ring-emerald-400';
      default: return 'bg-slate-100 border-slate-200';
    }
  };

  const hoursList = Array.from({ length: 24 }, (_, i) => i);

  return (
    <div className="space-y-6">
      {/* Branch Selector Bar */}
      <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
            <Users className="w-5 h-5 text-indigo-600" />
            <span>Phân Tích Dữ Liệu Khách Hàng &amp; Bản Đồ Nhiệt Giờ Vàng (GrabMerchant 90 Ngày)</span>
          </h2>
          <p className="text-xs text-slate-500">
            Dữ liệu hành vi từ ngày 13/06 đến 10/09: Tệp khách hàng, tỷ lệ quay lại, khung giờ cao điểm và hiệu suất khuyến mãi
          </p>
        </div>

        {/* Segmented control for 3 branches */}
        <div className="flex items-center bg-slate-100 p-1 rounded-lg border border-slate-200 self-start sm:self-auto">
          {(['truong-sa', 'tran-huy-lieu', 'le-quang-dinh'] as const).map((id) => (
            <button
              key={id}
              onClick={() => setSelectedBranchId(id)}
              className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all cursor-pointer ${
                selectedBranchId === id
                  ? 'bg-white text-indigo-700 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {BRANCHES_DATA[id].name.replace('Chi nhánh ', '')}
            </button>
          ))}
        </div>
      </div>

      {/* Customer Segments Stats for Selected Branch */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Total Customers */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Tổng Lượng Khách Hàng (90 ngày)</span>
          <div className="text-xl font-bold text-slate-900 mt-1">
            {formatNumber(customer.totalCustomers)} khách
          </div>
          <div className={`text-xs font-medium mt-1 flex items-center gap-1 ${
            customer.totalChangePercent >= 0 ? 'text-emerald-600' : 'text-rose-600'
          }`}>
            {customer.totalChangePercent >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{customer.totalChangePercent >= 0 ? `+${customer.totalChangePercent}%` : `${customer.totalChangePercent}%`} so với kỳ trước</span>
          </div>
        </div>

        {/* New Customers */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Khách Hàng Mới (New)</span>
          <div className="text-xl font-bold text-blue-600 mt-1">
            {formatNumber(customer.newCustomers)} khách
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Chiếm <strong className="text-blue-700">{((customer.newCustomers / customer.totalCustomers) * 100).toFixed(1)}%</strong> tệp khách
          </div>
        </div>

        {/* Repeat Customers */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Khách Hàng Quay Lại (Repeat)</span>
          <div className="text-xl font-bold text-purple-700 mt-1">
            {formatNumber(customer.repeatCustomers)} khách
          </div>
          <div className={`text-xs font-medium mt-1 flex items-center gap-1 ${
            customer.repeatChangePercent >= 0 ? 'text-emerald-600' : 'text-rose-600'
          }`}>
            {customer.repeatChangePercent >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            <span>{customer.repeatChangePercent >= 0 ? `+${customer.repeatChangePercent}%` : `${customer.repeatChangePercent}%`}</span>
            {selectedBranchId === 'truong-sa' && <span className="text-rose-600 font-bold">(Rơi tự do!)</span>}
          </div>
        </div>

        {/* Repeat Rate & Sales-to-spend */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Tỷ Lệ Khách Quay Lại</span>
          <div className="text-xl font-bold text-indigo-700 mt-1">
            {customer.repeatRate}%
          </div>
          <div className="text-xs text-slate-500 mt-1">
            Kích hoạt lại: {customer.reactivatedCustomers} khách ({((customer.reactivatedCustomers / customer.totalCustomers) * 100).toFixed(1)}%)
          </div>
        </div>
      </div>

      {/* Hourly Heatmap Matrix (7 days x 24 hours) */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Clock className="w-5 h-5 text-emerald-600" />
              <span>Bản Đồ Nhiệt Khung Giờ Cao Điểm Trong Tuần (24 Giờ x 7 Ngày)</span>
            </h3>
            <p className="text-xs text-slate-500">
              Mỗi ô thể hiện cường độ đơn hàng tại từng giờ. Rê chuột vào ô để xem nhận diện nhịp đặt hàng.
            </p>
          </div>

          {/* Color Legend */}
          <div className="flex items-center gap-2 text-[11px] text-slate-600 self-start sm:self-auto flex-wrap">
            <span className="font-medium text-slate-400">Chú giải:</span>
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded bg-slate-100 border border-slate-300 inline-block" />
              <span>Trắng (0 đơn)</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded bg-emerald-100 border border-emerald-300 inline-block" />
              <span>Ít</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded bg-emerald-300 border border-emerald-400 inline-block" />
              <span>Vừa</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded bg-emerald-600 inline-block" />
              <span>Đông</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-3.5 h-3.5 rounded bg-slate-900 border border-emerald-400 inline-block ring-1 ring-emerald-400" />
              <span>Đỉnh tuyệt đối</span>
            </div>
          </div>
        </div>

        {/* Heatmap Grid */}
        <div className="overflow-x-auto pb-2">
          <div className="min-w-[760px]">
            {/* Hour Header row */}
            <div className="grid grid-cols-25 gap-1 text-[10px] text-slate-400 font-semibold mb-1 text-center">
              <div className="text-left pl-1">Thứ / Giờ</div>
              {hoursList.map(h => (
                <div key={h}>{h}h</div>
              ))}
            </div>

            {/* Rows for each day */}
            <div className="space-y-1">
              {heatmapData.map((row) => (
                <div key={row.day} className="grid grid-cols-25 gap-1 items-center">
                  <div className="text-xs font-semibold text-slate-700 pl-1 whitespace-nowrap">
                    {row.day.split(' ')[0]} {row.day.split(' ')[1]}
                  </div>
                  {row.hours.map((val, hIndex) => (
                    <div
                      key={hIndex}
                      onMouseEnter={() => setHoveredCell({ day: row.day, hour: hIndex, intensity: val })}
                      onMouseLeave={() => setHoveredCell(null)}
                      className={`h-7 rounded flex items-center justify-center text-[10px] border transition-transform cursor-pointer hover:scale-110 ${getCellBg(val)}`}
                      title={`${row.day} lúc ${hIndex}:00 - Mức độ: ${val === 4 ? 'Đỉnh cao nhất' : val === 3 ? 'Đông' : val === 2 ? 'Vừa' : val === 1 ? 'Ít' : 'Không có đơn'}`}
                    >
                      {val > 0 ? val : ''}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Heatmap Hover Detail Footer */}
        <div className="mt-3 p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-700 flex items-center justify-between min-h-[44px]">
          {hoveredCell ? (
            <div className="flex items-center gap-2">
              <span className="font-bold text-slate-900">{hoveredCell.day} lúc {hoveredCell.hour}:00:</span>
              <span>
                {hoveredCell.intensity === 4 && <strong className="text-emerald-700">Đỉnh tuyệt đối toàn tuần! Lượng đơn tập trung dày đặc nhất.</strong>}
                {hoveredCell.intensity === 3 && <strong className="text-emerald-600">Khung giờ cao điểm bận rộn, chuẩn bị nguyên liệu sẵn sàng.</strong>}
                {hoveredCell.intensity === 2 && 'Mức độ đặt hàng ổn định đều đặn.'}
                {hoveredCell.intensity === 1 && 'Lượng đơn rải rác.'}
                {hoveredCell.intensity === 0 && 'Trắng trơn, hoàn toàn không có đơn hàng.'}
              </span>
            </div>
          ) : (
            <span className="text-slate-400 italic">
              Di chuột lên bất kỳ ô nào trên ma trận để xem đánh giá chi tiết khung giờ
            </span>
          )}
        </div>
      </div>

      {/* Special Operational Pattern Highlights per Branch */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5 text-emerald-700">
            <Flame className="w-4 h-4 text-emerald-600" />
            <span>Trưa Văn Phòng (12:00 - 14:00)</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {customer.peakPattern.lunchPeak}
          </p>
          <div className="text-[11px] text-slate-500 font-medium">
            → Hành động: Chuẩn bị trước nguyên liệu lúc 11:30 để trả đơn nhanh, tránh hủy đơn.
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5 text-indigo-700">
            <Clock className="w-4 h-4 text-indigo-600" />
            <span>Sáng &amp; Ăn Tối</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {customer.peakPattern.morningPeak}
          </p>
          <div className="text-[11px] text-slate-500 font-medium">
            {selectedBranchId === 'le-quang-dinh' && '→ Lê Quang Định bán sáng cực mạnh, cần đẩy combo ăn sáng kèm nước.'}
            {selectedBranchId === 'tran-huy-lieu' && '→ Sáng Thứ 7 và Thứ 5 có lượng đơn ăn sáng tốt.'}
            {selectedBranchId === 'truong-sa' && '→ Thứ 4 có nhịp ăn sáng 08-09h.'}
          </div>
        </div>

        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs space-y-2">
          <div className="font-bold text-sm text-slate-900 flex items-center gap-1.5 text-purple-700">
            <Zap className="w-4 h-4 text-purple-600" />
            <span>Vận Hành Đêm &amp; Giờ Đóng Cửa</span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            {customer.peakPattern.nightPeak}
          </p>
          <div className="text-[11px] text-slate-500 font-medium">
            {selectedBranchId === 'truong-sa' && '→ Mở rộng menu món đêm lúc 23h-00h để tận dụng lợi thế.'}
            {selectedBranchId !== 'truong-sa' && '→ Sau 21:30 hoàn toàn không có đơn, chốt ca sớm để tiết kiệm chi phí.'}
          </div>
        </div>
      </div>

      {/* 90-Day Weekly Order Trajectory Chart */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-sm text-slate-900">
              Xu Hướng Lượng Khách Hàng Theo Tuần (13 Tuần Từ Tháng 6 Đến Tháng 9)
            </h3>
            <p className="text-xs text-slate-500">
              Quan sát biến động chu kỳ: Các đỉnh lương (Payday) và đà sụt giảm vào nửa cuối tháng 8
            </p>
          </div>
          <span className="text-xs text-slate-500">{currentBranch.name}</span>
        </div>

        <div className="h-56 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={customer.weeklyTrend} margin={{ top: 10, right: 20, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="week" tick={{ fontSize: 10 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 11 }} stroke="#64748b" />
              <Tooltip 
                formatter={(val: number) => [`${val} khách`, 'Số lượng']}
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
              <Line 
                type="monotone" 
                dataKey="count" 
                stroke="#6366f1" 
                strokeWidth={2.5} 
                dot={{ r: 4, fill: '#6366f1', stroke: '#fff', strokeWidth: 2 }}
                activeDot={{ r: 6 }} 
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 flex flex-col sm:flex-row justify-between gap-2">
          <div>
            <strong>Quy luật ngày cao điểm:</strong> {customer.dayOrderPatterns.peakDays.join(', ')} và các ngày lĩnh lương ({customer.dayOrderPatterns.paydayPeaks.join(', ')}).
          </div>
          <div>
            <strong>Ngày trũng sâu:</strong> {customer.dayOrderPatterns.lowDays.join(', ')}.
          </div>
        </div>
      </div>
    </div>
  );
};
