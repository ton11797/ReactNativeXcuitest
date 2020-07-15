import React, { Component } from 'react'
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
} from 'react-native'

class App extends Component {
  state = {
    count: 0
  }

  onPressIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  }
  onPressDecrease = () => {
    this.setState({
      count: this.state.count - 1
    })
  }
  onPressReset = () => {
    this.setState({
      count: 0
    })
  }

 render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPressIncrement}
         testID="increment-btn"
        >
         <Text>Click me +1</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPressDecrease}
         testID="decrease-btn"
        >
         <Text>Click me -1</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={styles.button}
         onPress={this.onPressReset}
         testID="reset-btn"
        >
         <Text>Set zero</Text>
        </TouchableOpacity>
        <View>
          <Text testID="current-value">
            You clicked { this.state.count } times
          </Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 10
  }
})

export default App;
