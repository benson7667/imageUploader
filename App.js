import React, {Component} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  StatusBar
} from 'react-native';
import { ImagePicker, FileSystem } from 'expo';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      imageUrl: 'https://sigma-static-files.imgix.net/default_profile_pic.png'
    }
  }

  takePhoto = async () => {
    let pickerResult = await ImagePicker.launchCameraAsync({
      exif: true,
      allowsEditing: true,
      quality: 0.7,
      base64: true,
      aspect: [4, 3]
    })
}

choosePhoto = async () => {
  let pickerResult = await ImagePicker.launchImageLibraryAsync({
    exif: true,
    allowsEditing: false,
    quality: 0.7,
    base64: true
  })
}

  render() {
    return (
      <View>

        <StatusBar style={styles.StatusBar} hidden={true}
     backgroundColor="red"
     barStyle="light-content"
   />
            
                <Button 
                    onPress={this.takePhoto}
                    title={'Take a photo'}
                />
               <Button 
                    onPress={this.choosePhoto}
                    title={'Choose a photo'}
                />
            </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  StatusBar:{
    paddingTop: 10
  }
});