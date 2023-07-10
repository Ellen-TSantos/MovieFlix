import React from "react";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

export const ButtonFamily = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonsView}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>Familia</Text>
    </TouchableOpacity>
  );
};

export const ButtonPopular = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonsView}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>Popular</Text>
    </TouchableOpacity>
  );
};

export const ButtonWar = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonsView}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>Guerra</Text>
    </TouchableOpacity>
  );
};

export const ButtonWestern = ({ screenName }) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.buttonsView}
      title={`${screenName}`}
      onPress={() => navigation.navigate(screenName)}
    >
      <Text style={styles.buttonText}>Faroeste</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonsView: {
    width: 62,
    height: 60,
    borderRadius: "50%",
    marginTop: 10,
    marginBottom: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparet",
    borderWidth: 1,
    borderColor: "#472dda",
    boxShadow: "#472dda 1px 1px 12px 2px",
  },
  buttonText: {
    color: "white",
  },
});
