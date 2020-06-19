import React, { Component } from 'react'
import { Text, ScrollView, StyleSheet,Button,TouchableOpacity, View } from 'react-native'
import Cartao  from "../components/Cartao";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NavB from "../components/Navegacaoinferior";
import Icon from 'react-native-vector-icons/FontAwesome5';









export default class Inicio extends Component {

    
    static navigationOptions = ({navigation})=> {
        return({
            headerLeft:() => (
                <TouchableOpacity onPress={()=>{}} style={style.icone}>
                    <Icon name={'ellipsis-v'}  color='#ecb2b2' size={21} iconStyle={style.icone} />
                </TouchableOpacity>
            ),
            headerTitle:() => (
                <Icon name={'kiss-wink-heart'}  color='#ecb2b2' size={21} iconStyle={style.Titulo} > Delicias da Rosa</Icon>
            ),
            headerRight:() => (
                <TouchableOpacity onPress={() => navigation.navigate('Login')} style={style.icone}>
                    <Icon name={'user'} color='#ecb2b2' size={21} iconStyle={style.icone} />
                </TouchableOpacity>
            ),
        })
       
    }



    render() {
        return (
                <>
                <ScrollView style={style.container}>
                    <Cartao/>
                    <Cartao/>
                    <Cartao/>
                    <Cartao/>
                    <Cartao/>
                    <Cartao/>
                    
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


const style = StyleSheet.create({
    icone:{
      paddingLeft:25,
      paddingRight:25
    },
    Titulo:{
        justifyContent:"center",
        fontSize:21,
        color:'#ecb2b2',
    },
    container:{
        backgroundColor:'#FFFFFF'
    }

  })