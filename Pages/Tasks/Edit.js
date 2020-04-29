import React, { Component } from 'react';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { TextInput, Button, IconButton, Card } from 'react-native-paper';
import LogoutButton from '../../Components/LogoutButton';

export default class Edit extends Component
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
        <Text style={{fontSize: 40, color: 'white', marginBottom: 15}}>Editar: "Hacer la tarea"</Text>

        <Text style={styles.label}>Nombre</Text>
        <TextInput
          style={{marginBottom: 15}}
          mode="outlined"
          placeholder="Tarea 1"
          value="Hacer la tarea"
        />

        <Text style={styles.label}>Descripción</Text>
        <TextInput
          style={{marginBottom: 15}}
          multiline
          numberOfLines={6}
          mode="outlined"
          value="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
        />

        <Text style={styles.label}>Fecha de finalización</Text>
        <TextInput
          style={{marginBottom: 15}}
          mode="outlined"
          placeholder="00/00/0000 - 00:00"
          value="14/03/2020 - 23:59"
        />

        <Text style={styles.label}>Agregar estados</Text>
        <View style={{flexDirection: 'row'}}>
          <Card style={{padding: 10, borderRadius: 0, width: '80%'}}>
            <Text style={{fontSize: 20}}>Empezando</Text>
          </Card>
          <View style={{width: '20%', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton
              icon="delete"
              color="red"
              size={30}
              onPress={() => this.props.navigation.navigate("Eliminar estado")}
            />
          </View>
        </View>

        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <TextInput
            style={{width: '80%'}}
            mode="outlined"
            placeholder="Estado"
          />
          <View style={{width: '20%', justifyContent: 'center', alignItems: 'center'}}>
            <IconButton
              icon="plus"
              color="cyan"
              size={30}
              onPress={() => this.props.navigation.navigate("Eliminar estado")}
            />
          </View>
        </View>

        <Button
          mode="contained"
          color="#7B8D93"
          dark
          style={{borderRadius: 0, marginBottom: 15}}
          onPress={() => this.props.navigation.goBack()}
        >
          Guardar
        </Button>
      </ScrollView>
    )
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