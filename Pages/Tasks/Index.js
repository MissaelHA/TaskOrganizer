import React, { Component } from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { IconButton, Button } from 'react-native-paper';
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

        <View
          style={styles.inline}
        >
          <View style={[styles.itemHolder, {width: '20%'}]}>
            <IconButton
              icon="plus"
              color="white"
              style={{ backgroundColor: "#7B8D93", margin: 0}}
              size={30}
              onPress={() => this.props.navigation.navigate("Create")}
            />
          </View>
          <View style={[styles.itemHolder, {width: '80%'}]}>
            <Button
              mode="contained"
              color="#7B8D93"
              compact dark
              onPress={() => this.props.navigation.navigate("Create")}
            >
              Agregar tarea
            </Button>
          </View>
        </View>

        <ScrollView>
          {
            tasks.map((task, i) => {
              return <TaskPreview
                task={task}
                navigation={this.props.navigation}
                key={i}
              />
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
  inline: {
    flex: 1,
    flexDirection: 'row',
    width: '100%'
  },
  itemHolder: {
    alignContent: 'center',
    justifyContent: 'center'
  }
});