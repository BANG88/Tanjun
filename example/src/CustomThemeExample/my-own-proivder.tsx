/**
 * Example of custom Tanjun value provider.
 */

import React from 'react'
import { GestureResponderEvent, Pressable, Text, View } from 'react-native'
import type { TanjunValue } from 'src/types'
import { useTanjunExampleTheme } from './Theme'

// Declare a custom Tanjun provider type
declare global {
  namespace Tanjun {
    // Merge the default Props with your own
    interface TextProps {
      primary?: boolean
      secondary?: boolean
    }
    // You can redefine your View Props here
    interface ViewProps {
      onPress?: (event: GestureResponderEvent) => void
      // Add any custom props you want to use here but don't forget to implement them
      // in the render method
    }
  }
}

/**
 * Your Text component
 * Now you can use your own Text component but import it from 'tanjun'
 * import { Text } from 'tanjun'
 * <Text primary>Hello</Text>
 * <Text secondary>Hello</Text>
 */
const MyText: React.FC<Tanjun.TextProps> = ({
  primary,
  secondary,
  style,
  ...props
}) => {
  // implement your own text component
  const { primaryColor, secondaryColor } = useTanjunExampleTheme()
  let color = undefined
  if (primary) {
    color = primaryColor
  }
  if (secondary) {
    color = secondaryColor
  }
  return <Text {...props} style={[style, { color }]} />
}

/**
 * Your View component
 * Now you can use your own View component but import it from 'tanjun'
 * import { View, Text} from 'tanjun'
 * <View onPress={() => {}}>
 *  <Text primary>Hello</Text>
 * </View>
 */
const MyView: React.FC<Tanjun.ViewProps> = ({ onPress, ...props }) => {
  // Please note: You need implement your own debug logic here if you want the debug to work
  // Otherwise the debug will not work.
  if (onPress) {
    return <Pressable {...props} onPress={onPress} />
  }
  return <View {...props} />
}

// Your Tanjun value
export const getMyOwnValue = (): TanjunValue => {
  return {
    width: 375,
    height: 812,
    text: (props) => <MyText {...props} />,
    view: (props) => <MyView {...props} />,
  }
}
