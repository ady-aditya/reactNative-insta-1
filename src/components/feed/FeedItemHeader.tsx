import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import SmallRoundImageGradientBorder from '../ui/SmallRoundImageGradientBorder'
import Icon from 'react-native-vector-icons/Ionicons';

type FeedHeaderProps ={
    name : string,
    profilePicUrl :string,
    seen : boolean
    music : boolean,
    location : boolean,
    song?: string,
    artists?: string,
    locationInfo? : string
}

export default function FeedItemHeader(feedHeader : FeedHeaderProps) {
  return (
      <View style={styles.headerContainer}>

        <View style={styles.imageHolder}>
            <SmallRoundImageGradientBorder imageUri={feedHeader.profilePicUrl} seen={false} />
        </View>

        <View style={styles.nameLocMusicHolder}>
            <Text style={styles.name}>{feedHeader.name}</Text>
            <View style={styles.musicLocHolder}>
                <Icon name="musical-notes-sharp" size={15} color="#000"  />
                <Text style={styles.musicLocText} numberOfLines={1}>{feedHeader.artists} {"\u00B7"} {feedHeader.song}</Text>
            </View>
        </View>

        <View style={styles.optionsHolder}>
            <Icon name="ellipsis-vertical-sharp" size={23} color="#000" />
            
        </View>
      </View>
    )
  }

const styles = StyleSheet.create({

    headerContainer:{
        flexDirection:"row",
        position:"relative",
        paddingLeft:10,
        paddingRight:15
    },
    imageHolder:{
        
    },
    name:{
        fontFamily:"Instagram Sans Bold",
        fontSize:15
        
    },
    nameLocMusicHolder:{
        marginLeft:10,
        marginRight:20,
        flex: 1,
        justifyContent:"space-evenly"
    },
    musicLocHolder:{
        alignItems:"center",
        flexDirection:"row",
        paddingRight:5
    },
    musicLocText:{
        maxWidth:"90%",
        fontFamily:"Instagram Sans Medium"
    },
    optionsHolder:{
        position:"absolute",
        right:0,
        height:"100%",
        top:10,
        marginRight:18
    }
    

})
