import { StatusBar } from 'expo-status-bar'; 
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ navigation }: any) {

    function navToform() {
        navigation.navigate('form');
    }

    return (
        <View style={styles.container}>
          <Image source={require("../../img/icons8-batman-antigo-250.svg")} />
          
          <TouchableOpacity style={styles.button} onPress={navToform}>
            <Text style={styles.buttonText}>Active Bat Signal</Text>
          </TouchableOpacity>
          
          <StatusBar style="auto" />
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
  button: {
    backgroundColor: 'black',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: 'yellow',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
