import React, { Component } from 'react'
import { Text, View,ScrollView, StyleSheet, } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button } from 'native-base';

import NavB from "../components/Navegacaoinferior";

export default class Login extends Component {
    render() {
        return (
            <Container>
            
                <Content style={style.container}>
                    <Form >
                        <Item floatingLabel>
                            <Label>Usuario</Label>
                            <Input />
                        </Item>
                        <Item  floatingLabel last>
                            <Label>Senha</Label>
                            <Input secureTextEntry={true} />
                        </Item>
                        
                    </Form>
                    <Button rounded>
                        <Text>Primary</Text>
                    </Button>
                </Content>
                
            
            <NavB navegarCarrinho = {() => this.props.navigation.navigate('Cart')}/>
            </Container>
        )
    }
}

const style = StyleSheet.create({
    container:{
        
    }
})

