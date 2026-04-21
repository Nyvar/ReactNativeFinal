import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

export default function StudentResultDetailScreen() {
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

      {/* Info Section */}
      <View style={styles.infoBox}>
        <Text style={styles.infoText}>Name: Word</Text>
        <Text style={styles.infoText}>Date: 12/12/21</Text>
      </View>

      {/* Description */}
      <View style={styles.descriptionBox}>
        <Text style={styles.label}>Description:</Text>
        <Text style={styles.description}>
          This beautiful photo shows a bridge illuminated with blue and white,
          showcasing reflections as well as evening lamps or headlights all above
          a shiny night stream.
        </Text>
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
  infoBox: {
    width: '85%',
    marginTop: 25,
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    padding: 15,
  },
  infoText: { color: '#003366', fontSize: 15, fontWeight: '600', marginBottom: 5 },
  descriptionBox: { width: '85%', marginTop: 20 },
  label: { color: '#003366', fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  description: { color: '#003366', fontSize: 15, lineHeight: 22 },
  imageBox: {
    width: '85%',
    height: 180,
    backgroundColor: '#ccc',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  image: { width: '100%', height: '100%' },
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
