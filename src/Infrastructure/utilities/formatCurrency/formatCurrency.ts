const formatCurrency = require("format-currency")

export function formatMoney(value: number): string {
  let opts = {
    format: "%s%v",
    symbol: "$",
    locale: "es-CO",
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }
  return formatCurrency(value, opts)
}

export const sum = (a: number, b: number): number => a + b
