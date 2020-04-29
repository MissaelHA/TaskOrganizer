import React, { Component } from 'react';
import { ScrollView, View, Text, StyleSheet } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';
import LogoutButton from '../Components/LogoutButton';

export default class Records extends Component
{
  static navigationOptions = ({navigation}) => {
    return {
      title: "Tareas",
      headerRight: LogoutButton(navigation),
    };
  };

  render() {
    return (
      <ScrollView style={styles.page}>
        <Text style={{color: "white", fontSize: 24, marginBottom: 15}}>Bitacora: "Hacer la tarea"</Text>

        <Text style={styles.label}>Crear entrada</Text>
        <Card style={{marginBottom: 15, borderRadius: 0}}>
          <TextInput multiline />
        </Card>
        <Button
          mode="contained"
          color="#7B8D93"
          dark
          style={{borderRadius: 0, marginBottom: 15}}
          onPress={() => alert("Agregar entrada")}
        >
          Agregar entrada
        </Button>

        <Text style={styles.label}>Entradas</Text>
        { this.entry({}) }
        { this.stateChange() }
      </ScrollView>
    )
  }

  entry(entry) {
    return (
      <View style={{marginBottom: 15}}>
        <Text style={{color: "white", fontSize: 14}}>20/02/2020 - 13:23</Text>
        <Card style={{borderRadius: 0, padding: 10}}>
          <Text style={{fontSize: 15}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Card>
      </View>
    );
  }

  stateChange(state) {
    return (
      <View style={{marginBottom: 15}}>
        <Text style={{color: "white", fontSize: 14}}>20/02/2020 - 13:25</Text>
        <Card style={{backgroundColor: "#131313", borderRadius: 0, padding: 10}}>
          <Text style={{fontSize: 15}}>
            <Text style={{color: "white"}}>El estado de la tarea cambio de </Text>
            <Text style={{color: "#A1A1A1"}}>"Creado" </Text>
            <Text style={{color: "white"}}>a </Text>
            <Text style={{color: "#A1A1A1"}}>"Empezando"</Text>
          </Text>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#4D4365',
    height: '100%',
    padding: 15,
  },
  label: {
    fontSize: 17,
    color: "white"
  }
});