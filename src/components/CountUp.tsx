import { useEffect } from 'preact/hooks'
import { useProgressiveNumber } from '../hooks/useProgressiveNumber'

interface Props {
  initial: number
  final: number
  decimals?: number
  duration?: number
}

export const CountUp = ({ initial, final, duration, decimals }: Props) => {
  const [count, setCount] = useProgressiveNumber(initial, duration, decimals)

  useEffect(() => {
    setCount(final)
  }, [])

  return <span>{count}</span>
}
