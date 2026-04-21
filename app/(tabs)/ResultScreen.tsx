import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function StudentResultScreen() {
  const [downloaded, setDownloaded] = useState(false);

  const handleDownload = () => {
    setDownloaded(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>RESULT</Text>
      </View>

      {/* First Terminal Result */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>First Terminal</Text>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Second Terminal Result */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Second Terminal</Text>
        <TouchableOpacity style={styles.viewButton}>
          <Text style={styles.viewText}>View</Text>
        </TouchableOpacity>
      </View>

      {/* Download Button */}
      <TouchableOpacity style={styles.downloadButton} onPress={handleDownload}>
        <Text style={styles.downloadText}>Download your result</Text>
      </TouchableOpacity>

      {/* Success Message */}
      {downloaded && (
        <Text style={styles.success}>Result downloaded successfully.</Text>
      )}
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
  card: {
    width: '85%',
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 10,
    padding: 15,
    marginTop: 25,
    backgroundColor: '#E3F2FD',
  },
  cardTitle: { fontSize: 16, fontWeight: 'bold', color: '#003366' },
  viewButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#003366',
    borderRadius: 6,
    paddingVertical: 6,
    paddingHorizontal: 15,
    marginTop: 10,
  },
  viewText: { color: '#fff', fontSize: 14, fontWeight: '600' },
  downloadButton: {
    backgroundColor: '#003366',
    width: '85%',
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: 'center',
    marginTop: 30,
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
