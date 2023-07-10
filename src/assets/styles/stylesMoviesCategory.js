import { StyleSheet } from "react-native";

const stylesMoviesCategory = StyleSheet.create({
  container: {
    flex: 1,
    color: "#fff",
    backgroundColor: "#000",
  },
  clientAvatar: {
    position: "absolute",
    top: 25,
    left: "80%",
  },
  modalMenu: {
    marginTop: 3,
    marginBottom: 15,
    borderBottomLeftRadius: 70,
    borderBottomRightRadius: 70,
    borderWidth: 1,
    borderColor: "#472dda",
    boxShadow: "#472dda 1px 1px 12px 2px",
    marginRight: 1,
    marginLeft: 1,
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    borderRadius: "70%",
    marginTop: 10,
    marginBottom: 10,
    borderWidth: 1,
    marginLeft: 5,
    width: "98%",
  },
  containerCards: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
    padding: 5,
    height: 80,
  },
  imageCards: {
    width: 155,
    height: 152,
    borderRadius: "20%",
    borderColor: "#472dda",
    boxShadow: "#472dda 1px 1px 12px 2px",
  },
  detailsCards: {
    flex: 1,
    marginVertical: 5,
    height: 80,
  },
  textOverview: {
    color: "#fff",
    fontSize: 19,
    textAlignVertical: "center",
    marginLeft: 20,
  },
  titleNota: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#9b9999",
  },
  notaVoteAverange: {
    fontSize: 18,
    color: "#9b9999",
    marginLeft: 8,
  },
  infoCards: {
    gap: 7,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default stylesMoviesCategory;
