import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fbe4dd",
    alignItems: "center",
  },
  navbar: {
    marginTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: "#fbe4dd",
    alignItems: "center",
    color: "#564", borderColor: "#f00", fontSize: 15, minHeight: 30
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
  imageProduct:{
    flex: 0.7, 
    justifyContent: "center",
  },
  bold:{
    fontWeight: "bold",
    fontSize: 15
  },
  title:{
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  subTitle:{
    fontSize: 18,
    fontWeight:"bold",
    marginBottom: 15
  },
  texts:{
    fontSize: 15,
    flex: 1
  }
});
