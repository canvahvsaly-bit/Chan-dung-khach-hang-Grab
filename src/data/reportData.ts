import { BranchSummary, ChainSummary, ActionPlanSystemItem } from '../types/data';

export const CHAIN_SUMMARY: ChainSummary = {
  grossRevenue: 514411322,
  promoCost: 195189528,
  commissionCost: 71089941,
  adsCost: 8459193,
  totalCost: 274738662,
  netRevenue: 222126207,
  costRatio: 53.41,
  netRevenueMoM: -2.07,
  netRevenueMoMVal: -4690000,
  totalOrders: 3576,
  aovAverage: 143851,
  netRetentionRate: 43.18,
};

export const BRANCHES_DATA: Record<'truong-sa' | 'tran-huy-lieu' | 'le-quang-dinh', BranchSummary> = {
  'truong-sa': {
    id: 'truong-sa',
    name: 'Chi nhánh Trường Sa',
    addressSummary: 'Khu vực Trường Sa - Kênh quy mô lớn, tệp khách ăn trưa & ăn đêm',
    grossRevenue: 223169205,
    promoCost: 85453832,
    commissionCost: 32128389,
    adsCost: 2579566,
    totalCost: 120161787,
    netRevenue: 97188241,
    costRatio: 53.84,
    netRevenueMoM: -1.62,
    netRevenueMoMVal: -1600000,
    totalOrders: 1560,
    aov: 143057,
    apps: [
      {
        appName: 'GrabFood',
        orders: 591,
        grossRevenue: 114447600,
        promoCost: 56600000,
        commissionCost: 14151472,
        adsCost: 2579566,
        totalCost: 73331038,
        netRevenue: 38515029,
        costRatio: 64.07,
        aov: 193651,
        ordersChangeMoM: -16.3,
        netRevenueChangeMoM: -21.5,
        keyDiagnosis: [
          'Chi phí khuyến mãi chiếm 49.5% doanh thu gộp (56.6M / 114.4M).',
          'Tổng chi phí 64.07%: bán 100đ chỉ thu về chưa đầy 36đ thực nhận.',
          'Số đơn giảm mạnh 115 đơn từ 706 xuống 591 đơn (-16.3%).'
        ],
        keyStrengths: [
          'Giá trị đơn trung bình (AOV) cao nhất chuỗi: 193.651 đ/đơn, khách mua nhóm/gia đình.'
        ]
      },
      {
        appName: 'ShopeeFood',
        orders: 494,
        grossRevenue: 62792055,
        promoCost: 21750000,
        commissionCost: 9272294,
        adsCost: 0,
        totalCost: 31022294,
        netRevenue: 29923158,
        costRatio: 49.40,
        aov: 127109,
        ordersChangeMoM: -13.3,
        netRevenueChangeMoM: -2.3,
        aovChangeMoM: 14.8,
        keyDiagnosis: [
          'Số đơn giảm từ 570 xuống 494 đơn (-13.3%).',
          'Chi phí quảng cáo duy trì 0đ từ tháng 2, thiếu chủ động kéo khách mới.'
        ],
        keyStrengths: [
          'AOV tăng vọt từ 110.756đ lên 127.109đ (+14.8%), bù đắp cho lượng đơn giảm.'
        ]
      },
      {
        appName: 'BeFood',
        orders: 273,
        grossRevenue: 28934300,
        promoCost: 7060000,
        commissionCost: 5469805,
        adsCost: 0,
        totalCost: 12529805,
        netRevenue: 15196240,
        costRatio: 43.30,
        aov: 105986,
        ordersChangeMoM: 55.1,
        netRevenueChangeMoM: 29.9,
        keyDiagnosis: [
          'Khuyến mãi tăng từ 4.2M lên 7.06M kéo AOV giảm nhẹ về 105.986đ.'
        ],
        keyStrengths: [
          'Phục hồi mạnh mẽ: đơn tăng +55.1% (từ 176 lên 273 đơn), thoát đáy tháng 6.'
        ]
      },
      {
        appName: 'Xanh SM',
        orders: 202,
        grossRevenue: 16995250,
        promoCost: 0,
        commissionCost: 3278650,
        adsCost: 0,
        totalCost: 3278650,
        netRevenue: 13553814,
        costRatio: 19.29,
        aov: 84135,
        ordersChangeMoM: 80.4,
        netRevenueChangeMoM: 83.2,
        keyDiagnosis: [
          'AOV còn thấp (84.135đ), tệp khách chủ yếu đặt đơn cá nhân.'
        ],
        keyStrengths: [
          'Bùng nổ 80.4% số đơn, doanh thu thực nhảy vọt +83.2%.',
          'Không tốn chi phí khuyến mãi (0đ) và quảng cáo (0đ), chiết khấu chỉ 19.3% sạch nhất.'
        ]
      }
    ],
    customerData: {
      branchId: 'truong-sa',
      branchName: 'Chi nhánh Trường Sa',
      totalCustomers: 1502,
      totalChangePercent: -10.70,
      newCustomers: 854,
      newChangePercent: 9.07,
      repeatCustomers: 593,
      repeatChangePercent: -29.07,
      reactivatedCustomers: 55,
      reactivatedChangePercent: -12.70,
      repeatRate: 39.48,
      promoSpend: 157368960,
      netSalesFromOffers: 177775140,
      salesToSpendRatio: 1.13,
      salesToSpendChangePercent: -13.31,
      weeklyTrend: [
        { week: '13/06 - 21/06', count: 48, note: 'Khởi đầu chu kỳ' },
        { week: '22/06 - 28/06', count: 102, note: 'Bắt đầu tăng trưởng' },
        { week: '29/06 - 05/07', count: 135, note: 'Đỉnh tháng 7 (Payday)' },
        { week: '06/07 - 12/07', count: 124 },
        { week: '13/07 - 19/07', count: 120 },
        { week: '20/07 - 26/07', count: 132, note: 'Đỉnh thứ 2 tháng 7' },
        { week: '27/07 - 02/08', count: 128 },
        { week: '03/08 - 09/08', count: 125, note: 'Đầu tháng 8 duy trì' },
        { week: '10/08 - 16/08', count: 114 },
        { week: '17/08 - 23/08', count: 108 },
        { week: '24/08 - 30/08', count: 102, note: 'Cuối tháng 8 hạ nhiệt' },
        { week: '31/08 - 06/09', count: 98, note: 'Kỳ nghỉ 2/9' },
        { week: '07/09 - 10/09', count: 62, note: 'Tuần đầu tháng 9' }
      ],
      peakPattern: {
        lunchPeak: 'Đỉnh cao nhất 13:00 từ Thứ 2 đến Thứ 6 (đặc biệt Thứ 4, 5, 6). Thứ 6 kéo dài 13:00 - 14:00.',
        morningPeak: 'Thứ 4 có cao điểm nhỏ ăn sáng lúc 08:00 - 09:00.',
        nightPeak: 'Cực mạnh lúc 23:00 - 00:00 mỗi ngày, Thứ 6 và Thứ 7 bùng nổ lúc 23:00.',
        quietHours: '01:00 - 06:00 sáng trắng trơn; 15:00 - 16:30 thưa thớt.'
      },
      dayOrderPatterns: {
        peakDays: ['Thứ 6', 'Thứ 7', 'Chủ Nhật (28 - 31 đơn/ngày)'],
        paydayPeaks: ['01/07 - 03/07 (~31 đơn)', '11/07 - 12/07 (~29 đơn)', '11/08 - 12/08 (~27 đơn)', '01/09 - 03/09 (~30 đơn)'],
        lowDays: ['Thứ 2, Thứ 3 đầu tuần (đáy 9 - 10 đơn/ngày)'],
        notes: 'Chỉ số Sales-to-spend chỉ 1.13x: Bỏ 1đ khuyến mãi thu về 1.13đ doanh số, lỗ nặng sau phí sàn và cost nguyên liệu!'
      }
    },
    actionItems: [
      {
        id: 'ts-1',
        title: 'Tái cơ cấu chương trình GrabFood',
        description: 'Cắt giảm khuyến mãi dàn trải từ 49.5% xuống dưới 38-40%. Chuyển sang voucher bậc thang: Giảm 25k cho đơn từ 180k, giảm 45k cho đơn từ 250k.',
        priority: 'high',
        expectedImpact: 'Tiết kiệm 8 - 12 triệu VNĐ chi phí khuyến mãi lãng phí'
      },
      {
        id: 'ts-2',
        title: 'Kích cầu lại đơn ShopeeFood',
        description: 'Đa dạng hóa combo ăn trưa văn phòng quanh mức 125k - 140k. Thử nghiệm test ngân sách ads từ khóa 500k - 1M/tháng để đưa số đơn về lại >550 đơn.',
        priority: 'medium',
        expectedImpact: 'Kéo lại lượng đơn đạt 550 - 580 đơn/tháng'
      },
      {
        id: 'ts-3',
        title: 'Upsell nâng AOV trên Xanh SM',
        description: 'Đưa thêm món ăn kèm (topping, nước ngọt, món phụ) vào menu Xanh SM nhằm đẩy AOV từ 84k lên 100k - 105k.',
        priority: 'high',
        expectedImpact: 'Gia tăng 3 - 4 triệu VNĐ doanh thu ròng biên lợi nhuận cao'
      },
      {
        id: 'ts-4',
        title: 'Khai thác tệp Cú Đêm (22:30 - 00:30)',
        description: 'Bật app mở rộng món ăn nhanh dễ chuẩn bị vào đêm Thứ 6, Thứ 7 để hớt trọn lượng khách đêm ít cạnh tranh.',
        priority: 'medium',
        expectedImpact: 'Tận dụng thị phần ăn đêm độc quyền của chi nhánh'
      }
    ]
  },
  'tran-huy-lieu': {
    id: 'tran-huy-lieu',
    name: 'Chi nhánh Trần Huy Liệu',
    addressSummary: 'Khu vực văn phòng công sở - Tăng trưởng dương, AOV cao kỷ lục, đóng cửa sớm',
    grossRevenue: 121720239,
    promoCost: 42765671,
    commissionCost: 14575706,
    adsCost: 2915572,
    totalCost: 60256948,
    netRevenue: 54177152,
    costRatio: 49.50,
    netRevenueMoM: 12.66,
    netRevenueMoMVal: 6090000,
    totalOrders: 892,
    aov: 136458,
    apps: [
      {
        appName: 'ShopeeFood',
        orders: 409,
        grossRevenue: 51617039,
        promoCost: 18240000,
        commissionCost: 7535801,
        adsCost: 0,
        totalCost: 25775801,
        netRevenue: 24339228,
        costRatio: 49.94,
        aov: 126203,
        ordersChangeMoM: -12.8,
        netRevenueChangeMoM: -0.45,
        aovChangeMoM: 14.5,
        keyDiagnosis: [
          'Số đơn rơi xuống 409 đơn (-12.8%), thấp thứ 2 trong năm.',
          'Chi phí khuyến mãi chiếm 35.3% doanh thu gộp, không chạy ads.'
        ],
        keyStrengths: [
          'AOV tăng vọt lên 126.203đ (+14.5%), giữ doanh thu thực nhận ổn định ở mức 24.3M.'
        ]
      },
      {
        appName: 'GrabFood',
        orders: 248,
        grossRevenue: 49197400,
        promoCost: 21590000,
        commissionCost: 2917605,
        adsCost: 2915572,
        totalCost: 27423177,
        netRevenue: 16707476,
        costRatio: 55.74,
        aov: 198377,
        ordersChangeMoM: 0,
        netRevenueChangeMoM: 11.1,
        aovChangeMoM: 9.5,
        keyDiagnosis: [
          'Đơn đóng băng liên tục 3 tháng ở mức 248 đơn dù chi gần 3 triệu tiền GrabAds.',
          'Hiệu quả quảng cáo Grab đang lãng phí lớn, không tạo chuyển đổi tăng đơn.'
        ],
        keyStrengths: [
          'AOV chạm đỉnh kỷ lục 198.377 đ/đơn, tệp khách văn phòng có khả năng chi trả cao.'
        ]
      },
      {
        appName: 'BeFood',
        orders: 135,
        grossRevenue: 13517500,
        promoCost: 2930000,
        commissionCost: 2650310,
        adsCost: 0,
        totalCost: 5580310,
        netRevenue: 7539551,
        costRatio: 41.28,
        aov: 100130,
        ordersChangeMoM: 110.9,
        netRevenueChangeMoM: 69.5,
        aovChangeMoM: -15.9,
        keyDiagnosis: [
          'AOV giảm từ 119k về 100.130đ (-15.9%) do dùng voucher khuyến mãi kích cầu.'
        ],
        keyStrengths: [
          'Tăng trưởng số đơn đột biến +110.9% (từ 64 lên 135 đơn), doanh thu thực tăng +69.5%.'
        ]
      },
      {
        appName: 'Xanh SM',
        orders: 100,
        grossRevenue: 7388300,
        promoCost: 0,
        commissionCost: 1477660,
        adsCost: 0,
        totalCost: 1477660,
        netRevenue: 5590897,
        costRatio: 20.00,
        aov: 73883,
        ordersChangeMoM: 28.2,
        netRevenueChangeMoM: 34.9,
        keyDiagnosis: [
          'AOV thấp (73.883đ), cần đẩy thêm topping và combo.'
        ],
        keyStrengths: [
          'Cán mốc 100 đơn đầu tiên, chi phí đúng 20% chiết khấu sàn, dòng tiền ròng sạch tuyệt đối.'
        ]
      }
    ],
    customerData: {
      branchId: 'tran-huy-lieu',
      branchName: 'Chi nhánh Trần Huy Liệu',
      totalCustomers: 649,
      totalChangePercent: -13.93,
      newCustomers: 371,
      newChangePercent: -13.92,
      repeatCustomers: 248,
      repeatChangePercent: -13.59,
      reactivatedCustomers: 30,
      reactivatedChangePercent: -16.67,
      repeatRate: 38.21,
      promoSpend: 62668963,
      netSalesFromOffers: 78773937,
      salesToSpendRatio: 1.26,
      offerTransactions: 724,
      weeklyTrend: [
        { week: '13/06 - 21/06', count: 13, note: 'Khởi động' },
        { week: '22/06 - 28/06', count: 47, note: 'Đỉnh tháng 6' },
        { week: '29/06 - 05/07', count: 48 },
        { week: '06/07 - 12/07', count: 52 },
        { week: '13/07 - 19/07', count: 58, note: 'Đỉnh tháng 7' },
        { week: '20/07 - 26/07', count: 38, note: 'Tuần trũng' },
        { week: '27/07 - 02/08', count: 46 },
        { week: '03/08 - 09/08', count: 41 },
        { week: '10/08 - 16/08', count: 48 },
        { week: '17/08 - 23/08', count: 56, note: 'Bắt đầu tăng tốc' },
        { week: '24/08 - 30/08', count: 57, note: 'Đỉnh kỷ lục 90 ngày' },
        { week: '31/08 - 06/09', count: 49 },
        { week: '07/09 - 10/09', count: 29 }
      ],
      peakPattern: {
        lunchPeak: 'Đỉnh tuyệt đối toàn tuần lúc 13:00 Thứ 6 (ô xanh đen). Thứ 4 và Thứ 5 lúc 13:00 rất đông. Kéo dài 14:00 T3-T6.',
        morningPeak: 'Sáng Thứ 7 (08:00 - 10:00) và Thứ 5 (09:00) khách đặt ăn sáng khá đều.',
        nightPeak: 'Hoàn toàn KHÔNG có đơn sau 21:30 (trắng trơn 21:30 - 06:30 sáng).',
        quietHours: '15:00 - 16:30 vắng khách; ban đêm đóng app.'
      },
      dayOrderPatterns: {
        peakDays: ['Thứ 5, Thứ 6, Thứ 7'],
        paydayPeaks: ['27/06 - 28/06 (~2M/ngày)', '11/07 - 12/07 (~1.3M)', '24/08 - 27/08 (~2M/ngày - đỉnh cao nhất)', '04/09 - 05/09 (~1.6M)'],
        lowDays: ['Thứ 2, Thứ 3 đầu tuần (đáy 250k - 500k/ngày)'],
        notes: 'Sales-to-spend 1.26x nhỉnh hơn Trường Sa nhưng sau khi trừ 25% phí sàn và 35% cost món vẫn sát ngưỡng hòa vốn.'
      }
    },
    actionItems: [
      {
        id: 'thl-1',
        title: 'Cắt giảm tối thiểu 50% ngân sách GrabAds',
        description: 'Kiểm tra chuyển đổi từ khóa GrabAds (2.92M). Cắt giảm ngay 50% (tiết kiệm ~1.5M/tháng) hoặc chỉ bật ads vào 11h-13h và 18h-20h.',
        priority: 'high',
        expectedImpact: 'Tiết kiệm ngay 1.5 triệu đ/tháng dòng tiền ròng'
      },
      {
        id: 'thl-2',
        title: 'Tận dụng AOV kỷ lục 198k để siết khuyến mãi Grab',
        description: 'Loại bỏ voucher đơn nhỏ (<150k). Chỉ áp dụng ưu đãi bậc thang: Giảm 20k cho đơn từ 180k, giảm 35k cho đơn từ 250k.',
        priority: 'high',
        expectedImpact: 'Bảo vệ biên lãi gộp cho tệp khách chi trả cao'
      },
      {
        id: 'thl-3',
        title: 'Chặn đà rơi đơn ShopeeFood',
        description: 'Tham gia các chiến dịch tiệc sàn trợ giá; thiết kế combo ăn trưa quanh mức 130k - 150k kèm nước.',
        priority: 'medium',
        expectedImpact: 'Kéo số đơn Shopee từ 409 về lại mốc 460 - 480 đơn'
      },
      {
        id: 'thl-4',
        title: 'Đóng app sớm sau 21:30',
        description: 'Sau 21:30 hoàn toàn không có đơn. Chốt ca lúc 21:30 để tiết kiệm chi phí nhân sự và điện nước ca đêm.',
        priority: 'medium',
        expectedImpact: 'Cắt giảm chi phí vận hành ca trống vô nghĩa'
      }
    ]
  },
  'le-quang-dinh': {
    id: 'le-quang-dinh',
    name: 'Chi nhánh Lê Quang Định',
    addressSummary: 'Khu vực Bình Thạnh - Tỷ lệ chi phí cao nhất chuỗi (55.64%), lãng phí GrabAds, mạnh ăn sáng',
    grossRevenue: 169521878,
    promoCost: 66970025,
    commissionCost: 24385846,
    adsCost: 2964055,
    totalCost: 94319927,
    netRevenue: 70760813,
    costRatio: 55.64,
    netRevenueMoM: -11.47,
    netRevenueMoMVal: -9170000,
    totalOrders: 1124,
    aov: 150820,
    apps: [
      {
        appName: 'GrabFood',
        orders: 586,
        grossRevenue: 113538000,
        promoCost: 50780000,
        commissionCost: 15396412,
        adsCost: 2964055,
        totalCost: 69140467,
        netRevenue: 41573248,
        costRatio: 60.90,
        aov: 193751,
        ordersChangeMoM: -16.9,
        netRevenueChangeMoM: -17.2,
        aovChangeMoM: 7.1,
        keyDiagnosis: [
          'Nghịch lý quảng cáo: Tiền ads tăng gần gấp 3 (1.07M lên 2.96M) nhưng đơn giảm -16.9% (mất 119 đơn).',
          'Khuyến mãi ngốn 44.7% doanh thu gộp, tổng chi phí 60.9%.'
        ],
        keyStrengths: [
          'AOV tăng trưởng rất tốt: đạt 193.751 đ/đơn (+7.1%).'
        ]
      },
      {
        appName: 'ShopeeFood',
        orders: 370,
        grossRevenue: 38201528,
        promoCost: 13350000,
        commissionCost: 5609788,
        adsCost: 0,
        totalCost: 18959788,
        netRevenue: 18123323,
        costRatio: 49.63,
        aov: 103247,
        ordersChangeMoM: -15.1,
        netRevenueChangeMoM: -18.2,
        aovChangeMoM: -5.6,
        keyDiagnosis: [
          'Suy thoái kép: Vừa giảm đơn (-15.1%, 370 đơn) vừa giảm AOV (109k về 103k).',
          'Là tháng có số đơn thấp nhất kể từ tháng 3 (chỉ cao hơn Tết).'
        ],
        keyStrengths: [
          'Vẫn giữ được tỷ lệ chi phí quanh 49.6%.'
        ]
      },
      {
        appName: 'BeFood',
        orders: 88,
        grossRevenue: 11556000,
        promoCost: 2850000,
        commissionCost: 2173583,
        adsCost: 0,
        totalCost: 5023583,
        netRevenue: 6051422,
        costRatio: 43.47,
        aov: 131318,
        ordersChangeMoM: 46.7,
        netRevenueChangeMoM: 52.9,
        aovChangeMoM: 12.3,
        keyDiagnosis: [
          'Quy mô đơn còn nhỏ (88 đơn), tiềm năng phát triển còn rất rộng.'
        ],
        keyStrengths: [
          'Tăng trưởng toàn diện: vừa tăng đơn (+46.7%) vừa tăng AOV đạt kỷ lục 131.318đ (+12.3%).'
        ]
      },
      {
        appName: 'Xanh SM',
        orders: 80,
        grossRevenue: 6226350,
        promoCost: 0,
        commissionCost: 1196090,
        adsCost: 0,
        totalCost: 1196090,
        netRevenue: 5012820,
        costRatio: 19.21,
        aov: 77829,
        ordersChangeMoM: 27.0,
        netRevenueChangeMoM: 37.6,
        keyDiagnosis: [
          'AOV 77.829đ thấp nhất hệ sinh thái, cần đưa thêm topping/combo.'
        ],
        keyStrengths: [
          'Tăng trưởng vững chắc +27% số đơn, tỷ lệ chi phí 19.21% an toàn nhất.'
        ]
      }
    ],
    customerData: {
      branchId: 'le-quang-dinh',
      branchName: 'Chi nhánh Lê Quang Định',
      totalCustomers: 1616,
      totalChangePercent: 7.73,
      newCustomers: 957,
      newChangePercent: 9.50,
      repeatCustomers: 607,
      repeatChangePercent: 9.96,
      reactivatedCustomers: 52,
      reactivatedChangePercent: -29.73,
      repeatRate: 37.56,
      promoSpend: 153358000,
      netSalesFromOffers: 189676360,
      salesToSpendRatio: 1.24,
      salesToSpendChangePercent: -28.10,
      offerTransactions: 1829,
      weeklyTrend: [
        { week: '13/06 - 21/06', count: 45, note: 'Khởi đầu' },
        { week: '22/06 - 28/06', count: 110 },
        { week: '29/06 - 05/07', count: 160, note: 'Đỉnh tháng 6/7' },
        { week: '06/07 - 12/07', count: 142 },
        { week: '13/07 - 19/07', count: 138 },
        { week: '20/07 - 26/07', count: 125 },
        { week: '27/07 - 02/08', count: 152 },
        { week: '03/08 - 09/08', count: 160, note: 'Đỉnh đầu tháng 8' },
        { week: '10/08 - 16/08', count: 120, note: 'Bắt đầu lao dốc' },
        { week: '17/08 - 23/08', count: 100 },
        { week: '24/08 - 30/08', count: 95, note: 'Vùng trũng sâu nhất' },
        { week: '31/08 - 06/09', count: 88 },
        { week: '07/09 - 10/09', count: 45 }
      ],
      peakPattern: {
        lunchPeak: 'Đỉnh tuyệt đối lúc 13:00 Thứ 5 (ô xanh đen). Thứ 2, 3, 6 và CN 12:00 - 13:00 đều rất đậm.',
        morningPeak: 'ĐIỂM NỔI BẬT: Bán sáng cực mạnh từ 08:00 - 10:30 (T2, T5, T7, CN). Thứ 7 và CN kéo dài 08:00 - 11:30.',
        nightPeak: 'Tối 18:00 - 20:30 có đơn vừa phải (T5 lúc 19:00). Sau 22:00 trắng trơn.',
        quietHours: '22:00 - 06:30 đóng app không có đơn; 15:00 - 16:30 thưa thớt.'
      },
      dayOrderPatterns: {
        peakDays: ['Thứ 5, Thứ 6, Thứ 7, Chủ Nhật'],
        paydayPeaks: ['01/07 - 03/07 (~35 đơn/ngày)', '23/06 - 28/06 (~30 đơn)', '31/07 - 03/08 (~31 đơn)', '06/08 (~29 đơn)', '01/09 - 03/09 (~22 đơn)'],
        lowDays: ['Nửa cuối tháng 8 rơi về 12 - 18 đơn/ngày; đáy 24 - 25/08 chỉ 10 đơn/ngày!'],
        notes: 'Báo động đỏ chi phí khuyến mãi: Chi 153M (+55.12%) nhưng Net sales chỉ tăng 11.53%, Sales-to-spend giảm -28.1% xuống 1.24x, ăn mòn lợi nhuận!'
      }
    },
    actionItems: [
      {
        id: 'lqd-1',
        title: 'Thanh tra và cắt giảm GrabAds ngay lập tức',
        description: 'Hạ ngay ngân sách quảng cáo GrabAds từ 2.96M về mức 1.0 - 1.2 triệu đ/tháng (như tháng 7). Tắt các chiến dịch hiển thị tự động trọn ngày.',
        priority: 'high',
        expectedImpact: 'Tiết kiệm ngay 1.8 triệu đ/tháng dòng tiền ròng'
      },
      {
        id: 'lqd-2',
        title: 'Khai thác triệt để nhịp cao điểm sáng (08:00 - 10:30)',
        description: 'Tạo combo điểm tâm sáng kèm cà phê / trà / đồ uống để tối đa hóa lượng khách đặt sáng đông đảo vượt trội.',
        priority: 'high',
        expectedImpact: 'Tăng 15 - 20% lượng đơn khung giờ buổi sáng'
      },
      {
        id: 'lqd-3',
        title: 'Vực dậy ShopeeFood - Chống suy thoái kép',
        description: 'Rà soát lại hiển thị menu quanh Bình Thạnh; tạo combo trưa văn phòng định giá 115k - 125k kèm nước để vừa kéo đơn vừa phục hồi AOV.',
        priority: 'high',
        expectedImpact: 'Đưa số đơn Shopee quay lại >450 đơn và kéo AOV >115k'
      },
      {
        id: 'lqd-4',
        title: 'Cắt giảm khuyến mãi ngày lễ / đầu tháng, đẩy ngày trũng',
        description: 'Cắt voucher giảm sâu vào ngày 1 - 5 và cuối tuần vì khách tự đặt. Chuyển ngân sách trợ giá sang Thứ 2, Thứ 3 và ngày 15 - 25 để kéo đáy.',
        priority: 'medium',
        expectedImpact: 'Nâng đáy doanh số thoát khỏi mức 10 đơn/ngày'
      }
    ]
  }
};

