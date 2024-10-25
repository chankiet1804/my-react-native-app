import { Button, Text, View } from "react-native"

const HomeScreen = (props:any) => {
    const {navigation} = props;

    return (
        <View>
            <Text style={{ fontSize: 30, paddingTop:70, textAlign:'center'}}> Home screen google</Text>
            <Button title="View details"
                onPress={()=> navigation.navigate("details")}
            />
        </View>
    )
}

export default HomeScreen;