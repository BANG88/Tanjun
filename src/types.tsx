import type {
  ImageProps as RNImageProps,
  ScrollViewProps as RNScrollViewProps,
  TextProps as RNTextProps,
  ViewProps as RNViewProps,
} from 'react-native'

declare global {
  namespace Tanjun {
    interface ViewProps extends RNViewProps {
      /**
       * __DEV__ mode only
       */
      debug?: boolean
    }
    interface ImageProps extends RNImageProps {
      /**
       * __DEV__ mode only
       */
      debug?: boolean
    }
    interface TextProps extends RNTextProps {
      /**
       * __DEV__ mode only
       */
      debug?: boolean
    }
    interface ScrollViewProps extends RNScrollViewProps {
      /**
       * __DEV__ mode only
       */
      debug?: boolean
    }
  }
}

export type TanjunValue = {
  width: number
  height: number
  /**
   * Provide your own custom Text component, defaults to `Text` from 'react-native'
   */
  text?: <T>(props: T) => React.ReactElement
  /**
   * Provide your own custom View component, defaults to `View` from 'react-native'
   */
  view?: <T>(props: T) => React.ReactElement
  /**
   * Provide your own custom Image component, defaults to `Image` from 'react-native'
   */
  image?: <T>(props: T) => React.ReactElement
  /**
   * Provide your own custom ScrollView component, defaults to `ScrollView` from 'react-native'
   */
  scrollView?: <T>(props: T) => React.ReactElement
}
