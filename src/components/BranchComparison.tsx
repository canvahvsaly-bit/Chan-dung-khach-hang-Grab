import React from 'react';
import { 
  GitCompare, 
  TrendingUp, 
  TrendingDown, 
  AlertTriangle, 
  ShieldCheck, 
  Megaphone, 
  Users, 
  Percent, 
  ShoppingBag,
  DollarSign
} from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';
import { BRANCHES_DATA, CHAIN_SUMMARY } from '../data/reportData';
import { formatVND, formatMillionVND } from '../utils/format';

export const BranchComparison: React.FC = () => {
  const branches = [
    BRANCHES_DATA['truong-sa'],
    BRANCHES_DATA['tran-huy-lieu'],
    BRANCHES_DATA['le-quang-dinh']
  ];

  const aovComparisonData = [
    {
      app: 'GrabFood',
      'Trường Sa': BRANCHES_DATA['truong-sa'].apps[0].aov,
      'Trần Huy Liệu': BRANCHES_DATA['tran-huy-lieu'].apps[1].aov,
      'Lê Quang Định': BRANCHES_DATA['le-quang-dinh'].apps[0].aov,
    },
    {
      app: 'ShopeeFood',
      'Trường Sa': BRANCHES_DATA['truong-sa'].apps[1].aov,
      'Trần Huy Liệu': BRANCHES_DATA['tran-huy-lieu'].apps[0].aov,
      'Lê Quang Định': BRANCHES_DATA['le-quang-dinh'].apps[1].aov,
    },
    {
      app: 'BeFood',
      'Trường Sa': BRANCHES_DATA['truong-sa'].apps[2].aov,
      'Trần Huy Liệu': BRANCHES_DATA['tran-huy-lieu'].apps[2].aov,
      'Lê Quang Định': BRANCHES_DATA['le-quang-dinh'].apps[2].aov,
    },
    {
      app: 'Xanh SM',
      'Trường Sa': BRANCHES_DATA['truong-sa'].apps[3].aov,
      'Trần Huy Liệu': BRANCHES_DATA['tran-huy-lieu'].apps[3].aov,
      'Lê Quang Định': BRANCHES_DATA['le-quang-dinh'].apps[3].aov,
    },
  ];

  const adsEffectivenessData = [
    {
      name: 'Trường Sa',
      'Chi phí Ads': BRANCHES_DATA['truong-sa'].adsCost / 1000000,
      'Đơn Grab': 591,
      tinhHinh: 'Đơn giảm 115 đơn (-16.3%)',
      status: 'Lãng phí nhẹ'
    },
    {
      name: 'Trần Huy Liệu',
      'Chi phí Ads': BRANCHES_DATA['tran-huy-lieu'].adsCost / 1000000,
      'Đơn Grab': 248,
      tinhHinh: 'Đơn đi ngang 248 đơn (3 tháng)',
      status: 'Lãng phí cao'
    },
    {
      name: 'Lê Quang Định',
      'Chi phí Ads': BRANCHES_DATA['le-quang-dinh'].adsCost / 1000000,
      'Đơn Grab': 586,
      tinhHinh: 'Ads tăng x3 nhưng đơn giảm -16.9%',
      status: 'Lãng phí nghiêm trọng'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Header Info */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
          <GitCompare className="w-5 h-5 text-indigo-600" />
          <span>Ma Trận So Sánh Toàn Diện Giữa 3 Chi Nhánh</span>
        </h2>
        <p className="text-xs text-slate-500 mt-1">
          Đối chiếu các chỉ số cốt lõi: Quy mô doanh thu, tỷ lệ chi phí, đòn bẩy quảng cáo và hành vi khách hàng
        </p>
      </div>

      {/* Side by side comparison cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {branches.map((b) => {
          const isWinner = b.costRatio < 50;
          const isWorst = b.costRatio > 55;
          return (
            <div 
              key={b.id} 
              className={`p-5 rounded-xl border transition-all ${
                isWinner 
                  ? 'bg-emerald-50/40 border-emerald-300 ring-1 ring-emerald-300' 
                  : isWorst 
                  ? 'bg-rose-50/40 border-rose-300 ring-1 ring-rose-200' 
                  : 'bg-white border-slate-200'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-sm text-slate-900">{b.name}</span>
                {isWinner && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold">
                    Quản trị chi phí tốt nhất
                  </span>
                )}
                {isWorst && (
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-rose-100 text-rose-800 font-bold">
                    Chi phí cao nhất chuỗi
                  </span>
                )}
              </div>

              <div className="space-y-2 text-xs divide-y divide-slate-100">
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500">DT Trước CK:</span>
                  <span className="font-semibold text-slate-900">{formatVND(b.grossRevenue)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500">DT Thực nhận:</span>
                  <span className="font-bold text-emerald-700 text-sm">{formatVND(b.netRevenue)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500">Tăng trưởng MoM:</span>
                  <span className={`font-semibold flex items-center gap-1 ${b.netRevenueMoM >= 0 ? 'text-emerald-600' : 'text-rose-600'}`}>
                    {b.netRevenueMoM >= 0 ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                    {b.netRevenueMoM >= 0 ? `+${b.netRevenueMoM}%` : `${b.netRevenueMoM}%`}
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500">Tỷ lệ chi phí:</span>
                  <span className={`font-bold px-1.5 py-0.5 rounded ${
                    isWinner ? 'bg-emerald-100 text-emerald-800' : isWorst ? 'bg-rose-100 text-rose-800' : 'bg-amber-100 text-amber-800'
                  }`}>
                    {b.costRatio.toFixed(2)}%
                  </span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500">Tổng số đơn:</span>
                  <span className="font-semibold text-slate-900">{b.totalOrders} đơn</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500">AOV Trung bình:</span>
                  <span className="font-semibold text-slate-900">{formatVND(b.aov)}</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500">Sales-to-spend KM:</span>
                  <span className="font-bold text-slate-800">{b.customerData.salesToSpendRatio}x</span>
                </div>
                <div className="flex justify-between items-center pt-2">
                  <span className="text-slate-500">Tỷ lệ khách quay lại:</span>
                  <span className="font-semibold text-slate-800">{b.customerData.repeatRate}%</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Ads Paradox deep breakdown */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-base text-slate-900 flex items-center gap-2">
              <Megaphone className="w-5 h-5 text-orange-600" />
              <span>Chuyên Đề: Bóc Tách Nghịch Lý Quảng Cáo GrabAds Tháng 8</span>
            </h3>
            <p className="text-xs text-slate-500">
              Tổng chi phí quảng cáo tăng +37.1% (8,46M) nhưng lượng đơn hàng GrabFood toàn chuỗi lại đi lùi
            </p>
          </div>
          <span className="text-xs px-2.5 py-1 bg-rose-100 text-rose-800 font-semibold rounded-md">
            Lãng phí ~3.5 triệu đ/tháng
          </span>
        </div>

        <div className="overflow-x-auto mb-4">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <th className="py-2.5 px-3">Chi nhánh</th>
                <th className="py-2.5 px-3 text-right">Chi phí Ads (VNĐ)</th>
                <th className="py-2.5 px-3 text-right">Số đơn GrabFood</th>
                <th className="py-2.5 px-3">Thực trạng vận hành</th>
                <th className="py-2.5 px-3 text-center">Mức độ lãng phí</th>
                <th className="py-2.5 px-3">Giải pháp Tháng 9</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-3 font-semibold text-slate-900">Lê Quang Định</td>
                <td className="py-3 px-3 text-right font-bold text-rose-600">2.964.055 đ</td>
                <td className="py-3 px-3 text-right font-medium">586 đơn (-16.9%)</td>
                <td className="py-3 px-3 text-slate-600">
                  Tiền Ads tăng gần x3 (từ 1.07M lên 2.96M) nhưng mất 119 đơn Grab!
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="px-2 py-0.5 bg-rose-100 text-rose-800 rounded font-semibold text-[10px]">
                    Nghiêm trọng nhất
                  </span>
                </td>
                <td className="py-3 px-3 text-emerald-700 font-medium">
                  Cắt giảm về 1.0M - 1.2M (tiết kiệm ngay ~1.8M)
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-3 font-semibold text-slate-900">Trần Huy Liệu</td>
                <td className="py-3 px-3 text-right font-bold text-rose-600">2.915.572 đ</td>
                <td className="py-3 px-3 text-right font-medium">248 đơn (0% MoM)</td>
                <td className="py-3 px-3 text-slate-600">
                  Đơn Grab đóng băng 248 đơn liên tiếp 3 tháng dù chi gần 3M ads.
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="px-2 py-0.5 bg-orange-100 text-orange-800 rounded font-semibold text-[10px]">
                    Lãng phí cao
                  </span>
                </td>
                <td className="py-3 px-3 text-emerald-700 font-medium">
                  Giảm 50% ngân sách (tiết kiệm ~1.5M/tháng)
                </td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-3 font-semibold text-slate-900">Trường Sa</td>
                <td className="py-3 px-3 text-right font-bold text-amber-600">2.579.566 đ</td>
                <td className="py-3 px-3 text-right font-medium">591 đơn (-16.3%)</td>
                <td className="py-3 px-3 text-slate-600">
                  Mất 115 đơn từ 706 xuống 591 đơn; ads không giữ chân được khách cũ.
                </td>
                <td className="py-3 px-3 text-center">
                  <span className="px-2 py-0.5 bg-amber-100 text-amber-800 rounded font-semibold text-[10px]">
                    Hiệu quả kém
                  </span>
                </td>
                <td className="py-3 px-3 text-emerald-700 font-medium">
                  Rà soát từ khóa, chỉ bật ads trưa &amp; đêm
                </td>
              </tr>
              <tr className="bg-slate-50 font-bold text-slate-900 border-t border-slate-200">
                <td className="py-3 px-3">TỔNG CỘNG CHUỖI</td>
                <td className="py-3 px-3 text-right text-rose-600">8.459.193 đ</td>
                <td className="py-3 px-3 text-right">1.425 đơn Grab</td>
                <td className="py-3 px-3 text-slate-600">Đơn Grab toàn chuỗi suy giảm</td>
                <td className="py-3 px-3 text-center text-rose-600">ROI thấp</td>
                <td className="py-3 px-3 text-emerald-700">Tổng cắt giảm mục tiêu: 3.3 - 3.5 triệu đ</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* AOV comparison chart between 4 apps */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex items-center justify-between mb-3">
          <div>
            <h3 className="font-bold text-sm text-slate-900">
              So Sánh Giá Trị Đơn Trung Bình (AOV) Theo Ứng Dụng (VNĐ/đơn)
            </h3>
            <p className="text-xs text-slate-500">
              GrabFood có AOV vượt trội (193k - 198k) so với Shopee (103k - 127k) và Xanh SM (73k - 84k)
            </p>
          </div>
          <span className="text-xs text-slate-500">Tháng 8</span>
        </div>

        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={aovComparisonData} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="app" tick={{ fontSize: 11 }} stroke="#64748b" />
              <YAxis tick={{ fontSize: 11 }} stroke="#64748b" />
              <Tooltip 
                formatter={(val: number) => [formatVND(val), 'AOV']}
                contentStyle={{ backgroundColor: '#1e293b', borderColor: '#334155', borderRadius: '8px', color: '#fff', fontSize: '12px' }}
              />
              <Legend wrapperStyle={{ fontSize: '11px', paddingTop: '8px' }} />
              <Bar dataKey="Trường Sa" fill="#059669" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Trần Huy Liệu" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              <Bar dataKey="Lê Quang Định" fill="#f59e0b" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-4 text-xs text-slate-600 bg-slate-50 p-3.5 rounded-lg border border-slate-200">
          <div>
            <strong>1. Cơ hội từ AOV GrabFood cao:</strong> Khách đặt GrabFood là khách gia đình / văn phòng đông người. Cần chuyển từ giảm % sang voucher bậc thang (Ví dụ: Giảm 30k cho đơn từ 200k) để bảo vệ biên lãi.
          </div>
          <div>
            <strong>2. Cơ hội tăng trưởng Xanh SM:</strong> AOV hiện chỉ đạt 73k - 84k (đơn 1 người ăn). Bổ sung thêm đồ uống, tráng miệng, món phụ để kích thích nâng giỏ hàng lên 100k.
          </div>
        </div>
      </div>
    </div>
  );
};
