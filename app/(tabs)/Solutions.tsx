import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function SolutionsScreen() {
  const [solution, setSolution] = useState('');
  const [sent, setSent] = useState(false);

  const handleSend = () => setSent(true);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>SOLUTIONS</Text>
      </View>

      <Text style={styles.question}>Question #1</Text>
      <Text style={styles.placeholder}>Write your solution below:</Text>

      <TextInput
        style={styles.textBox}
        placeholder="Enter details"
        placeholderTextColor="#003366"
        multiline
        value={solution}
        onChangeText={setSolution}
      />

      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendText}>Send</Text>
      </TouchableOpacity>

      {sent && <Text style={styles.success}>Solution submitted successfully.</Text>}
    </View>
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
 sendText: {
    
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
success: {
  color: '#00BFA6',
  fontSize: 14,
  marginTop: 10,
  fontWeight: '600',}
,

  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold', marginTop:40 },
  question: { fontSize: 16, color: '#003366', marginTop: 20, fontWeight: '600' },
  placeholder: { fontSize: 14, color: '#003366', marginBottom: 10 },
  textBox: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    width: '85%',
    height: 150,
    padding: 10,
    color: '#003366',
    textAlignVertical: 'top',
  },
  sendButton: {
    backgroundColor: '#003366',
    width: '85%',
    borderRadius: 8,
    marginTop:20,
    justifyContent:'center',
    alignItems:'center',
  }});