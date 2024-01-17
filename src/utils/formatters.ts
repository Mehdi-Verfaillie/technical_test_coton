export const formatNumber = (num: number): string => {
  const truncatedNum = Math.trunc(num * 100) / 100;
  return truncatedNum.toFixed(2);
};

export const formatCurrency = (amount: number): string =>
  `$${formatNumber(amount)}`;

export const formatPercentage = (percentage: number): string =>
  `${formatNumber(percentage * 100)}%`;
