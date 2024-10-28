import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSAN_REGULAR } from "../../utils/const";
import { useRoute,RouteProp } from '@react-navigation/native';

const styles = StyleSheet.create({
    
    reviewDetail: {
        fontSize: 25,
        fontFamily: OPENSAN_REGULAR,
        padding : 15
    }
})
const DetailScreen = () => {
    const route:RouteProp<RootStackParamList, 'details'> = useRoute();


    return (
        <View>
            <Text style={styles.reviewDetail}> Id: {route.params?.id}</Text>   
            <Text style={styles.reviewDetail}>Nội dung: {route.params?.title}</Text>
            <Text style={styles.reviewDetail}>Rating: {route.params?.start}</Text>    
        </View>
    )
}

export default DetailScreen;