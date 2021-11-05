import React from 'react'
import { Text as RNText } from 'react-native'
import { useTanjunStyle } from './'

export const Text: React.FC<Tanjun.TextProps> = ({ style, ...props }) => {
  const s = useTanjunStyle(style)
  return <RNText {...props} style={s} />
}
