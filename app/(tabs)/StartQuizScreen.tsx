import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function StartQuizScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ASK QUESTION</Text>
      </View>

      {/* Illustration */}
      <View style={styles.imageBox}>
        <Image
          source={require('../../assets/images/question.png')}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {/* Start Button */}
      <TouchableOpacity
        style={styles.startButton}
        onPress={() => navigation.navigate('QuizQuestion')}
      >
        <Text style={styles.startText}>Start Quiz</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1, alignItems: 'center',height:'100%'  },
  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold',marginTop:40 },
  imageBox: { marginTop: 60, alignItems: 'center' },
  image: { width: 250, height: 250 },
  startButton: {
    backgroundColor: '#003366',
    width: '85%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 215,
  },
  startText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
