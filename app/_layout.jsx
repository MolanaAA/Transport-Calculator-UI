import { Stack } from 'expo-router';
import React from 'react';

const TabLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#E1F7FF'
        },
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 15,
        },
      }}
    >
      <Stack.Screen name="login" options={{ headerShown: false }} />
      <Stack.Screen name="home" options={{ headerShown: false }} />
      <Stack.Screen
        name="vanpg1"
        options={{
          title: 'Transportation Costs for 3.5 ton Van',
          headerStyle: {
            backgroundColor: '#E1F7FF'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen name="truckpg1" options={{ title: 'Transportation Costs for 24-ton Truck',headerStyle: {
            backgroundColor: '#E1F7FF'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          headerTitleAlign: 'left',
        }} />
      <Stack.Screen name="vanpg2" options={{ title: 'Trip Calculator', headerStyle: {
            backgroundColor: '#E1F7FF'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          headerTitleAlign: 'left',
        }} />
      <Stack.Screen name="truckpg2" options={{ title: 'Trip Calculator', headerStyle: {
            backgroundColor: '#E1F7FF'
          },
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 15,
          },
          headerTitleAlign: 'left',
        }} />
    </Stack>
  );
};

export default TabLayout;
