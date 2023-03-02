import { View, Text,TouchableOpacity } from 'react-native'
import React from 'react'

export default function Button({bgColor,btnLabel,textColor,Press}) {
  return (
    <TouchableOpacity 
    onPress={Press}
     style={{
        backgroundColor:bgColor,
        borderRadius:100,
        alignItems:'center',
        width:350,
        height:70,
        marginTop:20,
        justifyContent:'center',
        paddingVertical:5,
        
    }}>
       <Text style={{color:textColor,fontSize:22,fontWeight:'bold'}}>
        {btnLabel}
       </Text>
    </TouchableOpacity>
  )
}