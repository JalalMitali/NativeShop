import React from 'react';
import {
   View, 
   StyleSheet,
   Image,
   TouchableOpacity,
   Text
 } from 'react-native';
import Colors from '../Utils/Colors';

 const Ad = () => {
   return (
        <View style={styles.AdContainer}>
          <Image source={{uri: 'https://picsum.photos/500/500'}} style={styles.burgerImg} />
          <Text style={styles.specialDiscount}>Get Special Discount</Text>
          <Text style={styles.discount}>UP TO 85% OFF</Text>
          <TouchableOpacity style={styles.discountButton} onPress={() => {}}>
            <Text style={styles.discountButtonText}>Claim Voucher</Text>
          </TouchableOpacity>
        </View>
   );
 }
 const styles = StyleSheet.create({
   AdContainer: {
     marginTop: 20,
     flexDirection: 'row-reverse',
     backgroundColor: Colors.Burger,
     alignSelf: 'stretch',
     justifyContent: 'space-between',
     height: 150
   },
   burgerImg: {
     height: '100%',
     resizeMode: 'stretch',
     width: 200,
     paddingStart: 15,
     borderTopLeftRadius: 10,
     borderBottomLeftRadius: 10
   },
   discount: {
    position: 'absolute',
    fontWeight: '500',
    tintColor: Colors.white,
    color: Colors.white,
    fontSize: 16,
    top: 45,
    right: 30,
    height: 50,
    width: 150
   },
   specialDiscount: {
    position: 'absolute',
    fontWeight: '100',
    tintColor: Colors.white,
    color: Colors.white,
    fontSize: 16,
    top: 15,
    right: 20,
    height: 50,
    width: 150
   },
   discountButton: {
    position: 'absolute',
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 15,
    bottom: 15,
    right: 15,
    height: 50,
    width: 150
   },
   discountButtonText: {
    fontWeight: 'bold',
    tintColor: Colors.Burger,
    color: Colors.Burger,
    fontSize: 16
   },
   discountIcon: {
      position: 'absolute',
      top: 40,
      fontSize: 32,
      right: 50,
   }
 });
 export default Ad;
