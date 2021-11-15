import React from 'react'
import { ScrollView as RNScrollView } from 'react-native'
import { useTanjun, useTanjunStyle } from './provider'
import { getDebugStyle } from './utils'

export const ScrollView: React.FC<Tanjun.ScrollViewProps> = ({
  style,
  contentContainerStyle,
  debug,
  ...props
}) => {
  const s = useTanjunStyle(style)
  const cs = useTanjunStyle(contentContainerStyle)

  const { scrollView } = useTanjun()

  // Note: only use it for debug
  if (__DEV__) {
    if (debug) {
      const { debugStyle, originalStyle } = getDebugStyle(style, s)
      if (debugStyle) {
        console.log('Tanjun scrollView: ', originalStyle, debugStyle)
      }
    }
  }
  if (typeof scrollView === 'function') {
    return scrollView({
      ...props,
      style: s,
      contentContainerStyle: cs,
    })
  }

  return <RNScrollView {...props} style={s} contentContainerStyle={cs} />
}
