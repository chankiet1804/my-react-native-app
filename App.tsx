
import { useState } from 'react';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import EvilIcons from '@expo/vector-icons/EvilIcons';

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
    if(!todo) {
      Alert.alert("Lỗi input todo","Todo không thể để trống, mời bạn thử lại",[
        {
          text:"Xác nhận"
        }
      ])
      return;}
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
        <View style={styles.form}>
          <TextInput 
          value={todo}
          style={styles.todoInput}
          onChangeText={(value) => setTodo(value)}
          
          /> 

          <TouchableOpacity onPress={handleAddTodo} style={styles.button}>
            <Text>
              ADD TODO
            </Text>
          </TouchableOpacity>
        </View>

        {/* list todo */}
        <View style={styles.todoList}>
          <FlatList
          data={listTodo}
          keyExtractor={item => item.id + ""}
          renderItem={(data) =>{
            return (
              <TouchableOpacity onPress={()=>deleteTodo(data.item.id)}>
                <View style={styles.groupItem}>
                  <Text style={styles.todoItem}>
                    {data.item.name}
                  </Text>
                  <EvilIcons name="trash" size={26} color="red" />
                </View>
                
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
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop : 70,
  },
  header:{
    fontSize:40,
    textAlign:"center",
    backgroundColor: "yellow",
    paddingHorizontal: 30,
    fontWeight:"bold",
    marginBottom:20,
    flex: 0.6
  }, 
  form:{
    marginBottom:5,
    flexDirection:'row',
    marginRight:20,
    flex:1
  },
  todoInput: {
    borderBottomWidth: 1,
    flex:1,
    borderColor:"green",
    padding: 10,
    margin: 20
  },
  todoItem: {
    fontSize:20,
  },

  todoList: {
    flex:7,
    marginBottom:20
  },

  button: {
    backgroundColor: 'cyan',
    padding: 5,
    borderRadius: 5,
    marginLeft:5,
    marginVertical:20,
    justifyContent:'center'
  },

  groupItem: {
    justifyContent:'space-between',
    flexDirection:'row',
    borderWidth:1,
    marginBottom:15,
    padding:15,
    marginHorizontal:40,
  }
  
});
