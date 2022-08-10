import {StyleSheet} from "react-native";

export const styles = StyleSheet.create({
  text: {
    textAlign: "center",
    textAlignVertical: "center",
    alignSelf: "center",
    marginLeft: "10%",
    fontSize: 20,
    fontFamily: "Verdana",
  },
  items: {
    flexDirection: "row",
    width: "100%",
    height: 100,
  },
  mainText: {
    textAlign: "center",
    fontSize: 25,
    fontWeight: 450,
  },
  header: {
    width: "100%",
    height: 60,
    backgroundColor: "#dcdcdc",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    fontWeight: "bold",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    fontSize: 25,
  },
});