import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Text, View } from "react-native";

const Tab = createMaterialTopTabNavigator();

export default function ForYou() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Library" component={HomeScreen} />
      <Tab.Screen name="Liked" component={SettingsScreen} />
      <Tab.Screen name="Suggested" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

function HomeScreen() {
  return (
    <View>
      <Text>Home Scrren</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View>
      <Text>Setting Scrren</Text>
    </View>
  );
}

// 1.12
