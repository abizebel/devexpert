import React, {Component} from 'react';
import {View, 
  Text, 
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';
//import LinearGradient from 'react-native-linear-gradient';




export interface Props {
  name: string ;
}

export interface State {
}



class StartContainer extends Component <Props, State> {
  constructor (props : Props)  {
    super(props)
  }
  render (){
    return (
     
      <View style={styles.container}>
        <Text>asdasd</Text>
        {/* <LinearGradient colors={['#4c669f', '#3b5998', '#192f6a']} style={styles.linearGradient}>

          <Image source={require('../bg.jpg')} />
        </LinearGradient> */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container : {},
  bg : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,

  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5
  },
})

export default StartContainer