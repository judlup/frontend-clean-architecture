import { ICountStore } from "@/Domain/utilities/stores/count/ICount.store"
import { useCountStore } from "@/Infrastructure/stores/count/count.store"
import type { NextPage } from "next"
import { useEffect, useState } from "react"
import CountView from "./count.view"

const CountContainer: NextPage = () => {
  const [mounted, setMounted] = useState(false)

  const count = useCountStore((state: ICountStore) => state.count)
  const [countFixed, setCountFixed] = useState(1)
  const increment = useCountStore((state: ICountStore) => state.increment)
  const decrement = useCountStore((state: ICountStore) => state.decrement)
  const incrementFixed = useCountStore(
    (state: ICountStore) => state.incrementFixed
  )
  const decrementFixed = useCountStore(
    (state: ICountStore) => state.decrementFixed
  )
  const handleIncrementFixed = (e: any) => {
    setCountFixed(parseInt(e.target.value))
  }

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <CountView
      count={count}
      countFixed={countFixed}
      increment={increment}
      decrement={decrement}
      incrementFixed={incrementFixed}
      decrementFixed={decrementFixed}
      onChangeIncrementFixed={handleIncrementFixed}
    />
  )
}

export default CountContainer
