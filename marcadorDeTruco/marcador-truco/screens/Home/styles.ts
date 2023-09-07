import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 54,
    backgroundColor: "#383535",
    justifyContent: "space-around",
  },
  title: {
    textAlign: "center",
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    alignContent: "center",
  },
  button: {
    backgroundColor: "#DE9609",
    height: 56,
    width: "100%",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  form: {
    gap: 70,
    padding: 20,
  },
  containerForm: {
    flexDirection: "row",
    gap: 50,
  },
  containerInput: {
    flex: 1,
  },
  containerPoints: {
    flex: 1,
    gap: 10,
  },
});
