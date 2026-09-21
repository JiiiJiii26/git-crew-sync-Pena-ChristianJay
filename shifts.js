function isValidShift(hours) {
  return hours > 0 && hours <= 24;
}

function calculatePay(hours, rate) {
  const regularHours = Math.min(hours, 8);
  const overtimeHours = Math.max(hours - 8, 0);
  return Math.floor(regularHours * rate + overtimeHours * rate * 1.5);
}

module.exports = { isValidShift, calculatePay };