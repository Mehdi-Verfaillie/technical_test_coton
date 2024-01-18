export const formatNumber = (num: number): string => {
  const truncatedNum = Math.trunc(num * 100) / 100;
  return truncatedNum.toFixed(2);
};

export const formatCurrency = (amount: number): string =>
  `$${formatNumber(amount)}`;

export const formatPercentage = (percentage: number): string =>
  `${formatNumber(percentage * 100)}%`;

export const calculateAverage = <T extends Record<string, any>>(
  data: T[],
  key: keyof T,
): string => {
  if (!Array.isArray(data) || data.length === 0) {
    return "0.00";
  }

  let total = 0;
  let count = 0;

  data.forEach((item) => {
    const value = item[key];
    if (typeof value === "number" && !isNaN(value)) {
      total += value;
      count += 1;
    }
  });

  const average = count > 0 ? total / count : 0;
  return average.toFixed(2);
};
