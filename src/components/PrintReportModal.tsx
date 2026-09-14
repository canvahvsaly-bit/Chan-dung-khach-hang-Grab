import React, { useState } from 'react';
import { 
  X, 
  Printer, 
  Copy, 
  Check, 
  FileText, 
  Download, 
  ExternalLink,
  Building2
} from 'lucide-react';
import { CHAIN_SUMMARY, BRANCHES_DATA } from '../data/reportData';
import { formatVND, formatMillionVND } from '../utils/format';

interface PrintReportModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrintReportModal: React.FC<PrintReportModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const reportElem = document.getElementById('printable-executive-report');
    if (reportElem) {
      navigator.clipboard.writeText(reportElem.innerText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 print:p-0 print:bg-white print:static">
      <div className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col border border-slate-200 overflow-hidden print:max-h-none print:shadow-none print:border-none print:rounded-none">
        {/* Modal Action Bar (hidden in print) */}
        <div className="px-6 py-3.5 border-b border-slate-200 bg-slate-50 flex items-center justify-between print:hidden">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            <span className="font-bold text-sm text-slate-800">
              Bản In Văn Bản Báo Cáo Quản Trị Toàn Chuỗi &amp; Kế Hoạch Tháng 9
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleCopyText}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white hover:bg-slate-100 text-slate-700 text-xs font-semibold border border-slate-300 transition-colors cursor-pointer"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Đã sao chép!' : 'Sao chép văn bản'}</span>
            </button>
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In / Lưu PDF (A4)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg hover:bg-slate-200 text-slate-500 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Report Body */}
        <div 
          id="printable-executive-report" 
          className="p-8 sm:p-12 overflow-y-auto space-y-8 text-slate-800 text-xs sm:text-sm leading-relaxed font-serif print:p-6 print:overflow-visible"
        >
          {/* Document Header */}
          <div className="border-b-2 border-slate-900 pb-6 text-center space-y-2">
            <div className="text-xs uppercase tracking-widest text-slate-500 font-sans font-semibold">
              HỆ THỐNG QUẢN TRỊ KINH DOANH F&amp;B ONLINE DELIVERY
            </div>
            <h1 className="text-xl sm:text-2xl font-bold uppercase text-slate-900 font-sans">
              BÁO CÁO KẾT QUẢ KINH DOANH THÁNG 8 (KỲ 2608)
            </h1>
            <h2 className="text-sm sm:text-base font-medium text-slate-600 font-sans">
              VÀ KẾ HOẠCH HÀNH ĐỘNG TỐI ƯU HÓA CHI PHÍ THÁNG 9
            </h2>
            <div className="text-xs text-slate-500 italic">
              Phạm vi: 4 Nền tảng (ShopeeFood, GrabFood, BeFood, Xanh SM) — 3 Cơ sở: Trường Sa, Trần Huy Liệu, Lê Quang Định
            </div>
          </div>

          {/* Section 1: Chain Overview */}
          <section className="space-y-4">
            <h2 className="text-base font-bold uppercase border-l-4 border-emerald-600 pl-3 text-slate-900 font-sans">
              I. TỔNG HỢP TOÀN HỆ THỐNG (3 CHI NHÁNH)
            </h2>

            <p>
              Trong tháng 8 (Kỳ 2608), tổng doanh thu bán ra trước chiết khấu của toàn hệ thống đạt <strong>{formatVND(CHAIN_SUMMARY.grossRevenue)}</strong> (hơn nửa tỷ đồng) qua <strong>{CHAIN_SUMMARY.totalOrders}</strong> đơn hàng. Tuy nhiên, dòng tiền thực nhận về tài khoản chỉ đạt <strong>{formatVND(CHAIN_SUMMARY.netRevenue)}</strong>, suy giảm <strong>-2,07%</strong> so với tháng 7 (mất ~4,69 triệu VNĐ).
            </p>

            {/* Table Chain */}
            <div className="overflow-x-auto my-3">
              <table className="w-full text-left text-xs border border-slate-300 font-sans">
                <thead className="bg-slate-100 text-slate-800 font-bold border-b border-slate-300">
                  <tr>
                    <th className="p-2 border-r border-slate-300">Chi nhánh</th>
                    <th className="p-2 border-r border-slate-300 text-right">DT Trước CK</th>
                    <th className="p-2 border-r border-slate-300 text-right">Khuyến mãi</th>
                    <th className="p-2 border-r border-slate-300 text-right">Chiết khấu sàn</th>
                    <th className="p-2 border-r border-slate-300 text-right">Quảng cáo</th>
                    <th className="p-2 border-r border-slate-300 text-right">Tổng chi phí</th>
                    <th className="p-2 border-r border-slate-300 text-right bg-slate-200">DT Thực nhận</th>
                    <th className="p-2 text-right">% Chi phí</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700">
                  <tr>
                    <td className="p-2 border-r border-slate-200 font-medium">Trường Sa</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['truong-sa'].grossRevenue)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['truong-sa'].promoCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['truong-sa'].commissionCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['truong-sa'].adsCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['truong-sa'].totalCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right font-bold text-slate-900 bg-slate-50">{formatVND(BRANCHES_DATA['truong-sa'].netRevenue)}</td>
                    <td className="p-2 text-right">{BRANCHES_DATA['truong-sa'].costRatio.toFixed(2)}%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-slate-200 font-medium">Lê Quang Định</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['le-quang-dinh'].grossRevenue)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['le-quang-dinh'].promoCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['le-quang-dinh'].commissionCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['le-quang-dinh'].adsCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['le-quang-dinh'].totalCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right font-bold text-slate-900 bg-slate-50">{formatVND(BRANCHES_DATA['le-quang-dinh'].netRevenue)}</td>
                    <td className="p-2 text-right font-semibold text-rose-600">{BRANCHES_DATA['le-quang-dinh'].costRatio.toFixed(2)}%</td>
                  </tr>
                  <tr>
                    <td className="p-2 border-r border-slate-200 font-medium">Trần Huy Liệu</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['tran-huy-lieu'].grossRevenue)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['tran-huy-lieu'].promoCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['tran-huy-lieu'].commissionCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['tran-huy-lieu'].adsCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right">{formatVND(BRANCHES_DATA['tran-huy-lieu'].totalCost)}</td>
                    <td className="p-2 border-r border-slate-200 text-right font-bold text-slate-900 bg-slate-50">{formatVND(BRANCHES_DATA['tran-huy-lieu'].netRevenue)}</td>
                    <td className="p-2 text-right font-semibold text-emerald-700">{BRANCHES_DATA['tran-huy-lieu'].costRatio.toFixed(2)}%</td>
                  </tr>
                  <tr className="bg-slate-100 font-bold border-t border-slate-300">
                    <td className="p-2 border-r border-slate-300">TỔNG CỘNG CHUỖI</td>
                    <td className="p-2 border-r border-slate-300 text-right">{formatVND(CHAIN_SUMMARY.grossRevenue)}</td>
                    <td className="p-2 border-r border-slate-300 text-right">{formatVND(CHAIN_SUMMARY.promoCost)}</td>
                    <td className="p-2 border-r border-slate-300 text-right">{formatVND(CHAIN_SUMMARY.commissionCost)}</td>
                    <td className="p-2 border-r border-slate-300 text-right">{formatVND(CHAIN_SUMMARY.adsCost)}</td>
                    <td className="p-2 border-r border-slate-300 text-right">{formatVND(CHAIN_SUMMARY.totalCost)}</td>
                    <td className="p-2 border-r border-slate-300 text-right text-emerald-900 bg-slate-200">{formatVND(CHAIN_SUMMARY.netRevenue)}</td>
                    <td className="p-2 text-right text-rose-700">{CHAIN_SUMMARY.costRatio.toFixed(2)}%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="space-y-2 bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs font-sans">
              <div className="font-bold text-slate-900">Các phát hiện cốt lõi:</div>
              <ul className="list-disc list-inside space-y-1 text-slate-700">
                <li><strong>Gánh nặng chi phí kỷ lục (53,41%):</strong> Tổng chi phí lên đến 274,74 triệu đ, trong đó Khuyến mãi chiếm 195,19M (71,0% tổng chi phí). Cứ bán 100đ, chuỗi chỉ giữ lại 43,18đ.</li>
                <li><strong>Nghịch lý Quảng Cáo GrabAds:</strong> Chi phí quảng cáo tăng từ 6,17M lên 8,46M (+37.1%), nhưng lượng đơn GrabFood và doanh thu gộp toàn chuỗi đều đi lùi.</li>
                <li><strong>Trần Huy Liệu là điểm sáng duy nhất:</strong> Tăng trưởng doanh thu thực nhận +12.66% và là cơ sở duy nhất kiểm soát chi phí dưới 50% (49.50%).</li>
                <li><strong>Lê Quang Định là tâm chấn sụt giảm:</strong> Mất tới 9,17M doanh thu thực (-11.47%) và tỷ lệ chi phí lên tới 55.64% cao nhất chuỗi.</li>
              </ul>
            </div>
          </section>

          {/* Section 2: Branch Deep Dives */}
          <section className="space-y-4">
            <h2 className="text-base font-bold uppercase border-l-4 border-emerald-600 pl-3 text-slate-900 font-sans">
              II. CHI TIẾT KẾT QUẢ KINH DOANH THEO CHI NHÁNH
            </h2>

            {/* Trường Sa */}
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-slate-900 font-sans">
                1. Chi nhánh Trường Sa (1.560 đơn | DT Thực nhận: 97,19 triệu đ | Chi phí: 53,84%)
              </h3>
              <p className="text-xs">
                - <strong>GrabFood:</strong> Đạt 591 đơn (-16.3%), gộp 114.45M, chi phí ngốn tới 64.07% (73.33M), thực nhận chỉ 38.52M. AOV đạt 193.651đ.<br />
                - <strong>ShopeeFood:</strong> Đạt 494 đơn (-13.3%), gộp 62.79M, thực nhận 29.92M (49.4% chi phí). Điểm sáng AOV tăng vọt lên 127.109đ (+14.8%).<br />
                - <strong>BeFood &amp; Xanh SM:</strong> BeFood phục hồi mạnh đạt 273 đơn (+55.1%). Xanh SM bùng nổ 202 đơn (+80.4%), không tốn khuyến mãi, chiết khấu chỉ 19.3%.<br />
                - <strong>GrabMerchant 90 ngày:</strong> Khách quay lại giảm sâu -29.07%. Sales-to-spend chỉ 1.13x (chi 157M khuyến mãi thu 177M sales, lỗ nặng). Đỉnh giờ: Trưa 13:00 T2-T6 và Cú đêm 23:00-00:00 T6-T7.
              </p>
            </div>

            {/* Trần Huy Liệu */}
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-slate-900 font-sans">
                2. Chi nhánh Trần Huy Liệu (892 đơn | DT Thực nhận: 54,18 triệu đ | Chi phí: 49,50%)
              </h3>
              <p className="text-xs">
                - <strong>ShopeeFood:</strong> 409 đơn (-12.8%), gộp 51.62M, thực nhận 24.34M. AOV tăng lên 126.203đ (+14.5%).<br />
                - <strong>GrabFood:</strong> Đơn đi ngang 248 đơn (3 tháng liên tiếp) dù chi 2.92M GrabAds lãng phí. AOV kỷ lục 198.377đ (+9.5%).<br />
                - <strong>BeFood &amp; Xanh SM:</strong> BeFood tăng trưởng thần tốc +110.9% (135 đơn). Xanh SM vượt mốc 100 đơn (+28.2%).<br />
                - <strong>GrabMerchant 90 ngày:</strong> Khung giờ cao điểm: Đỉnh tuyệt đối 13:00 Thứ 6. Sáng T7 và T5 bán tốt. Đặc biệt: Sau 21:30 trắng trơn không có khách, cần chốt ca sớm.
              </p>
            </div>

            {/* Lê Quang Định */}
            <div className="space-y-2">
              <h3 className="font-bold text-sm text-slate-900 font-sans">
                3. Chi nhánh Lê Quang Định (1.124 đơn | DT Thực nhận: 70,76 triệu đ | Chi phí: 55,64%)
              </h3>
              <p className="text-xs">
                - <strong>GrabFood:</strong> 586 đơn (-16.9%), thực nhận 41.57M (-17.2%). Nghịch lý Ads tăng x3 (2.96M) nhưng mất 119 đơn. Khuyến mãi ngốn 44.7% DT gộp.<br />
                - <strong>ShopeeFood:</strong> Suy thoái kép: vừa giảm đơn (-15.1%, 370 đơn) vừa giảm AOV (103.247đ), thực nhận rơi về 18.12M.<br />
                - <strong>BeFood:</strong> AOV cao kỷ lục toàn chuỗi: 131.318đ (+12.3%), đơn tăng +46.7%.<br />
                - <strong>GrabMerchant 90 ngày:</strong> Báo động đỏ chi phí khuyến mãi: Chi 153.36M (+55.12%) nhưng sales chỉ tăng +11.53%, Sales-to-spend giảm về 1.24x. Đỉnh giờ: Sáng 08:00 - 10:30 cực mạnh và trưa 13:00 Thứ 5. Đóng app sau 21:30.
              </p>
            </div>
          </section>

          {/* Section 3: Strategic Action Plan */}
          <section className="space-y-3">
            <h2 className="text-base font-bold uppercase border-l-4 border-emerald-600 pl-3 text-slate-900 font-sans">
              III. KẾ HOẠCH HÀNH ĐỘNG THÁNG 9 (5 TRỤ CỘT CHIẾN LƯỢC)
            </h2>

            <ol className="list-decimal list-inside space-y-2 text-xs font-sans">
              <li>
                <strong>Quản trị Quảng Cáo (Cắt giảm 3.0 - 3.5 triệu đ):</strong> Thanh tra và cắt giảm ngân sách GrabAds tại Lê Quang Định (từ 2.96M về 1.2M) và Trần Huy Liệu (từ 2.92M về 1.5M). Chỉ bật ads từ khóa vào 11h-13h và 18h-20h.
              </li>
              <li>
                <strong>Kiểm soát Khuyến Mãi (Hạ tỷ lệ chi phí &lt; 48%):</strong> Chuyển sang voucher bậc thang theo ngưỡng AOV (Giảm 25k cho đơn &gt;180k, Giảm 45k cho đơn &gt;250k). Xóa bỏ voucher giảm sâu cho đơn nhỏ.
              </li>
              <li>
                <strong>Tái cơ cấu Menu ShopeeFood:</strong> Thiết kế Combo Trưa Văn Phòng định giá 115k - 130k kèm nước. Test ngân sách ads từ khóa nhỏ 500k/tháng để đưa số đơn về lại &gt;450 đơn.
              </li>
              <li>
                <strong>Mở rộng Upsell trên Xanh SM:</strong> Bổ sung món ăn phụ, topping, đồ uống vào menu Xanh SM để kéo AOV từ 75k-84k lên 95k-100k, thu dòng tiền ròng sạch trên 80%.
              </li>
              <li>
                <strong>Menu Engineering &amp; Vận hành:</strong> Đảm bảo lãi gộp sau phí sàn tối thiểu 28-30%. Đóng app sau 21:30 tại Trần Huy Liệu và Lê Quang Định để tiết kiệm chi phí ca đêm; đẩy mạnh món đêm tại Trường Sa.
              </li>
            </ol>
          </section>

          {/* Sign off */}
          <div className="pt-6 border-t border-slate-300 flex justify-between text-xs font-sans text-slate-600">
            <div>
              <strong>Ban Vận Hành Online Delivery</strong><br />
              Kỳ báo cáo: Tháng 8 / 2026 (Kỳ 2608)
            </div>
            <div className="text-right">
              <strong>Phê Duyệt Ban Giám Đốc</strong><br />
              Áp dụng triển khai từ 01/09
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
