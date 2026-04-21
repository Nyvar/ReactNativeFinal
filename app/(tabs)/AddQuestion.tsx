import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function AddQuestionScreen() {
  const [question, setQuestion] = useState('');

  const handleSubmit = () => {
    if (question.trim() === '') return;
    alert('Question submitted successfully!');
    setQuestion('');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>ADD QUESTION</Text>
      </View>

      {/* Input Box */}
      <View style={styles.inputBox}>
        <Text style={styles.label}>Enter your question:</Text>
        <TextInput
          style={styles.textInput}
          placeholder="Type your question here..."
          placeholderTextColor="#003366"
          multiline
          value={question}
          onChangeText={setQuestion}
        />
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>Send</Text>
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
  inputBox: { width: '85%', marginTop: 30 },
  label: { color: '#003366', fontSize: 16, fontWeight: 'bold', marginBottom: 10 },
  textInput: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 10,
    padding: 15,
    backgroundColor: '#E3F2FD',
    color: '#003366',
    fontSize: 15,
    textAlignVertical: 'top',
    height: 150,
  },
  submitButton: {
    backgroundColor: '#003366',
    width: '85%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 25,
  },
  submitText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
