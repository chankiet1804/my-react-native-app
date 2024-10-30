import { useNavigation,NavigationProp } from "@react-navigation/native";
import { useState } from "react";
import { Button, FlatList, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import CreateModal from "./create.modal";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

interface IReview {
    id: number;
    title: string;
    start: number
}

const styles = StyleSheet.create({
    reviewItem: {
        padding:15,
        backgroundColor:"#ccc",
        margin:15
    },
    AddButton: {
        alignItems: 'center'
    }
})

const HomeScreen = (props:any) => {
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    const [reviews,setReviews] = useState<IReview[]>([
        {id: 1, title:"React Native", start: 5},
        {id: 2, title:"Node Js", start: 4}
    ]);

    const [modalVisible,setModalVisible] = useState(false);

    return (
        <View>
            <Text style={{ fontSize: 30, paddingTop:20,paddingLeft:10}}> Review list: </Text>           
            <Pressable 
                style={styles.AddButton}            
                onPress={() => setModalVisible(true)}>
                <Text><MaterialIcons name="add-box" size={50} color="#ccc" /></Text>
            </Pressable>
            
            <View>
                <FlatList
                    data={reviews}
                    keyExtractor={item => item.id+""}
                    renderItem={({item})=> {
                        return (
                            <TouchableOpacity onPress={()=> navigation.navigate("details",item)}>
                                <View style={styles.reviewItem}>
                                    <Text>{item.title}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }}
                />
                    
                
            </View>
            <CreateModal
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}/>
        </View>
    )
}

export default HomeScreen;