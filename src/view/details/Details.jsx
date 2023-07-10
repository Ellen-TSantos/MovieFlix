import {
  Text,
  View,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { API_KEY, TOKEN, LANGUAGE } from "@env";
import { getDatails } from "../../assets/api/req";
import React, { useEffect, useState } from "react";
import stylesDetails from "../../assets/styles/stylesDetails";
import { useNavigation, CommonActions } from "@react-navigation/native";

export default function Details({ route }) {
  const navigation = useNavigation();

  const [value, setValue] = useState(route.params.text);
  const [details, setDetails] = useState([]);

  async function openDetails() {
    var result = await getDatails.get(`${value}?${API_KEY}&${LANGUAGE}`, {
      headers: {
        Authorization: `Bearer  ${TOKEN}`,
        "Content-Type": `application/json;charset=utf-8`,
      },
    });
    console.log(result.data);
    setDetails(result.data);
  }
  useEffect(() => {
    openDetails();
  }, []);

  return (
    <View style={stylesDetails.container}>
      <ImageBackground
        style={stylesDetails.imageBackground}
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${details.poster_path}`,
        }}
      ></ImageBackground>
      <View style={stylesDetails.cardDetails}>
        <Text style={stylesDetails.titleCard}>{details.title}</Text>
        <Text style={stylesDetails.titleSinopse}>Sinopse</Text>
        <Text
          numberOfLines={6}
          style={[stylesDetails.textOverview, { width: 300 }]}
        >
          {details.overview}
        </Text>
        <Text style={stylesDetails.titleNota}>Nota</Text>
        <Text style={stylesDetails.text}>
          {details.vote_average !== undefined
            ? details.vote_average.toFixed(1)
            : ""}
        </Text>
        <Text style={stylesDetails.titlerelease}>Data de Lançamento</Text>
        <Text style={stylesDetails.text}>{details.release_date}</Text>
      </View>

      <View style={stylesDetails.buttonback}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(CommonActions.goBack())}
        >
          <Entypo name="back" size={26} color="#fff" />
          <Text style={stylesDetails.textButtonBack}>Voltar</Text>
        </TouchableOpacity>
      </View>

      <StatusBar style="dark" />
    </View>
  );
}
