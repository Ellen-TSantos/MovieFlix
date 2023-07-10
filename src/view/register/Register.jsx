import {
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
  View,
  Alert
} from "react-native";
import { useState } from "react";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../assets/auth/auth";
import stylesRegister from "../../assets/Styles/stylesRegister";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };

  const register = async () => {
    await createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        Alert.alert("Usuario criado com sucesso!");
        navigation.navigate("Login");
        clearInputs();
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/invalid-email.":
            Alert.alert("Email inválido");
            break;
          case "auth/email-already-in-use.":
            Alert.alert("Email já cadastrado");
            break;
          case "Firebase:Password should be at least 6 characters(auth/weak-password).":
            Alert.alert("A senha deve conter 6 caracteres");
            break;
          default:
            Alert.alert(error.message.toString());
            break;
        }
      });
  };

  return (
    <SafeAreaView style={stylesRegister.container}>
      <ImageBackground
        source={require("../../assets/images/img.jpg")}
        style={stylesRegister.imageBackground}
      />
      <View style={stylesRegister.containerInputs}>
        <Text style={stylesRegister.titleCadastro}>Cadastrar</Text>
        <TextInput
          value={email}
          onChangeText={(e) => setEmail(e)}
          placeholder="Email"
          placeholderTextColor={"white"}
          style={stylesRegister.input}
        />
        <TextInput
          secureTextEntry
          value={password}
          onChangeText={(e) => setPassword(e)}
          placeholder="Senha"
          style={stylesRegister.input}
          placeholderTextColor={"white"}
        />
        <TouchableOpacity
          onPress={() => register()}
          style={stylesRegister.buttonCadastrar}
        >
          <Text style={stylesRegister.textButtonCadastrar}>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={stylesRegister.textBackLogin}
          >
            Clique aqui e faça seu login!
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Register;
