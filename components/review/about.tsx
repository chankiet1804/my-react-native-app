import { StyleSheet, Text, View } from "react-native"
import { globalStyles } from "../../utils/const";

const Styles = StyleSheet.create({
    about: {
        fontSize:30
    }
})

const AboutScreen = () => {
    return (
        <View>
            <Text style={[ Styles.about , globalStyles.globalFont]}> about screen google</Text>
        </View>
    )
}

export default AboutScreen;