import React from 'react'
import { View as RNView } from 'react-native'
import { useTanjun, useTanjunStyle } from './provider'

export const View: React.FC<Tanjun.ImageProps> = ({ style, ...props }) => {
  const s = useTanjunStyle(style)


  const { view } = useTanjun()
  if (typeof view === 'function') {
    return view({ ...props, style: s })
  }

  return <RNView {...props} style={s} />
}
