export function formatVND(amount: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function formatMillionVND(amount: number): string {
  const inMillions = amount / 1000000;
  return `${inMillions.toLocaleString('vi-VN', { minimumFractionDigits: 1, maximumFractionDigits: 2 })}M`;
}

export function formatPercent(value: number): string {
  return `${value >= 0 ? '+' : ''}${value.toFixed(2)}%`;
}

export function formatNumber(value: number): string {
  return new Intl.NumberFormat('vi-VN').format(value);
}
