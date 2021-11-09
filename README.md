# Tanjun

簡単な React Native の UI

> Write React Native style in an easy way and restore the original design one to one.
>
> Get size from designer and use it in your app.

## Installation

```sh
yarn add tanjun
```

## Usage

```jsx
import { TanjunProvider, View, Text } from 'tanjun'

const App = () => (
  <TanjunProvider
    // Your design size
    value={{
      width: 375,
      height: 812,
    }}>
    // The width and height or the font size are obtained from the design
    <View style={{ width: 200, height: 140 }}>
      <Text style={{ fontSize: 46 }}>Hello Tanjun </Text>
    </View>
  </TanjunProvider>
)
```

## License

MIT
