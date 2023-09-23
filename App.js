import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react'
import { Button, TextInput, PaperProvider, MD3DarkTheme, MD3LightTheme } from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  roundness: 2,
  colors: { 
    primary: 'rgb(29, 27, 30)',
    onPrimary: "white",
    secondary: "rgb(208, 193, 218)",
    onSecondary: "white"
  }
};


export default function App() {
  const [text, setText] = useState("");

  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
      <TextInput
        label="Email"
        value={text}
        mode="outlined"
        onChangeText={text => setText(text)}
      />
    </View>
    </PaperProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
