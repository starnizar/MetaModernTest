import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Search = () => {
    return <View style={styles.container}>
        <Text>Search Screen</Text>
    </View>
};

const styles = StyleSheet.create({
    container:{
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Search;