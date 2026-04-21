// TeacherDashboard.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/RootStackParamList';
import { MaterialIcons, FontAwesome5 } from '@expo/vector-icons';


type Props = NativeStackScreenProps<RootStackParamList, 'TeacherDashboard'>;

export default function TeacherDashboard({ navigation }: Props) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top curved header */}
      <View style={styles.topShape}>
        <Image
          source={require('../../assets/images/education.png')} // your logo (graduation cap + book)
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Welcome message box */}
      <View style={styles.messageBox}>
        <Text style={styles.messageTitle}>Welcome Message 😊</Text>
        <Text style={styles.messageText}>
          Hi John, welcome back! You have 4 homework assignments, 2 exams, and 1 announcement pending.
        </Text>
      </View>

<View style={styles.iconGrid}>
      <View style={styles.iconCard}>
        <MaterialIcons name="assignment" size={40} color="#003366" />
        <Text style={styles.iconLabel}>Homework</Text>
      </View>

      <View style={styles.iconCard}>
        <FontAwesome5 name="bullhorn" size={40} color="#003366" />
        <Text style={styles.iconLabel}>Announcements</Text>
      </View>

      <View style={styles.iconCard}>
        <MaterialIcons name="email" size={40} color="#003366" />
        <Text style={styles.iconLabel}>Emails</Text>
      </View>

      <View style={styles.iconCard}>
        <FontAwesome5 name="calendar-alt" size={40} color="#003366" />
        <Text style={styles.iconLabel}>Exam Routine</Text>
      </View>

      <View style={styles.iconCard}>
        <FontAwesome5 name="coins" size={40} color="#003366" />
        <Text style={styles.iconLabel}>Tuition</Text>
      </View>

      <View style={styles.iconCard}>
        <FontAwesome5 name="book-open" size={40} color="#003366" />
        <Text style={styles.iconLabel}>Khatta/Diary</Text>
      </View>

      <View style={styles.iconCard}>
        <FontAwesome5 name="user-plus" size={40} color="#003366" />
        <Text style={styles.iconLabel}>Add Account</Text>
      </View>
</View>
<View style={styles.bottomShape} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#fff', alignItems: 'center', paddingBottom: 40 },
  topShape: {
    width: '100%',
    height: 180,
    backgroundColor: '#00BFA6',
    borderBottomLeftRadius: 100,
    borderBottomRightRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: { width: 100, height: 100 },
  messageBox: {
    backgroundColor: '#E3F2FD',
    width: '85%',
    borderRadius: 10,
    padding: 15,
    marginTop: 20,
  },
  messageTitle: { fontSize: 18, fontWeight: 'bold', color: '#003366', marginBottom: 5 },
  messageText: { fontSize: 14, color: '#003366' },
  iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
  iconCard: {
    width: 100,
    height: 100,
    backgroundColor: '#E8F5E9',
    borderRadius: 10,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 3,
  },
    bottomShape: {
    height: 150,
    backgroundColor: '#003366', 
    borderTopLeftRadius: 100,
    borderTopRightRadius: 100,
  },
  icon: { width: 40, height: 40, marginBottom: 5 },
  iconLabel: { fontSize: 13, color: '#003366', fontWeight: '600' },
  loginText: { color: '#003366', fontSize: 16, marginTop: 20, fontWeight: 'bold' },
});
