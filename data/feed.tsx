export type Feed = {
    name : string,
    profilePicUrl:string,
    desc: string,
    seen: boolean,
    postType : PostType,
    headerInfo : HeaderInfo,
    likes : number,
    comments : number,
    shares : number,
    post : Post,
    time: string
}

type HeaderInfo = {
    musicInfo : MusicInfo,
    locationInfo : string
}

type MusicInfo = {
    songName : string,
    artists : string
}

enum PostType {
    Pictures,
    Videos,
    Reel
}

type Post={
    imageUrls : string[],
    videoUrl : string,
    reelUrl:string
}

export const feeds: Feed[] = 
[
  
  {
    name: "_virnakai_",
    profilePicUrl:
      "https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-19/11373694_1478336875795382_1712418199_a.jpg?stp=dst-jpg_tt6&_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=cW6Ui2JXIKwQ7kNvgFiGVI7&_nc_gid=303065520a8b4ef3971a94f337f7ddb2&edm=APoiHPcBAAAA&ccb=7-5&oh=00_AYAfHROpWJGIE7g02_VePCauNvoNzJiaESv-1wpQ47XYfg&oe=675B147D&_nc_sid=22de04",
    desc: "With every turn of the pedal, I leave my worries behind, The ocean's melody syncing with the rhythm of my mind. Waves crash beside me, a chorus of nature's song, On sandy trails I journey, where my spirit feels strong. The horizon stretches endless, under the sky's embrace, On a beach of golden memories, I find my tranquil place. Through the salty breeze and whispers of the sea, On two wheels of freedom, I ride wild and free. Every grain of sand a testament to my journey's might, Biking along the shoreline, where adventure meets light.",
    seen: true,
    postType: PostType.Pictures,
    headerInfo: {
      musicInfo: { songName: "Highway to hell", artists: "Ridon soundtrack" },
      locationInfo: "Malibu Beach",
    },
    likes: 26,
    comments: 0,
    shares: 3,
    time: "20 minutes ago",
    post: {
      imageUrls: [
        "https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-15/469335769_18473386828050680_378810145185174439_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42MDB4NDUwLnNkci5mNzU3NjEuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=sOQSbbW-hxUQ7kNvgHd7prP&_nc_gid=d41418adb0eb4aa59fae2164e5e68f3f&edm=APNOSGoBAAAA&ccb=7-5&ig_cache_key=MzUxNTQxMzk3NDk4OTYyMTgwNg%3D%3D.3-ccb7-5&oh=00_AYBtiSEHEhrFyEPZ_jd16ICoTx8m9vdIQY5aidy4uOQb4w&oe=67570151&_nc_sid=ca40e6",
      ],
      videoUrl: "",
      reelUrl: "",
    },
  },
  {
    name: "john_doe",
    profilePicUrl: "https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-15/469703698_18322715422091298_3905478169219627209_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=96YTXWBWpCAQ7kNvgE6HUUK&_nc_gid=c64361b12fc54a458d97d3210d8cb129&edm=AONqaaQBAAAA&ccb=7-5&ig_cache_key=MzUxODM3MjU4MjU3NDI0NTY2Mg%3D%3D.3-ccb7-5&oh=00_AYCJkOu3_7qdNNjd2Xj7vd8CSVIE12XB0MiI47kfOnjccA&oe=675B3470&_nc_sid=4e3341",
    desc: "Exploring the mountains on my bike. Nature's serenity!Exploring the mountains on my bike. Nature's serenity!",
    seen: false,
    postType: PostType.Videos,
    headerInfo: {
      musicInfo: { songName: "Nature's Symphony", artists: "Sounds of Nature" },
      locationInfo: "Rocky Mountains",
    },
    likes: 200,
    comments: 45,
    shares: 10,
    time: "30 minutes ago",
    post: {
      imageUrls: ["https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-15/469325271_18473386804050680_3103877244394202554_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42MDB4NDUwLnNkci5mNzU3NjEuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=72hFJqrsK4QQ7kNvgEvLduT&_nc_gid=d41418adb0eb4aa59fae2164e5e68f3f&edm=APNOSGoBAAAA&ccb=7-5&ig_cache_key=MzUxNTQxMzk3NTE5OTIyNTIzNg%3D%3D.3-ccb7-5&oh=00_AYDJN9peSAbTaTf6vvSvDX7mVzTEMTqFkGBfVNFbYmesDg&oe=67570E9D&_nc_sid=ca40e6"],
      videoUrl: "https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-15/469325271_18473386804050680_3103877244394202554_n.jpg?stp=dst-jpg_e35&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi42MDB4NDUwLnNkci5mNzU3NjEuZGVmYXVsdF9pbWFnZSJ9&_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=108&_nc_ohc=72hFJqrsK4QQ7kNvgEvLduT&_nc_gid=d41418adb0eb4aa59fae2164e5e68f3f&edm=APNOSGoBAAAA&ccb=7-5&ig_cache_key=MzUxNTQxMzk3NTE5OTIyNTIzNg%3D%3D.3-ccb7-5&oh=00_AYDJN9peSAbTaTf6vvSvDX7mVzTEMTqFkGBfVNFbYmesDg&oe=67570E9D&_nc_sid=ca40e6",
      reelUrl: "",
    },
  },
  {
    name: "adventure_bob",
    profilePicUrl: "https://instagram.fslv1-2.fna.fbcdn.net/v/t51.2885-19/469221339_1121845126123159_774964738257854768_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fslv1-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=LBQGXdamJ14Q7kNvgFEJQsZ&_nc_gid=ddf497a4f65c437fa1c6381e3634d07a&edm=AA5fTDYBAAAA&ccb=7-5&oh=00_AYBuYmPZChmHtDjXE3e_5wrkqlWPEVo9VGIV1Gy0TMXO4Q&oe=675B0847&_nc_sid=7edfe2",
    desc: "Climbing new heights! Nature's serenity!Exploring the mountains on my bike. Nature's serenity!",
    seen: false,
    postType: PostType.Reel,
    headerInfo: {
      musicInfo: { songName: "Reach the Top", artists: "Motivational Beats" },
      locationInfo: "Everest Base Camp",
    },
    likes: 300,
    comments: 60,
    shares: 25,
    time: "2 hours ago",
    post: {
      imageUrls: ["https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-15/469141608_18363411052141626_5218720163845898222_n.jpg?se=7&stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=TJqgVBgRi2QQ7kNvgGXtJGy&_nc_gid=d41418adb0eb4aa59fae2164e5e68f3f&edm=APNOSGoBAAAA&ccb=7-5&ig_cache_key=MzUxNDk0MzUzNjE0NzQ5NDM2Mw%3D%3D.3-ccb7-5&oh=00_AYDUBB_r6ULTXRpKHZCuDTivWgPOurz0D5xyv0aJjUvmsg&oe=6756F397&_nc_sid=ca40e6"],
      videoUrl: "",
      reelUrl: "https://example.com/reel1.mp4",
    },
  },
  {
    name: "danispeagle",
    profilePicUrl:
      "https://instagram.fslv1-4.fna.fbcdn.net/v/t51.2885-19/468442684_541504508782100_6691816905530891250_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fslv1-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=PLZ7pZvHVr8Q7kNvgG7mAkx&_nc_gid=3f13e6f4e9994a3d929977ba22e5842e&edm=AONqaaQBAAAA&ccb=7-5&oh=00_AYCUfuIN5pbMHilvD735QsjLLSBOKMCBn2GkXiA6DvN-wQ&oe=6757005A&_nc_sid=4e3341",
    desc: "In the world of CrossFit, strength isn't just about the physical. It's about pushing past limits, embracing the pain, and knowing that each drop of sweat carves a stronger you. Every rep is a step closer to greatness, every WOD a test of your resilience. In the gym, we conquer not just weights, but our own doubts and fears. Through grit and determination, we forge bodies of steel and minds of iron. CrossFit isn't just a workout; it's a journey, a community, and a testament to the power of relentless effort. So rise up, lift heavy, and break barriers—because the only limits are the ones you set yourself.",
    seen: false,
    postType: PostType.Pictures,
    headerInfo: {
      musicInfo: { songName: "Eye of the Tiger", artists: "Rocky soundtrack" },
      locationInfo: "Malibu Beach",
    },
    likes: 120,
    comments: 15,
    shares: 5,
    time: "10 minutes ago",
    post: {
      imageUrls: [
        "https://instagram.fslv1-4.fna.fbcdn.net/v/t51.2885-15/469402601_18473055715062123_2297942022278563545_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTc5eDE0NzMuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fslv1-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=sDzjkJPIGiAQ7kNvgFaBGRJ&_nc_gid=3f13e6f4e9994a3d929977ba22e5842e&edm=AONqaaQBAAAA&ccb=7-5&ig_cache_key=MzUxNTg4MzMzNDc4ODkwNDUyNQ%3D%3D.3-ccb7-5&oh=00_AYDLLIN4KCDzSvvF8OMUNnM6zkPJV5ITgAyptNTQJvBh8A&oe=6756E93B&_nc_sid=4e3341",
      ],
      videoUrl: "",
      reelUrl: "",
    },
  },
  {
    name: "Tagderaho_12",
    profilePicUrl: "https://instagram.fslv1-4.fna.fbcdn.net/v/t51.2885-19/458286221_1851804988644914_8771748313934372300_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fslv1-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Vrt5TDpkRkEQ7kNvgF4JVPV&_nc_gid=bf773aecc859465ea128448c4b174331&edm=AA5fTDYBAAAA&ccb=7-5&oh=00_AYDtiNuAQ63ODHjnus_UI57V4dCaGEkXoZyQw64eiN34EQ&oe=675B2958&_nc_sid=7edfe2",
    desc: "In the gym, it's not just about lifting weights; it's about lifting your spirit, your goals, and your life. Every drop of sweat, every strain, every rep—it all builds more than muscle. It builds character. Keep pushing, stay relentless, and remember: the only bad workout is the one that didn't happen.",
    seen: true,
    postType: PostType.Pictures,
    headerInfo: {
      musicInfo: { songName: "Workout Beats", artists: "Gym Tunes" },
      locationInfo: "Route 66",
    },
    likes: 250,
    comments: 35,
    shares: 15,
    time: "3 hours ago",
    post: {
      imageUrls: ["https://instagram.fslv1-2.fna.fbcdn.net/v/t51.2885-15/449854276_120212654078310580_4656224825612462149_n.png?stp=dst-jpg_e15_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImFkc19pbWFnZSJ9&_nc_ht=instagram.fslv1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=2Dwk1PsCydIQ7kNvgHPup2N&_nc_gid=25ce027797784fd9bebcb1d2458b6a7b&edm=APNOSGoBAAAA&ccb=7-5&oh=00_AYBel53ddvkbpU891C6KUWSF-7pHPu1CczgPx0BJ5FBazA&oe=6756EC13&_nc_sid=ca40e6"],
      videoUrl: "",
      reelUrl: "",
    },
  },
  {
    name: "fitness_fan",
    profilePicUrl: "https://instagram.fslv1-4.fna.fbcdn.net/v/t51.2885-15/469473717_18051026096491701_6488694547996223663_n.jpg?stp=dst-jpegr_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuaGRyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fslv1-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=dlN4Tht_KR4Q7kNvgGA4WPS&_nc_gid=e98b4b5ad8654d788a74d62e79891401&edm=APNOSGoBAAAA&ccb=7-5&ig_cache_key=MzUxNzkzOTA3NDAzODE0MjI1MQ%3D%3D.3-ccb7-5&oh=00_AYC0NNJsOaLoHD6tap3eSxMszwsuxHMi0Ai6s_MpBg6xPg&oe=675B1C20&_nc_sid=ca40e6",
    desc: "Push through the pain today, and tomorrow you'll be stronger than ever. Every sweat-soaked moment is a step closer to your goals.",
    seen: false,
    postType: PostType.Videos,
    headerInfo: {
      musicInfo: { songName: "Workout Beats", artists: "Gym Tunes" },
      locationInfo: "Gold's Gym",
    },
    likes: 180,
    comments: 22,
    shares: 10,
    time: "4 hours ago",
    post: {
      imageUrls: ["https://instagram.fslv1-4.fna.fbcdn.net/v/t51.2885-15/469473717_18051026096491701_6488694547996223663_n.jpg?stp=dst-jpegr_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuaGRyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fslv1-4.fna.fbcdn.net&_nc_cat=109&_nc_ohc=dlN4Tht_KR4Q7kNvgGA4WPS&_nc_gid=e98b4b5ad8654d788a74d62e79891401&edm=APNOSGoBAAAA&ccb=7-5&ig_cache_key=MzUxNzkzOTA3NDAzODE0MjI1MQ%3D%3D.3-ccb7-5&oh=00_AYC0NNJsOaLoHD6tap3eSxMszwsuxHMi0Ai6s_MpBg6xPg&oe=675B1C20&_nc_sid=ca40e6"],
      videoUrl: "https://example.com/video2.mp4",
      reelUrl: "",
    },
  },
  {
    name: "bassi",
    profilePicUrl: "https://upload.wikimedia.org/wikipedia/commons/1/19/Anubhav_Singh_Bassi_in_Surat_for_Bas_Kar_Bassi_%28cropped%29.jpg",
    desc: "Wandering through the city. Wandering through the snow. Wandering through the life.",
    seen: true,
    postType: PostType.Pictures,
    headerInfo: {
      musicInfo: { songName: "City Lights", artists: "Urban Beats" },
      locationInfo: "New York City",
    },
    likes: 140,
    comments: 18,
    shares: 7,
    time: "5 hours ago",
    post: {
      imageUrls: ["https://instagram.fslv1-4.fna.fbcdn.net/v/t51.2885-15/469392789_18480651199031524_1214921869776298794_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fslv1-4.fna.fbcdn.net&_nc_cat=1&_nc_ohc=IsHIdbHofckQ7kNvgEKY6Dw&_nc_gid=25ce027797784fd9bebcb1d2458b6a7b&edm=APNOSGoBAAAA&ccb=7-5&ig_cache_key=MzUxNjAwMDMwODg5MzIzMzQ2OA%3D%3D.3-ccb7-5&oh=00_AYChb9Xn94X4LjCMWUZxu8rXswcvJ0F27_txwUsHNkonnQ&oe=675707ED&_nc_sid=ca40e6"],
      videoUrl: "",
      reelUrl: "",
    },
  },
  {
    name: "nature_lover",
    profilePicUrl: "https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-19/396755245_705829034451566_790476219783700959_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=cJmMb_G_O2IQ7kNvgEQLMTF&_nc_gid=f5c016e087d7477f97aa8d8a80b70f8a&edm=AA5fTDYBAAAA&ccb=7-5&oh=00_AYCBMquRNiWjWeeZG1SaKppnW_1pgM46VVhxxou89gQv2g&oe=675B03F4&_nc_sid=7edfe2",
    desc: "Exploring the forest trails. Go on this trek near banglore this new year",
    seen: true,
    postType: PostType.Pictures,
    headerInfo: {
      musicInfo: { songName: "Forest Whisper", artists: "Nature Sounds" },
      locationInfo: "Black Forest",
    },
    likes: 170,
    comments: 25,
    shares: 12,
    time: "7 hours ago",
    post: {
      imageUrls: ["https://instagram.fslv1-4.fna.fbcdn.net/v/t51.2885-15/469378802_18475593400046341_5944702810262858875_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEwODAuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fslv1-4.fna.fbcdn.net&_nc_cat=101&_nc_ohc=Yo-mDbQ0WjwQ7kNvgFymxGZ&_nc_gid=25ce027797784fd9bebcb1d2458b6a7b&edm=APNOSGoBAAAA&ccb=7-5&ig_cache_key=MzUxNTY1NDk5NzI1NjMwNzgyNQ%3D%3D.3-ccb7-5&oh=00_AYDuAMfUBvMuMtJhlGUhWa8nlqPXQpCqbFI-8Rjiy9AaVg&oe=6756EABA&_nc_sid=ca40e6"],
      videoUrl: "",
      reelUrl: "",
    },
  },
  {
    name: "travel_junkie",
    profilePicUrl: "https://instagram.fslv1-1.fna.fbcdn.net/v/t51.2885-15/468152964_1516506489073382_461961012384747398_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE4MDAuc2RyLmYyODg1LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fslv1-1.fna.fbcdn.net&_nc_cat=102&_nc_ohc=G-NzSU-EUuEQ7kNvgEKUs1E&_nc_gid=845e793e560745ceae3fec9184ea8aa9&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUwOTE3Nzg2NjM3MTA0NDU3MQ%3D%3D.3-ccb7-5&oh=00_AYC2hE2wvaKKOnRv-QssMr8UwIxm9NMRD2OVexXaS1j50A&oe=675B3550&_nc_sid=7a9f4b",
    desc: "Backpacking through Europe.Merry xmas guys.May your travels be filled with unforgettable experiences and boundless joy!",
    seen: false,
    postType: PostType.Reel,
    headerInfo: {
      musicInfo: { songName: "Journey Beats", artists: "Travel Tunes" },
      locationInfo: "Paris, France",
    },
    likes: 200,
    comments: 30,
    shares: 10,
    time: "8 hours ago",
    post: {
      imageUrls: ["https://instagram.fslv1-2.fna.fbcdn.net/v/t51.2885-15/469355659_1555385931772624_1137745473519518381_n.jpg?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMDgweDEzNTAuc2RyLmYyODg1LmRlZmF1bHRfaW1hZ2UifQ&_nc_ht=instagram.fslv1-2.fna.fbcdn.net&_nc_cat=104&_nc_ohc=ad4slTehVVwQ7kNvgHRoQ0P&_nc_gid=845e793e560745ceae3fec9184ea8aa9&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUxNjM3OTMyMTMyNTYxOTA4NA%3D%3D.3-ccb7-5&oh=00_AYCoQpQtdi5rIfl0MV0ko0YGiamjmqQTv4n0Gpw8ocyn5g&oe=675B1741&_nc_sid=7a9f4b"],
      videoUrl: "",
      reelUrl: "https://example.com/reel2.mp4",
    },
  },
  {
    name: "beach_bum",
    profilePicUrl: "https://instagram.fslv1-3.fna.fbcdn.net/v/t51.2885-19/341969195_207125512044543_3685679878519171393_n.jpg?stp=dst-jpg_s150x150_tt6&_nc_ht=instagram.fslv1-3.fna.fbcdn.net&_nc_cat=103&_nc_ohc=WqAP966dOz8Q7kNvgHi9BL1&_nc_gid=154f4512444d46298543ac73bfca7aa3&edm=AA5fTDYBAAAA&ccb=7-5&oh=00_AYDaeSEJM4VjTgG7xIgOzVsdIky2dUXdgijc0aj6FxXR2g&oe=675B2A8C&_nc_sid=7edfe2",
    desc: "Traveling is more than just seeing the sights. It's about immersing yourself in new cultures, tasting unfamiliar flavors, and embracing the adventure that lies in every corner of the world. It's a journey that enriches the soul, broadens the mind, and creates memories that last a lifetime. So, wander often, explore far, and let the world be your canvas",
    seen: true,
    postType: PostType.Pictures,
    headerInfo: {
      musicInfo: { songName: "Ocean Waves", artists: "Beach Boys" },
      locationInfo: "Bondi Beach",
    },
    likes: 220,
    comments: 40,
    shares: 15,
    time: "9 hours ago",
    post: {
      imageUrls: ["https://instagram.fslv1-4.fna.fbcdn.net/v/t51.2885-15/469484876_17952238481896585_8296337485652887128_n.jpg?stp=dst-jpg_e35_p720x720_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xMTA4eDEzODUuc2RyLmY3NTc2MS5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fslv1-4.fna.fbcdn.net&_nc_cat=101&_nc_ohc=9lRFTY5mNOQQ7kNvgEwJ0Qq&_nc_gid=94a4fcda5dc64f67a6a499cddcbd89cf&edm=AP4sbd4BAAAA&ccb=7-5&ig_cache_key=MzUxNjcyMDAxNTU2NTgyNzcwMA%3D%3D.3-ccb7-5&oh=00_AYCD14Sj2DnwiDt-b3ozvO4GH770qEGPq70GenQeex4Whg&oe=675B2293&_nc_sid=7a9f4b"],
      videoUrl: "",
      reelUrl: "",
    },
  },
];