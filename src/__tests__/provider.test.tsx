import { renderHook } from '@testing-library/react-hooks'
import { useTanjun,useTanjunStyle } from '../'

test('should match the size we provided', () => {
  const { result } = renderHook(() => useTanjun())
  expect(result.current.width).toBe(1080)
  expect(result.current.height).toBe(1920)
})



test('should match the style', () => {

  const { result } = renderHook(() => useTanjunStyle({
    width: 140,
    height: 60,
  }))

  expect(result.current.width).toBe(98)
  expect(result.current.height).toBe(42)


})
