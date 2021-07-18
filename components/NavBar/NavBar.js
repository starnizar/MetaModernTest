import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../HomePage/HomePage';
import Favorite from '../Favorite/Favorite';
import Search from '../Search/Search';
import Cart from '../Cart/Cart';



const NavBar = () => {

    const Tab = createBottomTabNavigator();
  
    return (
        <Tab.Navigator
            tabBarOptions={{
                style:{
                    height: 100,
                    shadowOffset:{width:2, height:2},
                    shadowColor:'rgba(0, 0, 0, 0.15)',
                    shadowRadius: 16,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    border: 'none',
                    
                },
            }}
        >
            <Tab.Screen name='Home' component={Home}/>
            <Tab.Screen name='Favorite' component={Favorite}/>
            <Tab.Screen name='Search' component={Search}/>
            <Tab.Screen name='Cart' component={Cart}/>
        </Tab.Navigator>
    );
};

export default NavBar;