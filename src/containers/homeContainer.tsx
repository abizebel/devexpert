import React, {Component} from 'react';
import {View, Text} from 'react-native';


class HomeContainer extends Component <{},{}> {
    constructor (props : any){
        super(props)
    }


    render (){
        return (
            <View>
                <Text>Home container is here</Text>
            </View>
        )
    }
}



export default HomeContainer;
