import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import  { useState } from 'react'
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


export default function App() {

  const [ count, setCount ] = useState(100)

  const [imageURL, setImageURL] = useState<string>("https://images.pexels.com/photos/60597/dahlia-red-blossom-bloom-60597.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500")

  const [urlInput, setUrlInput] = useState<string>("")

  return (
    <View style={styles.container}>
      <Image style={styles.mainImage} source={ { uri: imageURL } } />
      <TextInput onChangeText={(value) => { setUrlInput(value) }} style={styles.inputURL} />
      <TouchableOpacity onPress={() => {
          setImageURL(urlInput)
      }} style={[styles.loginBtn, styles.button]}>
      <View >
        <Text style={styles.loginLabel}>Load Image</Text>
      </View>
      </TouchableOpacity> 
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: 25
    },
    inputURL: {
      padding: 5,
      width: "100%",
      borderWidth: 1,
      borderColor: "#eee",
      borderRadius: 5,
      marginTop: 10
    },
    mainImage: {
      width: 100,
      height: 100
    },
    mainText: {
      fontSize: 22,
      fontWeight: "900",
      marginVertical: 20,
      color: "#5f1ad0"
    },
    subText: {
      fontSize: 15,
      marginBottom: 15,
      textAlign: "center"
    },
    button: {
      width: "100%",
      padding: 15,
      borderColor: "#eee",
      borderRadius: 5,
      borderWidth: 2,
      alignItems: "center",
      marginTop: 10
    },
    loginBtn: {
      backgroundColor: "#560cce"
    },
    loginLabel: {
      color: "#fff",
      fontSize: 16,
      fontWeight: "600"
    },
    signUpLabel: {
      color: "#560cce",
      fontSize: 16,
      fontWeight: "600"
    }
})
