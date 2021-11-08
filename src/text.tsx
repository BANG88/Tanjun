import React from 'react'
import { Text as RNText } from 'react-native'
import { useTanjun, useTanjunStyle } from './provider'
import { getDebugStyle } from './utils'

export const Text: React.FC<Tanjun.TextProps> = ({
  style,
  debug,
  ...props
}) => {
  const s = useTanjunStyle(style)

  // Note: only use it for debug
  if (__DEV__) {
    if (debug) {
      const { debugStyle, originalStyle } = getDebugStyle(style, s)
      console.log('Tanjun text: ', originalStyle, debugStyle)
    }
  }
  const { text } = useTanjun()
  if (typeof text === 'function') {
    return text({ ...props, style: s })
  }

  return <RNText {...props} style={s} />
}
