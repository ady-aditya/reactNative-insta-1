import React, { Component } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import ProfileUpdatesIcon from './ProfileUpdatesIcon'
import { PROFILE_UPDATES } from '../../data/profileUpdates'

export default function ProfileUpdatesList() {
    return (
    
    <FlatList 
        data={PROFILE_UPDATES}
        ListHeaderComponent={ProfileUpdatesIcon({name:"Your story", imageLocation:"https://images.tv9hindi.com/wp-content/uploads/2024/08/why-krishna-didnt-protect-abhimanyu.jpg", seen:true})}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><ProfileUpdatesIcon imageLocation={item.imageLocation} name={item.id} seen={item.updateSeen}/>}
        keyExtractor={(item)=>item.id}
      />

      
    )
}

const styles = StyleSheet.create({
    flatList:{
        height:50,
        
        backgroundColor:"yellow",
    }
})
