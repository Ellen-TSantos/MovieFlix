import {
  View,
  TextInput,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  Text,
} from "react-native";
import axios from "axios";
import { BASE_URL, API_KEY, TOKEN } from "@env";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import stylesSearch from "../../assets/Styles/stylesSearch";
import ModalLogoout from "../../assets/components/ModalLogoout";
import ClientAvatar from "../../assets/components/ClientAvatar";
import { MaterialIcons, EvilIcons, Entypo } from "@expo/vector-icons";

const SearchPage = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const navigation = useNavigation();

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}search/movie?api_key=${API_KEY}&query=${searchText}`,
        {
          headers: {
            Authorization: `Bearer ${TOKEN}`,
            "Content-Type": `application/json;charset=utf-8`,
          },
        }
      );
      setSearchResults(response.data.results);
    } catch (error) {
      console.error(error);
    }
  };

  const clearInput = () => {
    setSearchText("");
    setSearchResults("");
  };

  const onDetails = (id) => {
    navigation.navigate("Details", {
      text: id,
    });
  };

  useEffect(() => {
    return clearInput();
  }, []);

  return (
    <View style={stylesSearch.containerSearch}>
      <LinearGradient
        colors={["#000", "#000", "#000", "#06031a"]}
        style={stylesSearch.background}
      >
        <View style={stylesSearch.clientAvatar}>
          <ClientAvatar />
        </View>

        <View style={stylesSearch.containerModalMenu}>
          <ModalLogoout screenName="Home" />
          <View style={stylesSearch.containerInput}>
            <TextInput
              placeholderTextColor={"white"}
              style={stylesSearch.buttonInput}
              placeholder="Buscar filme"
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
            <TouchableOpacity
              style={stylesSearch.iconsInput}
              onPress={handleSearch}
            >
              <MaterialIcons name="search" size={27} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={stylesSearch.containerButtonsView}>
            <TouchableOpacity style={stylesSearch.buttonsView}>
              <Text
                style={stylesSearch.textButtonView}
                onPress={() => {
                  navigation.navigate("Popular");
                  clearInput();
                }}
              >
                Popular
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesSearch.buttonsView}>
              <Text
                style={stylesSearch.textButtonView}
                onPress={() => {
                  navigation.navigate("Family");
                  clearInput();
                }}
              >
                Familia
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesSearch.buttonsView}>
              <Text
                style={stylesSearch.textButtonView}
                onPress={() => {
                  navigation.navigate("War");
                  clearInput();
                }}
              >
                Guerra
              </Text>
            </TouchableOpacity>

            <TouchableOpacity style={stylesSearch.buttonsView}>
              <Text
                style={stylesSearch.textButtonView}
                onPress={() => {
                  navigation.navigate("Western");
                  clearInput();
                }}
              >
                Faroeste
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={stylesSearch.containerVideosTrailher}>
          <TouchableOpacity
            style={stylesSearch.containerTrailer}
            onPress={() => {
              navigation.navigate("TrailerPopular");
            }}
          >
            <View style={stylesSearch.containerButtonPlay}>
              <EvilIcons
                style={stylesSearch.iconPlayTraler}
                name="play"
                size={25}
                color="#fff"
              />
              <Text style={stylesSearch.textPlayTraler}>Play</Text>
            </View>
            <Image
              style={stylesSearch.imageTraller}
              source={{
                uri: `https://www.themoviedb.org/t/p/original/nxrmpkwVdmiVAiRTqSSC2SateN2.jpg`,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesSearch.containerTrailer}
            onPress={() => {
              navigation.navigate("TrailerFamily");
            }}
          >
            <View style={stylesSearch.containerButtonPlay}>
              <EvilIcons
                style={stylesSearch.iconPlayTraler}
                name="play"
                size={25}
                color="#fff"
              />
              <Text style={stylesSearch.textPlayTraler}>Play</Text>
            </View>

            <Image
              style={stylesSearch.imageTraller}
              source={{
                uri: `https://www.themoviedb.org/t/p/original/wj7MGckCvs7qbIdL5lVXTIAtSH6.jpg`,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesSearch.containerTrailer}
            onPress={() => {
              navigation.navigate("TrailerWar");
            }}
          >
            <View style={stylesSearch.containerButtonPlay}>
              <EvilIcons
                style={stylesSearch.iconPlayTraler}
                name="play"
                size={25}
                color="#fff"
              />
              <Text style={stylesSearch.textPlayTraler}>Play</Text>
            </View>
            <Image
              style={stylesSearch.imageTraller}
              source={{
                uri: `https://www.themoviedb.org/t/p/original/i0S4a7g5q35NYE2483H3lSwY0up.jpg`,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={stylesSearch.containerTrailer}
            onPress={() => {
              navigation.navigate("TrailerWestern");
            }}
          >
            <View style={stylesSearch.containerButtonPlay}>
              <EvilIcons
                style={stylesSearch.iconPlayTraler}
                name="play"
                size={25}
                color="#fff"
              />
              <Text style={stylesSearch.textPlayTraler}>Play</Text>
            </View>
            <Image
              style={stylesSearch.imageTraller}
              source={{
                uri: `https://www.themoviedb.org/t/p/original/x1jViuXsm5ZmrR6uFmxU6AVdXzs.jpg`,
              }}
            />
          </TouchableOpacity>
        </View>

        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => onDetails(item.id)}
              style={stylesSearch.cardDetails}
            >
              <View style={stylesSearch.containerCards}>
                <Image
                  style={[stylesSearch.image, { zIndex: 1 }]}
                  source={{
                    uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
                  }}
                />
                <View style={stylesSearch.infoCards}>
                  <Text style={stylesSearch.titleNota}>
                    Nota
                    <Text style={stylesSearch.notaVoteAverange}>
                      {item.vote_average !== undefined
                        ? item.vote_average.toFixed(1)
                        : ""}
                      <Entypo name="star" size={21} color="#472dda9b" />
                    </Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        <StatusBar style="dark" />
      </LinearGradient>
    </View>
  );
};

export default SearchPage;
