import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { IconSymbol } from '@/components/ui/icon-symbol';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="LoadingScreen"
        options={{
          title: 'loading',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="HomeScreen"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="LoginScreen"
        options={{
          title: 'Login',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
    <Tabs.Screen
        name="TeacherDashboard"
        options={{
          title: 'Teacher',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="AddAccount"
        options={{
          title: 'addAccount',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="HomeworkScreen"
        options={{
          title: 'asignHomework',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}
      />
      <Tabs.Screen
        name="AttendanceScreen"
        options={{
          title: 'Attendance',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="AddMarkScreem"
        options={{
          title: 'addMark',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="ForumEvents"
        options={{
          title: 'event',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="Solutions"
        options={{
          title: 'solution',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="StudentDashboard"
        options={{
          title: 'studnet',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="HomeworkStudentScreen"
        options={{
          title: 'homework',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="ResultScreen"
        options={{
          title: 'resultStudent',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="DetailResultScreen"
        options={{
          title: 'detailresult',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="ListQuestionScreen"
        options={{
          title: 'listquestion',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="AddQuestion"
        options={{
          title: 'addquestion',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="StartQuizScreen"
        options={{
          title: 'startQuiz',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="QuizQuestion"
        options={{
          title: 'quiz',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="QuizScore"
        options={{
          title: 'scoreQuiz',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="SumerizeQuiz"
        options={{
          title: 'sumerizeQuiz',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
        <Tabs.Screen
        name="ProfileScreen"
        options={{
          title: 'profile',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="paperplane.fill" color={color} />,
        }}/>
    </Tabs>
  );
}
