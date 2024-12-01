import { FlatList, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Stories from "../components/Stories";
import ProfileUpdatesList from "../components/ProfileUpdatesList";
import { PROFILE_UPDATES } from "../../data/profileUpdates";
import ProfileUpdatesIcon from "../components/ProfileUpdatesIcon";
import LinearGradient from "react-native-linear-gradient";

export default function HomePage(){
    return (
    <SafeAreaView style={styles.homePage}>
        <ProfileUpdatesList/>
    </SafeAreaView>);
}

const styles = StyleSheet.create({
    homePage:{
        flex:1,
        justifyContent: 'center', 
        alignItems: 'flex-start',
    },
        
});

