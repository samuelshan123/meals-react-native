import { Pressable, View, Text, StyleSheet, Platform } from "react-native";
// import {useNavigation} from '@react-navigation/native'


function CategoryGrid({ title, color,onPress }) {

//   const navigatin =  useNavigation()
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: "#fff" }}
        style={({ pressed }) => [
          styles.button,
          pressed ? styles.buttonPressed : null,
        ]}
        onPress={onPress}
      >
        <View style={[styles.innerGrid, { backgroundColor: color }]}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </Pressable>
    </View>
  );
}

export default CategoryGrid;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: "white",
    shadowColor: "black",
    shadowOpacity: 0.25,
    textShadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === "android" ? "hidden" : "visible",
  },
  button: {
    flex: 1,
  },
  buttonPressed: {
    opacity: 0.5,
  },
  innerGrid: {
    flex: 1,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
  },
  text: {
    fontFamily: "open-sans-bold",
    fontSize: 14,
  },
});
