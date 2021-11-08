import React from 'react'
import { TanjunProvider } from 'tanjun'
import App from './App'
import { getMyOwnValue } from './my-own-proivder'
import { TanjunExampleThemeProvider } from './Theme'

export default () => {
  return (
    <TanjunExampleThemeProvider>
      <TanjunProvider value={getMyOwnValue()}>
        <App />
      </TanjunProvider>
    </TanjunExampleThemeProvider>
  )
}
