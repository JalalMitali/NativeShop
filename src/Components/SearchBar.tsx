import React from 'react';
import {
   View, 
   StyleSheet,
   TextInput
 } from 'react-native';
import Colors from '../Utils/Colors';
import Icon from 'react-native-vector-icons/MaterialIcons';
 
 const SearchBar = () => {
  const [text, onChangeText] = React.useState("Find Your Food...");
   return (
        <View style={styles.searchBar}>
          <Icon name="search" size={10} color="#000" style={styles.searchIcon} />
          <TextInput
          style={styles.searchText} 
          onChangeText={onChangeText}
          placeholder={text} /> 
        </View>
   );
 }
 const styles = StyleSheet.create({
   searchBar: {
     marginTop: 20,
     marginBottom: 20,
     marginLeft: 30,
     marginRight: 30,
     height: 50,
     flexDirection: 'row',
     backgroundColor: Colors.white,
     borderRadius: 15,
   },
   searchIcon: {
     fontWeight: '400',
     width: 50,
     height: 50,
     fontSize: 28,
     marginLeft: 20,
     marginTop: 10,
   },
   searchText: {
     color: Colors.DarkGray,
     fontSize: 20,
     alignContent: "center",
    justifyContent: "center",
    alignSelf: "center"
   }
 });
 export default SearchBar;
