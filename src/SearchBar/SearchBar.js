import React from 'react';
import { TextInput, View, StyleSheet } from 'react-native';


const SearchBar = (props) => {
    
    return (
        <View>
            <TextInput
                style={styles.textinput}
                placeholder={props.placeholder}
                onChangeText={props.onChangeText}
            />
        </View>
    );

};

const styles = StyleSheet.create({
    container: {
        
    },
    textinput: {
      backgroundColor: '#eceff1',
      borderRadius: 10,
      margin: 10
    },
});

export default SearchBar;