import React, {Component} from 'react';
import {View, 
  Text, 
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  Alert
} from 'react-native';
import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

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


      <ImageBackground source={require('../bg.jpg')} style={{width: '100%', height: '100%'}}>
        <View >
          <Text style={styles.title}>برنامه نویس فرانت</Text>
        </View>
        <View >
          <Text style={styles.subtitle}>یاد گیری و اشتراک تجربه</Text>
        </View>
        <View >
          <Text style={styles.description}>یاد گیری مباحث تخصصی و مشارکت در پرسش و پاسخ و یافتن شغل </Text>
        </View>
        <View >
        <Button

          title="شروع یادگیری"
          ViewComponent={LinearGradient} // Don't forget this!
          linearGradientProps={{
            colors: ['#FFC107', '#D8A40A'],
            start: { x: 0, y: 0.5 },
            end: { x: 1, y: 0.5 },
          }}
        />


        </View>
        

      </ImageBackground>
    </View>

    )
  }
}

const styles = StyleSheet.create({
  container : {
    flex:1,
    flexDirection:'column',
    backgroundColor:'red',
    justifyContent:'flex-start'
    
  },
  bg : {
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height,
  },
  title : {
    textAlign:'center',
    color : '#fff',
    fontFamily : 'IRANSansMobile(FaNum)_Medium',
    fontSize :36,
    marginBottom: 120,
    marginTop: 60
  },
  subtitle : {
    textAlign:'center',
    color : '#fff',
    fontFamily : 'IRANSansMobile(FaNum)_Medium',
    fontSize :20,

  },
  description : {
    textAlign:'center',
    color : '#fff',
    fontFamily : 'IRANSansMobile(FaNum)_Medium',
    fontSize :13,
  },
  startButton : {
    fontFamily : 'IRANSansMobile(FaNum)_Medium',

  }

})

export default StartContainer