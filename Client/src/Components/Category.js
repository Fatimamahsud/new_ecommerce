import { StyleSheet, Text, View, ImageBackground,Image,TouchableOpacity } from 'react-native'
import React from 'react'

const Category = ({ Label,textColor,Press,Image }) => {
    return (
                <TouchableOpacity
                onPress={Press}
                style={{
                    height: 100,
                    width: 100,
                    backgroundColor: '#f8c5cd',
                    marginTop: 20,
                    marginLeft: 20,
                    borderRadius: 50
                }}>

            <Image style={{
                height: 100, width: 130, marginTop: -6,
                marginLeft: -35,
            }} source={Image} />
            <Text style={{ color: textColor, fontSize: 22, fontWeight: 'bold' }}>
                {Label}
            </Text>
        </TouchableOpacity>    
    
    );
}
export default Category;
const styles = StyleSheet.create({})
