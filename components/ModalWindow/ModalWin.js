import React from 'react';
import { Text, View, StyleSheet, Modal, Button, Image } from 'react-native';

const ModalWindow = ({modalVisibility, setModalVisibility}) => {

    return  <Modal
        animationType='fade'
        transparent={true}
        visible={modalVisibility.showModal}
        onRequestClose={()=>setModalVisibility({showModal:false, setBlur:null})}
    >   
        <View style={styles.centeredView}>
            <View style={styles.mdodalBox}>
                <Image
                    style={{width:78.58, height:52.75,}}
                />
                <Button
                    style={{width:146}}
                    title='OK'
                    onPress={() => setModalVisibility({showModal:false, setBlur:null})}
                />         
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
            border:'1px solid white',
            borderRadius:16,
    },
});

export default ModalWindow;