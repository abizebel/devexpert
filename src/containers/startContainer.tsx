import React, {Component} from 'react';
import {
  View, 
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
  ImageBackground,
  Alert
} from 'react-native';
import { Button, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import LinearGradient from 'react-native-linear-gradient';

import { NativeRouter, Route, Link } from "react-router-native";



export interface Props {
  name: string ;
  history : any;
  match: any;
}

export interface State {
}



class StartContainer extends Component <Props, State> {
  constructor (props : Props)  {
    super(props)
  }
  render (){
    const { history, match } = this.props;
    return (
      <View style={styles.container}>

      <ImageBackground source={require('../bg.jpg')} style={{width: '100%', height: '100%'}}>
        <View >
          <Text style={styles.title}>برنامه نویس فرانت</Text>
        </View>
        <View >
          <Text style={styles.subtitle}>یادگیری و اشتراک تجربه</Text>
        </View>
        <View >
          <Text style={styles.description}>یاد گیری مباحث تخصصی و مشارکت در پرسش و پاسخ و یافتن شغل </Text>
        </View>
        <View style={styles.buttonContainer}>
              <Button 
              onPress={()=>{
                history.push('/home')
              }}
              ViewComponent={LinearGradient} // Don't forget this!
              linearGradientProps={{
                colors: ['#FFC107', '#B78C09'],
                start: { x: 0, y: 0.5 },
                end: { x: 1, y: 0.5 },
              }}
              buttonStyle={styles.startButton}
              title="شروع یادگیری" 
              titleStyle={{ fontFamily:'IRANSansMobile(FaNum)_Medium' }} />
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
    marginTop: 60,
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
  buttonContainer : {
    flex:1, 
    justifyContent:'center',
    alignItems:'center',
  },
  startButton : {
    padding:10,
    width:300,
    borderRadius:50,
  

  }

})

export default StartContainer