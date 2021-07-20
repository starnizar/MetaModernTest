import React, { useState } from 'react';
import { View, Text, StyleSheet,Pressable, Image, TextInput, Button } from 'react-native';
import ModalWindow from '../ModalWindow/ModalWin';
import { BlurView } from 'expo-blur';

const SelectedCopter = (props) => {

    const chosenCopter = props.route.params.copter;
    const [modalVisibility, setModalVisibility] = useState({showModal:false, setBlur:null});

    return <View style={styles.container}>
      
        <Pressable
            onPress={()=>props.navigation.goBack()}
        >
            <Image
                style={{width:8.25, height:16.25}}
                source={require('../../assets/icons/LeftArrow.png')}
            />
        </Pressable>
        <Image
            style={{width:343, height:281}}
            source={chosenCopter.img}
        />
        <Text>{chosenCopter.type}</Text>
        <Text>{chosenCopter.name}</Text>
        <Text>{`${chosenCopter.price} $`}</Text>
        <Text>{chosenCopter.description}</Text>
        <TextInput
            keyboardAppearance='default'
            style={{
                padding:10,
            }}
            placeholder='Имя'
        />
        <TextInput
            style={{
                padding:10
            }}
            keyboardAppearance='default'
            keyboardType='phone-pad'
        />
        <Button
            title='Заказать'
            onPress={() => setModalVisibility({showModal:true, setBlur:StyleSheet.absoluteFill})}
        />
        <BlurView intensity={95} tint='dark' style={modalVisibility.setBlur}>
            <ModalWindow modalVisibility={modalVisibility} setModalVisibility={setModalVisibility}/>
        </BlurView>
    </View>
};

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#FFFFFF',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default SelectedCopter;