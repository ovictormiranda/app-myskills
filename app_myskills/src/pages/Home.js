import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

export function Home() {
  // newSkill = state, setNewSkill = function to update this state
  // we cant modify a state directly, we have to call a function to modify this state
  // so we cant do it: newSkill = fly
  // we have to it: setNewSkill('fly');

  //in this case we use it on onChangeText, every time we have some modify at the
  //inputText, this function setNewSkill is called and update the state newSkill

  //between the parentheses we can set an initial state
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState([]);

  //we use the prefix handle when the function is actioned by an user
  //ex: when an user press some button, the system has to add something and show at the screen

  //setMySkills receive an array with all old proprieties and add a new skill at this array
  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkill]);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Miranda.</Text>

      <TextInput
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button onPress={handleAddNewSkill}/>

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      {
        mySkills.map(skill => (
          <SkillCard skill={skill}/>
        ))
      }
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 20,
    paddingVertical: 70
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  input: {
    backgroundColor: '#1f1e25',
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 10,
    marginTop: 30,
    borderRadius: 7
  },
})
