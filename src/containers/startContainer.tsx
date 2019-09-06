import React, {Component} from 'react';
import {View, 
  Text, 
  StyleSheet,
  ScrollView,
  Dimensions,
  Image
} from 'react-native';


import LinearGradient from 'react-native-linear-gradient';




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
        <View style={styles.bg}>
          <Image source={require('../bg.jpg')} />
        </View>
        <View >
          <Text style={styles.title}>برنامه نویس فرانت</Text>
          
        </View>
      </View>

    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    alignItems:'center',
  },
  bg : {
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  title : {
    color : '#fff',
    fontFamily : 'IRANSansMobile(FaNum)_Medium',
    flexGrow : 1,
    flex:1,
    alignItems:'center',
    justifyContent:'center',
    fontSize :36,
  }

})

export default StartContainer