export function numToCurrency(num) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(num);
}

export function currencyToNum(currStr) {
  const isNumberString = /^[0-9]+$/;
  let result = currStr.replace(/[$,]/g, '')

  if (isNumberString.test(result)) {
    return parseInt(result);
  } else {
    window.alert("Not a number!");
    throw new Error("Not a number!");
  }
}