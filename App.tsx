// In App.js in a new project

import * as React from "react";
import { View, Text, Button } from "react-native";
import {
  createStaticNavigation,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { CustomBackButton } from "./CustomBackButton";

function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fca5a5",
      }}
    >
      <Text>Home Screen</Text>
    </View>
  );
}

function MoreScreen() {
  const navigation = useNavigation();
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#bae6fd",
      }}
    >
      <Text>More Screen</Text>
      <Button
        title="Go to More Details"
        onPress={() => navigation.navigate("MoreDetail")}
      />
    </View>
  );
}

function MoreDetailScreen() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#38bdf8",
      }}
    >
      <Text>More Details Screen</Text>
    </View>
  );
}

const RootStack = createBottomTabNavigator({
  screens: {
    Home: HomeScreen,
    More: {
      options: {
        headerShown: false,
      },
      screen: createNativeStackNavigator({
        screenOptions: {
          headerLeft: () => <CustomBackButton />,
        },
        screens: {
          More: MoreScreen,
          MoreDetail: MoreDetailScreen,
        },
      }),
    },
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function App() {
  return <Navigation />;
}
