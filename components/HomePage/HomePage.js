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
    const [chipsStyle, setChipsStyle] = useState({
        all:styles.selectedChip, cheap:styles.chips, best:styles.chips, fast:styles.chips,
        allText:'white', cheapText:'black', bestText:'black', fastText:'black',
    });

    const showAll = () => {
        setChipsStyle({all:styles.selectedChip, cheap:styles.chips, best:styles.chips, fast:styles.chips, allText:'white', cheapText:'#1F1F1F', bestText:'#1F1F1F', fastText:'#1F1F1F'})
        setCopterFilter('All Quadcopters')
        setShowCopters([...copters])
    };
    const showCheap = () => {
        setChipsStyle({all:styles.chips, cheap:styles.selectedChip, best:styles.chips, fast:styles.chips, allText:'#1F1F1F', cheapText:'white', bestText:'#1F1F1F', fastText:'#1F1F1F'})
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
        setChipsStyle({all:styles.chips, cheap:styles.chips, best:styles.selectedChip, fast:styles.chips, allText:'#1F1F1F', cheapText:'#1F1F1F', bestText:'white', fastText:'#1F1F1F'})
        setCopterFilter('Best Quadcopters')
        let theBest = [];
        for(let i=0; i<copters.length;i++){
            if(copters[i].rate >= 4){
                theBest.push(copters[i]);
            };
        };
        setShowCopters([...theBest])
    };
    const showFast = () => {
        setChipsStyle({all:styles.chips, cheap:styles.chips, best:styles.chips, fast:styles.selectedChip, allText:'#1F1F1F', cheapText:'#1F1F1F', bestText:'#1F1F1F', fastText:'white'})
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
        <StatusBar barStyle='dark-content'/>
        <SafeAreaView style={{height:'100%'}}>
        <View style={styles.heading}>
            <Text style={styles.headerText}>Quadrojoy</Text>
            <Image
                style={{width:28, height:28}}
                source={require('../../assets/icons/Burger.png')}
            />
        </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <View style={styles.promoWrapper}>
                        <View style={{right:-45, top:-15}}>
                            <Text style={{fontFamily:'Lato', fontSize:14, fontWeight:'bold', lineHeight:17, color:'#FFFFFF'}}>Need for Speed</Text>
                            <Text style={{fontFamily:'Lato', fontSize:24, fontWeight:'800', lineHeight:32, color:'#FFFFFF'}}>UdoDron 3 Pro</Text>
                            <Text style={{fontFamily:'Lato', fontSize:20, fontWeight:'bold', lineHeight:24, color:'#FFFFFF'}}>{`${1984} $`}</Text>
                        </View>
                        <Image
                            style={{height:164, width:233, left:-20}}
                            source={require(`../../assets/copters/PromoCopter.png`)}
                        />
                    </View>
                    <View style={{width:'100%', maxWidth:650}}>
                        <View style={{flexDirection:'row', justifyContent:'space-between', marginVertical:30}}>
                            <Pressable
                                style={chipsStyle.all}
                                onPress={showAll}
                            >
                                <Text style={[styles.chipsText, {color:chipsStyle.allText}]}>All</Text>
                            </Pressable>
                            <Pressable
                                style={chipsStyle.cheap}
                                onPress={showCheap}
                            >
                                <Text style={[styles.chipsText, {color:chipsStyle.cheapText}]}>Cheap</Text>
                            </Pressable>
                            <Pressable
                                style={chipsStyle.best}
                                onPress={showBest}
                            >
                                <Text style={[styles.chipsText, {color:chipsStyle.bestText}]}>Best</Text>
                            </Pressable>
                            <Pressable
                                style={chipsStyle.fast}
                                onPress={showFast}
                            >
                                <Text style={[styles.chipsText, {color:chipsStyle.fastText}]}>Fast</Text>
                            </Pressable>
                        </View>
                    </View>
                    <View style={{width:'100%'}}>
                        <Text style={{fontFamily:'Lato', fontWeight:'bold', fontSize:20, lineHeight:24, color:'#1F1F1F', marginBottom:20}}>{copterFilter}</Text>
                        <ScrollView horizontal={true}>
                            <View style={{flexDirection:'row', paddingBottom:10}}>
                                {showCopters.map((copter, index) => (
                                    <View style={styles.copterWrapper} key={index}>
                                        <Pressable
                                            onPress={()=>navigation.navigate('SelectedCopter', {copter})}
                                        >
                                            <Image style={{width:202, height:168}} source={copter.img}/>
                                            <View style={{padding:16}}>
                                                <Text style={{fontFamily:'Lato', fontWeight:'bold', fontSize:14, lineHeight:17, color:'#1F1F1F', marginBottom:12}}>{copter.name}</Text>
                                                <View
                                                    style={{justifyContent:'space-between', flexDirection:'row'}}
                                                >
                                                    <Text style={{fontFamily:'Lato', fontWeight:'bold', fontSize:16, lineHeight:22, color:'#1F1F1F'}}>{`${copter.price} $`}</Text>
                                                    <View
                                                        style={{flexDirection:'row', alignItems:'center'}}
                                                    >
                                                        <Image
                                                            style={{width:11.65, height:11.08, marginRight:5}}
                                                            source={require('../../assets/icons/Star.png')}
                                                        />
                                                        <Text style={{fontFamily:'Lato', fontWeight:'bold', fontSize:14, lineHeight:17, color:'#1F1F1F'}}>{copter.rate}</Text>
                                                    </View>
                                                </View>                                            
                                            </View>
                                        </Pressable>
                                    </View>
                                ))}
                            </View>
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    </View>
};

const styles = StyleSheet.create({
    container:{
        
        paddingHorizontal:'1%',
        width: '100%',
        height: '100%',
        backgroundColor:'#F8F8F8'
    },
    content:{
        justifyContent:'center',
        width: '100%',
        height: '100%',
        alignItems:'center',
        marginTop:32,
    },
    heading:{
        width:'100%',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        marginTop:10
    },
    headerText:{
        fontFamily:'Lato',
        fontWeight:'800',
        fontSize:24,
        lineHeight:32,
        color:'#1F1F1F'
    },
    promoWrapper:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent:'center',
        backgroundColor:'#317AE8',
        width:'60%',
        maxWidth: 450,
        minWidth: 340,
        border:'0 solid #317AE8',
        borderRadius:20,
        shadowColor:'rgb(0, 0, 0)',
        shadowOffset:{width:2, height:2},
        shadowRadius:16,
        shadowOpacity:0.15,
    },
    selectedChip:{
        textAlign:'center',
        width:'15%',
        minWidth:78,
        height:46,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#317AE8',
        borderRadius:12,
        backgroundColor:'#317AE8',
        color:'#FFFFFF',
    },
    chips:{
        textAlign:'center',
        width:'15%',
        minWidth:78,
        height:46,
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#E7E7E7',
        borderRadius:12,
    },
    chipsText:{
        textAlign:'center',
        fontSize:16,
        lineHeight:22,
        fontWeight:'400',
        fontFamily:'Lato',
        paddingHorizontal:16,
        paddingVertical:12,
    },
    copterWrapper:{
        backgroundColor:'#FFFFFF',
        borderWidth:1,
        borderStyle:'solid',
        borderColor:'#E7E7E7',
        borderRadius:12,
        marginHorizontal:9
    },
});

export default Home;