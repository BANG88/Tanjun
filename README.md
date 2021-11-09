<p align="center">
  <a href="https://ant.design">
    <img width="300" src="https://user-images.githubusercontent.com/433259/140850019-478941cc-7372-4a73-b194-4640f2d1ded2.png">
  </a>
</p>

# Tanjun

> Write React Native style in an easy way and restore the original design one to one. Get size from designer and use it in your app.
> **Happy coding!**

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
