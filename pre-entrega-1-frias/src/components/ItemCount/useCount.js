import { useState } from "react"

const useCount = (initial) => {
  const [counter, setCounter] = useState(initial);

  const increment = (stock) => {
    counter < stock ? setCounter(counter + 1) : setCounter(counter);
  }

  const decrement = () => {
    counter > initial ? setCounter(counter - 1) : setCounter(counter);
  }

  return {counter, increment, decrement}
}

export default useCount;