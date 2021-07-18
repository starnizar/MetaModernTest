import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Cart = () => {
    return <View style={styles.container}>
        <Text>Cart Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Cart;