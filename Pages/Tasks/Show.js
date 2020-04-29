import React, { Component } from 'react';
import { Card, Text, Button, List } from 'react-native-paper';
import { ScrollView, StyleSheet } from 'react-native';
import LogoutButton from '../../Components/LogoutButton';

export default class Show extends Component
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
        <Text style={{fontSize: 30, color: 'white', marginBottom: 15}}>Hacer la tarea</Text>

        <Text style={styles.label}>Descripción</Text>
        <Card style={{padding: 10, height: 220, borderRadius: 0}}>
          <ScrollView>
            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
          </ScrollView>
        </Card>
        <Button
          mode="contained"
          color="#7B8D93"
          dark
          style={{borderRadius: 0, marginBottom: 15}}
          onPress={() => this.props.navigation.navigate("Records")}
        >
          Ver bitacora
        </Button>

        <Text style={styles.label}>Estado</Text>
        <Card style={{borderRadius: 0, marginBottom: 15}}>
          <List.Accordion
            title={this.state.task.state}
            expanded={this.state.expanded}
            onPress={() => this.setState({expanded: !this.state.expanded})}
          >
            <List.Item title="First item" onPress={() => this.changeState("First item")} />
            <List.Item title="Second item" onPress={() => this.changeState("Second item")} />
          </List.Accordion>
        </Card>

        <Text style={styles.label}>Tarea creada el</Text>
        <Card style={{padding: 10, borderRadius: 0, marginBottom: 15}}>
          <Text style={{fontSize: 18}}>17/02/2020 - 13:45</Text>
        </Card>

        <Text style={styles.label}>Finalización esperada</Text>
        <Card style={{padding: 10, borderRadius: 0, marginBottom: 15}}>
          <Text style={{fontSize: 18}}>14/03/2020 - 23:59</Text>
        </Card>

        <Text style={styles.label}>Ultima actualización</Text>
        <Card style={{padding: 10, borderRadius: 0, marginBottom: 15}}>
          <Text style={{fontSize: 18, marginBottom: 15}}>1/03/2020 - 23:59</Text>
        </Card>

        <Button
          mode="contained"
          color="#7B8D93"
          dark
          style={{borderRadius: 0, marginBottom: 15}}
          onPress={() => this.props.navigation.navigate("Edit")}
        >
          Editar tarea
        </Button>

        <Button
          mode="contained"
          color="cyan"
          dark
          style={{borderRadius: 0, marginBottom: 25}}
          onPress={() => this.props.navigation.goBack()}
        >
          Finalizar
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