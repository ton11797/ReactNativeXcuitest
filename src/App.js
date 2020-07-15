// In App.js in a new project

import * as React from 'react';
import { SafeAreaView,StatusBar,StyleSheet,ScrollView,View, Text ,Button} from 'react-native';
import { NavigationContainer ,useNavigation} from '@react-navigation/native';
import { createStackNavigator,HeaderBackButton } from '@react-navigation/stack';
import LabScreen from './screen/Lab'
import Tutorial1Screen from './screen/tutorial/T1'
import Tutorial2Screen from './screen/tutorial/T2'
import Tutorial3Screen from './screen/tutorial/T3'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const Tab = createMaterialBottomTabNavigator();
import LinkList from './screen/tutorialList'
import {
  Header,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Welcome to XCUITest 101</Text>
      <Button
        title="Go to tutorial"
        testID='tutorial-btn'
        onPress={() => navigation.navigate('Tutorial')}
      />
      <Button
        title="Go to Lab"
        testID='lab-btn'
        onPress={() => navigation.navigate('Lab')}
      />
    </View>
  );
}

function TutorialScreen({navigation}) {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          {global.HermesInternal == null ? null : (
            <View style={styles.engine}>
              <Text style={styles.footer}>Engine: Hermes</Text>
            </View>
          )}
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle} testID='main-title' >ReactNative UI Automate test</Text>
              <Text style={styles.sectionDescription}>Tutorial for create automate UI test for iOS mobile
                <Text style={styles.highlight}> with XCUITest</Text>
              </Text>
            </View>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Learn More</Text>
              <Text style={styles.sectionDescription}>
                Discover what to do next:
              </Text>
            </View>
            <LinkList />
          </View>
        
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const Stack = createStackNavigator();
// const navigation = useNavigation();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="XCUITest101" component={HomeScreen} />
        <Stack.Screen name="Lab" component={LabScreen} />
        <Stack.Screen name="Tutorial" component={TutorialScreen} />
        <Stack.Screen name="Tutorial001" component={Tutorial1Screen} />
        <Stack.Screen name="Tutorial002" component={Tutorial2Screen} />
        <Stack.Screen name="Tutorial003" component={Tutorial3Screen} />
        {/* <Stack.Screen name="Tutorial004" component={Tutorial4Screen} />
        <Stack.Screen name="Tutorial005" component={Tutorial5Screen} />
        <Stack.Screen name="Tutorial006" component={Tutorial6Screen} /> */}
      </Stack.Navigator>
      <Text style={styles.footer} testID='main-title' >Create by Denice</Text>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
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
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    marginBottom:10,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'center',
  },
});

export default App;