import React,{useState} from 'react';
import { View, Text, FlatList, SafeAreView, TextInput, StyleSheet } from 'react-native';
import productData from './data.json';
import Card from './productCard';
import SearchBar from './SearchBar'

const App = () => {
  
  const [list, setList] = useState(productData)
  const numColumns = 2;
  const handleSearch = text => {
    const filteredList = productData.filter(product => {
      const searchedText = text.toLowerCase();
      const currentTitle = product.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PATIKASTORE</Text>
      <SearchBar placeholder=' Ara... ' onChangeText={handleSearch}/>
      <FlatList
        //keyExtractor={item=> item.toString()}
        data={list}
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
    
    title: {
      fontWeight: 'bold',
      fontSize: 32,
      margin: 10,
      color:'purple'
    },
    
});

export default App;