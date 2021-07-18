import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/core';

const Home = () => {

    const copters = [
        {id:1, name:'DJI Air 2S', price:1424, rate:4.2, img:require('../../assets/copters/Copter1.png'), description:'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'},
        {id:2, name:'DJI Mavic Mini', price:990.90, rate:4.5, img:require('../../assets/copters/Copter2.png'), description:'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'},
        {id:3, name:'DJI’s Matrice 200', price:2780.30, rate:3.8, img:require('../../assets/copters/Copter3.png'), description:'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'},
    ];
    const [showCopters, setShowCopters] = useState([...copters]);
    const navigation = useNavigation();

    const showAll = () => {
        setShowCopters([...copters])
    };
    const showCheap = () => {

    };
    const showBest = () => {

    };
    const showFast = () => {
        
    };

    return <View style={styles.container}>
        <SafeAreaView>
            <View style={styles.content}>
                <View style={styles.heading}>
                    <Text>Quadrojoy</Text>
                    <Image
                        style={{width:28, height:28}}
                        source={require('../../assets/icons/Burger.png')}
                    />
                </View>
                <View>
                    <View>
                        <Text>Need for Speed</Text>
                        <Text>UdoDron 3 Pro</Text>
                        <Text>{`${1984} $`}</Text>
                    </View>
                    <Image
                        style={{height:164, width:233,}}
                        source={require(`../../assets/copters/UdoDron3Pro.png`)}
                    />
                </View>
                <View>
                    <Pressable>
                        <Text>All</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Cheap</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Best</Text>
                    </Pressable>
                    <Pressable>
                        <Text>Fast</Text>
                    </Pressable>
                </View>
                <View>
                    <Text>AllCopters</Text>
                    <ScrollView
                        horizontal={true}
                    >
                        <View
                            style={{flexDirection:'row'}}
                        >
                            {showCopters.map((copter, index) => (
                                <View key={index}>
                                    <Pressable
                                        onPress={()=>console.log(`Pressed ${index+1} copter`)}
                                    >
                                        <Image
                                            style={{width:202, height:168}}
                                            source={copter.img}
                                        />
                                        <Text>{copter.name}</Text>
                                        <View
                                            style={{justifyContent:'space-between', flexDirection:'row'}}
                                        >
                                            <Text>{`${copter.price} $`}</Text>
                                            <View
                                                style={{flexDirection:'row'}}
                                            >
                                                <Image
                                                    style={{width:11.65, height:11.08}}
                                                    source={require('../../assets/icons/RateStar.png')}
                                                />
                                                <Text>{copter.rate}</Text>
                                            </View>
                                        </View>
                                    </Pressable>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>
            </View>
        </SafeAreaView>
    </View>
};

const styles = StyleSheet.create({
    container:{
        width: '100%',
        height: '100%',
        backgroundColor:'#E7E7E7'
    },
    content:{
        width: '100%',
        height: '100%',
        alignItems:'stretch',
    },
    heading:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
});

export default Home;