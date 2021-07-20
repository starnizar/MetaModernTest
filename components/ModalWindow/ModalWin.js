import React from 'react';
import { Text, View, StyleSheet, Modal, Pressable, Image } from 'react-native';
// import Icon from 'react-native-vector-icons/FontAwesome5'

const ModalWindow = ({modalVisibility, setModalVisibility}) => {
    return  <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisibility.showModal}
        onRequestClose={()=>setModalVisibility({showModal:false, setBlur:null})}
    >   
        <View style={styles.centeredView}>
            <View style={styles.mdodalBox}>
                <Image
                    style={{width:78.58, height:52.75}}
                    source={require('../../assets/icons/Deliver.png')}
                />
                {/* <Icon name='truck' size={92} color='#317AE8'/> */}
                <Text style={{fontFamily:'Lato', fontWeight:'normal', fontSize:16, lineHeight:22, color:'#939399', marginVertical:28}}>Ваш заказ принят</Text>
                <Pressable
                    style={{
                        backgroundColor:'#317AE8',
                        borderWidth:0,
                        borderStyle:'solid',
                        borderRadius:8
                    }}
                    onPress={() => setModalVisibility({showModal:false, setBlur:null})}
                >
                    <Text style={{paddingHorizontal:62, paddingVertical:12, color:'#FFFFFF', fontFamily:'Lato', fontSize:16, lineHeight:22}}>Ок</Text>
                </Pressable>
            </View>
        </View>       
    </Modal>
};

const styles = StyleSheet.create({
    centeredView: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
    },
    mdodalBox:{
        width:343,
        height:248,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#FFFFFF',
        borderRadius:16,
    },
});

export default ModalWindow;