export const SYSTEM_ACTION_PLANS: ActionPlanSystemItem[] = [
  {
    id: 'act-1',
    category: 'Quản trị Quảng cáo',
    title: 'Thanh tra & Cắt giảm ngân sách GrabAds kém hiệu quả',
    description: 'Hạ ngân sách GrabAds tại Lê Quang Định (từ 2.96M về 1.2M) và Trần Huy Liệu (từ 2.92M về 1.5M). Chỉ chạy từ khóa chính xác vào khung giờ vàng trưa (11h-13h) và tối (18h-20h).',
    targetBranch: 'Lê Quang Định & Trần Huy Liệu',
    impactGoal: 'Tiết kiệm ngay 3.0 – 3.5 triệu đ chi phí marketing rác',
    status: 'pending'
  },
  {
    id: 'act-2',
    category: 'Kiểm soát Khuyến mãi',
    title: 'Chuyển đổi cơ chế Voucher bậc thang theo ngưỡng AOV',
    description: 'Dừng hoàn toàn việc giảm giá % không giới hạn hoặc giảm cho đơn nhỏ (<150k). Thiết lập voucher bậc thang: Giảm 20k-25k cho đơn >180k-200k, Giảm 40k-45k cho đơn >250k-300k trên GrabFood.',
    targetBranch: 'Cả 3 chi nhánh (Trọng tâm GrabFood)',
    impactGoal: 'Hạ tỷ lệ chi phí toàn chuỗi từ 53.4% xuống < 48% (tiết kiệm 20-25 triệu đ)',
    status: 'in_progress'
  },
  {
    id: 'act-3',
    category: 'Tái cơ cấu Menu Shopee',
    title: 'Xây dựng Combo trưa văn phòng kèm nước & test Ads nhỏ',
    description: 'Tạo combo bữa trưa văn phòng 1-2 người định giá 115k - 130k kèm đồ uống/topping. Dành 500k/tháng test đấu thầu từ khóa để chặn đà suy giảm số đơn ShopeeFood.',
    targetBranch: 'Cả 3 chi nhánh (Ưu tiên Lê Quang Định & Trần Huy Liệu)',
    impactGoal: 'Chặn đà giảm đơn; đưa số đơn Shopee quay lại > 450 đơn/cơ sở',
    status: 'in_progress'
  },
  {
    id: 'act-4',
    category: 'Mở rộng Upsell trên Xanh SM',
    title: 'Tối ưu hóa Menu & Bổ sung Side-dish trên Xanh SM',
    description: 'Bổ sung hình ảnh món ăn chuyên nghiệp, cập nhật món ăn kèm (topping, quẩy, trứng, canh, nước ép) vào thực đơn Xanh SM để tăng giá trị đơn.',
    targetBranch: 'Cả 3 chi nhánh',
    impactGoal: 'Kéo AOV Xanh SM từ 73k-84k lên tiệm cận 95k - 100k, thu dòng tiền ròng sạch 80%',
    status: 'pending'
  },
  {
    id: 'act-5',
    category: 'Kiểm soát Cost Món',
    title: 'Rà soát Menu Engineering & Giá niêm yết trên App',
    description: 'Rà soát giá niêm yết của các món chịu chiết khấu sàn 25% + khuyến mãi 30% để đảm bảo lãi gộp sau chi phí app luôn đạt tối thiểu 28 - 30% trên doanh thu bán.',
    targetBranch: 'Cả 3 chi nhánh',
    impactGoal: 'Bảo vệ điểm hòa vốn và dòng tiền lợi nhuận thực tế',
    status: 'pending'
  }
];

