import { View, Text } from 'react-native'
import React from 'react'
import Background from '../Components/Background';
import Button from '../Components/Button';
import { darkGreen } from './Constants'
import Login from './Login';
import SignUp from './SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Choice = (props) => {{
  return (
    <Background>
    <View style = {{marginHorizontal:40,marginVertical:100}}>    
    <Button bgColor={darkGreen} textColor='white' btnLabel='Add Items' Press={()=>props.navigation.navigate('AddItems')}/>
    <Button bgColor={darkGreen} textColor='white' btnLabel='View/Update/Delete Items' Press={()=>props.navigation.navigate('ViewItems')} />
    </View>  
  </Background>
  )
}}

export default Choice;
