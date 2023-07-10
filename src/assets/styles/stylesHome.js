import { StyleSheet } from "react-native";

const stylesHome = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
  titleHome: {
    position: "fixed",
    bottom: "55%",
    textShadowColor: "rgba(71, 45, 248, 3.5)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 16,
    fontSize: 65,
    fontWeight: "bold",
    color: "#472dda",
  },
  containerButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonEntrar: {
    position: "fixed",
    bottom: "44%",
    width: "80%",
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#472dda",
    boxShadow: "#472dda 2px 2px 12px 2px",
  },

  buttonCadastrar: {
    position: "fixed",
    bottom: "32%",
    width: "80%",
    height: 50,
    backgroundColor: "transparent",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#472dda",
    boxShadow: "#472dda 2px 2px 12px 2px",
  },
  textButton: {
    textAlign: "center",
    fontSize: 25,
    marginTop: 5,
    color: "#fff",
  },
});
export default stylesHome;
