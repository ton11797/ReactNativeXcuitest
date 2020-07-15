import React, { Component } from 'react';
import { Button, ScrollView,View, TouchableOpacity,StyleSheet,Text,TextInput } from 'react-native';
import {
  Header,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
class T1 extends Component {
    render() {
      return (
        <ScrollView>
          <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle} testID="tutorial-header">Text validation</Text>
              <Text style={styles.sectionDescription}>
                use identifier to select componect and validate text
              </Text>
            </View>
            <View style={styles.container}>
            <Text style={styles.sectionDescription} testID="text1">StaticText with identifier</Text>
            <Text style={styles.sectionDescription}>StaticText without identifier</Text>
            <TextInput style={styles.textBox} testID="input1">TextInput with identifier</TextInput>
            <TouchableOpacity style={styles.appButtonContainer} testID="test1-btn">
              <Text style={styles.appButtonText}>click1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.appButtonContainerDis} disabled testID="test2-btn">
              <Text style={styles.appButtonText}>click2</Text>
            </TouchableOpacity>
          </View>
          
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
export default T1;
