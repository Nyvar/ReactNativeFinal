import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

export default function StudentProfileScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>PROFILE</Text>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/cat.png')}
          style={styles.profileImage}
        />

        <Text style={styles.infoText}>ID: 169653</Text>
        <Text style={styles.infoText}>Full Name: PikaPikaChu</Text>
        <Text style={styles.infoText}>CX ID: 9 12</Text>
        <Text style={styles.infoText}>Points: 21</Text>
        <Text style={styles.infoText}>Address:Cambodia</Text>
        <Text style={styles.infoText}>Guardian Name:MaMa</Text>
        <Text style={styles.infoText}>Guardian Contact: 1344004</Text>

        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editText}>Request Edit</Text>
        </TouchableOpacity>
      </View>
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
  headerTitle: { color: '#fff', fontSize: 20, fontWeight: 'bold' ,marginTop:40},
  card: {
    width: '85%',
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    padding: 20,
    marginTop: 25,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#003366',
  },
  profileImage: {
    width: 90,
    height: 90,
    borderRadius: 45,
    marginBottom: 15,
    borderWidth: 2,
    borderColor: '#003366',
  },
  infoText: { color: '#003366', fontSize: 15, fontWeight: '600', marginVertical: 3 },
  editButton: {
    backgroundColor: '#003366',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 25,
    marginTop: 20,
  },
  editText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});
