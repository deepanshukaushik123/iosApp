import React from 'react'
import { View, StyleSheet } from 'react-native';
import Video from 'react-native-video';

const VideoPlayer = () => {
    const VIDEO_HEIGHT = 220;
    return (
        <>
            <View style={styles.wrapper}>
                <Video
                    source={{
                        // uri: 'https://bitmovin-a.akamaihd.net/content/sintel/sintel.mpd',
                        uri: 'https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8',
                        type: 'mpd', // DASH
                    }}
                    style={styles.video}
                    controls
                    resizeMode="contain"
                    onError={e => console.log('Video error:', e)}
                    onLoad={data => console.log('Loaded:', data)}
                />
            </View>
        </>
    )
}

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    height: VIDEO_HEIGHT,
    backgroundColor: '#000',
  },
  video: {
    width: '100%',
    height: '100%',
  },
});

export default VideoPlayer