import React from 'react';
import {
   View, 
   StyleSheet
 } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from './Utils/Colors';
import { useAppSelector } from './tools/hooks';
 
 const BottomBar = () => {
   const active = useAppSelector((state) => state.store.activeNav)
   return (
        <View style={styles.bottomBar}>
           <CommunityIcon name="home-outline" size={40} color="#fff" style={active == 'home' ? styles.active : styles.bottomIcon} />
           <Icon name="favorite-outline" size={40} color="#fff" style={active == 'favorite' ? styles.active :  styles.bottomIcon} />
           <CommunityIcon name="shopping-outline" size={40} color="#fff" style={active == 'cart' ? styles.active :  styles.bottomIcon} />
           <CommunityIcon name="account-circle-outline" size={40} color="#fff" style={active == 'profile' ? styles.active : styles.bottomIcon} />
        </View>
   );
 }
 const styles = StyleSheet.create({
  bottomBar: {
    backgroundColor: Colors.Black,
    opacity: 30,
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 35,
   },
  bottomIcon: {
    backgroundColor: Colors.white,
    color: Colors.Black,
    position: 'relative',
    borderRadius: 20,
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
    overflow: 'hidden',
    top: 10,
    marginBottom: 50
   },
  active: {
    backgroundColor: Colors.Burger,
    color: Colors.white,
    position: 'relative',
    borderRadius: 20,
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
    overflow: 'hidden',
    top: 10,
    marginBottom: 50
  },
 });
 export default BottomBar;