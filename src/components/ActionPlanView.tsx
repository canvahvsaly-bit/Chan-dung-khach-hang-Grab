import React, { useState } from 'react';
import { 
  CheckSquare, 
  Target, 
  TrendingUp, 
  ShieldAlert, 
  Percent, 
  Megaphone, 
  UtensilsCrossed, 
  Sparkles, 
  Filter,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { SYSTEM_ACTION_PLANS } from '../data/reportData';

export const ActionPlanView: React.FC = () => {
  const [tasks, setTasks] = useState(SYSTEM_ACTION_PLANS);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const toggleTaskStatus = (id: string) => {
    setTasks(prev => prev.map(t => {
      if (t.id === id) {
        const nextStatus = t.status === 'completed' ? 'pending' : 'completed';
        return { ...t, status: nextStatus };
      }
      return t;
    }));
  };

  const categories = [
    'all',
    'Quản trị Quảng cáo',
    'Kiểm soát Khuyến mãi',
    'Tái cơ cấu Menu Shopee',
    'Mở rộng Upsell trên Xanh SM',
    'Kiểm soát Cost Món'
  ];

  const filteredTasks = selectedCategory === 'all' 
    ? tasks 
    : tasks.filter(t => t.category === selectedCategory);

  const completedCount = tasks.filter(t => t.status === 'completed').length;
  const progressPercent = Math.round((completedCount / tasks.length) * 100);

  return (
    <div className="space-y-6">
      {/* Action Plan Header */}
      <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-xs">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <h2 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <Target className="w-5 h-5 text-emerald-600" />
                <span>Kế Hoạch Hành Động Chi Tiết Cho Tháng 9 (5 Trụ Cột Chiến Lược)</span>
              </h2>
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-semibold">
                Mục tiêu: Đưa % Chi phí về &lt; 48%
              </span>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Các biện pháp quyết liệt nhằm cắt giảm lãng phí, bảo vệ biên lợi nhuận thực nhận và chặn đà suy giảm đơn
            </p>
          </div>

          {/* Progress Tracker */}
          <div className="bg-slate-50 px-4 py-2.5 rounded-xl border border-slate-200 text-xs flex items-center gap-4">
            <div>
              <div className="text-slate-500 font-medium">Tiến độ triển khai</div>
              <div className="text-base font-bold text-emerald-600">
                {completedCount}/{tasks.length} Hạng mục ({progressPercent}%)
              </div>
            </div>
            <div className="w-24 bg-slate-200 h-2.5 rounded-full overflow-hidden">
              <div 
                className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Target Impact Highlights */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 shadow-xs">
          <div className="font-bold text-xs flex items-center gap-1.5 text-emerald-800">
            <TrendingUp className="w-4 h-4 text-emerald-600" />
            <span>Dòng tiền tiết kiệm dự kiến</span>
          </div>
          <div className="text-xl font-extrabold text-emerald-700 mt-1">
            25 - 30 Triệu VNĐ
          </div>
          <div className="text-xs text-emerald-800 mt-1">
            Nhờ cắt giảm khuyến mãi ảo và ngân sách GrabAds rác
          </div>
        </div>

        <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-blue-900 shadow-xs">
          <div className="font-bold text-xs flex items-center gap-1.5 text-blue-800">
            <Percent className="w-4 h-4 text-blue-600" />
            <span>Hạ Tỷ Lệ Chi Phí Chuỗi</span>
          </div>
          <div className="text-xl font-extrabold text-blue-700 mt-1">
            Từ 53.4% &rarr; &lt; 48%
          </div>
          <div className="text-xs text-blue-800 mt-1">
            Đưa biên lợi nhuận thực nhận về tài khoản vượt trên 52%
          </div>
        </div>

        <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 text-purple-900 shadow-xs">
          <div className="font-bold text-xs flex items-center gap-1.5 text-purple-800">
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span>Tối Ưu Giỏ Hàng Xanh SM</span>
          </div>
          <div className="text-xl font-extrabold text-purple-700 mt-1">
            AOV &gt; 95.000 đ/đơn
          </div>
          <div className="text-xs text-purple-800 mt-1">
            Bổ sung combo/món phụ để tận dụng kênh chiết khấu sạch 19-20%
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs">
        <Filter className="w-3.5 h-3.5 text-slate-400 shrink-0" />
        <span className="text-slate-400 font-medium shrink-0">Lọc trụ cột:</span>
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer font-medium ${
              selectedCategory === cat
                ? 'bg-slate-900 text-white font-semibold shadow-xs'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat === 'all' ? 'Tất cả 5 trụ cột' : cat}
          </button>
        ))}
      </div>

      {/* Action Items List */}
      <div className="space-y-3">
        {filteredTasks.map((task) => {
          const isDone = task.status === 'completed';
          return (
            <div
              key={task.id}
              onClick={() => toggleTaskStatus(task.id)}
              className={`p-4 rounded-xl border transition-all cursor-pointer select-none ${
                isDone
                  ? 'bg-emerald-50/50 border-emerald-300'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    checked={isDone}
                    onChange={() => {}}
                    className="mt-1 w-4 h-4 rounded text-emerald-600 focus:ring-emerald-500 cursor-pointer"
                  />
                  <div className="space-y-1.5">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] px-2 py-0.5 rounded font-semibold bg-slate-100 text-slate-700">
                        {task.category}
                      </span>
                      <span className={`text-sm font-bold ${isDone ? 'line-through text-slate-500' : 'text-slate-900'}`}>
                        {task.title}
                      </span>
                      {isDone && (
                        <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3" /> Đã hoàn thành
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed max-w-4xl">
                      {task.description}
                    </p>
                    <div className="flex flex-wrap items-center gap-3 text-[11px] pt-1">
                      <span className="text-slate-500">
                        Phạm vi áp dụng: <strong className="text-slate-700">{task.targetBranch}</strong>
                      </span>
                      <span className="text-emerald-700 font-medium bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">
                        Mục tiêu: {task.impactGoal}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="shrink-0 text-slate-400 text-xs hidden sm:block">
                  {isDone ? 'Nhấp để bỏ chọn' : 'Nhấp để hoàn thành'}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* 5 Core Pillars Strategy Guidance */}
      <div className="p-5 rounded-xl bg-slate-900 text-white shadow-md">
        <h3 className="font-bold text-sm text-white mb-3">
          Hướng Dẫn Chi Tiết Triển Khai 5 Trụ Cột Cho Quản Lý Chi Nhánh &amp; Vận Hành
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
          <div className="space-y-1.5">
            <strong className="text-amber-400">1. Quản trị Quảng Cáo (GrabAds):</strong>
            <p>
              Tắt chế độ "Tự động đấu thầu cả ngày" của Grab. Chỉ bật ngân sách từ khóa trong 2 khung giờ: 11:00 - 13:00 và 18:00 - 20:00. Khống chế ngân sách Lê Quang Định tối đa 1.2M và Trần Huy Liệu tối đa 1.5M/tháng.
            </p>
          </div>
          <div className="space-y-1.5">
            <strong className="text-emerald-400">2. Kiểm soát Khuyến Mãi (Voucher bậc thang):</strong>
            <p>
              Tuyệt đối không giảm % trực tiếp vào món hoặc đơn nhỏ. Đặt ngưỡng tối thiểu: Đơn trên 180k mới được giảm 20k-25k; đơn trên 260k mới được giảm 40k. Khách muốn hưởng ưu đãi buộc phải rủ thêm người đặt cùng để đẩy AOV lên.
            </p>
          </div>
          <div className="space-y-1.5">
            <strong className="text-blue-400">3. Tái cơ cấu Menu ShopeeFood:</strong>
            <p>
              Tạo các "Combo Trưa Tiết Kiệm" (1 món chính + 1 đồ uống) giá 115k - 135k. Tham gia tiệc trợ giá đồng tài trợ của Shopee (Shopee gánh 50% chi phí voucher) thay vì tự chịu 100%.
            </p>
          </div>
          <div className="space-y-1.5">
            <strong className="text-cyan-400">4. Đẩy mạnh Upsell Xanh SM:</strong>
            <p>
              Menu Xanh SM đang bị sơ sài, thiếu hình ảnh món ăn kèm. Đưa thêm các món phụ (trứng, chả, canh, rau, nước sâm, trà sữa...) giá từ 15k - 30k để khách dễ dàng click chọn thêm, nâng AOV từ 75k lên 95k.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
