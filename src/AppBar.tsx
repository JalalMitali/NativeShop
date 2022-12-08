import React from 'react';
import {
   View, 
   StyleSheet,
   Text
 } from 'react-native';
import CommunityIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Colors from './Utils/Colors';


const AppBar = () => {
    return (
         <View style={styles.container}>
           <View style={styles.gamePad}>
             <CommunityIcon name="gamepad-circle-outline" size={30} color="#000" style={styles.gamepad} />
           </View>
           <View style={styles.location}>
           <Text style={styles.locationText}>Current Location</Text>
           <View style={styles.currentLocation}>
               <Icon name="location-on" size={20} color="#1E5631" style={styles.locationIcon} />
               <Text style={styles.currentLocationText}>Casablanca, Morocco</Text>
             </View>
           </View>
           <View style={styles.notifications}>
             <Icon name="circle" size={10} color="#E3242B" style={styles.badgeIcon} />
             <Icon name="notifications-none" size={30} color="#000" style={styles.notificationsIcon} />
           </View>
         </View>
    );
  }
  const styles = StyleSheet.create({
    container: {
     flexDirection: 'row',
     height: 50,
     justifyContent: 'space-between',
     alignContent: 'space-between',
    },
    text: {
     color: Colors.white,
    },
    gamePad: {
       margin: 10,
       justifyContent: 'center',
       alignItems: 'center',
       alignContent: 'center',
       backgroundColor: Colors.white,
       width: 50,
       height: 50,
       borderRadius: 10,
    },
    gamepad: {
       transform: [{rotateZ: '45deg'}],
    },
    notifications: {
       margin: 10,
       backgroundColor: Colors.white,
       justifyContent: 'center',
       alignItems: 'center',
       alignContent: 'center',
       width: 50,
       height: 50,
       borderRadius: 10,
     },
     notificationsIcon: {
     },
    location: {
      margin: 10,
       flexDirection: 'column',
    },
    currentLocation: {
      flexDirection: 'row',
   },
    currentLocationText: {
       fontSize: 20,
       color: Colors.Black
   },
   locationText: {
     fontSize: 15,
     color: Colors.DarkGray,
     textAlign: 'center',
   },
   badgeIcon: {
     position: 'absolute',
     paddingLeft: 15,
     paddingBottom: 10,
   },
   locationIcon: {
     marginRight: 10,
   }
  });

export default AppBar;
