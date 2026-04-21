import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { RootStackParamList } from '../types/RootStackParamList';

import LoadingScreen from '../(tabs)/LoadingScreen'; 
// import AddAccountb from '../(tabs)/AddAccount';
import HomeScreen from '../(tabs)/HomeScreen';
// import other screens...
import StudentQuestionListScreen from '../(tabs)/ListQuestionScreen';
import AddQuestionScreen from '../(tabs)/AddQuestion';
import StartQuizScreen from '../(tabs)/StartQuizScreen';
import QuizQuestionScreen from '../(tabs)/QuizQuestion';
import QuizScoreScreen from '../(tabs)/QuizScore';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Loading">
      <Stack.Screen name="Loading" component={LoadingScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
      {/* <Stack.Screen name="Home" component={AddAccount} /> */}
      {/* <Stack.Screen name="Home" component={HomeScreen} /> */}
      <Stack.Screen name="StudentQuestionList" component={StudentQuestionListScreen} />
      <Stack.Screen name="AddQuestion" component={AddQuestionScreen} />
      <Stack.Screen name="StartQuiz" component={StartQuizScreen} />
      <Stack.Screen name="QuizQuestion" component={QuizQuestionScreen} />
      <Stack.Screen name="QuizScore" component={QuizScoreScreen} />


</Stack.Navigator>

    </NavigationContainer>
  );
}
