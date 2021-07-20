import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView, SafeAreaView, StatusBar } from 'react-native';

const Home = ({navigation}) => {

    const copters = [
        {id:1, name:'DJI Air 2S', price:'1424', rate:4.2, speed: 19, img:require('../../assets/copters/Copter1.png'), type: 'Ordinary quadcopter', description:'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'},
        {id:2, name:'DJI Mavic Mini', price:'990.90', rate:4.5, speed: 16, img:require('../../assets/copters/Copter2.png'), type: 'Ordinary quadcopter', description:'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'},
        {id:3, name:'DJI’s Matrice 200', price:'2780.30', rate:3.8, speed: 23, img:require('../../assets/copters/Copter3.png'), type: 'Professional quadcopter', description:'The Mavic 2 offers iconic Hasselblad image quality on Pro and a high-performance zoom lens on Zoom.'},
    ];
    const [showCopters, setShowCopters] = useState([...copters]);
    const [copterFilter, setCopterFilter] = useState('All Quadcopters')

    const showAll = () => {
        setCopterFilter('All Quadcopters')
        setShowCopters([...copters])
    };
    const showCheap = () => {
        setCopterFilter('Cheap Quadcopters')
        let cheapest = copters[0];
        for(let i=1; i<copters.length;i++){
            if(+cheapest.price > +copters[i].price){
                cheapest = copters[i];
            };
        };
        setShowCopters([cheapest])
    };
    const showBest = () => {
        setCopterFilter('Best Quadcopters')
        let theBest = [];
        for(let i=0; i<copters.length;i++){
            if(copters[i].rate >= 4){
                theBest.push(copters[i]);
                console.log(theBest);
            };
        };
        setShowCopters([...theBest])
    };
    const showFast = () => {
        setCopterFilter('Fast Quadcopters')
        let fastest = copters[0];
        for(let i=1; i<copters.length;i++){
            if(fastest.speed < +copters[i].speed){
                fastest = copters[i];
            };
        };
        setShowCopters([fastest])
    };

    return <View style={styles.container}>
        <SafeAreaView>
            <StatusBar
                barStyle='dark-content'
            />
            <View style={styles.content}>
                <View style={styles.heading}>
                    <Text style={{fontFamily='Lato'}}>Quadrojoy</Text>
                    <Image
                        style={{width:28, height:28}}
                        source={require('../../assets/icons/Burger.png')}
                    />
                </View>
                <View
                    style={{flexDirection:'row', alignItems:'flex-end', justifyContent:'center  '}}
                >
                    <View>
                        <Text>Need for Speed</Text>
                        <Text>UdoDron 3 Pro</Text>
                        <Text>{`${1984} $`}</Text>
                    </View>
                    <Image
                        style={{height:164, width:233, left:-20}}
                        source={require(`../../assets/copters/PromoCopter.png`)}
                    />
                </View>
                <View
                    style={{flexDirection:'row', justifyContent:'space-evenly'}}
                >
                    <Pressable
                        onPress={showAll}
                    >
                        <Text>All</Text>
                    </Pressable>
                    <Pressable
                        onPress={showCheap}
                    >
                        <Text>Cheap</Text>
                    </Pressable>
                    <Pressable
                        onPress={showBest}
                    >
                        <Text>Best</Text>
                    </Pressable>
                    <Pressable
                        onPress={showFast}
                    >
                        <Text>Fast</Text>
                    </Pressable>
                </View>
                <View>
                    <Text>{copterFilter}</Text>
                    <ScrollView
                        horizontal={true}
                    >
                        <View
                            style={{flexDirection:'row'}}
                        >
                            {showCopters.map((copter, index) => (
                                <View key={index}>
                                    <Pressable
                                        onPress={()=>navigation.navigate('SelectedCopter', {copter})}
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
                                                style={{flexDirection:'row', alignItems:'center'}}
                                            >
                                                <Image
                                                    style={{width:11.65, height:11.08}}
                                                    source={require('../../assets/icons/Star.png')}
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
        backgroundColor:'#F8F8F8'
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