import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function Trending() {
  return (
    <><View style={styles.header}>
         <Text style={styles.text3}>Hello,Fatima</Text>
          <Image style={{
              height: 60, width: 50, marginTop: 15,
              marginLeft: 20, marginRight: 20,
          }} source={require('../assets/png/logo.png')} />
      </View>
      <View style={styles.body}>
              <TouchableOpacity
                  style={{
                      height: 140,
                      width: 160,
                      backgroundColor: '#816ACD',
                      marginTop: 20,
                      borderRadius: 20,
                      justifyContent: 'center',
                      alignItems: 'center',
                  }}>
                  <Image style={{
                      height: 120, width: 120, marginTop: 20,
                  }} source={require('../assets/png/trending.png')} />
              </TouchableOpacity>
              <Text style={styles.text2}>Trending</Text>
              <Image style={{
              height: 650, width: 550, marginTop: 0,
              marginLeft: 20, marginRight: 20,
          }} source={require('../assets/png/bg.png')} />
          </View></>
  )
}

const styles = StyleSheet.create({
    body:{
        backgroundColor:'white',
        flex:1,
        alignItems:'center',        
      },
      text2:{
        color:'black',
        fontWeight:'bold',
        marginTop:33,  
        fontSize:40,
        marginLeft:-5,
      },
      header:{
        backgroundColor:'white',
        height:80,
        flexDirection:'row',
        justifyContent:'space-between'
        
      },
      text3:{
        color:'black',
        fontWeight:'bold',
        marginTop:25,  
        fontSize:30,
        marginLeft:10,
      },
})