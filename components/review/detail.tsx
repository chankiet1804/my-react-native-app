import { Button, StyleSheet, Text, View,TouchableOpacity } from "react-native"
import { OPENSAN_REGULAR } from "../../utils/const";
import { useRoute,RouteProp } from '@react-navigation/native';
import { useNavigation,NavigationProp } from "@react-navigation/native";
import Entypo from '@expo/vector-icons/Entypo';

const styles = StyleSheet.create({
    
    reviewDetail: {
        fontSize: 25,
        fontFamily: OPENSAN_REGULAR,
        padding : 15
    },
    homeButton: {
        fontFamily: OPENSAN_REGULAR,
        fontSize: 15,
        textAlign: 'center',
        color: '#1e90ff'
    }
})
const DetailScreen = () => {
    const route:RouteProp<RootStackParamList, 'details'> = useRoute();
    const navigation: NavigationProp<RootStackParamList> = useNavigation();

    return (
        <View>
            <Text style={styles.reviewDetail}> Id: {route.params?.id}</Text>   
            <Text style={styles.reviewDetail}>Nội dung: {route.params?.title}</Text>
            <Text style={styles.reviewDetail}>Rating: {route.params?.start} <Entypo name="star" size={24} color="#ffd700" /> </Text>                     
        <TouchableOpacity onPress={()=> navigation.navigate("home")}>
            <View>
                <Text style={styles.homeButton}>Go back to Home</Text>
            </View>
        </TouchableOpacity>
        </View>
    )
}

export default DetailScreen;