import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, Pressable, View} from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';
import { OPENSAN_REGULAR } from '../../utils/const';

interface Iprops {
    modalVisible : boolean,
    setModalVisible : (v:boolean) => void
}

const CreateModal = (props:Iprops) => {
    const {modalVisible, setModalVisible} = props;
    return (
        <>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    {/* header */}
                    <View>                   
                        <Text style={styles.modalText}>Create a review</Text>
                    </View>    
                    {/* body */}
                    <View>
                        <View>
                            <Text style={styles.Text}>Content</Text>
                            <TextInput style={styles.Input}/>
                        </View>
                        <View>
                            <Text style={styles.Text}>Rating</Text>
                            <TextInput 
                            style={styles.Input}
                            keyboardType='numeric'
                            />
                        </View>
                    </View>
                    {/* footer */}
                    <View style={styles.Footer}>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>ADD</Text>
                        </Pressable>
                        <Pressable
                            style={[styles.button, styles.buttonClose]}
                            onPress={() => setModalVisible(!modalVisible)}>
                            <Text style={styles.textStyle}>CANCLE</Text>
                        </Pressable>
                    </View>
                </View>  
            </View>        
        </Modal>
        </>
    )
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: 300,
      height: 310,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      marginBottom: 30,
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 20,
      
    },
    groupInput: {
        marginBottom: 15
    },
    Text: {
        fontSize: 20,
        fontWeight: 400,
        fontFamily: OPENSAN_REGULAR
    },
    Input: {
        borderWidth: 1,
        borderColor:'#ccc',
        width: 250,
        height: 30,
        borderRadius: 5,
        marginVertical: 15,
        padding: 5
        
    },
    Footer: {
        flexDirection: 'row',
        width:200,
        justifyContent: 'space-between',      
        marginTop: 5,      
    }
  });
  

export default CreateModal;