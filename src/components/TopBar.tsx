import { Image, StyleSheet, Text, View } from "react-native"
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import IconF from 'react-native-vector-icons/FontAwesome5';


export default function TopBar() {

  return (
      <View style={styles.topContainer}>

      <View style={styles.logoContainer}>
        <Image source={require('../../assests/images/Logo-Instagram.png')} style={styles.logo} />
        <Icon name='chevron-down-outline' size={18}/>
      </View>  
      

        <View style={styles.iconHolder}>
            <Icon name='heart-outline' size={30}/>
            <Image source={require('../../assests/images/pngegg.png')} style={styles.messenegrIcon} />
            <View>
                    <View style={styles.roundOverLay}>
                    <Text style={styles.iconText}>2</Text> 
        </View>
            </View>
        </View>

      </View>
    )
  }

const styles = StyleSheet.create({
    topContainer:{
      backgroundColor:"",
      flexDirection:"row",
      alignContent:"center",
      marginVertical:10,
      justifyContent:"space-between",
      alignItems:"center"

    },
    logoContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    logo:{
        width:130,
        height:60,
        marginLeft:10,
        resizeMode:"cover"
    },
    messenegrIcon:{
        width:27,
        height:27,
        marginLeft:20,
        resizeMode:"cover"
    },
    iconHolder:{
        marginRight:20,
        flexDirection:"row",
        alignItems:"center",
       
    },
    roundOverLay:{
        backgroundColor:"red",
        height:16,
        width:16,
        borderRadius:20,
        position:"absolute",
        top: -18, 
        right: -5,
        justifyContent:"center",
        alignItems:"center",
    },
    
      iconText:{
        color:"white",
        alignContent:"center",
        fontSize:10,
        fontWeight:"bold"
        
    }
    
})
