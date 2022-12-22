import { View } from 'react-native'
import React from 'react'

const Separator = ({ height = 2, color = 'gray' }) => {
  return (
    <View style={{ height: height, borderRadius: height / 2, backgroundColor: color }} />
  )
}

export default Separator
