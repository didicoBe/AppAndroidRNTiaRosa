import React, { Component } from 'react';
import { Text, View } from "react-native";
import  Inicio  from "./pages/Inicio";
import "./config/StatusBarConfig";


import { createAppContainer } from "react-navigation";


import Routes from './routes'

export default class Home extends Component {

    render() {
        return (    
                    <>
                        <Routes/>
                        
                    </>
                    
                
        );
    }
}
