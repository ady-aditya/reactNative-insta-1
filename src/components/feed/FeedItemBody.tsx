import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'


type FeedBodyProps = {
  type : string
  imgaeUrls : string[] 
}
export default function FeedItemBody({type, imgaeUrls}:FeedBodyProps) {
  console.log(imgaeUrls[0])
  return (
      <View style={styles.post}>
        <Image resizeMode="cover" style={styles.image} source={{ uri: imgaeUrls[0] }} />
      </View>
    )
  }

const styles = StyleSheet.create({
  post:{
    marginTop:8
  },
  image:{
    width: '100%', 
    height: undefined, 
    aspectRatio: 1,
  }
})
