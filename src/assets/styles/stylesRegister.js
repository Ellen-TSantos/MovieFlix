import { StyleSheet } from "react-native";

const stylesRegister = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  imageBackground: {
    opacity: 0.3,
    flex: 1.5,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100vh",
  },
  titleCadastro: {
    marginRight: "auto",
    marginLeft: "auto",
    marginBottom: "5%",
    fontSize: 49,
    fontWeight: "bold",
    color: "#ffffff",
  },
  containerInputs: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "47%",
  },
  input: {
    width: "80%",
    height: 55,
    paddingHorizontal: 10,
    marginVertical: 10,
    fontSize: 17,
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "tranparente",
    boxShadow: "#472dda 2px 2px 12px 2px",
    color: "#ffffff",
  },
  buttonCadastrar: {
    borderColor: "#472dda",
    boxShadow: "#472dda 2px 2px 12px 2px",
    borderWidth: 1,
    borderRadius: 20,
    width: "50%",
    height: 40,
    marginTop: 10,
    marginRight: "auto",
    marginLeft: "auto",
  },
  textButtonCadastrar: {
    fontSize: 19,
    marginTop: 4,
    marginRight: "auto",
    marginLeft: "auto",
    color: "#ffffff",
  },
  textBackLogin: {
    marginTop: 40,
    fontSize: 20,
    marginRight: "auto",
    marginLeft: "auto",
    color: "#ffffff",
  },
});
export default stylesRegister;
