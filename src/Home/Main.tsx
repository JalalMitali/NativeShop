import React from 'react';
import {
    View,
    StyleSheet,
    ScrollView
 } from 'react-native';
import Ad from '../Components/Ad';
import SearchBar from '../Components/SearchBar';

 const Main = () => {
   return (  <View style={styles.container}>
            <Ad />
            <SearchBar />
            <ScrollView style={{ flexDirection: 'row', height: 120, }} horizontal showsHorizontalScrollIndicator={false}>
            </ScrollView>
        </View>
   );
 }
 const styles = StyleSheet.create({
   container: {

   },
 });
 export default Main;
