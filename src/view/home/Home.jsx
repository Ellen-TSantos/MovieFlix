import React from "react";
import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import stylesHome from "../../assets/Styles/stylesHome";
import { listMoviesPopular } from "../../assets/api/req";
import { Image, Text, TouchableOpacity, View } from "react-native";

export default function Home({ navigation }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    listMoviesPopular(setMovies);
  }, []);

  return (
    <SafeAreaView style={stylesHome.container}>
      <Image
        style={stylesHome.imageBackground}
        source={require("../../assets/images/img.jpg")}
      />

      <View style={stylesHome.containerButton}>
        <TouchableOpacity style={[stylesHome.buttonEntrar, { zIndex: 1 }]}>
          <Text
            onPress={() => navigation.navigate("Login")}
            style={stylesHome.textButton}
          >
            Entrar
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={[stylesHome.buttonCadastrar, { zIndex: 1 }]}>
          <Text
            onPress={() => navigation.navigate("Register")}
            style={stylesHome.textButton}
          >
            Cadastrar
          </Text>
        </TouchableOpacity>
      </View>

      <Text style={[stylesHome.titleHome, { zIndex: 1 }]}>MOVIEFLIX</Text>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
