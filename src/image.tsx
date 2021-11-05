import React from 'react'
import { Image as RNImage } from 'react-native'
import { useTanjun, useTanjunStyle } from './provider'
import { getDebugStyle } from './utils'

export const Image: React.FC<Tanjun.ImageProps> = ({
  style,
  debug,
  ...props
}) => {
  const s = useTanjunStyle(style)

  const { image } = useTanjun()
  if (typeof image === 'function') {
    return image({ ...props, style: s })
  }

  // Note: only use it for debug
  if (__DEV__) {
    if (debug) {
      const { debugStyle, originalStyle } = getDebugStyle(style, s)
      console.log('Tanjun image: ', originalStyle, debugStyle)
    }
  }
  return <RNImage {...props} style={s} />
}
