import React from 'react';
import {
  Alert,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import VideoPlayer from './components/videoPlayer/videoPlayer';
import TrayCard from './components/trayModule/trayCard';
import { data } from './assets/data';

const VIDEO_HEIGHT = 220;

function App() {
   const handleCardPress = (title) => {
    Alert.alert('Card pressed', `You pressed "${title}"`);
  };
  return (
    <View style={styles.container}>
      {/* 🔒 Fixed video */}
      <VideoPlayer />

      {/* 📜 Scrollable list starts BELOW video */}
      <ScrollView
        contentContainerStyle={{ paddingTop: 12 }}
        style={{ flex: 1 }}
      >
        {data.map((item, index) => (
          <TrayCard
            key={index}
            imageSrc={item.imageSrc}
            title={item.title}
            description={item.description}
            onPress={() => handleCardPress(item.title)}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
