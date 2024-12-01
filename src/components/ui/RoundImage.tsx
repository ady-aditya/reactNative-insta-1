import React, { Component } from 'react'
import { Text, StyleSheet, View, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'


type RoundImageProps={
    imageUri:string,
    seen:boolean
}

const IMAGE_SIZE = 80

export default function RoundImage({imageUri, seen}:RoundImageProps) {

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
        height:100,
        width:100,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:90    
    },
    insideRound:{
        backgroundColor:"white",
        height:93,
        width:93,
        borderRadius:90,
        justifyContent:"center",
        alignItems:"center",
    },
    image:{
        height:87,
        width:87,
        borderRadius:90
    },
    
})
