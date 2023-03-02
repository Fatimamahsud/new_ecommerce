import { View, Text } from 'react-native'
import React from 'react'
import Background from '../Components/Background';
import Button from '../Components/Button';
import { darkGreen } from './Constants'
import Login from './Login';
import SignUp from './SignUp';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Landing = (props) => {{
  return (
    <Background>
    <View style = {{marginHorizontal:40,marginVertical:120}}>    
    <Button bgColor={darkGreen} textColor='white' btnLabel='Login' Press={()=>props.navigation.navigate('Login')}/>
    <Button bgColor={darkGreen} textColor='white' btnLabel='Sign Up!' Press={()=>props.navigation.navigate('SignUp')} />
    <Text style = {{color:'black',fontSize:20,fontWeight:'bold',marginTop:40,marginLeft:70 }}>or Browse as A Guest</Text>
    </View>  
  </Background>
  )
}}

export default Landing;