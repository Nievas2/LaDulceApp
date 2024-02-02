import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbe4dd",
    alignItems: "center",
    borderRadius: 15,
  },
  navbar: {
    marginTop: Constants.statusBarHeight,
    flex: 6,
    flexDirection: "row",
    gap: 10,
    backgroundColor: "#fbe4dd",
    alignItems: "center",
    color: "#564",
    borderColor: "#f00",
    fontSize: 50,
    minHeight: 100,
    alignContent: "center",
    alignSelf: "center",
  },
  navbarItem:{
    backgroundColor: "#88f",
    padding:15
  },
  card: {
    flex: 1,
    elevation: 5,
    backgroundColor: "#eee",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    gap: 10,
    padding: 15,
    margin: 15,
    minWidth: 350,
    borderRadius: 15,
  },
  image: {
    height: 200,
    width: 200,
    alignSelf: "center",
  },
  imageProduct: {
    flex: 0.7,
    justifyContent: "center",
  },
  bold: {
    fontWeight: "bold",
    fontSize: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  texts: {
    fontSize: 15,
    flex: 1,
  },
  textWhite: {
    color: "#fff",
  },
  textCenter: {
    alignSelf: "center",
  },
  viewCenter: {
    alignItems: "center",
  },
  hr: {
    height: 50,
    backgroundColor: "#000",
    width: 50,
  },
  itemCategory: {
    width: 100,
    height: 100,
    resizeMode: "cover",
    borderRadius: 24,
    margin: 0,
    marginBottom: 10,
  },
  questions: {
    backgroundColor: "#ffe",
    width: "100%",
    padding: 15,
  },
  debugger: {
    borderWidth: 10,
    borderColor: "#f00",
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: "black",
    margin: 10,
  },
});
