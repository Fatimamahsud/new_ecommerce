import { StyleSheet, Text, View, ImageBackground } from 'react-native'
import React from 'react'

const Background = ({children}) => {
  return (
    <View>

        <ImageBackground source={require('../assets/png/background.png')} style = {{height:'100%'}}></ImageBackground>   
      <View style={{position:'absolute'}}>
        {children}
      </View>
    </View>
  );
}
export default Background;
const styles = StyleSheet.create({})