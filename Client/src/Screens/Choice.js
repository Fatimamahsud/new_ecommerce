import { View, Text } from 'react-native'
import React from 'react'
import Background from '../Components/Background';
import Button from '../Components/Button';
import { darkGreen } from './Constants'

const Choice = (props) => {{
  return (
    <Background>
    <View style = {{marginHorizontal:40,marginVertical:120}}>    
    <Button bgColor={darkGreen} textColor='white' btnLabel='Login as Admin' Press={()=>props.navigation.navigate('AdminSignIn')}/>
    <Button bgColor={darkGreen} textColor='white' btnLabel='User' Press={()=>props.navigation.navigate('Landing')} />
    </View>  
  </Background>
  )
}}

export default Choice;