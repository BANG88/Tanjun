/**
 *
 * Tanjun Style
 */

import React from 'react'
import {
  Dimensions,
  ImageStyle,
  PixelRatio,
  StyleProp,
  StyleSheet,
  TextStyle,
  ViewStyle,
} from 'react-native'
import type { TanjunValue } from './types'

// generate a hash from style object
var ohash = require('object-hash')

const defaultTanjunValue = {
  width: 1080,
  height: 1920,
}
// Ref: https://www.browserstack.com/guide/ideal-screen-sizes-for-responsive-design
const TanjunContext = React.createContext<TanjunValue>(defaultTanjunValue)

/**
 * Tanjun Provider
 * @param props
 * @returns
 */
export const TanjunProvider = ({
  value,
  children,
}: Partial<React.ProviderProps<TanjunValue>>) => {
  return (
    <TanjunContext.Provider
      value={{ ...defaultTanjunValue, ...value }}
      children={children}
    />
  )
}

const records = [
  // size
  'fontSize',
  'width',
  'minWidth',
  'height',
  'minHeight',
  // padding
  'margin',
  'marginTop',
  'marginLeft',
  'marginRight',
  'marginBottom',
  'marginVertical',
  'marginHorizontal',
  'padding',
  'paddingTop',
  'paddingLeft',
  'paddingRight',
  'paddingBottom',
  'paddingVertical',
  'paddingHorizontal',
  // position
  'top',
  'left',
  'right',
  'bottom',
  // border
  'borderWidth',
  'borderRadius',
  'borderTopTopRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
  'borderBottomRightRadius',
] as const

/**
 * Create an unqiue props with the given records
 */
export const tanjunProps = new Set(records)

// Prop name
export type TanjunPropName = typeof records[number]

// Get Tanjun configurations mostly you will never need to use this
export const useTanjun = () => React.useContext(TanjunContext)

// Get window's width & height
const { width: windowWidth, height: windowHeight } = Dimensions.get('window')

// Get the ratio of the device
const onePixel = 1 / PixelRatio.get()

// Cache single prop-value
const styleCache: any = {}
// Cache style-hash
const hashCache: any = {}

/**
 * Hook: calculate style
 * @param style
 * @param debug
 * @returns
 */
export function useTanjunStyle<
  T extends StyleProp<ViewStyle | TextStyle | ImageStyle>,
>(style: T) {
  // If style is not a style prop, return it directly
  if (!style) {
    return style
  }

  // Get Tanjun size
  const { width, height } = useTanjun()

  // Generate a hash of the style
  const hash = ohash(style)

  return React.useMemo(() => {
    // If the style is cached, return it
    if (hashCache[hash]) {
      return hashCache[hash]
    }

    // flatten will return a freazed object. sometimes, a few components will re-render
    // and this will cause an error. we need to convert it to a normal object.
    // i don't know where it is triggered.
    const styles: any = { ...StyleSheet.flatten(style) }

    for (const key in styles) {
      if (tanjunProps.has(key as TanjunPropName)) {
        let value: any = styles[key]

        const isInvalidValue =
          value === undefined ||
          value === null ||
          (typeof value === 'string' && value.trim() === '')

        // invalid value will pass it as it is
        if (isInvalidValue || !(PixelRatio.get() > 0)) {
          continue
        }

        // The cache key
        const cacheKey = `${key}-${value}`

        // If the value is cached, return it
        if (styleCache[cacheKey]) {
          value = styleCache[cacheKey]
        } else {
          // If the key is fontSize, we need to re-calculate it
          if (key === 'fontSize') {
            const scale = Math.min(windowWidth / width, windowHeight / height)
            value = Math.ceil(value * scale)
          } else if (typeof value === 'number' && value !== onePixel) {
            value = Math.ceil((value * windowWidth) / width)
          }
        }

        // Set the value
        styles[key] = value
        // Cache the key-value pair
        styleCache[cacheKey] = value
      }
    }
    // Cache the hash style
    hashCache[hash] = styles

    return styles as T
  }, [hash])
}
