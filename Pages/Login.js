import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Button, TextInput } from 'react-native-paper';

export default class Login extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <View style={styles.page}>
        <Card style={styles.card}>
          <Card.Title title="Organizador de Tareas" style={styles.cardTitle} />

          <View style={{padding: 10}}>
            <View style={styles.fields}>
              <TextInput
                label='Nombre de usuario'
                style={styles.textField}
                mode="outlined"
                value={this.state.username}
                onChangeText={username => this.setState({ username })}
              />

              <TextInput
                label='Contraseña'
                style={styles.textField}
                mode="outlined"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
              />
            </View>

            <Card.Actions>
              <Button
                onPress={() => this.props.navigation.replace("Index")}
                mode="contained"
                style={styles.button}
              >
                Acceder
              </Button>
            </Card.Actions>

            <Card.Actions>
              <Button mode="contained" style={styles.button}>Registro</Button>
            </Card.Actions>
          </View>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#4D4365',
    height: '100%',
  },
  card: {
    margin: 35,
    borderRadius: 10,
    backgroundColor: '#F8F8F8'
  },
  cardTitle: {
    backgroundColor: '#7B8D93',
    color: "white",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  button: {
    width: "100%",
    backgroundColor: '#7B8D93'
  },
  fields: {
    marginVertical: 15
  },
  textField: {
    marginVertical: 5,
    marginHorizontal: 15
  }
})