// LoginScreen.tsx
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';

type Props = NativeStackScreenProps<RootStackParamList, 'Login'>;

export default function LoginScreen({ navigation }: Props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      {/* Top curved header */}
      <View style={styles.topShape}>
        <View style={styles.iconWrapper}>
          <Image
            source={require('../../assets/images/education.png')} // export from Figma
            style={styles.icon}
            resizeMode="contain"
          />
          <Text style={styles.title}>EDUCATION</Text>
        </View>
      </View>

      {/* Input fields */}
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={setPassword}
        />

        {/* Sign In button */}
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('TeacherDashboard')} // or StudentDashboard
        >
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>

        {/* Forgot password link */}
        <TouchableOpacity onPress={() => alert('Forgot password flow')}>
          <Text style={styles.link}>Forgot password?</Text>
        </TouchableOpacity>
      </View>

      {/* Bottom curved footer */}
      <View style={styles.bottomShape} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', justifyContent: 'space-between' },

  topShape: {
    height: 200,
    backgroundColor: '#4CAF50', // bright green
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },

  iconWrapper: { alignItems: 'center' },
  icon: { width: 80, height: 80, marginBottom: 10 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#003366' },

  form: { flex: 1, justifyContent: 'center', alignItems: 'center', paddingHorizontal: 20 },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#f9f9f9',
  },

  button: {
    width: '100%',
    padding: 15,
    backgroundColor: '#000', // black button
    borderRadius: 8,
    marginTop: 10,
  },
  buttonText: { color: '#fff', textAlign: 'center', fontWeight: 'bold', fontSize: 16 },

  link: { marginTop: 15, color: '#007AFF', fontSize: 14 },

  bottomShape: {
    height: 150,
    backgroundColor: '#003366', // dark blue
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
});
