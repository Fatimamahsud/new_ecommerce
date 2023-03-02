import { StyleSheet, Text, View,TouchableOpacity,Image } from 'react-native'
import React from 'react'

export default function MyCart() {
  return (
    <><View style={styles.header}>
          <Text style={styles.text3}>Hello,Fatima</Text>
          <Image style={{
              height: 60, width: 50, marginTop: 15,
              marginLeft: 20, marginRight: 20,
          }} source={require('../assets/png/logo.png')} />
      </View><View style={styles.body}>          
              <TouchableOpacity style={{
                  height: 440,
                  width: 860,
                  backgroundColor: '#816ACD',
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius:30,
              }}>
                <Image style={{
              height: 420, width: 380, marginRight:130,marginTop:13
          }} source={require('../assets/png/man.png')} />

              </TouchableOpacity>
              <View style={{flexDirection:'row',justifyContent:'space-evenly',alignItems:'stretch'}}>
            <Text style={{
              fontSize:34,
              color:'black',
              fontWeight:'bold',    
            }}>Shirt Printed</Text>
             <Text style={{
              fontSize:34,
              color:'black',
              fontWeight:'bold',    
            }}>$25.00</Text>

              </View>
              <View style={{flexDirection:'row'}}>
                <TouchableOpacity
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  marginTop: 20,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:'gray',
                  margin:10,
                  borderWidth:3,

              }}>
                    <Text styles={{fontSize:140}}>
                      S
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  marginTop: 20,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:'gray',
                  margin:10,
                  borderWidth:3,

              }}>
                    <Text styles={{fontSize:140}}>
                      S
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  marginTop: 20,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:'gray',
                  margin:10,
                  borderWidth:3,

              }}>
                    <Text styles={{fontSize:140}}>
                      S
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={{
                  height: 80,
                  width: 80,
                  backgroundColor: 'white',
                  marginTop: 20,
                  borderRadius: 20,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderColor:'gray',
                  margin:10,
                  borderWidth:3,

              }}>
                    <Text styles={{fontSize:140}}>
                      S
                    </Text>
                </TouchableOpacity>


              </View>
              <TouchableOpacity
                  style={{
                    height: 80,
                    width: 380,
                    backgroundColor: '#816ACD',
                    marginTop: 60,
                    borderRadius: 20,
                    justifyContent: 'center',
                    alignItems: 'center',
                    margin:10,
                }}>
                  <Text style={{fontSize:25,fontWeight:"bold",color:'white'}}>
                    Add to Cart
                  </Text>

              </TouchableOpacity>
          </View></>
  );
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
        backgroundColor:'#816ACD',
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