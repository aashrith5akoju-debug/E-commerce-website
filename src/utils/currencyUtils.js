// Indian Rupee (INR) Currency & Pricing Utilities for KINETIC ARCHIVE

export const FREE_SHIPPING_THRESHOLD_INR = 2999;
export const STANDARD_SHIPPING_INR = 199;

/**
 * Formats a numeric price into Indian Rupees (e.g., ₹2,499 or ₹14,999)
 * Uses Indian numbering convention (lakhs/thousands formatting)
 */
export function formatINR(val) {
  if (val === undefined || val === null || isNaN(val)) return '₹0';
  const num = Math.round(Number(val));
  return `₹${num.toLocaleString('en-IN')}`;
}

/**
 * Calculates savings amount between MRP and selling price
 */
export function calculateSavingsINR(mrp, price) {
  if (!mrp || !price || mrp <= price) return 0;
  return Math.round(mrp - price);
}

/**
 * Calculates percentage discount
 */
export function calculateDiscountPercent(mrp, price) {
  if (!mrp || !price || mrp <= price) return 0;
  return Math.round(((mrp - price) / mrp) * 100);
}

/**
 * Calculates 12% GST breakdown included in total
 */
export function calculateGSTIncluded(totalINR) {
  // GST = Total - (Total / 1.12)
  const gstAmount = Math.round(totalINR - (totalINR / 1.12));
  return gstAmount;
}

