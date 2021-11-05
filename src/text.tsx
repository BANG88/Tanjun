import React from 'react'
import { Text as RNText } from 'react-native'
import { useTanjun, useTanjunStyle } from './provider'

export const Text: React.FC<Tanjun.TextProps> = ({ style, ...props }) => {
  const s = useTanjunStyle(style)

  const { text } = useTanjun()
  if (typeof text === 'function') {
    return text({ ...props, style: s })
  }

  return <RNText {...props} style={s} />
}
