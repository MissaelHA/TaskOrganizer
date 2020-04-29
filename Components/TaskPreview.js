import React, { Component } from 'react';
import { Card, Checkbox, Text, IconButton } from 'react-native-paper';
import { View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class TaskPreview extends Component
{
  render() {
    return (
      <Card onPress={ () => this.props.navigation.navigate('Show', this.props.task) } style={styles.card}>
        <View style={styles.view}>
          <Checkbox
            style={{width: '10%'}}
            status={this.props.task.finished ? 'checked' : 'unchecked'}
          />
          <Text style={styles.taskTitle}>{ this.props.task.title }</Text>
          <IconButton
            style={{width: '10%'}}
            icon="arrow-right"
            size={20}
          />
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    padding: 5,
    alignItems: 'center'
  },
  taskTitle: {
    fontSize: 18,
    width: '80%',
  },
  card: {
    marginVertical: 3,
    borderRadius: 0,
  }
});