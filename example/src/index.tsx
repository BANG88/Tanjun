import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { TanjunProvider } from 'tanjun'
import App from './App'
import { getMyOwnValue } from './my-own-proivder'
import { TanjunExampleThemeProvider } from './Theme'

export default () => {
  return (
    <SafeAreaProvider>
      <TanjunExampleThemeProvider>
        {/*
        If you want to use the default text,view,image component,
        You just need to provide the width and height. if your
        design file is same as the default one. you can leave it empty.
      */}
        <TanjunProvider value={getMyOwnValue()}>
          <App />
        </TanjunProvider>
      </TanjunExampleThemeProvider>
    </SafeAreaProvider>
  )
}
