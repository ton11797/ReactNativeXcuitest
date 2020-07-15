import React, { Component } from "react";

import styles from "./style";
import {Keyboard, Text, View, TextInput, TouchableWithoutFeedback, Alert, KeyboardAvoidingView} from 'react-native';
import { Button } from 'react-native-elements';

const appId = "1047121222092614"

export default class T3 extends Component {
  state = {
    error:0,
    username:"",
    password:"",
    login:0
  }
  inlineError(){
    if(this.state.error==0){
      return
    }else if(this.state.error==1){
      return(<Text style={styles.loginFormError} testID="inline-error">Username or password invalid</Text>)
    }else{
      return(<Text style={styles.loginFormError} testID="inline-error">Username or password emply</Text>)
    }
  }
  passed(){
    if(this.state.login ==1){
      return (
        <Text style={styles.pass} testID="pass-txt">PASS</Text>
      )
    }
  }
  render() {
    return (
        <View style={styles.loginScreenContainer}>
          <View style={styles.loginFormView}>
          <Text style={styles.logoText} testID="login-title">Login</Text>
            <TextInput value={this.state.username} onChangeText={(username) => this.setState({username})} placeholder="Username" placeholderColor="#c4c3cb" testID="username-field" style={styles.loginFormTextInput} />
            <TextInput value={this.state.password} onChangeText={(password) => this.setState({password})} placeholder="Password" placeholderColor="#c4c3cb" testID="password-field" style={styles.loginFormTextInput} secureTextEntry={true}/>
            {this.inlineError()}
            <Button
              buttonStyle={styles.loginButton}
              onPress={()=>this.onLoginPress()}
              title="Login"
              testID="login-btn"
            />
            {this.passed()}
          </View>
        </View>
    );
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }


  onLoginPress() {
    if(this.state.username == "" || this.state.password ==""){
      this.setState({error:2})
      return
    }
    if(this.state.username.toLocaleLowerCase() == "test" && this.state.password =="1234"){
      this.setState({error:0,login:1})

    }else{
      this.setState({error:1})
    }
  }
}