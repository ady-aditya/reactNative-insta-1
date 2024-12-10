import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FeedBottomIconBar from './FeedBottomIconsBar'
import ViewMoreText from 'react-native-view-more-text'

type FeedBottomTitleProps = {
    userName:string,
    text:string,
    time:string
}

export default function FeedBottomTitle(feedBottomTitleProps:FeedBottomTitleProps) {
  return (
      <View style={styles.bottomTitleContainer}>
        <ViewMoreText numberOfLines={2} 
            
            renderViewMore={(onPress)=>(<Text style={styles.moreLess} onPress={onPress}>more...</Text>)}
            renderViewLess={(onPress)=>(<Text style={styles.moreLess} onPress={onPress}>less...</Text>)}
        >
            <Text style={styles.userName}>{feedBottomTitleProps.userName} &nbsp;</Text>
            {feedBottomTitleProps.text} 
        </ViewMoreText>
        <Text style={styles.timeText} >
        {feedBottomTitleProps.time} 
        </Text>
      </View>
    )
  }

const styles = StyleSheet.create({
  bottomTitleContainer:{
    marginLeft:10,
    marginRight:10
  },
  userName:{
    fontFamily:"Instagram Sans Bold",
    fontSize:15
  },
  timeText:{
    color:"#5A5A5A",
    marginTop:10,
    fontSize:12
  },
  moreLess:{
    color:"#5A5A5A",
    marginTop:5,
    fontSize:12,
    
  }
})
