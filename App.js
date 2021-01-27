import React from 'react';
import Home from "./src/Home";
import { ListVehicules } from "./src/ListVehicules";
import { DetailVehicule } from "./src/DetailVehicule"
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, TouchableOpacity, Text } from 'react-native';
import cars from './cars';

const Stack = createStackNavigator();



export default function App(props) {

  const name = cars.map((item) => {
    return item.name
  })

  const LogoTitle = () => {
    return (
      <Image style={{ width: 75, height: 75 }} source={require("./assets/logo-transparent.png")} />
    )
  }

  const Filter = () => {
    return (
      <TouchableOpacity
        onPress={() => alert('Right Menu Clicked')}
        style={{ marginRight: 10 }}>
        <Text style={{ color: 'white', fontSize: 20 }}>Filtres</Text>
      </TouchableOpacity>
    )
  }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: "#2D4F6C"
        },
        headerTintColor: "white",
        headerTitleAlign: 'center',
        fontWeight: "bold"
      }}>
        <Stack.Screen name="Home" component={Home} options={{ headerTitle: () => <LogoTitle /> }} />
        <Stack.Screen name="ListVehicules" component={ListVehicules} options={{
          title: 'Nos véhicules',
          headerRight: () => <Filter />
        }} />
        <Stack.Screen name="DetailVehicule" component={DetailVehicule} options={({ route }) =>
        ({
          title: route.params.item.name,
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}