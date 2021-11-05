import React from 'react'
import { Image as RNImage } from 'react-native'
import { useTanjunStyle } from './'

export const Image: React.FC<Tanjun.ImageProps> = ({ style, ...props }) => {
  const s = useTanjunStyle(style)
  return <RNImage {...props} style={s} />
}
