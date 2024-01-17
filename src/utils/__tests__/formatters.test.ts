import { formatCurrency, formatNumber, formatPercentage } from "../formatters";
import { describe, it, expect } from "vitest";

describe("formatNumber", () => {
  it("should format a number to two decimal", () => {
    expect(formatNumber(123)).to.equal("123.00");
    expect(formatNumber(123.456)).to.equal("123.45");
    expect(formatNumber(123.004)).to.equal("123.00");
    expect(formatNumber(123.995)).to.equal("123.99");
    expect(formatNumber(-123.456)).to.equal("-123.45");
    expect(formatNumber(0)).to.equal("0.00");
  });
});

describe("formatCurrency", () => {
  it("should format a number as currency ($), truncating to two decimal", () => {
    expect(formatCurrency(123)).to.equal("$123.00");
    expect(formatCurrency(123.456)).to.equal("$123.45");
    expect(formatCurrency(123.004)).to.equal("$123.00");
    expect(formatCurrency(123.995)).to.equal("$123.99");
    expect(formatCurrency(-123.456)).to.equal("$-123.45");
    expect(formatCurrency(0)).to.equal("$0.00");
  });
});

describe("formatPercentage", () => {
  it("should format a number as a percentage, truncating to two decimal", () => {
    expect(formatPercentage(0.123)).to.equal("12.30%");
    expect(formatPercentage(1.23456)).to.equal("123.45%");
    expect(formatPercentage(-0.123)).to.equal("-12.30%");
    expect(formatPercentage(0)).to.equal("0.00%");
    expect(formatPercentage(0.995)).to.equal("99.50%");
  });
});
