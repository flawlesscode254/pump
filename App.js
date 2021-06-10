import * as React from 'react';
import { View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Icon } from 'react-native-elements'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/home_page'
import SearchScreen from './components/home'
import AddScreen from './screens/add'
import ReelsScreen from './screens/reels'
import YouScreen from './screens/you'

function MyTabBar({ state, descriptors, navigation }) {
  return (
    <View style={{ 
      flexDirection: 'row',
      padding: 5
      }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ 
              flex: 1
            }}
          >
            <Icon
              size={35}
              color={isFocused ? "black" : "gray"}
              name={label == "Home" ? "home" : label == "Search" ? "search" : label == "Add" ? "add-circle-outline" : label == "Reels" ? "ondemand-video" : "person"}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Add" component={AddScreen} />
        <Tab.Screen name="Reels" component={ReelsScreen} />
        <Tab.Screen name="You" component={YouScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
