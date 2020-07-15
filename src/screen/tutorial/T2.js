import React, { Component } from 'react';
import { Button, ScrollView,View, TouchableOpacity,StyleSheet,Text,TextInput } from 'react-native';
import {
  Header,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class T2 extends Component {
  state = {
    step: 0,
    error:0
  }
    sleep = (milliseconds) => {
      return new Promise(resolve => setTimeout(resolve, milliseconds))
    }
    onPress = ()=>{
      this.sleep(1000).then(()=>{
        this.setState({
          step: this.state.step + 1
        })
      })
    }
    componentDidMount(){
      this.sleep(3000).then(()=>{
        this.setState({
          step: this.state.step + 1
        })
      })
    }
    onPressClick = ()=>{
      if(this.state.error != 0){
        return
      }
      if(this.state.step==0){
        this.setState({
          error: 1
        })
      }else{
        this.setState({
          error: 2
        })
      }
    }
    section(){
      if(this.state.error==0){
        return 
      }else if(this.state.error==1){
        return(
          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle} testID="error-msg">ERROR</Text>
          </View>
        )
      }else{
        return(
          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle} testID="pass-msg">PASS</Text>
          </View>
        )
      }
    }
    render() {
      return (
        <ScrollView>
          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle} testID="tutorial-header">Wait for component</Text>
              <Text style={styles.sectionDescription} testID="tutorial-description">
                {this.state.step==0?'Send request waiting.... ':'Request done!'}
              </Text>
            <TouchableOpacity style={styles.appButtonContainer}  onPress={this.onPressClick} testID="Click-btn">
              <Text style={styles.appButtonText}>click</Text>
            </TouchableOpacity>
          </View>
          {this.section()}
        </ScrollView>
        
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    textBox:{
      height: 40,
      marginTop: 32,
      borderColor: 'gray',
      borderWidth: 1,
      backgroundColor:Colors.white
    },
    appButtonContainer: {
      marginTop:15,
      elevation: 8,
      backgroundColor: "#009688",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonContainerDis: {
      marginTop:15,
      elevation: 8,
      backgroundColor: "#dddddd",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12
    },
    appButtonText: {
      fontSize: 18,
      color: "#fff",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    }
  })
export default T2;
