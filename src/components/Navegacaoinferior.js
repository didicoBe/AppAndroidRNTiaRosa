import React, { Component } from 'react'
import { View , StyleSheet} from 'react-native'
import { Container, Header, Content, Footer, FooterTab, Button } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

import Inicio from '../pages/Inicio';


const MusicRoute = () => <Text>Music</Text>;

const AlbumsRoute = () => <Text>Albums</Text>;

const RecentsRoute = () => <Text>Recents</Text>;








export default class Navegacaoinferior extends Component {
  
  


  render() {
    return (
      
      <Footer >
        <FooterTab style={style.fundo}>
            <Button onPress={this.props.navegarCarrinho}>
              <Icon name="shopping-cart" style={style.icone} />
            </Button>
            <Button onPress={this.props.ligar}>
              <Icon name="phone" style={style.icone}/>
            </Button>
            <Button onPress={this.props.whatsapp}>
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