import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const index = () => {
  return (
    <view style={style.container}>
      <Text>Aditya</Text>
    </view>
  )
}

export default index
const style = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'

  }
})
