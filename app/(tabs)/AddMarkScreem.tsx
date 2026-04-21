import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

export default function AddMarksScreen() {
  const [students, setStudents] = useState([
    { id: 1, name: 'John', mark: '' },
    { id: 2, name: 'Mary', mark: '' },
    { id: 3, name: 'David', mark: '' },
    { id: 4, name: 'Sophia', mark: '' },
  ]);
  const [saved, setSaved] = useState(false);

  const handleMarkChange = (id: number, value: string) => {
    setStudents(prev => prev.map(s => (s.id === id ? { ...s, mark: value } : s)));
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Add Marks</Text>
        <Text style={styles.headerSubtitle}>Total: {students.length}</Text>
      </View>

      <View style={styles.tableHeader}>
        <Text style={[styles.tableText, styles.colWork]}>Work</Text>
        <Text style={[styles.tableText, styles.colMark]}>Mark</Text>
      </View>

      {students.map(student => (
        <View key={student.id} style={styles.tableRow}>
          <Text style={[styles.tableText, styles.colWork]}>{student.name}</Text>
          <TextInput
            style={[styles.input, styles.colMark]}
            value={student.mark}
            onChangeText={value => handleMarkChange(student.id, value)}
            placeholder="Enter mark"
            placeholderTextColor="#003366"
            keyboardType="numeric"
          />
        </View>
      ))}

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.subjectButton}>
          <Text style={styles.buttonText}>Save</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.closeButton}>
          <Text style={styles.buttonText}>Close</Text>
        </TouchableOpacity>
      </View>

      {saved && <Text style={styles.success}>Marks saved successfully.</Text>}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', paddingBottom: 40 },
  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { color: '#fff', fontSize: 22, fontWeight: 'bold',marginTop:40 },
  headerSubtitle: { color: '#fff', fontSize: 16, marginTop: 5 },
  tableHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginTop: 20,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    marginVertical: 10,
    alignItems: 'center',
  },
  tableText: { fontSize: 15, color: '#003366', fontWeight: '600' },
  colWork: { flex: 2 },
  colMark: { flex: 1 },
  input: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 5,
    color: '#003366',
    textAlign: 'center',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  subjectButton: {
    backgroundColor: '#003366',
    borderRadius: 8,
    paddingVertical: 12,
    width: '40%',
    alignItems: 'center',
  },
  closeButton: {
    backgroundColor: '#00BFA6',
    borderRadius: 8,
    paddingVertical: 12,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  success: {
    color: '#00BFA6',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});
