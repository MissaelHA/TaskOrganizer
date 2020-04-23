import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import Profile from '../../Components/Profile';
import TaskPreview from '../../Components/TaskPreview';
import LogoutButton from '../../Components/LogoutButton';

export default class Index extends Component
{
  static navigationOptions = ({navigation}) => {
    return {
      title: "Tareas",
      headerRight: LogoutButton(navigation),
    };
  };

  render() {
    return (
      <View style={styles.page}>
        <Profile />
        <ScrollView>
          {
            tasks.map((task, i) => {
              return <TaskPreview task={task} key={i} />
            })
          }
        </ScrollView>
      </View>
    );
  }
}

// Temporal
const tasks = [
  {
    title: 'Terminar el maquetado en Expo',
    finished: false,
  },
  {
    title: 'Tarea de simulacion',
    finished: false,
  },
  {
    title: 'Mas tarea',
    finished: false,
  },
  {
    title: 'Aun mas tarea',
    finished: false,
  },
  {
    title: 'Aprender a tocar la guitarra',
    finished: false,
  },
  {
    title: 'Primera entrega de avance',
    finished: true,
  },
];

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#4D4365',
    height: '100%',
    padding: 15,
  },
});