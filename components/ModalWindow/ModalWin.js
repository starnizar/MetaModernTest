import React, { useState } from 'react';
import { Text, View, StyleSheet, Modal, Pressable } from 'react-native';

const ModalWindow = () => {
    const [modalVisibility, setModalVisibility] = useState(false);

    return <View>
        <Modal
            animationType='slide'
            transparent={true}
            visible={modalVisibility}
            onRequestClose={()=>setModalVisibility(!modalVisibility)}
        >
            <View
                style={styles.centeredView}
            >
                <Pressable
                    onPress={() => setModalVisibility(!modalVisibility)}
                >
                    <Text>Touch me to HIDE modal window!</Text>
                </Pressable>
            </View>
        </Modal>
        <Pressable
            onPress={() => setModalVisibility(true)}
        >
            <Text>Touch me to SHOW modal window!</Text>
        </Pressable>
    </View>
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
      }
});

export default ModalWindow;