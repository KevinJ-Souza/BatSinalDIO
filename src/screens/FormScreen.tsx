import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, Image } from "react-native";

export default function FormScreen() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [observation, setObservation] = useState("");

  function handleSubmit() {
    Alert.alert("Dados Enviados", `Nome: ${name}\nTelefone: ${phone}\nLocalização: ${location}\nObservação: ${observation}`);
  }

  return (
    <View style={styles.container}>
      {/* Logo do Batman no canto superior esquerdo */}
      <Image source={require("../../img/icons8-batman-antigo-50.svg")} style={styles.logo} />

      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Digite seu nome" />

      <Text style={styles.label}>Telefone:</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} placeholder="Digite seu telefone" keyboardType="phone-pad" />

      <Text style={styles.label}>Localização Atual:</Text>
      <TextInput style={styles.input} value={location} onChangeText={setLocation} placeholder="Digite sua localização" />

      <Text style={styles.label}>Observação:</Text>
      <TextInput 
        style={[styles.input, styles.textArea]} 
        value={observation} 
        onChangeText={setObservation} 
        placeholder="Digite uma observação" 
        multiline 
        numberOfLines={4} 
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Enviar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f4f4f4",
    justifyContent: "center",
  },
  logo: {
    position: "absolute",
    top: 20,
    left: 20,
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    height: 40,
    backgroundColor: "#fff",
    borderColor: "#ddd",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  textArea: {
    height: 80,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
