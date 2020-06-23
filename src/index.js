import React, { Component } from 'react';
import { Text, View } from "react-native";
import { Root } from "native-base";
import  Inicio  from "./pages/Inicio";

import "./config/StatusBarConfig";


import { createAppContainer } from "react-navigation";


import Routes from './routes'

export default class Home extends Component {

    render() {
        return (    
                    <Root>
                        <Routes/>
                        
                    </Root>
                    
                
        );
    }
}
