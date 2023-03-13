
import { StyleSheet, Text, TextInput, Button, View } from 'react-native';
import * as Speech from 'expo-speech';
import React, { useState } from 'react';

export default function App() {

  const [text, setText] = useState('');

  const change = () => {
    Speech.speak(text);
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={text => setText(text)} value={text}/>
      <Button title="Press to hear text" onPress={change} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    width:200  , 
    height: 30,
    borderColor: 'gray', 
    borderWidth: 1,
    margin: 5
  },
});
