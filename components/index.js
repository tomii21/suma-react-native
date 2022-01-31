import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import { StyleSheet, Text, View, Button, TextInput, Alert, TouchableOpacity } from "react-native";

const Home = () => {
  const [v1, setV1] = useState(0);
  const [v2, setV2] = useState(0);
  const [res, setRes] = useState(0);

  const suma = () => {
   const res= setRes(v1 + v2);
 
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sumar</Text>
      <TextInput
      style={styles.txt1}
        type="text"
        placeholder="Num1"
        onChange={ (e) => setV1(Number(e.target.value))}
      />
      <TextInput
      style={styles.txt2}
        type="text"
        placeholder="Num2"
        onChange={ (e) => setV2(Number(e.target.value))}
      />
      <Text style={styles.res}>{res}</Text>
      <TouchableOpacity onPress={suma} style={styles.btn}>
        Sumar
      </TouchableOpacity>
    
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  txt1:{
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#000000',
    paddingTop:3, 
    paddingLeft:3, 
    paddingRight:3, 
    paddingBottom:3, 

  },
  txt2:{
    borderRadius: 5,
    marginTop: 3,
    borderWidth: 2,
    borderColor: '#000000',
    paddingTop:3, 
    paddingLeft:3, 
    paddingRight:3, 
    paddingBottom:3, 

  },
  res:{
    marginTop: 5,
    borderBottomColor: '#000000',
    borderWidth: 2,
    borderLeftWidth:0,
    borderTopWidth:0,
    borderRightWidth:0,
    width: 30,
    textAlign: 'center'
  },
  btn: {
    marginTop: 5,
    backgroundColor: '#000000',
    color: '#ffffff',
    paddingTop: 5,
    paddingBottom: 5,
    paddingRight: 10,
    paddingLeft: 10,
    borderRadius:5
  },
  title:{
    marginBottom: 30
  }
});

export default Home;
