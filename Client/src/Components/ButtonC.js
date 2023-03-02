import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function ButtonC({text,onPress}) {
  return (
    <TouchableOpacity 
    onPress={onPress}
     style={{
        backgroundColor:'white',
        borderRadius:100,
        alignItems:'center',
        width:290,
        height:50,
        marginTop:10,
        justifyContent:'center',
        paddingVertical:5,
        
    }}>
       <Text style={{color:'black',fontSize:22,fontWeight:'bold'}}>
        {text}
       </Text>
    </TouchableOpacity>
  )
}