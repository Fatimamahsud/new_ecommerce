import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import Background from '../Components/Background'

const Home = (props) => {  return (
    <Background>
      <View style = {{marginHorizontal:30,marginVertical:40}}>    
      <Text style={{color:'black',fontSize:54,fontWeight:'bold'}}>Begin Your </Text>
      <Text style={{color:'black',fontSize:54,fontWeight:'bold'}}>Shopping</Text>
      <Text style={{color:'black',fontSize:54,fontWeight:'bold'}}>With Us!</Text>
      <Text style={{color:'black',fontSize:16,marginTop:24}}>  Click Here to Continue</Text>
      <TouchableOpacity 
      onPress={() => props.navigation.navigate('Choice')}
     style={{
        backgroundColor:'#23e0e0',
        borderRadius:50,
        alignItems:'center',
        width:100,
        height:100,
        marginTop:40,
        marginLeft:10,
        justifyContent:'center',
        paddingVertical:5,    
    }}>
      
      <Image style={{
              height: 60, width: 90,
              marginLeft: 20, marginRight: 20,
          }} source={require('../assets/png/arrow.png')}/>
    </TouchableOpacity>
      </View>   
    </Background>
  )
}

const styles = StyleSheet.create({})
export default Home;