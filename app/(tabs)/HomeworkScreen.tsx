// HomeworkScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function HomeworkScreen() {
  const [subject, setSubject] = useState('Math homework');
  const [grade, setGrade] = useState('');
  const [section, setSection] = useState('');
  const [student, setStudent] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>HOMEWORK</Text>
      </View>

      {/* Description */}
      <Text style={styles.description}>
        You have some unfinished settings. Create the page, submit your assignments, and get your work done.
      </Text>

      {/* Subject Field */}
      <Text style={styles.label}>Subject</Text>
      <TextInput
        style={styles.input}
        value={subject}
        onChangeText={setSubject}
        placeholder="Enter subject..."
        placeholderTextColor="#003366"
      />

      {/* Dropdowns */}
      <View style={styles.dropdownRow}>
        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Grade</Text>
          <Picker
            selectedValue={grade}
            style={styles.picker}
            onValueChange={(itemValue) => setGrade(itemValue)}
          >
            <Picker.Item label="Select Grade" value="" />
            <Picker.Item label="Grade 10" value="10" />
            <Picker.Item label="Grade 11" value="11" />
            <Picker.Item label="Grade 12" value="12" />
          </Picker>
        </View>

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Section</Text>
          <Picker
            selectedValue={section}
            style={styles.picker}
            onValueChange={(itemValue) => setSection(itemValue)}
          >
            <Picker.Item label="Select Section" value="" />
            <Picker.Item label="A" value="A" />
            <Picker.Item label="B" value="B" />
            <Picker.Item label="C" value="C" />
          </Picker>
        </View>

        <View style={styles.dropdownContainer}>
          <Text style={styles.label}>Student</Text>
          <Picker
            selectedValue={student}
            style={styles.picker}
            onValueChange={(itemValue) => setStudent(itemValue)}
          >
            <Picker.Item label="Select Student" value="" />
            <Picker.Item label="John" value="John" />
            <Picker.Item label="Mary" value="Mary" />
            <Picker.Item label="David" value="David" />
          </Picker>
        </View>
      </View>

      {/* Submit Button */}
      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>

      {/* Success Message */}
      {submitted && <Text style={styles.success}>Data uploaded successfully.</Text>}

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Student</Text>
        <Text style={styles.footerText}>Students</Text>
      </View>
       <View style={styles.bottomShape}>
            </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 40,
  },
  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    height: 100,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:35,
  },
  description: {
    color: '#003366',
    fontSize: 14,
    textAlign: 'center',
    marginVertical: 15,
    width: '85%',
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fafafb',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    width: '85%',
    marginBottom: 15,
    color: '#003366',
  },
  dropdownRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '85%',
  },
  dropdownContainer: {
    width: '30%',
    marginBottom: 15,
    backgroundColor:'#003366',
  },
  picker: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    color: '#003366',
  },
   bottomShape: {
    height: 150,
    backgroundColor: '#003366', // dark blue
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  button: {
    backgroundColor: '#003366',
    width: '85%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  success: {
    color: '#00BFA6',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
  },
  footer: {
    backgroundColor: '#003366',
    width: '100%',
    paddingVertical: 15,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:255,
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
