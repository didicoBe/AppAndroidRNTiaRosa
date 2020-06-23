import React, { Component } from 'react'
import { View , StyleSheet, Linking} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Inicio from '../pages/Inicio';


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;








export default class Navegacaoinferior extends Component {
  
  ligar = ()=>{
    Linking.openURL(`tel:11967645234`)
  }


  whatsapp = ()=>{
    const number = '5511967645234'
    const message = 'Ola gostaria de informações do app'
    Linking.openURL('https://api.whatsapp.com/send?phone=' + number + '&text=%20' + message)
  }

  render() {
    return (
      
      <Footer >
        <FooterTab style={style.fundo}>
            <Button onPress={this.props.navegarCarrinho}>
              <Icon name="shopping-cart" style={style.icone} />
            </Button>
            <Button onPress={this.ligar}>
              <Icon name="phone" style={style.icone}/>
            </Button>
            <Button onPress={this.whatsapp}>
              <Icon active name="whatsapp" style={style.icone}/>
            </Button>
        </FooterTab>
    </Footer>
    )
  }
}


const style = StyleSheet.create({
  icone:{
    color:'#FFFFFF',
    fontSize:20
  },
  fundo:{
    backgroundColor:'#ecb2b2'
  }
})