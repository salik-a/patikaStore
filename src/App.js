import React from 'react';
import { View, Text, FlatList, SafeAreView, TextInput, StyleSheet } from 'react-native';
import productData from './data.json';
import Card from './productCard'
const numColumns = 2;
const App = () => {
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <TextInput style={ styles.textinput } placeholder='Ara...'/>
      <FlatList
        //keyExtractor={item=> item.toString()}
        data={productData}
        renderItem={({ item }) => <Card card={item} />}
        numColumns={numColumns}
      />
    </View>
  );

};

const styles = StyleSheet.create({

    container: {
      flex: 1,
      backgroundColor: 'white',
    },
    textinput: {
      backgroundColor: '#eceff1',
      borderRadius: 10,
      margin: 10
    },
    title: {
      fontWeight: 'bold',
      fontSize: 32,
      margin: 10,
      color:'purple'
    },
    
});

export default App;