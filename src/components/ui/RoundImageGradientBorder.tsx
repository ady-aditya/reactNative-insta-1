import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


type RoundImageProps={
    imageUri:string,
    seen:boolean
}

export default function RoundImageGradientBorder({imageUri, seen}:RoundImageProps) {

  let colorArray = ['#ffa500', 'red', "#7F00FF"];
  if(seen){
    colorArray = ["#BABFC0", "#BABFC0"]
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
        height:90,
        width:90,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:900    
    },
    insideRound:{
        backgroundColor:"white",
        height:84,
        width:84,
        borderRadius:90,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        height:80,
        width:80,
        borderRadius:90
    },
    
})
