import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { useFonts } from "expo-font";
import { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverview from "./src/screens/MealsOverview";
import MealDetail from "./src/screens/MealDetail";
import DrawerNavigation from "./DrawerNavigation";
import FavouriteContextProvider from "./store/context/favourites-context";


const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });

  const screenOptions = {
    headerStyle: {
      backgroundColor: "#f4511e", // You can change this to your preferred color
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "open-sans", // Set your custom font here
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans", // Custom font for back title (if it is visible)
    },
    // contentStyle:{backgroundColor:'black'}
  };



  useEffect(() => {
    async function prepare() {
      try {
        // Keep the splash screen visible until everything is set
        await SplashScreen.preventAutoHideAsync();
      } catch (e) {
        console.warn(e);
      }
      // Hide splash screen when fonts are loaded
      if (fontsLoaded) {
        SplashScreen.hideAsync();
      }
    }
    prepare();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null; // Optionally, you can show a loading spinner or another component while waiting for fonts
  }

  

  return (
    <>
      <StatusBar style="light" />
      <FavouriteContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={screenOptions}>
          {/* <Stack.Screen options={
           {
             title:'All Categories'
            }
          } name="MealsCategories" component={Categories} /> */}
            <Stack.Screen options={{
              headerShown:false
            }} name="Drawer" component={DrawerNavigation} />
          <Stack.Screen
           name="MealsOverview" component={MealsOverview} />
            <Stack.Screen
           name="MealDetail" component={MealDetail} />
        </Stack.Navigator>
        
      </NavigationContainer>

      </FavouriteContextProvider>
    </>
  );
}

const styles = StyleSheet.create({

});
