const MIN_SHIFT_PAY = 50;

function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);
  const raw = Math.round(regularHours * rate + overtimeHours * rate * 1.5);
  return Math.max(raw, MIN_SHIFT_PAY);
}

module.exports = { isValidShift, calculatePay, MIN_SHIFT_PAY };