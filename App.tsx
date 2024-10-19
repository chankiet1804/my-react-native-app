
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';


export default function App() {

  const[students,setStudents] = useState([
    { id : 1, name : "Andy1", age : 18},
    { id : 2, name : "Andy2", age : 18},
    { id : 3, name : "Andy3", age : 19},
    { id : 4, name : "Andy4", age : 21},
    { id : 5, name : "Andy5", age : 19},
    { id : 6, name : "Andy6", age : 18},
    { id : 7, name : "Andy7", age : 20},
    { id : 8, name : "Andy8", age : 18},
    { id : 9, name : "Andy9", age : 21},
    { id : 10, name : "AndyX", age : 19},
  ])

  return (
    
      <View style={styles.container}>
        <ScrollView>
          {students.map(item => {
            return (
              <View key={item.id} style={{
                padding: 15,
                backgroundColor: "pink",
                marginBottom: 50
              }}>
              <Text style={{
                fontSize: 20,
                fontWeight: "bold"
              }}>{item.name}</Text>
              </View>
            )
          })}
        </ScrollView>
        
      </View>
    
    
  );
}

// css in js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding : 20,
    paddingVertical: 50
  },
  
});
