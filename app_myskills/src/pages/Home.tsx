import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';
import { Button } from '../components/Button';
import { SkillCard } from '../components/SkillCard';

interface SkillData {
  id: string;
  name: string;
}

export function Home() {
  // newSkill = state, setNewSkill = function to update this state
  // we cant modify a state directly, we have to call a function to modify this state
  // so we cant do it: newSkill = fly
  // we have to it: setNewSkill('fly');

  //in this case we use it on onChangeText, every time we have some modify at the
  //inputText, this function setNewSkill is called and update the state newSkill

  //between the parentheses we can set an initial state
  const [newSkill, setNewSkill] = useState('');
  const [mySkills, setMySkills] = useState<SkillData[]>([]);
  const [greeting, setGreeting] = useState('');

  //we use the prefix handle when the function is called by an user
  //ex: when an user press some button, the system has to add something and show at the screen

  //setMySkills receive an array with all old proprieties and add a new skill at this array
  function handleAddNewSkill() {
    const data = {
      id: String(new Date().getTime()),
      name: newSkill
    }

    setMySkills(oldState => [...oldState, data]);
  }

  function handleRemoveSkill(id: string) {
    setMySkills(oldState => oldState.filter(
      skill => skill.id !== id
    ));
  }

  //The useEffect has action in the moment of mount the component to show something on screen
  //it receive 2 params. 1st - function | 2nd - dependency array
  //When any dependency in this array change, the useEffect will be called
  //if we dont put any dependency, the useEffect will be called at moment to mount the component on screen
  //it will be load one time, when the page were loading.
  useEffect(() => {
    const currentHour = new Date().getHours();

    if(currentHour < 12) {
      setGreeting('Good morning!')
    }
    else if (currentHour >= 12 && currentHour < 18) {
      setGreeting('Good afternoon!')
    } else {
      setGreeting('Good evening!')
    }
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Welcome, Miranda.</Text>

      <Text style={styles.greetings}>
        { greeting }
      </Text>

      <TextInput
        style={styles.input}
        placeholder='New skill'
        placeholderTextColor='#555'
        onChangeText={setNewSkill}
      />

      <Button
        title='Add'
        onPress={handleAddNewSkill}
      />

      <Text style={[styles.title, { marginVertical: 50 }]}>
        My Skills
      </Text>

      <FlatList
        data={mySkills}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <SkillCard
            skill={item.name}
            onPress={() => handleRemoveSkill(item.id)}
          />
        )}
      />

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingHorizontal: 30,
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
  greetings: {
    color: '#fff'
  }
})
