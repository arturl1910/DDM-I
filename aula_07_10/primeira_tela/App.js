import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (

    <ScrollView style={styles.scfflex}>
      <View style={styles.container}>

        <Text>Digite aqui!</Text>
        <TextInput placeHolder="Teste"></TextInput>
        <Button onPress='' title='botão'></Button>


      </View>

      </ScrollView>

  );
}

const styles = StyleSheet.create({
  scflex:{
    flex:1,
    backgroundColor: '#1c0fd1bd',
  },
  container: {
    flex: 1,
    backgroundColor: '#cf1d1d',
    alignItems: 'center',
    justifyContent: 'center',

  },
});
