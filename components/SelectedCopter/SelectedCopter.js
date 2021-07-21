import React, { useState } from 'react';
import { View, Text, StyleSheet,Pressable, TextInput, ScrollView, KeyboardAvoidingView, Image, Vibration, Alert } from 'react-native';
import ModalWindow from '../ModalWindow/ModalWin';
import { BlurView } from 'expo-blur';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SelectedCopter = (props) => {

    const chosenCopter = props.route.params.copter;
    const [nameInput, setNameInput] = useState('');
    const [phoneInput, setPhoneInput] = useState('');
    const [modalVisibility, setModalVisibility] = useState({showModal:false, setBlur:null});
    const PATTERN = [0, 600];

    const order = () => {
        if(nameInput.trim() && phoneInput.trim() && phoneInput.length === 18){
            Vibration.vibrate([200]);
            setModalVisibility({showModal:true, setBlur:StyleSheet.absoluteFill, iconName:'truck', message:'Ваш заказ принят', color:'#317AE8'});
        } else {
            Vibration.vibrate(PATTERN);
            setModalVisibility({showModal:true, setBlur:StyleSheet.absoluteFill, iconName:'sad-cry', message:'Укажите имя и корректный \n номер телефона', color:'#317AE8'});
        }
    };

    return <KeyboardAvoidingView behavior='padding' style={styles.container}>
        <View style={{width:'100%', alignItems:'flex-start', marginTop:38}}>    
            <Pressable
                style={{paddingHorizontal:17, paddingVertical:13}}
                onPress={()=>props.navigation.goBack()}
            >
                <Icon name='chevron-left' size={24} color='#1F1F1F'/>
            </Pressable>   
        </View>
            <ScrollView showsVerticalScrollIndicator={false} style={{width:'100%'}}>
                <View style={{alignItems:'center'}}>
                    <Image
                        style={{width:343, height:281, marginBottom:24}}
                        source={chosenCopter.img}
                    />
                    <View>
                        <Text style={styles.copterTypeText}>{chosenCopter.type}</Text>
                        <Text style={styles.copterNameText}>{chosenCopter.name}</Text>
                        <Text style={styles.copterPriceText}>{`${chosenCopter.price} $`}</Text>
                        <Text style={styles.copterDescription}>{chosenCopter.description}</Text>
                    </View>
                    <View style={{width:'100%', alignItems:'center'}}>
                        <TextInput
                            style={styles.nameInput}
                            placeholder='Имя'
                            placeholderTextColor='#939399'
                            onChangeText={(value) => setNameInput(value)}
                        />
                        <TextInput
                            style={styles.phoneInput}
                            keyboardType='phone-pad'
                            defaultValue='+375(__)-___-__-__'
                            onChangeText={(value) => setPhoneInput(value)}
                        />
                        <Pressable
                            style={styles.orderButton}
                            onPress={order}
                        >
                            <Text style={styles.orderButtonText}>Заказать</Text>
                        </Pressable>
                    </View>
                </View>
                
            </ScrollView>
            <BlurView intensity={95} tint='dark' style={modalVisibility.setBlur}>
                <ModalWindow modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
            </BlurView>
    </KeyboardAvoidingView>
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        width:'100%',
        height: '100%',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        padding:'2%',
    },
    copterTypeText:{
        fontFamily:'Lato',
        fontWeight:'normal',
        fontSize:16,
        lineHeight:22,
        color:'#1F1F1F'
    },
    copterNameText:{
        fontFamily:'Lato',
        fontWeight:'bold',
        fontSize:28,
        lineHeight:36,
        color:'#1F1F1F'
    },
    copterPriceText:{
        fontFamily:'Lato',
        fontWeight:'bold',
        fontSize:20,
        lineHeight:24,
        color:'#317AE8',
        marginTop:8,
        marginBottom:12
    },
    copterDescription:{
        fontFamily:'Lato',
        fontWeight:'normal',
        fontSize:16,
        lineHeight:22,
        color:'#939399',
        marginBottom:36
    },
    nameInput:{
        width:'100%',
        maxWidth:500,
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor:'#E7E7E7',
        borderStyle:'solid',
        marginBottom:24,
        fontSize:16,
        lineHeight:22,
        fontFamily:'Lato'  
    },
    phoneInput:{
        width:'100%',
        maxWidth:500,
        paddingVertical:8,
        borderBottomWidth:1,
        borderBottomColor:'#E7E7E7',
        borderStyle:'solid',
        marginBottom:24,
        fontSize:16,
        lineHeight:22,
        fontFamily:'Lato'
    },
    orderButton:{
        backgroundColor:'#317AE8',
        width:'100%',
        maxWidth:300,
        borderRadius:8,
    },
    orderButtonText:{
        fontFamily:'Lato',
        fontWeight:'normal',
        fontSize:16,
        lineHeight:22,
        color:'#FFFFFF',
        textAlign:'center',
        paddingVertical:12
    },
});

export default SelectedCopter;