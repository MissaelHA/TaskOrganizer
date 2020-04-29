import React, { Component } from 'react';
import { Text, Button, TextInput } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import LogoutButton from '../../Components/LogoutButton';

export default class Create extends Component
{
  static navigationOptions = ({navigation}) => {
    return {
      title: "Tareas",
      headerRight: LogoutButton(navigation),
    };
  };

  state = {
    task: {
      state: 'Empezando'
    },
    expanded: false
  };

  render() {
    return (
      <ScrollView style={styles.page}>
        <Text style={{fontSize: 40, color: 'white', marginBottom: 15}}>Nueva tarea</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={{marginBottom: 15}}
          mode="outlined"
          placeholder="Tarea 1"
        />

        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={{marginBottom: 15}}
          multiline
          numberOfLines={6}
          mode="outlined"
          placeholder="Tarea 1 de la escula"
        />

        <Text style={styles.label}>Fecha de finalización</Text>
        <TextInput
          style={{marginBottom: 15}}
          mode="outlined"
          placeholder="00/00/0000 - 00:00"
        />

        <Text style={styles.label}>Agregar estados</Text>
        <TextInput
          style={{marginBottom: 15}}
          mode="outlined"
          placeholder="Estado"
        />

        {/* {this.state.addButtonAvailable &&
          <TextInput
            style={{marginBottom: 15}}
            mode="outlined"
            placeholder="Estado"
          />
        } */}

        <Button
          mode="contained"
          color="#7B8D93"
          dark
          style={{borderRadius: 0, marginBottom: 15}}
          onPress={() => this.props.navigation.goBack()}
        >
          Crear tarea
        </Button>
      </ScrollView>
    )
  }

  changeState(state) {
    this.setState({task: {state: state}});
    this.setState({expanded: false});
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#4D4365',
    height: '100%',
    padding: 10
  },
  label: {
    fontSize: 25,
    color: "white"
  }
});