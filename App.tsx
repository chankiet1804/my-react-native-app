
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {

  const [name,setName] = useState("");

  const [age,setAge] = useState();

  const [count,setCount] = useState(0);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <View>
          <Text style={styles.textStyle}>My name is : {name}</Text>
          <TextInput
              // multiline
              autoCapitalize='words' // tu doong viet hoa cac ki tu dau trong tu
              style={styles.input}
              placeholder="Enter your name"
              onChangeText={(text) => setName(text)}
            />
        </View>

        <View>
          <Text style={styles.textStyle}>I'm {age} years old</Text>
          <TextInput
              style={styles.input}
              placeholder="Enter your age"
              onChangeText={(value) => setAge(value)}
              keyboardType='numeric'
              maxLength={2}
            />
        </View>

        
        <Text style={styles.couterText}> Count = {count}</Text>
        <View style={styles.buttonContainer}>
        <Button title='Increase' onPress={() => setCount(count+1)}/>
        <Button title='Decrease' onPress={() => {if(count>0) setCount(count-1)}} />
        <Button title='Reset' onPress={() => setCount(0)} color={"red"}/>
        </View>
        
      </View>
    </GestureHandlerRootView>
    
    
  );
}

// css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  couterText :{
    fontSize:30,
    fontWeight:"bold",
    padding:20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',  // Đảm bảo width cụ thể thay vì 100%
    paddingHorizontal: 20,
    paddingVertical: 10,  // Thêm padding dọc để đảm bảo đủ khoảng cách
    borderWidth: 2, // Đảm bảo borderWidth có giá trị
    borderColor: '#3498db', // Đảm bảo có borderColor
    borderRadius: 10, // Bo tròn khung
    backgroundColor: '#ecf0f1', // Màu nền của khung
  },
  input: {
    borderColor: 'green',
    borderWidth: 1,
    width: 200,
    padding: 15,
  },
  textStyle: {
    fontSize: 30,
    fontWeight:'bold'
  }


});
