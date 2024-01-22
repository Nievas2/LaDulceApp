import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fbe4dd",
    alignItems: "center",
  },
  navbar: {
    flex: 1,
    backgroundColor: "#fbe4dd",
    alignItems: "center",
  },
  card: {
    flex: 1,
    elevation: 5,
    backgroundColor: "#eee",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    gap: 10 ,
    padding: 15,
    margin: 15,
    minWidth: 350,
    borderRadius: 15
  },
  image:{
    height: 200,
    width:200, 
    alignSelf: "center",
  },
  bold:{
    fontWeight: "bold",
    fontSize: 15
  }
});
