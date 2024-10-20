
import { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


interface ITodo {
  id : number;
  name : string
}

export default function App() {

  const[todo,setTodo] = useState("");
  const[listTodo,setListTodo] = useState<ITodo[]>([]);

  function randomInterger(min:number,max:number){
    return Math.floor(Math.random()*(max-min+1))+min;
  }

  const handleAddTodo = () => {
    if(!todo) return;
    setListTodo([...listTodo,{id:randomInterger(10000,200000),name:todo}]);
    setTodo("")
  }

  const deleteTodo = (id : number) => {
    const newTodo = listTodo.filter(item => item.id!==id);
    setListTodo(newTodo)
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>TODO APP</Text>
        
        {/* form */}
        <View style={styles.body}>
          <TextInput 
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
          
          /> 

          <Button 
          title='Add todo'
          onPress={handleAddTodo}
          />
        </View>

        {/* list todo */}
        <View>
          <FlatList
          data={listTodo}
          keyExtractor={item => item.id + ""}
          renderItem={(data) =>{
            return (
              <TouchableOpacity onPress={()=>deleteTodo(data.item.id)}>
                <Text style={styles.todoItem}>{data.item.name}</Text>
              </TouchableOpacity>
            )
          }}
          />
          
        </View>

      </View>
    </GestureHandlerRootView>
    
  );
}

// css in js
const styles = StyleSheet.create({
  header:{
    fontSize:40,
    textAlign:"center",
    backgroundColor: "yellow",
    paddingHorizontal: 30,
    fontWeight:"bold"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 70,
  },
  body:{
    marginBottom:5
  },
  todoInput: {
    borderBottomWidth: 1,
    borderColor:"green",
    padding: 10,
    margin: 15
  },
  todoItem:{
    fontSize:20,
    marginBottom:15,
    padding:20,
    marginHorizontal:40,
    borderWidth:1,
    
  }
  
});
