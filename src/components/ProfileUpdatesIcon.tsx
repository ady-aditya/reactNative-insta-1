import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import RoundImageGradientBorder from './ui/RoundImageGradientBorder'
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Entypo';

type ProfileUpdatesIconProps = {
  name : string,
  imageLocation : string,
  seen : boolean,
  self? : boolean
}

export default function ProfileUpdatesIcon({name, imageLocation, seen, self=false}:ProfileUpdatesIconProps){
  return (
      <View style={styles.profileUpdatesIconView}>
        <RoundImageGradientBorder imageUri={imageLocation} seen={seen} />
        
        <Text numberOfLines={1} style={styles.profileIdText}>{name}</Text>
        {self && <View style={styles.roundIcon}>
          <View style={styles.roundIconInternal}>
            <IconF name="plus" size={17} color={"white"}/>
            {/* <Text style={styles.iconText}>+</Text> */}
          </View>
        </View>}
        
      </View>
    )
  }

const styles = StyleSheet.create({
    profileUpdatesIconView:{
      marginHorizontal:7,
      alignSelf:"flex-start", 
    },
    profileIdText:{
      marginTop:3,
        width:100,
        fontSize:13,
        textAlign:"center"
    },
    roundIcon:{
      backgroundColor:"white",
      height:35,
      width:35,
      borderRadius:20,
      position:"absolute",
      bottom: 18, 
      right: -3,
      justifyContent:"center",
      alignItems:"center",
  },
  roundIconInternal:{
    backgroundColor:"#0096FF",
    height:27,
    width:27,
    borderRadius:19,
    justifyContent:"center",
    alignItems:"center",
    alignContent:"center"
  },
  iconText:{
    color:"white",
    alignContent:"center",
    fontSize:20,
    
}
})
