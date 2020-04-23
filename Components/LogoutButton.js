import React, { Component } from 'react';
import { Button } from 'react-native-paper';

export default function LogoutButton({navigation})
{
  return (
    <Button
      onPress={() => navigation.replace("Login")}
      mode="contained"
      style={{backgroundColor: '#7B8D93', marginRight: 15}}
    >
      Logout
    </Button>
  );
}