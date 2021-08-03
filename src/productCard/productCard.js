import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const productCard = props => {
    
    return (
        <View style={ styles.container }>
            <Image style={ styles.image } source={{ uri:props.card.imgURL }} />
            <View style={styles.text}>
                <Text style={styles.title}>{props.card.title}</Text>
                <Text style={styles.price}>{props.card.price}</Text>
                {props.card.inStock == true? (<Text style={styles.stock}>STOKTA YOK</Text>):(null)}
            </View>
        </View>
    );
};
const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: '#eceff1',
        justifyContent: "center",
        alignItems: "center",
        margin: 10,
        //padding: 8,
        borderRadius:10

    },
    image: {
        marginTop:10,
        width: 160,
        height: 200,
        borderRadius: 10,
    },
    text: {
        margin: 10
    },
    price: {
        color:'gray'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    stock: {
        color:'red'
    }
    
});


export default productCard;