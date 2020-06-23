import React, { Component } from 'react'
import { Container, Header, Content, List, ListItem, Left, Body, Right, Thumbnail, Text,Button } from 'native-base';

import NavB from "../components/Navegacaoinferior";

export default class Carrinho extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <List>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                        <ListItem thumbnail>
                            <Left>
                                <Thumbnail square source={{ uri: 'Image URL' }} />
                            </Left>
                            <Body>
                                <Text>Sankhadeep</Text>
                                <Text note numberOfLines={1}>Its time to build a difference . .</Text>
                            </Body>
                            <Right>
                                <Button transparent>
                                <Text>View</Text>
                                </Button>
                            </Right>
                        </ListItem>
                       
                      
                    </List>
                </Content>
                <NavB 
                navegarCarrinho = {() => this.props.navigation.navigate('Carrinho')}
                ligar={()=>{}}
                whatsapp={()=>{}}
            />
            </Container>
            
            
        )
    }
}
