import React from 'react'
import { View as RNView } from 'react-native'
import { useTanjunStyle } from './'

export const View: React.FC<Tanjun.ImageProps> = ({ style, ...props }) => {
  const s = useTanjunStyle(style)
  return <RNView {...props} style={s} />
}
