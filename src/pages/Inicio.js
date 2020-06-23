import React, { Component } from 'react'
import { ScrollView, StyleSheet,TouchableOpacity, } from 'react-native'
import Cartao  from "../components/Cartao";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import NavB from "../components/Navegacaoinferior";
import Icon from 'react-native-vector-icons/FontAwesome5';
import firebase from "../firebase";
import firestore from '@react-native-firebase/firestore';
import { View, Text } from 'native-base';



export default class Inicio extends Component {


    


    constructor(props){
        super(props);
        this.state ={
            logados :false,
            produtos:[]
        }
    }
 


    //puxa os produtos
    pegaProdutosBase = async ()=>{
        const datas = []
        const dados = await firestore().collection('produtos').get().then((data) => {
            
            data.docs.map(doc =>(
                datas.push(doc._data)
            ))
            return datas
          })

          this.setState({
              produtos:dados
          })

        // const result = (dados.docs.map(doc =>({
        //     ...doc.data(),id:doc.id
            
        // }
        // )))
    }




    componentDidMount(){
        console.disableYellowBox = true 
        const {setParams} = this.props.navigation;
        setParams({logados:false});

        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                console.log('logado')
                setParams({logados:true});
                this.setState({
                    logados:true,
                });
            }else{
                setParams({logados:false});
                this.setState({
                    logados:false,
                });
            }      
        }); 


        this.pegaProdutosBase();
    }


    
   


    
    static navigationOptions = ({navigation})=> {
        const { params = {} } = navigation.state;
        return(
            
            {
            headerLeft:() => (
                <TouchableOpacity onPress={()=>{}} style={style.icone}>
                    <Icon name={'ellipsis-v'}  color='#ecb2b2' size={21} iconStyle={style.icone} />
                </TouchableOpacity>
            ),
            headerTitle:() => (
                <Icon name={'kiss-wink-heart'}  color='#ecb2b2' size={21} iconStyle={style.Titulo} > Delicias da Rosa</Icon>
            ),
            headerRight:() => (
                <TouchableOpacity onPress={() => navigation.navigate(params.logados ? 'Admin' : 'Login')} style={style.icone}>
                    <Icon name={params.logados ? 'users-cog' : 'user'} color='#ecb2b2' size={21} iconStyle={style.icone} />
                </TouchableOpacity>
            ),
        })
       
    }






    render() {
        const data = ()=> Array.from(this.state.produtos)
        return (
                <>
                
                <ScrollView style={style.container}>
                    <View>
                        <Text style={style.textoTitulo}>Destaques</Text>
                    </View>
                    <ScrollView
                        showsHorizontalScrollIndicator={false}
                        scrollEventThrottle={200}
                        horizontal={true}
                        decelerationRate={0}
                        pagingEnabled
                        snapToInterval={340 - (20 + 20)}
                        snapToAlignment={"center"}
                        disableIntervalMomentum={ true } 
                    >
                        {
                            data().map(
                                (doc)=>{
                                    if(doc.destaque === '1'){
                                        return(
                                            <View style={style.slideCartao}>
                                                <Cartao
                                                img={doc.imagem}
                                                nome={doc.nome}
                                                categoria={doc.categoria}
                                                valor={doc.valor}/>
                                            </View>
                                        )
                                    }
                                }
                            )
                        }
                        
                    </ScrollView>

                    <View>
                        <Text style={style.textoTitulo}>Delicias</Text>
                    </View>


                   {
                    data().map(
                        (doc)=>{
                            if (doc.quantidadeEstoque > 0) {
                                return(
                                    <Cartao
                                        img={doc.imagem}
                                        nome={doc.nome}
                                        categoria={doc.categoria}
                                        valor={doc.valor}
                                        
                                    />
                                )
                            }
                        }
                    )
                        
                   }
                    <View style={style.Cartao}></View>
                </ScrollView>
                <NavB 
                    navegarCarrinho = {() => this.props.navigation.navigate('Carrinho')}
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
        backgroundColor:'#FFFFFF',
        paddingBottom:30
    },
    slideCartao:{
        width:300,
        marginBottom:10
    },
    textoTitulo:{
        justifyContent:"center",
        fontSize:21,
        color:'#ecb2b2',
        marginLeft:20,
        fontWeight:'bold'
    },
    Cartao:{
        marginBottom:10
    }


  })