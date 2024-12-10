import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


type RoundImageProps={
    imageUri:string,
    seen:boolean
}

export default function SmallRoundImageGradientBorder({imageUri, seen}:RoundImageProps) {

  let colorArray = ['#ffa500', 'red', "#7F00FF"];
  if(seen){
    colorArray = ["white", "white"]
  }  
  return (
    
    <LinearGradient style={styles.gradientContainer} useAngle={true} angle={45} angleCenter={{x:0.6,y:0.4}} locations={[0.05, 0.65, 1]} colors={colorArray}>
        <View style={styles.insideRound}>
            <Image style={styles.image} source={{ uri: imageUri }} />
        </View> 
    </LinearGradient>
    )
}


const styles = StyleSheet.create({
    
    gradientContainer:{
        alignSelf:"flex-start",
        height:50,
        width:50,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:30    
    },
    insideRound:{
        backgroundColor:"white",
        height:46,
        width:46,
        borderRadius:25,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        height:41,
        width:41,
        borderRadius:20
    },
    
})
