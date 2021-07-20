import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../HomePage/HomePage';
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';
import Icon from 'react-native-vector-icons/FontAwesome5'



const NavBar = () => {

    const Tab = createBottomTabNavigator();
  
    return (
        <Tab.Navigator
            tabBarOptions={{
                activeTintColor:'#317AE8',
                inactiveTintColor:'#939399',
                showLabel:false,
                style:{
                    height: 100,
                    shadowOffset:{width:2, height:2},
                    shadowColor:'rgb(0, 0, 0)',
                    shadowOpacity:0.15,
                    shadowRadius: 16,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                },
            }}
            screenOptions={({route}) => ({
                tabBarIcon: ({color}) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Favorite') {
                        iconName = 'heart';
                    } else if (route.name === 'Search') {
                        iconName = 'search';
                    } else if (route.name === 'Cart') {
                        iconName = 'shopping-cart';
                    }
                    return <Icon name={iconName} size={32} color={color}/>
                }
            })}
        >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Favorite' component={Favorite}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='Cart' component={Cart}/>
        </Tab.Navigator>
    );
};

export default NavBar;