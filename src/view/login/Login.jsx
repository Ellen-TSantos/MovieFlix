import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  Alert,
} from "react-native";
import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../assets/auth/auth";
import stylesLogin from "../../assets/Styles/stylesLogin";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Login = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const login = async () => {
    await signInWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        navigation.navigate("Popular");
        clearInputs();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email.":
            Alert.alert("Email inválido");
            break;
          case "auth/user-not-found.":
            Alert.alert("Usuario não encontrado");
            break;
          case "auth/wrong-password.":
            Alert.alert("Senha incorreta");
            break;
          default:
            Alert.alert(error.message.toString());
            break;
        }
      });
  };

  return (
    <SafeAreaView style={stylesLogin.container}>
      <ImageBackground
        source={require("../../assets/images/img.jpg")}
        style={stylesLogin.imageBackground}
      />
      <View style={stylesLogin.containerInputs}>
        <Text style={stylesLogin.titleLogin}>Login</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder="Email"
          placeholderTextColor={"white"}
          style={stylesLogin.input}
        />
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="Senha"
          placeholderTextColor={"white"}
          style={stylesLogin.input}
        />
        <TouchableOpacity
          onPress={() => login()}
          style={stylesLogin.buttonLogin}
        >
          <Text style={stylesLogin.textButtonLogin}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            style={stylesLogin.textRegister}
            onPress={() => {
              navigation.navigate("Register");
              clearInputs();
            }}
          >
            Clique aqui e faça seu cadastro!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Login;
