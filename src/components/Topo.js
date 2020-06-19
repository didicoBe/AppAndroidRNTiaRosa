import React, { Component } from 'react';
import { View, StyleSheet } from "react-native";
import { Header,Button } from "react-native-elements";
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class Topo extends Component {
  render() {
    return (
          <Header
            leftComponent={
              <Button
              type="clear"
              icon={<Icon name={'ellipsis-v'}  color='#ecb2b2' size={21} iconStyle={style.icone} />}
              />
            }
            centerComponent={<Icon name={'kiss-wink-heart'}  color='#ecb2b2' size={21} iconStyle={style.icone} > Delicias da Rosa</Icon>}
            rightComponent={
              <Button
              type="clear"
              icon={<Icon name={'user'} color='#ecb2b2' size={21} iconStyle={style.icone} />}
              />
            }
            statusBarProps={{ barStyle: 'light-content' }}
            barStyle="light-content" // or directly
            containerStyle={{
              backgroundColor: '#',
              justifyContent: 'space-around',
            }}
            />
    );
  }
}


const style = StyleSheet.create({
  icone:{
    marginLeft:15,
    marginRight:15
  }
})