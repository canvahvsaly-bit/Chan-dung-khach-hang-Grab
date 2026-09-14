export interface AppPerformance {
  appName: 'GrabFood' | 'ShopeeFood' | 'BeFood' | 'Xanh SM';
  orders: number;
  grossRevenue: number; // Doanh thu trước CK
  promoCost: number; // Chi phí khuyến mãi
  commissionCost: number; // Chi phí chiết khấu
  adsCost: number; // Chi phí quảng cáo
  totalCost: number; // Tổng chi phí
  netRevenue: number; // Doanh thu thực nhận
  costRatio: number; // % Chi phí / Doanh thu
  aov: number; // Giá trị trung bình đơn (đ/đơn)
  ordersChangeMoM?: number; // % Tăng giảm đơn MoM
  netRevenueChangeMoM?: number; // % Tăng giảm DT thực MoM
  aovChangeMoM?: number; // % Tăng giảm AOV MoM
  keyDiagnosis: string[];
  keyStrengths: string[];
}

export interface CustomerMetrics {
  branchId: string;
  branchName: string;
  totalCustomers: number;
  totalChangePercent: number;
  newCustomers: number;
  newChangePercent: number;
  repeatCustomers: number;
  repeatChangePercent: number;
  reactivatedCustomers: number;
  reactivatedChangePercent: number;
  repeatRate: number; // % Khách quay lại
  promoSpend: number; // Chi tiêu khuyến mãi
  netSalesFromOffers: number; // Doanh số ròng từ khuyến mãi
  salesToSpendRatio: number; // Sales-to-spend rate (vd: 1.13x)
  salesToSpendChangePercent?: number;
  offerTransactions?: number;
  weeklyTrend: { week: string; count: number; note?: string }[];
  peakPattern: {
    lunchPeak: string;
    morningPeak: string;
    nightPeak: string;
    quietHours: string;
  };
  dayOrderPatterns: {
    peakDays: string[];
    paydayPeaks: string[];
    lowDays: string[];
    notes: string;
  };
}

export interface BranchSummary {
  id: 'truong-sa' | 'tran-huy-lieu' | 'le-quang-dinh';
  name: string;
  addressSummary: string;
  grossRevenue: number;
  promoCost: number;
  commissionCost: number;
  adsCost: number;
  totalCost: number;
  netRevenue: number;
  costRatio: number;
  netRevenueMoM: number;
  netRevenueMoMVal: number;
  totalOrders: number;
  aov: number;
  apps: AppPerformance[];
  customerData: CustomerMetrics;
  actionItems: {
    id: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    expectedImpact: string;
    completed?: boolean;
  }[];
}

export interface ChainSummary {
  grossRevenue: number;
  promoCost: number;
  commissionCost: number;
  adsCost: number;
  totalCost: number;
  netRevenue: number;
  costRatio: number;
  netRevenueMoM: number;
  netRevenueMoMVal: number;
  totalOrders: number;
  aovAverage: number;
  netRetentionRate: number; // % tiền thực giữ lại = netRevenue / grossRevenue
}

export interface ActionPlanSystemItem {
  id: string;
  category: 'Quản trị Quảng cáo' | 'Kiểm soát Khuyến mãi' | 'Tái cơ cấu Menu Shopee' | 'Mở rộng Upsell trên Xanh SM' | 'Kiểm soát Cost Món';
  title: string;
  description: string;
  targetBranch: string;
  impactGoal: string;
  status: 'pending' | 'in_progress' | 'completed';
}
