import React, { Component, useState } from 'react'
import { Text, StyleSheet, View, FlatList } from 'react-native'
import ProfileUpdatesIcon from './ProfileUpdatesIcon'
import { PROFILE_UPDATES } from '../../data/profileUpdates'

export default function ProfileUpdatesList() {

    const [profileUpdates, setProfileUpdates] = useState([...PROFILE_UPDATES]);

    function endOfScrollReaching(){
        setProfileUpdates((currentProfileUpdates)=>{
            const newPUData = ([...currentProfileUpdates,...PROFILE_UPDATES]);
            var arrayToReturn = newPUData;
            if (newPUData.length>50){
                arrayToReturn = newPUData.slice(-20);
            }
            console.log("arrayReturned:",arrayToReturn.length);
            return arrayToReturn;
        });
    }

    return (
    
    <FlatList 
        data={profileUpdates}
        ListHeaderComponent={ProfileUpdatesIcon({name:"Your story", imageLocation:"https://images.tv9hindi.com/wp-content/uploads/2024/08/why-krishna-didnt-protect-abhimanyu.jpg", seen:true, self:true})}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({item})=><ProfileUpdatesIcon imageLocation={item.imageLocation} name={item.id} seen={item.updateSeen}/>}
        keyExtractor={(item, index)=>item.id+index}
        onEndReached={endOfScrollReaching}
        onEndReachedThreshold={5}
      />

      
    )
}

const styles = StyleSheet.create({
    flatList:{
        height:50,
        
        backgroundColor:"yellow",
    }
})
