import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function QuizScoreScreen() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ASK QUESTION</Text>
      </View>

      {/* Score Section */}
      <View style={styles.scoreBox}>
        <Text style={styles.scoreTitle}>Score</Text>
        <Text style={styles.scoreText}>Score: 4</Text>
        <Text style={styles.scoreText}>Total: 5</Text>
      </View>

      {/* Restart Button */}
      <TouchableOpacity
        style={styles.restartButton}
        onPress={() => navigation.navigate('StartQuiz')}
      >
        <Text style={styles.restartText}>Restart</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1, alignItems: 'center' ,height:'100%' },
  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold',marginTop:40 },
  scoreBox: {
    marginTop: 60,
    backgroundColor: '#E3F2FD',
    width: '85%',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  scoreTitle: { color: '#003366', fontSize: 18, fontWeight: 'bold', marginBottom: 10 },
  scoreText: { color: '#003366', fontSize: 16, fontWeight: '600', marginVertical: 5 },
  restartButton: {
    backgroundColor: '#003366',
    width: '85%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 40,
  },
  restartText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
