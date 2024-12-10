import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FeedBottomIconBar from './FeedBottomIconsBar'
import FeedBottomTitle from './FeedBottomTitle'

export default function FeedItemBottom() {
  return (
      <View>
        <FeedBottomIconBar/>
        <FeedBottomTitle/>
      </View>
    )
  }

const styles = StyleSheet.create({
  bottomContainer:{
    marginTop:10,
  }
})
