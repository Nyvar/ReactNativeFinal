// AddAccount.tsx
import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function AddAccount() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top curved header */}
      <View style={styles.topShape}>
        <View style={styles.circle}>
          <Text style={styles.plus}>+</Text>
          <Text style={styles.title}>Add Account</Text>
        </View>
      </View>

      {/* Form fields */}
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput style={styles.input} placeholder="Enter Something..." placeholderTextColor="#003366" />

        <Text style={styles.label}>Email</Text>
        <TextInput style={styles.input} placeholder="Enter Something..." placeholderTextColor="#003366" keyboardType="email-address" />

        <Text style={styles.label}>Phone</Text>
        <TextInput style={styles.input} placeholder="Enter Something..." placeholderTextColor="#003366" keyboardType="phone-pad" />

        <Text style={styles.label}>Phone Number</Text>
        <TextInput style={styles.input} placeholder="Enter Something..." placeholderTextColor="#003366" keyboardType="phone-pad" />

        <Text style={styles.label}>Date of Birth</Text>
        <TextInput style={styles.input} placeholder="Enter Something..." placeholderTextColor="#003366" />

        <Text style={styles.label}>Occupation</Text>
        <TextInput style={styles.input} placeholder="Enter Something..." placeholderTextColor="#003366" />
      </View>

      {/* Submit button */}

        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Add to contact</Text>
        </TouchableOpacity>
      <View style={styles.bottomShape}>
      </View>
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingBottom: 40,
  },
  topShape: {
    width: '100%',
    height: 180,
    backgroundColor: '#00BFA6',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    width: 120,
    height: 120,
    backgroundColor: '#fff',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
  plus: {
    fontSize: 40,
    color: '#00BFA6',
    fontWeight: 'bold',
    marginBottom: 5,
  },
  title: {
    color: '#00BFA6',
    fontSize: 16,
    fontWeight: 'bold',
  },
  form: {
    width: '85%',
    marginTop: 30,
  },
  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#003366',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 15,
    color: '#003366',
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
  bottomShape: {
    height: 150,
    backgroundColor: '#003366', // dark blue
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
