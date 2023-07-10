import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity, View } from "react-native";

export default function ButtonBackTrailer({ screenName }) {
  const navigation = useNavigation();
  return (
    <View>
      <TouchableOpacity
        style={styles.buttonBackTrailer}
        title={`${screenName}`}
        onPress={() => navigation.navigate(screenName)}
      >
        <Ionicons name="ios-chevron-back-circle" size={40} color="#472dda" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonBackTrailer: {
    flex: 1,
    marginTop: "15%",
    width: 40,
    marginLeft: 40,
  },
});
