import {StyleSheet} from "react-native"

const stylesModal = StyleSheet.create({
    containerModal: {
      marginTop: 25,
      height: 50,
      width: "10%",
    },
    containerButtons: {
      width: "40%",
      marginTop: 5,
      padding: 3,
      borderRadius: 15,
      borderRadius: 20,
      borderWidth: 1,
      borderColor: "#472dda",
      backgroundColor: "#000",
    },
    buttonLogout: {
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      width: "100%",
      height: "46%",
      marginLeft: 4,
      marginTop: 4,
    },
    textLogoout: {
      marginTop: 1,
      marginBottom: 5,
      color: "#fff",
      marginLeft: 15,
      fontSize: 18,
    },
    buttonClose: {
      width: "100%",
      height: "50%",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "row",
      gap: 15,
      padding: 10,
      marginBotton: 4,
      marginRight: 15,
      borderWidth: 1,
      borderTopColor: "#472dda",
    },
    textClose: {
      color: "#fff",
      fontSize: 18,
      textAlign: "center",
    },
    IconButtonMenu: {
      color: "#fff",
      fontWeight: "bold",
      marginLeft: 20,
      marginBottom: 5,
    },
  });

  export default stylesModal;
  