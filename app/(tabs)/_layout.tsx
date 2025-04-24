import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons name = {focused ? 'home' : 'home-outline'} size = {24} color = {focused ? 'blue' : 'gray'}/>
          )
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Categorias',
          tabBarIcon: ({ focused }) => (
            <Ionicons name = {focused ? 'pricetag' : 'pricetag-outline'} size = {24} color = {focused ? 'blue' : 'gray'}/>
          )
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: 'Sobre Mim',
          tabBarIcon: ({ focused }) => (
            <Ionicons name = {focused ? 'person-circle' : 'person-circle-outline'} size = {24} color = {focused ? 'blue' : 'gray'}/>
          )
        }}
      />
    </Tabs>
  );
}