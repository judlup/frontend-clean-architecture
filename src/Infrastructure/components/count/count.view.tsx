import styles from "./count.module.scss"

interface IProps {
  count: number
  countFixed: number
  increment: () => void
  decrement: () => void
  incrementFixed: (value: number) => void
  decrementFixed: (value: number) => void
  onChangeIncrementFixed: (e: any) => void
}

const CountView: React.FC<IProps> = ({
  count,
  countFixed,
  increment,
  decrement,
  incrementFixed,
  decrementFixed,
  onChangeIncrementFixed,
}) => {
  return (
    <div className={styles.container}>
      <h2 id="title">Zustand State</h2>
      <div className={styles.counter} data-testid="counter">
        {count}
      </div>
      <button data-testid="increment" onClick={increment}>
        Increment
      </button>
      <button onClick={decrement} data-testid="decrement">
        Decrement
      </button>
      <br />
      <button onClick={() => incrementFixed(countFixed | 1)}>
        Increment in
      </button>
      <input
        type="number"
        min={1}
        onChange={onChangeIncrementFixed}
        placeholder="quantity"
        value={countFixed}
        className={styles.input}
      />
      <button onClick={() => decrementFixed(countFixed | 1)}>
        Decrement in
      </button>
    </div>
  )
}

export default CountView
