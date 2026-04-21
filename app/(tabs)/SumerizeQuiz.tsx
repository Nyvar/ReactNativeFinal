import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function StudentQuizSummaryScreen() {
  const quizSummary = [
    { id: 1, question: 'Who is first king of Nepal?', answer: 'King Prithvi Narayan Shah', correct: true },
    { id: 2, question: 'Who is last king of Nepal?', answer: 'King Gyanendra Shah', correct: true },
    { id: 3, question: 'What is first king of Nepal?', answer: 'King Tribhuwan Shah', correct: false },
    { id: 4, question: 'Who is first king of Nepal?', answer: 'King Prithvi Narayan Shah', correct: true },
  ];

  const totalQuestions = quizSummary.length;
  const score = quizSummary.filter(q => q.correct).length;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>QUIZ SUMMARY</Text>
      </View>

      {/* Summary Box */}
      <View style={styles.summaryBox}>
        <Text style={styles.summaryText}>Score: {score}</Text>
        <Text style={styles.summaryText}>Total: {totalQuestions}</Text>
      </View>

      {/* Question List */}
      <View style={styles.listBox}>
        {quizSummary.map((item) => (
          <View key={item.id} style={styles.questionCard}>
            <Text style={styles.questionText}>{item.question}</Text>
            <Text style={styles.answerText}>Your Answer: {item.answer}</Text>
            <Text
              style={[
                styles.resultText,
                { color: item.correct ? '#00BFA6' : '#FF3D00' },
              ]}
            >
              {item.correct ? 'Correct' : 'Incorrect'}
            </Text>
          </View>
        ))}
      </View>

      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton}>
        <Text style={styles.downloadText}>Download Result</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', alignItems: 'center', height:'100%' },
  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold',marginTop:40 },
  summaryBox: {
    width: '85%',
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    padding: 15,
    marginTop: 25,
    alignItems: 'center',
  },
  summaryText: { color: '#003366', fontSize: 16, fontWeight: 'bold' },
  listBox: { width: '85%', marginTop: 25 },
  questionCard: {
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#003366',
  },
  questionText: { color: '#003366', fontSize: 15, fontWeight: 'bold' },
  answerText: { color: '#003366', fontSize: 14, marginTop: 5 },
  resultText: { fontSize: 14, fontWeight: 'bold', marginTop: 5 },
  downloadButton: {
    backgroundColor: '#003366',
    width: '85%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 25,
  },
  downloadText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
