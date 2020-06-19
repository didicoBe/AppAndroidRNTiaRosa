import React from 'react'
import {  StyleSheet,TouchableOpacity} from 'react-native'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer,NavigationActions } from "react-navigation";




import Inicio from "./pages/Inicio";
import Carrinho from "./pages/carrinho";
import Login from "./pages/Login";

import { Button } from "react-native-elements";






export default createAppContainer(
  

    createStackNavigator(
        {
            Home :{
                screen: Inicio,
                name:'Home',
                navigationOptions: ()=> ({
                    
                })
            },
            Carrinho:{
              screen: Carrinho,
              name:'Carrinho',
                navigationOptions: ()=> ({
                    
                })
            },
            Login:{
                screen: Login,
                name:'Login',
                  navigationOptions: ()=> ({
                      
                  })
            }
           
        },
        {
            
            initialRouteName: 'Home',
            defaultNavigationOptions: {
              headerTitleAlign: 'center',
              headerStyle: {
                backgroundColor: '#fff',
                elevation:0,    
                height: 80,
              },
              headerTintColor: '#ecb2b2',
              headerTitleStyle: {
                fontWeight: 'bold',
                alignSelf: 'center'
              },
              
              
            },
        }
        
    )

   

)