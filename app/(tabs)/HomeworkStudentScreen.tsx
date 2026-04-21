import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function StudentHomeworkScreen() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>HOMEWORK</Text>
      </View>

      {/* Homework Info */}
      <View style={styles.section}>
        <Text style={styles.label}>Main_2021/22 homework for term:</Text>
        <View style={styles.fileBox}>
          <Text style={styles.fileName}>sum_2024.txt homework file sum</Text>
        </View>
      </View>

      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Text style={styles.downloadText}>Download your homework</Text>
      </TouchableOpacity>

      {/* Success Message */}
      {downloaded && (
        <Text style={styles.success}>Homework downloaded successfully.</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', alignItems: 'center', paddingBottom: 40,height:'100%', },
  header: {
    width: '100%',
    backgroundColor: '#003366',
    paddingVertical: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' ,marginTop:40},
  section: { width: '85%', marginTop: 30 },
  label: { fontSize: 15, color: '#003366', fontWeight: '600', marginBottom: 10 },
  fileBox: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    padding: 15,
    backgroundColor: '#E3F2FD',
  },
  fileName: { color: '#003366', fontSize: 14 },
  downloadButton: {
    backgroundColor: '#003366',
    width: '85%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 25,
  },
  downloadText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  success: {
    color: '#00BFA6',
    fontSize: 14,
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
  },
});
