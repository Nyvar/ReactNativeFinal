// AttendanceScreen.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

type Student = {
  id: number;
  name: string;
  attend: boolean;
  absence: boolean;
};



export default function AttendanceScreen() {
    const [saved, setSaved] = useState(false);

    const [students, setStudents] = useState<Student[]>([
        { id: 1, name: 'John', attend: false, absence: false },
        { id: 2, name: 'Mary', attend: false, absence: false },
        { id: 3, name: 'David', attend: false, absence: false },
        { id: 4, name: 'Sophia', attend: false, absence: false },
        { id: 5, name: 'Michael', attend: false, absence: false },
    ]);
    
    const toggleAttend = (id: number) => {
        setStudents((prev) =>
            prev.map((s) =>
                s.id === id ? { ...s, attend: !s.attend, absence: false } : s
    )
);
};

const handleSave = () => {
  setSaved(true);
};


  const toggleAbsence = (id: number) => {
    setStudents((prev) =>
      prev.map((s) =>
        s.id === id ? { ...s, absence: !s.absence, attend: false } : s
      )
    );
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Attendance</Text>
        <Text style={styles.headerSubtitle}>Total: {students.length}</Text>
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={[styles.tableText, styles.colName]}>Students</Text>
        <Text style={[styles.tableText, styles.colAttend]}>Attend</Text>
        <Text style={[styles.tableText, styles.colAbsence]}>Absence</Text>
      </View>

      {/* Table Rows */}
      {students.map((student) => (
        <View key={student.id} style={styles.tableRow}>
          <Text style={[styles.tableText, styles.colName]}>{student.name}</Text>

          <TouchableOpacity
            style={[
              styles.checkbox,
              student.attend && styles.checkboxActiveAttend,
              
            ]}
            onPress={() => toggleAttend(student.id)}
          >
            {student.attend && <Text style={styles.checkmark}>✓</Text>}
          </TouchableOpacity>

          <TouchableOpacity
            style={[
              styles.checkbox,
              student.absence && styles.checkboxActiveAbsence,
            ]}
            onPress={() => toggleAbsence(student.id)}
          >
            {student.absence && <Text style={styles.checkmark}>✗</Text>}
          </TouchableOpacity>
        </View>
      ))}
      {/* Save Button */}
<TouchableOpacity style={styles.saveButton} onPress={handleSave}>
  <Text style={styles.saveButtonText}>Save</Text>
</TouchableOpacity>

{/* Success Message */}
{saved && <Text style={styles.success}>Attendance saved successfully.</Text>}

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    // paddingBottom: 40,
    height:100,
  },
  saveButton: {
  backgroundColor: '#003366',
  width: '85%',
  borderRadius: 8,
  paddingVertical: 12,
  alignItems: 'center',
  marginTop: 20,
  alignSelf: 'center',
},
saveButtonText: {
  color: '#fff',
  fontSize: 16,
  fontWeight: 'bold',
},
success: {
  color: '#00BFA6',
  fontSize: 14,
  marginTop: 10,
  fontWeight: '600',
  textAlign: 'center',
},

  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop:40,
  },
  headerSubtitle: {
    color: '#fff',
    fontSize: 16,
    marginTop: 5,
  },
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
  tableText: {
    fontSize: 15,
    color: '#003366',
    fontWeight: '600',
  },
  colName: { flex: 2 },
  colAttend: { flex: 1, textAlign: 'center' },
  colAbsence: { flex: 1, textAlign: 'center' },
  checkbox: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 5,
    marginRight:50,
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  checkboxActiveAttend: {
    backgroundColor: '#00BFA6',
  },
  checkboxActiveAbsence: {
    backgroundColor: '#FF5252',
  },
  checkmark: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
