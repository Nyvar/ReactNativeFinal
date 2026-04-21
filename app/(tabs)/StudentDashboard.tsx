// StudentScreen.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { FontAwesome5, MaterialIcons } from '@expo/vector-icons';



export default function StudentScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top circular icon */}
      <View style={styles.topShape}>
        <View style={styles.circle}>
          <Image
            source={require('../../assets/images/cat.png')}
            style={styles.icon}
          />
        </View>
      </View>

      {/* Welcome box */}
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeTitle}>Welcome Student</Text>
        <Text style={styles.welcomeText}>
          Hi John, welcome back! You have 4 homework assignments, 2 exams, and 1 announcement pending.
        </Text>
      </View>

      {/* Feature grid */}
<View style={styles.iconGrid}>
<View style={styles.card}>
  <FontAwesome5 name="user-check" size={40} color="#003366" />
  <Text style={styles.cardLabel}>Attendance</Text>
</View>

<View style={styles.card}>
  <MaterialIcons name="assignment" size={40} color="#003366" />
  <Text style={styles.cardLabel}>Homework</Text>
</View>

<View style={styles.card}>
  <FontAwesome5 name="chart-bar" size={40} color="#003366" />
  <Text style={styles.cardLabel}>Result</Text>
</View>

<View style={styles.card}>
  <FontAwesome5 name="calendar-alt" size={40} color="#003366" />
  <Text style={styles.cardLabel}>Exam Routine</Text>
</View>

<View style={styles.card}>
  <FontAwesome5 name="book-open" size={40} color="#003366" />
  <Text style={styles.cardLabel}>Lesson</Text>
</View>

<View style={styles.card}>
  <FontAwesome5 name="question-circle" size={40} color="#003366" />
  <Text style={styles.cardLabel}>Quiz</Text>
</View></View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    height:'100%',
  },
  topShape: {
    width: '100%',
    height: 180,
    backgroundColor: '#003366',
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
  icon: {
    width: 60,
    height: 60,
    tintColor: '#003366',
  },
  welcomeBox: {
    backgroundColor: '#E8F5E9',
    width: '85%',
    borderRadius: 12,
    padding: 15,
    marginTop: 20,
  },
  welcomeTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#003366',
    marginBottom: 5,
  },
  welcomeText: {
    fontSize: 14,
    color: '#003366',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    width: '85%',
    marginTop: 25,
  },
  card: {
    width: '30%',
    aspectRatio: 1,
    backgroundColor: '#E3F2FD',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
    elevation: 3,
  },
  cardIcon: {
    width: 40,
    height: 40,
    tintColor: '#003366',
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#003366',
  },
   iconGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginTop: 20,
  },
});
