import React, { Component } from 'react'
import { Text, View, ScrollView } from 'react-native'

import NavB from "../components/Navegacaoinferior";

export default class Carrinho extends Component {
    render() {
        return (
            <>
            <ScrollView>
                <Text> Carrinho </Text>
                
            </ScrollView>
            <NavB 
                navegarCarrinho = {() => this.props.navigation.navigate('Carrinho')}
                ligar={()=>{}}
                whatsapp={()=>{}}
            />
            </>
        )
    }
}
