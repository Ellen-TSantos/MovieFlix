import {
  FlatList,
  Image,
  View,
  TouchableOpacity,
  StatusBar,
  Text,
} from "react-native";
import { useEffect, useState } from "react";
import { Entypo } from "@expo/vector-icons";
import { listMoviesPopular } from "../../assets/api/req";
import ModalLogoout from "../../assets/components/ModalLogoout";
import ClientAvatar from "../../assets/components/ClientAvatar";
import ButtonSearch from "../../assets/components/ButtonSearch";
import { ButtonWar } from "../../assets/components/ButtonsView";
import { ButtonFamily } from "../../assets/components/ButtonsView";
import { ButtonPopular } from "../../assets/components/ButtonsView";
import { ButtonWestern } from "../../assets/components/ButtonsView";
import stylesMoviesCategory from "../../assets/Styles/stylesMoviesCategory";

export default function MoviesPopular({ navigation }) {
  const [movies, setMovies] = useState([]);

  const onDetails = (id) => {
    navigation.navigate("Details", {
      text: id,
    });
  };

  useEffect(() => {
    listMoviesPopular(setMovies);
  }, []);

  return (
    <View style={stylesMoviesCategory.container}>
      <View style={stylesMoviesCategory.clientAvatar}>
        <ClientAvatar />
      </View>
      <View style={stylesMoviesCategory.modalMenu}>
        <ModalLogoout screenName="Home" />
        <View style={stylesMoviesCategory.buttonsView}>
          <ButtonPopular screenName="Popular" />
          <ButtonFamily screenName="Family" />
          <ButtonSearch screenName="Search" />
          <ButtonWar screenName="War" />
          <ButtonWestern screenName="Western" />
        </View>
      </View>
      <FlatList
        data={movies}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => onDetails(item.id)}
            style={stylesMoviesCategory.detailsCards}
          >
            <View style={stylesMoviesCategory.containerCards}>
              <Image
                style={stylesMoviesCategory.imageCards}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                }}
              />
              <View style={stylesMoviesCategory.infoCards}>
                <Text style={stylesMoviesCategory.titleNota}>
                  Nota
                  <Text style={stylesMoviesCategory.notaVoteAverange}>
                    {item.vote_average !== undefined
                      ? item.vote_average.toFixed(1)
                      : ""}
                    <Entypo name="star" size={21} color="#472dda9b" />
                  </Text>
                </Text>
                <Text
                  numberOfLines={3}
                  style={[stylesMoviesCategory.textOverview, { width: 200 }]}
                >
                  {item.overview}
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />

      <StatusBar style="dark" />
    </View>
  );
}
