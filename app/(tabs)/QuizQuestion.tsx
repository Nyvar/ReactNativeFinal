import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function QuizQuestionScreen() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState<string | null>(null);

  const handleAnswer = (option: string) => {
    setSelected(option);
    navigation.navigate('QuizScore');
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ASK QUESTION</Text>
      </View>

      {/* Question */}
      <Text style={styles.questionText}>This is Quiz/Interview Question?</Text>

      {/* Options */}
      {['Option1', 'Option2', 'realname', 'realname'].map((option, index) => (
        <TouchableOpacity
          key={index}
          style={[
            styles.optionButton,
            selected === option && { backgroundColor: '#003366' },
          ]}
          onPress={() => handleAnswer(option)}
        >
          <Text
            style={[
              styles.optionText,
              selected === option && { color: '#fff' },
            ]}
          >
            {option}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', flex: 1, alignItems: 'center', height:'100%'  },
  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' ,marginTop:40},
  questionText: {
    color: '#003366',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 40,
    marginBottom: 20,
  },
  optionButton: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  optionText: { color: '#003366', fontSize: 15, fontWeight: '600' },
});
