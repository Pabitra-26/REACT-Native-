import React ,{useState}from 'react';
import { StyleSheet, TextInput,View, Button} from 'react-native';

export default function AddToDo({submitHandler}) {
    const [text, setText] = useState('')

    const changeHandler =(val)=>{
        setText(val)

    }
    return(
        <View>
            <TextInput 
            style = {styles.input}
            placeholder='e.g: new ToDo'
            onChangeText ={(val)=>changeHandler(val)}
            />
            <Button title= 'Add ToDo' color = 'pink' onPress={()=>submitHandler(text)}/>              
            
            
        </View>
    )

}

const styles = StyleSheet.create({
    input :{
        marginBottom :10,
        paddingHorizontal :8,
        paddingVertical : 6,
        borderBottomWidth:1,
        borderBottomColor : '#ddd'
    }
})