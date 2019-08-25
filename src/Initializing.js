// Initializing.js

// AsyncStorage is a something similar to shared preferences in android 
//  it stores the data into the phone for later usage
import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  AsyncStorage
} from 'react-native'

import { goToAuth, goHome } from './navigation'

import { USER_KEY } from './config'

export default class Initialising extends React.Component {

    // this is the function that is the most important in this class 
    // this is the first function that runs on the loading of the slide 
    // it checks if thers is anything stores in the storage of the app 
    // if somethigns is stored then the app goes to the home scrren and else it goes to the 
    // sign in or sign up page 
  async componentDidMount() {
    try {
      const user = await AsyncStorage.getItem(USER_KEY)
      console.log('user: ', user)
      if (user) {
        goHome()
      } else {
        goToAuth()
      }
    } catch (err) {
      console.log('error: ', err)
      goToAuth()
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Loading</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  welcome: {
    fontSize: 28
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
