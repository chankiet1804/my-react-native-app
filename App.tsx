
import { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {

  const [name,setName] = useState("Chan Kiet");

  const [obj,setObj] = useState({
    name : "Kiet",
    age : 20,
  });

  const [count,setCount] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.couterText}> Count = {count}</Text>
      <View style={styles.buttonContainer}>
      <Button title='Increase' onPress={() => setCount(count+1)}/>
      <Button title='Decrease' onPress={() => {if(count>0) setCount(count-1)}} />
      <Button title='Reset' onPress={() => setCount(0)} color={"red"}/>
      </View>
      
    </View>
    
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
    width: '100%',
    paddingHorizontal: 20,
  },

});
