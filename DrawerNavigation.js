import { createDrawerNavigator } from "@react-navigation/drawer";
import Ionicons from '@expo/vector-icons/Ionicons';
import Categories from "./src/screens/Categories";
import Favourites from "./src/screens/Favourites";
import { Text } from "react-native";

const Drawer = createDrawerNavigator();



function DrawerNavigation(){
    return <Drawer.Navigator screenOptions={{ headerStyle: {
      backgroundColor: "#f4511e", // You can change this to your preferred color
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontFamily: "open-sans", // Set your custom font here
    },
    headerBackTitleStyle: {
      fontFamily: "open-sans", // Custom font for back title (if it is visible)
    },
    drawerContentStyle:{
      backgroundColor:"#f4511e",
    },
  drawerInactiveTintColor:'white',
  drawerActiveTintColor:'#f4511e',
  drawerActiveBackgroundColor:'#ffffff',
    }}>
      <Drawer.Screen name="Categories" options={{
        drawerLabel: ({ color }) => (
            <Text style={{ fontFamily: 'open-sans', color, fontSize: 16 }}>
              All Categories
            </Text>
          ),
        drawerIcon:({color,size})=>(<Ionicons name="ios-list-circle-outline" color={color} size={size}/>)
      }} component={Categories}/>

     <Drawer.Screen name="Favourites" options={{
         drawerLabel: ({ color }) => (
            <Text style={{ fontFamily: 'open-sans', color, fontSize: 16 }}>
              Favourites
            </Text>
          ),
        drawerIcon:({color,size})=>(<Ionicons name="star" color={color} size={size}/>)
      }} component={Favourites}/>
    </Drawer.Navigator>

    
  }

  export default DrawerNavigation;