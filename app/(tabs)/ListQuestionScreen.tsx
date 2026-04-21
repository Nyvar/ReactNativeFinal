import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function StudentQuestionListScreen() {
  const navigation = useNavigation();

  const questions = [
    { id: 1, title: 'What is photosynthesis?' },
    { id: 2, title: 'Explain Newton’s third law.' },
    { id: 3, title: 'Difference between mitosis and meiosis?' },
    { id: 4, title: 'What is the capital of Japan?' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ASK QUESTION</Text>
      </View>

      {/* Question List */}
      <View style={styles.listBox}>
        {questions.map((q) => (
          <View key={q.id} style={styles.questionItem}>
            <Text style={styles.questionText}>{q.title}</Text>
          </View>
        ))}
      </View>

      {/* Floating + Button */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddQuestion')}
      >
        <FontAwesome5 name="plus" size={22} color="#fff" />
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', alignItems: 'center', height:'100%'  },
  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold',marginTop:40 },
  listBox: { width: '85%', marginTop: 25 },
  questionItem: {
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#003366',
  },
  questionText: { color: '#003366', fontSize: 15, fontWeight: '600' },
  addButton: {
    position: 'absolute',
    bottom: 5,
    right: 25,
    backgroundColor: '#003366',
    width: 55,
    height: 55,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});
