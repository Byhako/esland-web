import { useEffect } from 'preact/hooks'
import { useProgressiveNumber } from '../hooks/useProgressiveNumber'

interface Props {
  initial: number
  final: number
  duration?: number
}

export const CountUp = ({ initial, final, duration }: Props) => {
  const [count, setCount] = useProgressiveNumber(initial, duration)

  useEffect(() => {
    setCount(final)
  }, [])

  return <span>{count}</span>
}
