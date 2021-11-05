import React from 'react'
import { Image as RNImage } from 'react-native'
import { useTanjun, useTanjunStyle } from './provider'

export const Image: React.FC<Tanjun.ImageProps> = ({ style, ...props }) => {
  const s = useTanjunStyle(style)

  const { image } = useTanjun()
  if (typeof image === 'function') {
    return image({ ...props, style: s })
  }

  return <RNImage {...props} style={s} />
}
