import { StatusBar } from 'expo-status-bar';
import React ,{useState}from 'react';
import { StyleSheet, Text, View , FlatList,Alert, TouchableWithoutFeedback, Keyboard} from 'react-native';
import Header from './components/header'
import ToDoItem from './components/todoitem'
import AddToDo from './components/addtodo'
import Sandbox from './components/sandbox'

export default function App() {
  const [todos, setTodos]= useState([
    // {text: '', key: ''}
    {text: 'create an app', key: '2'},
    // {text: 'play on the switch', key: '3'}

  ])

   const pressHandler = (key) =>{
    setTodos((prevTodos) =>{
      return prevTodos.filter(todo=>todo.key!=key)
    })
  }

  const submitHandler = (text) =>{
    if(text.length>3){
      setTodos((prevTodos)=>{
        return [
          {text: text, key : Math.random().toString()},
          ...prevTodos
        ]
      })
    }
    else{
      Alert.alert('OOPS','Todos must be three characters long',[{text: 'Understood',onPress:()=>console.log('Alert closed')}])
    }
    

  }

  return (
    <TouchableWithoutFeedback onPress ={()=>{Keyboard.dismiss()}}>
    <View style={styles.container}>
      <Header/>
      <View style = {styles.content}>
        <AddToDo submitHandler={submitHandler}/>
        <View style={styles.list}>
          <FlatList
          data={todos}
          renderItem = {({item})=>(
          <ToDoItem item = {item} pressHandler = {pressHandler}/>
          )}/>         

        </View>
      </View>
      
    </View>
    </TouchableWithoutFeedback>
  );
}
{/* <Sandbox/> */}
// )
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content:{
    padding: 40,
    flex:1
  },
  list:{
    marginTop: 10,
    flex:1
  }
}
)
