import React, {Component} from 'react';
import {View, Text} from 'react-native';


class WelcomeContainer extends Component <{},{}> {
    constructor (props : any){
        super(props)
    }

    render (){
        return (
            <View style={styles.header}>
                <Text>welcome sss is here</Text>
            </View>
        )
    }
}

const styles = {
    header : {

    }
}


export default WelcomeContainer;
