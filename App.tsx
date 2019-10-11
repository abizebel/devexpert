
import React, {Fragment, Component} from 'react';
import HomeContainer from './src/containers/homeContainer';
import WelcomeContainer from './src/containers/welcomeContainer';
import SingleContainer from './src/containers/singleContainer';
import StartContainer from './src/containers/startContainer';
import { NativeRouter, Route, Link } from "react-router-native";



class App extends Component <{}, {}> {
  constructor (props : any) {
    super(props)
  }
  
  render (){
    return (
      <NativeRouter>


        <Route exact path="/home" component={StartContainer} />
        <Route exact path="/" component={SingleContainer} />
      </NativeRouter>

    )
  }

}

export default App;
