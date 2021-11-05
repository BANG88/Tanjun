import type { ViewProps as RNViewProps,TextProps as RNTextProps,ImageProps as RNImageProps } from 'react-native';

declare global {
  namespace Tanjun{
    interface ViewProps extends RNViewProps{}
    interface ImageProps extends RNImageProps{}
    interface TextProps extends RNTextProps{}
  }
}