// Heatmap matrix generation helper: Days (Mon to Sun) x Hours (0 to 23)
export interface HeatmapMatrix {
  day: string;
  dayIndex: number;
  hours: number[]; // intensity 0 to 4 (0: trắng, 1: xanh nhạt, 2: xanh vừa, 3: xanh đậm, 4: xanh đen đỉnh)
}

export function getHeatmapData(branchId: 'truong-sa' | 'tran-huy-lieu' | 'le-quang-dinh'): HeatmapMatrix[] {
  const days = [
    { name: 'Thứ 2 (T2)', idx: 1 },
    { name: 'Thứ 3 (T3)', idx: 2 },
    { name: 'Thứ 4 (T4)', idx: 3 },
    { name: 'Thứ 5 (T5)', idx: 4 },
    { name: 'Thứ 6 (T6)', idx: 5 },
    { name: 'Thứ 7 (T7)', idx: 6 },
    { name: 'Chủ Nhật (CN)', idx: 7 }
  ];

  return days.map(d => {
    const hours = new Array(24).fill(0);
    
    if (branchId === 'truong-sa') {
      // 00:00 all days has orders (2-3), 23:00 T6-T7 is very intense (4)
      hours[0] = 2;
      // 01 to 06: 0
      // 08 to 10: T4 has morning peak
      if (d.idx === 3) hours[8] = 2; hours[9] = 2;
      // 12 to 14: lunch peak
      hours[12] = d.idx >= 3 && d.idx <= 5 ? 3 : 2;
      hours[13] = d.idx >= 3 && d.idx <= 5 ? 4 : 3; // 13:00 peak
      if (d.idx === 5) hours[14] = 4; // T6 kéo dài 13-14h
      else hours[14] = 2;
      // 18 to 21
      hours[19] = 2;
      hours[20] = d.idx === 6 ? 3 : 2; // Sat 20:00
      // 23:00 night peak
      hours[23] = d.idx === 5 || d.idx === 6 ? 4 : 2;
    } else if (branchId === 'tran-huy-lieu') {
      // Office area: 21:30 to 06:30 is 0
      // Morning 08:00 - 10:00
      if (d.idx === 6) { hours[8] = 2; hours[9] = 3; hours[10] = 2; }
      if (d.idx === 4) { hours[9] = 2; }
      // Lunch peak: 12:30 - 14:30
      hours[12] = 2;
      hours[13] = d.idx === 5 ? 4 : (d.idx >= 3 ? 3 : 2); // T6 is absolute darkest (4)
      hours[14] = d.idx >= 2 && d.idx <= 5 ? 3 : 1;
      // Sunday afternoon: 12 to 17
      if (d.idx === 7) {
        hours[12] = 2; hours[13] = 2; hours[14] = 2; hours[15] = 2; hours[16] = 2;
      }
      hours[19] = 1;
      hours[20] = 1;
      // After 21:30 -> 0
    } else {
      // Lê Quang Định: Strong morning + Lunch peak, 22:00 to 06:30 is 0
      // Morning 08:00 - 10:30
      if (d.idx === 1 || d.idx === 4 || d.idx === 6 || d.idx === 7) {
        hours[8] = 3;
        hours[9] = 3;
        hours[10] = d.idx >= 6 ? 3 : 2;
        if (d.idx >= 6) hours[11] = 2; // T7 & CN kéo dài 08h-11h30
      }
      // Lunch peak: 12:30 - 14:00
      hours[12] = d.idx === 7 ? 3 : 2;
      hours[13] = d.idx === 4 ? 4 : 3; // T5 is absolute peak (4), others 3
      hours[14] = 2;
      // Evening 18:00 - 20:30
      hours[18] = 2;
      hours[19] = d.idx === 4 ? 3 : 2; // T5 19:00
      hours[20] = 2;
    }

    return {
      day: d.name,
      dayIndex: d.idx,
      hours
    };
  });
}
