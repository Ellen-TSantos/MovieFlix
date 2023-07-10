import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function ButtonSearch({ screenName }) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.ButtonSearch}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <MaterialIcons name="search" size={24} color="#fff" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  ButtonSearch: {
    width: 62,
    height: 60,
    borderRadius: "50%",
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparet",
    borderWidth: 1,
    borderWidth: 1,
    borderColor: "#472dda",
    boxShadow: "#472dda 1px 1px 12px 2px",
  },
});
