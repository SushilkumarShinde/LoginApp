import {createStackNavigator} from '@react-navigation/stack';
import Register from '../Components/Register';
import Login from '../Components/Login';
import Pokemons from '../Components/Pokemons';
import PokemonDetails from '../Components/PokemonDetails';
import React from 'react';

const Stack = createStackNavigator();

export default function MyStack() {
  return (
    <Stack.Navigator screenOptions={{headerMode: 'screen'}}>
      <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Pokemons"
        component={Pokemons}
        options={{headerShown: true}}
      />
      <Stack.Screen
        name="PokemonDetails"
        component={PokemonDetails}
        options={{headerShown: true}}
      />
    </Stack.Navigator>
  );
}
