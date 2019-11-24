/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';

import {StyleSheet, View, Text, Button} from 'react-native';

import {
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import store, {COUNTER_INCREMENT, COUNTER_DECREMENT} from './store/store';
import {Provider} from 'react-redux';
import Hello from './store/Hello';

class App extends Component {
  constructor() {
    super();
    this.state = {};
  }

  increment = () => {
    store.dispatch({type: COUNTER_INCREMENT});
    console.log(store.getState().count);
  };

  decrement = () => {
    store.dispatch({type: COUNTER_DECREMENT});
    console.log(store.getState().count);
  };

  // Create one provider and give one store refernce

  render() {
    return (
      <Provider store={store}>
        <View style={styles.body}>
          <View style={styles.sectionContainer}>
            <Hello name={this.state.name} />
          </View>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: Colors.white,
  },
  button: {
    backgroundColor: '#f194ff',
    borderColor: '#000000',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default App;
