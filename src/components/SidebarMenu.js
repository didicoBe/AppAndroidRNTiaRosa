import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { Drawer } from 'native-base';

export default class SidebarMenu extends Component {




    closeDrawer = () => {
        this.drawer._root.close()
      }

    openDrawer = () => { 
        this.drawer._root.open() 
    }


    render() {
        return (
            <Drawer 
                ref={(ref) => { this.drawer = ref; }} 
                content={<Text>aqui</Text>} 
                onClose={() => this.closeDrawer()} >
            </Drawer>
        )
    }
}
