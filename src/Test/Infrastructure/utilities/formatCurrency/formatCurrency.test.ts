import {
  formatMoney,
  sum,
} from "@/Infrastructure/utilities/formatCurrency/formatCurrency"

describe("sum()", () => {
  it("should return the sum of two numbers", () => {
    expect(sum(1, 2)).toBe(3)
  })
})

describe("formatMoney", () => {
  it("adds $ at the start", () => {
    expect(formatMoney(100)).toBe("$100")

    expect(formatMoney(1200)).toBe("$1.200")
  })

  it("adds commas", () => {
    expect(formatMoney(1000)).toContain("$1.000")
  })
})
