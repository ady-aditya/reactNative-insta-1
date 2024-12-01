import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import RoundImage from './ui/RoundImage'

type ProfileUpdatesIconProps = {
  name : string,
  imageLocation : string,
  seen : boolean
}

export default function ProfileUpdatesIcon({name, imageLocation, seen}:ProfileUpdatesIconProps){
  return (
      <View style={styles.profileUpdatesIconView}>
        <RoundImage imageUri={imageLocation} seen={seen} />
        <Text numberOfLines={1} style={styles.profileIdText}>{name}</Text>
      </View>
    )
  }

const styles = StyleSheet.create({
    profileUpdatesIconView:{
      margin:10,
      alignSelf:"flex-start", 
    },
    profileIdText:{
        width:100,
        fontSize:14,
        textAlign:"center"
    }
})
