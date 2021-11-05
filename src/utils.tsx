import { StyleSheet } from 'react-native'
import { TanjunPropName, tanjunProps } from './provider'

export function getDebugStyle(style: any, tanjunStyle: any) {
  let debugStyle: any = {}
  for (const key in tanjunStyle) {
    if (tanjunProps.has(key as TanjunPropName)) {
      debugStyle[key] = tanjunStyle[key]
    }
  }
  let originalStyle: any = {}
  const os: any = StyleSheet.flatten(style)
  for (const key in os) {
    if (tanjunProps.has(key as TanjunPropName)) {
      originalStyle[key] = os[key]
    }
  }
  if (!Object.keys(debugStyle).length) {
    debugStyle = undefined
  }
  if (!Object.keys(originalStyle).length) {
    originalStyle = undefined
  }
  return { debugStyle, originalStyle }
}
