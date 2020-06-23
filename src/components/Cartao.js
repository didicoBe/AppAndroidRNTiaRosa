import React, { Component } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button, Card} from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Cartao extends Component {
    render() {
        return (
            <View>
                <Card
                    image={{uri: this.props.img}}
                    containerStyle={style.estiloCartao}
                    imageStyle={style.estiloImg}
                >
                    
                    <View style={style.conteudoCartao}>
                        <Icon name={'cart-plus'} style={style.iconeStilo}/>


                        <View>
                            <Text style={style.textoCartao1} >
                                {this.props.categoria}
                            </Text>
                            <Text style={style.textoCartao2} >
                                {this.props.nome}
                            </Text>
                        </View>


                        <View>
                            <Text style={style.textoValor}>
                                R$ {this.props.valor}
                            </Text>
                        </View>
                       
                    </View>
                </Card>
            </View>
        )
    }
}

const style = StyleSheet.create({
    estiloCartao:{
        borderRadius:25
    },
    estiloImg:{
        borderTopLeftRadius:25,
        borderTopRightRadius:25
    },
    conteudoCartao:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        padding: 15,
    },
    iconeStilo:{
        fontSize:21,
        color:'#ecb2b2'
    },
    textoCartao1:{
        fontSize:16,
        color:'#ecb2b2',
        fontWeight:"bold",
        textAlign:"center"
    },
    textoCartao2:{
        fontSize:12,
        color:'#ecb2b2',
        textAlign:"center"
    },
    textoValor:{
        fontSize:12,
        color:'#ecb2b2'
    }

})