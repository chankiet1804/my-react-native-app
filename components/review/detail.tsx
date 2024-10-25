import { Button, StyleSheet, Text, View } from "react-native"
import { OPENSAN_REGULAR } from "../../utils/const";
const styles = StyleSheet.create({
    review: {
        fontSize: 30,
        fontFamily: OPENSAN_REGULAR
    }
})
const DetailScreen = () => {
    

    return (
        <View>
            <Text style={styles.review}> detail screen google</Text>          
        </View>
    )
}

export default DetailScreen;