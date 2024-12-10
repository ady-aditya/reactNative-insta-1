import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Stories from "../components/Stories";
import ProfileUpdatesList from "../components/ProfileUpdatesList";
import { PROFILE_UPDATES } from "../../data/profileUpdates";
import ProfileUpdatesIcon from "../components/ProfileUpdatesIcon";
import LinearGradient from "react-native-linear-gradient";
import SmallRoundImageGradientBorder from "../components/ui/SmallRoundImageGradientBorder";
import FeedItem from "../components/feed/FeedItem";
import { feeds } from "../../data/feed";
import { useState } from "react";
import TopBar from "../components/TopBar";

export default function HomePage(){

    const [feedData, setFeedData] = useState([...feeds]);

    function feedEndReaching(){
        setFeedData((currentFeed)=>{
            const newFeedData = ([...currentFeed,...feeds]);
            var arrayToReturn = newFeedData;
            if (newFeedData.length>50){
                arrayToReturn = newFeedData.slice(-20);
            }
            console.log("arrayReturned:",arrayToReturn.length);
            return arrayToReturn;
        });
    }

    return (
    <SafeAreaView style={styles.homePage}>
        <TopBar/>
        <FlatList
        data={feedData}
        ListHeaderComponent={<ProfileUpdatesList/>}
        renderItem={({item})=>(<FeedItem  feed1={item} />)}
        keyExtractor={(item,index)=>item.name+index}
        showsVerticalScrollIndicator={false}
        onEndReached={feedEndReaching}
        onEndReachedThreshold={5}
        />
        
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    homePage:{
        
    },
        
});

