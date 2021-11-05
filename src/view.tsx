import React from 'react'
import { ScrollView, StyleSheet, View as RNView } from 'react-native'
import { useTanjun, useTanjunStyle } from './provider'
import { Text } from './text'
import { getDebugStyle } from './utils'

export const View: React.FC<Tanjun.ViewProps> = ({
  style,
  debug,
  ...props
}) => {
  const s = useTanjunStyle(style)

  const { view } = useTanjun()
  if (typeof view === 'function') {
    return view({ ...props, style: s })
  }

  // Note: only use it for debug
  if (__DEV__) {
    if (debug) {
      const { children, ...rest } = props
      const { debugStyle, originalStyle } = getDebugStyle(style, s)
      if (!debugStyle) {
        return <RNView {...props} style={s} />
      }
      return (
        <RNView {...rest} style={s}>
          <ScrollView
            style={[
              s,
              {
                ...StyleSheet.absoluteFillObject,
                backgroundColor: 'rgba(0,0,0,0.4)',
                margin: 0,
                marginTop: 0,
                marginLeft: 0,
                marginRight: 0,
                marginBottom: 0,
                marginVertical: 0,
                marginHorizontal: 0,
              },
            ]}>
            <Text style={{ color: 'blue', fontSize: 24 }}>
              {JSON.stringify(originalStyle)}
            </Text>
            <Text style={{ color: 'green', fontSize: 24 }}>
              {JSON.stringify(debugStyle)}
            </Text>
          </ScrollView>
          {children}
        </RNView>
      )
    }
  }
  return <RNView {...props} style={s} />
}
