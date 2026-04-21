// LoadingScreen.tsx
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';


type Props = NativeStackScreenProps<RootStackParamList, 'Loading'>;

export default function LoadingScreen({ navigation }: Props) {
  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     navigation.navigate('Home');
  //   }, 4000);
  //   return () => clearTimeout(timer);
  // }, [navigation]);

  return (
    <View style={styles.container}>
      {/* Top curved shape */}
      <View style={styles.topShape} />

      {/* Center content */}
      <View style={styles.centerContent}>
        <Image
          source={require('../../assets/images/education.png')} // put your cap/book icon here
          style={styles.icon}
          resizeMode="contain"
        />
        <Text style={styles.title}>EDUCATION</Text>
      </View>

      {/* Bottom curved shape */}
      <View style={styles.bottomShape} />
    </View>

);
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'space-between' },

  topShape: {
    height: 150,
    backgroundColor: '#4CAF50', // green
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
  },

  centerContent: { flex: 1, justifyContent: 'center', alignItems: 'center' },

  icon: { width: 120, height: 120, marginBottom: 20 },

  title: { fontSize: 28, fontWeight: 'bold', color: '#007AFF' },

  bottomShape: {
    height: 150,
    backgroundColor: '#003366', // dark blue
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
