import React, { Component } from 'react'
import { Text, View,ScrollView, StyleSheet,TextInput } from 'react-native'
import { Container, Content, Form, Item, Input, Label, Button,Grid, Col,Toast  } from 'native-base';
import firebase from "../firebase";

import NavB from "../components/Navegacaoinferior";






export default class Login extends Component {
    
      

      state = {
        showToast: true,
        usuario:'',
        senha:'',
        logado: false

    }


   logar = ()=>{

        let usuario  = this.state.usuario;
        let senha = this.state.senha;
    
        
    
        if(usuario !== '' && senha !== ''){


            firebase.auth().signInWithEmailAndPassword(usuario, senha).then(user => {
                Toast.show({
                    text: "Logado com sucesso",
                    buttonText: "Okay",
                    type: "success"
                })
                this.props.navigation.navigate('Home')
            }).catch(
                erro => {
                    Toast.show({
                        text: "E-mail invalido",
                        buttonText: "Okay",
                        type: "danger"
                    })
                }
            )

        }else{
            Toast.show({
                text: "Usuario e senha não podem ser vazio",
                buttonText: "Okay",
                position: "top",
                type:'warning'
              })
        }       
    }
    
    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                // console.log(user);
                // console.log('logado');
                this.setState({
                    logado:true,
                });
            }else{
                this.setState({
                    logado:false,
                });
            }      
            }) 
    }





    render() {

        if(this.state.logado){
            return this.props.navigation.navigate('Home')
        }else{
            return (
                <Container >
                    
                    <Content contentContainerStyle={{flex: 1}} style={{padding: 50}}>
                        <Grid style={{alignItems: 'center'}}>
                            <Col>
                                <Form >
                                    <Item floatingLabel>
                                        <Label>Usuario</Label>
                                        <Input 
                                            value={this.state.usuario}
                                            onChangeText={val => this.setState({ usuario: val })}
    
                                        />
                                    </Item>
                                    <Item  floatingLabel>
                                        <Label>Senha</Label>
                                        <Input 
                                            secureTextEntry={true}
                                            value={this.state.senha}
                                            onChangeText={val => this.setState({ senha: val })}
                                        />
                                    </Item>
                                    
                                </Form>
                                <Button rounded style={style.botao} onPress={this.logar}>
                                    <Text style={style.textobtn}>Entrar</Text>
                                </Button>
                            </Col>
                        </Grid>
                    </Content>
                    
                
                <NavB navegarCarrinho = {() => this.props.navigation.navigate('Cart')}/>
                </Container>
            )
        }






       
    }
}

const style = StyleSheet.create({
    container:{
        width:'65%',
        justifyContent:'space-between'
    },
    botao:{
        marginTop:35,
        justifyContent:'center',
        backgroundColor:'#ecb2b2'
    },
    textobtn:{
        color:'#fff',
        fontWeight:'bold',
        fontSize:18
    }
})

