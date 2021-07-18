import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Favorite = () => {
    return <View style={styles.container}>
        <Text>Favorite Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tubBox:{
        position:'absolute',
        bottom: 0,
    },
});

export default Favorite;