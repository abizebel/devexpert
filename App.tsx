
import React, {Fragment, Component} from 'react';
import HomeContainer from './src/containers/homeContainer';
import StartContainer from './src/containers/startContainer';
import { NativeRouter, Route, Link } from "react-router-native";



class App extends Component <{}, {}> {
  constructor (props : any) {
    super(props)
  }
  
  render (){
    return (
      <NativeRouter>


        <Route exact path="/" component={StartContainer} />
        <Route exact path="/home" component={HomeContainer} />
      </NativeRouter>

    )
  }

}

export default App;
