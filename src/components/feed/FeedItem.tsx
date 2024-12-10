import React, { Component } from 'react'
import { Text, StyleSheet, View } from 'react-native'
import FeedItemHeader from './FeedItemHeader'
import FeedItemBody from './FeedItemBody'
import FeedItemBottom from './FeedItemBottom'
import { Feed, feeds } from '../../../data/feed'
import FeedBottomIconBar from './FeedBottomIconsBar'
import FeedBottomTitle from './FeedBottomTitle'

type FeedItemProp={
  feed1: Feed
}

export default function FeedItem({feed1}:FeedItemProp) {

  return (
      <View style={styles.feedContainer}>
        <FeedItemHeader name={feed1.name}  profilePicUrl={feed1.profilePicUrl} location={false} music={true} seen={feed1.seen} artists={feed1.headerInfo.musicInfo.artists} song={feed1.headerInfo.musicInfo.songName}  />
        <FeedItemBody type='post' imgaeUrls={feed1.post.imageUrls} />
        <FeedBottomIconBar likes={feed1.likes} comments={feed1.comments} shares={feed1.shares}/>
        <FeedBottomTitle userName={feed1.name} text={feed1.desc} time={feed1.time}/>

      </View>
    )
  }

const styles = StyleSheet.create({
    feedContainer:{
      marginBottom:20,
    }
})
