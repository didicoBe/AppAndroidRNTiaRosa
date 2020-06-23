import React, { Component } from 'react'
import { Text, View , Button} from 'react-native'
import firebase from "../firebase";

export default class Admin extends Component {



    componentDidMount(){
        firebase.auth().onAuthStateChanged((user)=>{
            if (user) {
                // console.log(user);
                // console.log('logado');
                this.setState({
                    logado:true,
                });
            }else{
                this.props.navigation.navigate('Login')
            }      
            }) 
    }






    sair = ()=>{
        const fire =  firebase.auth()
        fire.signOut()
        const {setParams} = this.props.navigation;
        setParams({logados:false});
        this.props.navigation.navigate('Home')
    }



    render() {
        return (
            <View>
                <Text> admin </Text>
                <Button
                onPress={this.sair}
                title="Sair"
                color="#841584"
                />
            </View>
        )
    }
}
