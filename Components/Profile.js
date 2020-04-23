import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Card, Avatar, Paragraph } from 'react-native-paper';

export default class Profile extends Component
{
  render() {
    return (
      <Card style={styles.card}>
        <View style={styles.profileCard}>
          <View style={styles.avatarView}>
            <Avatar.Icon size={74} icon="account" />
          </View>

          <Paragraph style={styles.paragraph}>
            Hector Missael Herrera Anda
          </Paragraph>

          <Paragraph style={styles.paragraph2}>
            Lista de tareas
          </Paragraph>
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    marginBottom: 15,
    borderRadius: 10
  },
  profileCard: {
    justifyContent: 'center',
    padding: 15,
  },
  avatarView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15
  },
  paragraph: {
    textAlign: 'center',
    fontSize: 28,
    padding: 10,
    color: '#D0D0D0',
  },
  paragraph2: {
    textAlign: 'center',
    fontSize: 32,
    paddingTop: 12,
    color: '#A0A0A0',
  }
});