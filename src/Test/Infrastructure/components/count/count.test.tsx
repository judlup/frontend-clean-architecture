import CountContainer from "@/Infrastructure/components/count/count.container"
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"

describe("Count", () => {
  it("Counter increase", async () => {
    render(<CountContainer />)
    const incrementButton = screen.getByTestId("increment")
    await userEvent.click(incrementButton)
    expect(screen.getByTestId("counter").textContent).toBe("1")
  })

  it("Counter decrease", async () => {
    render(<CountContainer />)
    const decrementButton = screen.getByTestId("decrement")
    await userEvent.click(decrementButton)
    expect(screen.getByTestId("counter").textContent).toBe("0")
  })
})
