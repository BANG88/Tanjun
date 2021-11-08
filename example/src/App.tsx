import React from 'react'
import { ScrollView, StatusBar } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Image, useTanjunStyle, View } from 'tanjun'
import { useTanjunExampleTheme } from './Theme'
// Design file: https://www.figma.com/file/r1lm0ynIE3ivIYyHgjT7Zj/Untitled-(1)-(Copy)?node-id=0%3A1
export default function App() {
  const { primaryColor } = useTanjunExampleTheme()
  const containerStyle = useTanjunStyle({
    paddingHorizontal: 28,
  })
  return (
    <SafeAreaView edges={['top']} style={{ backgroundColor: '#fff', flex: 1 }}>
      <StatusBar barStyle="dark-content" />
      <ScrollView style={containerStyle} showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 32,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Image
            source={require('./assets/menu.png')}
            style={{
              width: 20,
              height: 12,
            }}
          />
          <Image
            source={require('./assets/cart.png')}
            style={{
              width: 32,
              height: 32,
            }}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
