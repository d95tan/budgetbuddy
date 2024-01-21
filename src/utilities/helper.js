export function numToCurrency(num) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function currencyToNum(currStr) {
  let result = currStr.replace(/[$,]/g, '')
  return parseInt(result);
}