import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/navigation';

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <NavigationStack />
      </NavigationContainer>
    );
  }
}
