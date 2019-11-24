import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Button, StyleSheet, Text, View} from 'react-native';
import {COUNTER_INCREMENT, COUNTER_DECREMENT} from './store';
import {Colors} from 'react-native/Libraries/NewAppScreen';

//State Less - let Hello

class Hello extends Component {
  add = () => {
    const count = 'count' + this.props.count;
    this.props.update(count);
  };
  render() {
    return (
      <View>
        <Text>Hello :{this.props.count}</Text>
        <Text>Pushed Data:{this.props.data.length}</Text>
        <Button
          title="Increment"
          style={styles.button}
          onPress={this.props.increment}
        />
        <Button
          title="Decrement"
          style={styles.button}
          onPress={this.props.decrement}
        />
        <Button title="Update" style={styles.button} onPress={this.add} />
      </View>
    );
  }
}
//connect higher order function
const mapStateToProps = state => {
  return {
    count: state.counter.count,
    data: state.tester,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    increment: () => {
      dispatch({type: COUNTER_INCREMENT});
    },
    decrement: () => {
      dispatch({type: COUNTER_DECREMENT});
    },
    update: data => {
      dispatch({type: 'push', value: data});
    },
  };
};

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

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Hello);
