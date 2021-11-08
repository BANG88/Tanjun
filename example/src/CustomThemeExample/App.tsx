import * as React from 'react'
import { StyleSheet } from 'react-native'
import { Text, useTanjun, View } from 'tanjun'
// https://www.figma.com/file/r1lm0ynIE3ivIYyHgjT7Zj/Untitled-(1)-(Copy)?node-id=0%3A1
export default function App() {
  const [result, setResult] = React.useState<number | undefined>()
  const { width } = useTanjun()

  React.useEffect(() => {
    setResult(width)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.box} debug />
      <Text
        primary
        style={{
          marginTop: 40,
        }}>
        Result: {result}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  box: {
    width: 260,
    height: 260,
    marginVertical: 20,
    backgroundColor: '#ddd',
  },
})
