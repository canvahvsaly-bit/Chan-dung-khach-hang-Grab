import React, { useState } from 'react';
import { 
  Calculator, 
  Sparkles, 
  TrendingUp, 
  ArrowRight, 
  DollarSign, 
  Percent, 
  RefreshCw,
  ShieldCheck,
  Zap
} from 'lucide-react';
import { CHAIN_SUMMARY } from '../data/reportData';
import { formatVND, formatMillionVND } from '../utils/format';

export const CostSimulator: React.FC = () => {
  // Simulator input states
  const [promoCutPercent, setPromoCutPercent] = useState<number>(15); // Cắt 15% chi phí khuyến mãi
  const [adsCutAmount, setAdsCutAmount] = useState<number>(3.5); // Cắt 3.5 triệu GrabAds
  const [xanhSmGrowthPercent, setXanhSmGrowthPercent] = useState<number>(25); // Tăng 25% DT Xanh SM
  const [shopeeRecoveryPercent, setShopeeRecoveryPercent] = useState<number>(10); // Phục hồi 10% DT Shopee

  // Baseline figures
  const baseGross = CHAIN_SUMMARY.grossRevenue;
  const basePromo = CHAIN_SUMMARY.promoCost;
  const baseAds = CHAIN_SUMMARY.adsCost;
  const baseComm = CHAIN_SUMMARY.commissionCost;
  const baseNet = CHAIN_SUMMARY.netRevenue;
  const baseCost = CHAIN_SUMMARY.totalCost;

  // Calculations
  const promoSavings = basePromo * (promoCutPercent / 100);
  const adsSavings = adsCutAmount * 1000000;

  // Extra revenue from Xanh SM & Shopee
  // Current Xanh SM gross across chain is ~30.6M, net ~24.1M (80% net retention)
  const extraXanhGross = 30609900 * (xanhSmGrowthPercent / 100);
  const extraXanhNet = extraXanhGross * 0.807; // ~19.3% commission

  // Current Shopee gross is ~152.6M, net ~72.3M (~47.4% net retention)
  const extraShopeeGross = 152610622 * (shopeeRecoveryPercent / 100);
  const extraShopeeNet = extraShopeeGross * 0.50; // 50% net retention

  // New simulated totals
  const newGross = baseGross + extraXanhGross + extraShopeeGross;
  const newPromoCost = Math.max(0, basePromo - promoSavings);
  const newAdsCost = Math.max(0, baseAds - adsSavings);
  const newCommCost = baseComm + (extraXanhGross * 0.193) + (extraShopeeGross * 0.25);
  const newTotalCost = newPromoCost + newAdsCost + newCommCost;
  const newNetRevenue = newGross - newTotalCost;

  const totalExtraNet = newNetRevenue - baseNet;
  const newCostRatio = (newTotalCost / newGross) * 100;

  const handleReset = () => {
    setPromoCutPercent(15);
    setAdsCutAmount(3.5);
    setXanhSmGrowthPercent(25);
    setShopeeRecoveryPercent(10);
  };

  return (
    <div className="space-y-6">
      {/* Simulator Banner */}
      <div className="p-5 rounded-xl bg-gradient-to-r from-emerald-900 via-slate-900 to-slate-900 text-white border border-emerald-800/50 shadow-md">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <Calculator className="w-5 h-5 text-emerald-400" />
              <h2 className="text-lg font-bold tracking-tight">
                Trình Mô Phỏng Tối Ưu Chi Phí &amp; Dòng Tiền Thực Nhận Tháng 9
              </h2>
            </div>
            <p className="text-xs text-slate-300 mt-1 max-w-2xl">
              Điều chỉnh các đòn bẩy hành động thực tế (Cắt khuyến mãi, cắt GrabAds, đẩy AOV Xanh SM) để tính toán chính xác dòng tiền ròng thực tế gia tăng về tài khoản.
            </p>
          </div>

          <button
            onClick={handleReset}
            className="self-start md:self-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium border border-slate-700 cursor-pointer transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Khôi phục mặc định</span>
          </button>
        </div>
      </div>

      {/* Simulator Results Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Extra Net Profit */}
        <div className="p-4 rounded-xl bg-emerald-50 border-2 border-emerald-300 text-emerald-950 shadow-sm">
          <div className="flex items-center justify-between text-xs font-medium text-emerald-800">
            <span>Dòng Tiền Thực Tăng Thêm</span>
            <Sparkles className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-extrabold text-emerald-700 mt-1">
            +{formatVND(totalExtraNet)}
          </div>
          <div className="text-xs text-emerald-800 mt-1">
            Gia tăng <strong>+{((totalExtraNet / baseNet) * 100).toFixed(1)}%</strong> so với Tháng 8
          </div>
        </div>

        {/* New Net Revenue */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Doanh Thu Thực Nhận Mới</span>
          <div className="text-2xl font-bold text-slate-900 mt-1">
            {formatVND(newNetRevenue)}
          </div>
          <div className="text-xs text-slate-400 mt-1">
            Trước đó: {formatVND(baseNet)}
          </div>
        </div>

        {/* New Cost Ratio */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Tỷ Lệ Chi Phí / DT Gộp Mới</span>
          <div className="text-2xl font-bold text-blue-600 mt-1">
            {newCostRatio.toFixed(2)}%
          </div>
          <div className="text-xs text-emerald-600 font-medium mt-1 flex items-center gap-1">
            <TrendingUp className="w-3 h-3" />
            <span>Giảm {(CHAIN_SUMMARY.costRatio - newCostRatio).toFixed(2)}% điểm chi phí</span>
          </div>
        </div>

        {/* Total Cost Savings */}
        <div className="p-4 rounded-xl bg-white border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500">Tổng Chi Phí Cắt Giảm</span>
          <div className="text-2xl font-bold text-purple-700 mt-1">
            {formatVND(promoSavings + adsSavings)}
          </div>
          <div className="text-xs text-slate-500 mt-1">
            KM: {formatMillionVND(promoSavings)} | Ads: {formatMillionVND(adsSavings)}
          </div>
        </div>
      </div>

      {/* Sliders Input Panel */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <h3 className="font-bold text-base text-slate-900 mb-4 flex items-center gap-2">
          <Zap className="w-4 h-4 text-emerald-600" />
          <span>Bảng Điều Khiển 4 Đòn Bẩy Tối Ưu Cho Ban Giám Đốc</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Slider 1: Promo Cut */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-900">
                1. Cắt giảm Khuyến mãi dàn trải (Chuyển sang Voucher bậc thang)
              </span>
              <span className="font-bold text-emerald-700 text-sm bg-emerald-100 px-2 py-0.5 rounded">
                -{promoCutPercent}%
              </span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="35" 
              step="1"
              value={promoCutPercent}
              onChange={(e) => setPromoCutPercent(Number(e.target.value))}
              className="w-full accent-emerald-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>Giữ nguyên (0%)</span>
              <span className="font-medium text-emerald-700">
                Tiết kiệm: {formatVND(promoSavings)} / tháng
              </span>
              <span>Giảm mạnh (-35%)</span>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              * Khuyến nghị: Cắt voucher đơn nhỏ, chỉ áp dụng ưu đãi cho đơn &gt; 180k - 250k trên GrabFood.
            </p>
          </div>

          {/* Slider 2: Ads Cut */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-900">
                2. Cắt giảm ngân sách GrabAds lãng phí
              </span>
              <span className="font-bold text-orange-700 text-sm bg-orange-100 px-2 py-0.5 rounded">
                -{adsCutAmount} Triệu VNĐ
              </span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="6.0" 
              step="0.5"
              value={adsCutAmount}
              onChange={(e) => setAdsCutAmount(Number(e.target.value))}
              className="w-full accent-orange-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>0M (Giữ 8.46M)</span>
              <span className="font-medium text-orange-700">
                Tiết kiệm: {formatMillionVND(adsSavings)}
              </span>
              <span>Cắt tối đa 6.0M</span>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              * Khuyến nghị: Cắt 1.8M tại Lê Quang Định và 1.5M tại Trần Huy Liệu (tổng 3.3 - 3.5M).
            </p>
          </div>

          {/* Slider 3: Xanh SM Upsell Growth */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-900">
                3. Tăng trưởng doanh thu Xanh SM (Nhờ Upsell AOV lên &gt;95k)
              </span>
              <span className="font-bold text-cyan-700 text-sm bg-cyan-100 px-2 py-0.5 rounded">
                +{xanhSmGrowthPercent}%
              </span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="50" 
              step="5"
              value={xanhSmGrowthPercent}
              onChange={(e) => setXanhSmGrowthPercent(Number(e.target.value))}
              className="w-full accent-cyan-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>0% (Hiện 30.6M)</span>
              <span className="font-medium text-cyan-700">
                Dòng tiền sạch tăng thêm: +{formatMillionVND(extraXanhNet)}
              </span>
              <span>Tăng +50%</span>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              * Kênh Xanh SM giữ lại hơn 80% doanh thu (0đ khuyến mãi, 0đ ads).
            </p>
          </div>

          {/* Slider 4: Shopee Recovery */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-semibold text-slate-900">
                4. Phục hồi doanh số ShopeeFood (Nhờ Combo trưa văn phòng)
              </span>
              <span className="font-bold text-blue-700 text-sm bg-blue-100 px-2 py-0.5 rounded">
                +{shopeeRecoveryPercent}%
              </span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="25" 
              step="5"
              value={shopeeRecoveryPercent}
              onChange={(e) => setShopeeRecoveryPercent(Number(e.target.value))}
              className="w-full accent-blue-600 cursor-pointer"
            />
            <div className="flex justify-between text-[11px] text-slate-500">
              <span>0% (Đi ngang)</span>
              <span className="font-medium text-blue-700">
                DT thực tăng: +{formatMillionVND(extraShopeeNet)}
              </span>
              <span>Tăng +25%</span>
            </div>
            <p className="text-[11px] text-slate-500 italic">
              * Khuyến nghị: Đưa combo trưa 125k kèm nước và test từ khóa 500k/cơ sở.
            </p>
          </div>
        </div>
      </div>

      {/* Comparison Before & After Box */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <h3 className="font-bold text-sm text-slate-900 mb-3">
          Bảng So Sánh Hiệu Quả Trước &amp; Sau Khi Áp Dụng Tối Ưu Hóa Tháng 9
        </h3>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 text-slate-600 font-semibold">
                <th className="py-2.5 px-3">Chỉ số tài chính</th>
                <th className="py-2.5 px-3 text-right">Thực tế Tháng 8 (Hiện tại)</th>
                <th className="py-2.5 px-3 text-right text-emerald-900 bg-emerald-50/60 font-bold">
                  Mô phỏng Tháng 9 (Sau tối ưu)
                </th>
                <th className="py-2.5 px-3 text-right">Chênh lệch</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-slate-700">
              <tr>
                <td className="py-3 px-3 font-medium">Doanh thu trước chiết khấu (Gross)</td>
                <td className="py-3 px-3 text-right">{formatVND(baseGross)}</td>
                <td className="py-3 px-3 text-right font-semibold text-slate-900 bg-emerald-50/30">
                  {formatVND(newGross)}
                </td>
                <td className="py-3 px-3 text-right font-medium text-emerald-600">
                  +{formatMillionVND(newGross - baseGross)}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium">Chi phí Khuyến mãi</td>
                <td className="py-3 px-3 text-right text-purple-700">{formatVND(basePromo)}</td>
                <td className="py-3 px-3 text-right font-semibold text-purple-700 bg-emerald-50/30">
                  {formatVND(newPromoCost)}
                </td>
                <td className="py-3 px-3 text-right font-bold text-emerald-600">
                  -{formatMillionVND(promoSavings)}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium">Chi phí Quảng cáo (GrabAds)</td>
                <td className="py-3 px-3 text-right text-orange-700">{formatVND(baseAds)}</td>
                <td className="py-3 px-3 text-right font-semibold text-orange-700 bg-emerald-50/30">
                  {formatVND(newAdsCost)}
                </td>
                <td className="py-3 px-3 text-right font-bold text-emerald-600">
                  -{formatMillionVND(adsSavings)}
                </td>
              </tr>
              <tr>
                <td className="py-3 px-3 font-medium">Tổng chi phí phát sinh</td>
                <td className="py-3 px-3 text-right text-rose-600 font-semibold">{formatVND(baseCost)}</td>
                <td className="py-3 px-3 text-right font-bold text-rose-600 bg-emerald-50/30">
                  {formatVND(newTotalCost)}
                </td>
                <td className="py-3 px-3 text-right font-bold text-emerald-600">
                  -{formatMillionVND(baseCost - newTotalCost)}
                </td>
              </tr>
              <tr className="bg-slate-50/80 font-bold border-t-2 border-slate-300 text-sm">
                <td className="py-3 px-3 text-slate-900">DOANH THU THỰC NHẬN VỀ TK</td>
                <td className="py-3 px-3 text-right text-slate-900">{formatVND(baseNet)}</td>
                <td className="py-3 px-3 text-right text-emerald-700 bg-emerald-100/60 font-extrabold">
                  {formatVND(newNetRevenue)}
                </td>
                <td className="py-3 px-3 text-right text-emerald-700 font-extrabold">
                  +{formatVND(totalExtraNet)}
                </td>
              </tr>
              <tr className="font-semibold">
                <td className="py-2.5 px-3">Tỷ lệ Chi phí / Doanh thu Gộp</td>
                <td className="py-2.5 px-3 text-right text-rose-600">{CHAIN_SUMMARY.costRatio}%</td>
                <td className="py-2.5 px-3 text-right text-emerald-700 bg-emerald-50/30 font-bold">
                  {newCostRatio.toFixed(2)}%
                </td>
                <td className="py-2.5 px-3 text-right text-emerald-700">
                  -{(CHAIN_SUMMARY.costRatio - newCostRatio).toFixed(2)}%
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
