import * as React from 'react'

import { StyleSheet, } from 'react-native'
import { Text, useTanjun, View } from 'tanjun'

export default function App() {
  const [result, setResult] = React.useState<number | undefined>()
  const { width } = useTanjun()

  React.useEffect(() => {
    setResult(width)
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.box}/>
      <Text>Result: {result}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#fff'
  },
  box: {
    width: 260,
    height: 260,
    marginVertical: 20,
    backgroundColor:'green'
  },
})
