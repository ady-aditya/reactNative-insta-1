import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/Feather';

type IconBarInfoProps = {
    likes: number,
    comments: number,
    shares: number
}

export default function FeedBottomIconBar({likes, comments, shares}:IconBarInfoProps) {
  return (
      <View style={styles.iconBarRoot}>
        <View style={styles.likeCommentShare}>

            <View style={styles.iconAndNumberHolder}>
                <Icon name='heart-outline' size={25}/>
                {likes>0 &&
                <Text style={styles.iconText}>{likes}</Text>
                }
                
            </View>
            
            <View style={styles.iconAndNumberHolder}>
                <Icon name='chatbubble-outline' size={24}/>
                {comments>0 &&
                <Text style={styles.iconText}>{comments}</Text>
                }
            </View>
            

            <View style={styles.iconAndNumberHolder}>
                <IconF name='send' size={24}/>
                {shares>0 &&
                <Text style={styles.iconText}>{shares}</Text>
                }
            </View>
           
        </View>

        <Icon name='bookmark-outline' size={24} />
        
      </View>
    )
  }

const styles = StyleSheet.create({
    iconBarRoot:{
        flexDirection:"row",
        justifyContent:"space-between",
        padding:10
    },
    likeCommentShare:{
        flexDirection:"row",
    },
    iconAndNumberHolder:{
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        marginRight:10
    },
    iconText:{
        fontSize:15,
        fontWeight:"bold",
        fontFamily:""
    }

})
