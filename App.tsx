import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView, View
} from 'react-native';
import { Provider } from 'react-redux';
import AppBar from './src/AppBar';
import BottomBar from './src/BottomBar';
import Main from './src/Home/Main';
import store from './src/tools/store';
import Colors from './src/Utils/Colors';

const App = () => {
 
  return (
    <Provider store={store}>
      <SafeAreaView>
        <View style={{flex: 1,
    backgroundColor: Colors.background}}>
        <AppBar />
        <Main />
        </View>
      </SafeAreaView>
      <BottomBar />
    </Provider>
  );
};


export default App;
