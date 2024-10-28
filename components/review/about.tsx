import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/const";

const Styles = StyleSheet.create({
    about: {
        fontSize:30,
    },
    about1: {
        fontSize:15
    }
})

const AboutScreen = () => {
    return (
        <View>
            <Text style={[ Styles.about , globalStyles.globalFont]}>ABOUT REVIEW APP</Text>
            <Text style={[ Styles.about1 , globalStyles.globalFont]}>Made by Chan Kiet</Text>
        </View>
    )
}

export default AboutScreen;