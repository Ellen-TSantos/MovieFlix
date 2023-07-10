import { View } from "react-native";
import React, { useState, useCallback } from "react";
import { LinearGradient } from "expo-linear-gradient";
import YoutubePlayer from "react-native-youtube-iframe";
import stylesVideos from "../../assets/Styles/stylesVideos";
import ButtonBackTrailer from "../../assets/components/ButtonBackTrailer";


export default function TrailerPopular({navigation }) {
  const [playing, setPlaying] = useState(false);


  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
    }
  }, []);

  return (
    <View style={stylesVideos.containerTrailer}>
       <ButtonBackTrailer screenName="Search"/>
      <LinearGradient
        colors={["#02000c", "#06031a", "#06031a", "#02000c"]}
        style={stylesVideos.background}
      >
        <View style={stylesVideos.videoplay}>
          <YoutubePlayer
            height={300}
            play={playing}
            videoId={"F2-BLKAidao"}
            onChangeState={onStateChange}
          />
        </View>
      </LinearGradient>
    </View>
  );
}
