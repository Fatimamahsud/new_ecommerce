import { StyleSheet, TouchableOpacity,Dimensions, ScrollView, View, Text, TextInput, Button, Image, Alert, Pressable } from 'react-native'
import React, { useState, useEffect } from 'react';
import {deleteProductAPI, viewProductAPI } from '../utils/api';
import { useIsFocused } from "@react-navigation/native";
import Background from '../Components/Background';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const ViewItems = (props) => {
  const [products, setProducts] = useState([]);
  const isFocused = useIsFocused();

const handleDelete = async async => {
try{
  const res = await deleteProductAPI((_id =  props._id));
  Alert.alert('Item has been deleted Succesfully')
}
catch (error) {
  console.log(error);
  Alert.alert('Item has been deleted Succesfully')

}
  }

  const fetchProducts = async () => {
    const { data } = await viewProductAPI();
    setProducts(data);
    console.log(data);
  };
  useEffect(() => {
    fetchProducts();
  }, [isFocused])

  return (    
    <Background>
    <View style={styles.body}>
    <View style={styles.header}>
        <Text style={styles.text}>View/Update/Delete Items</Text>
      </View>
      <ScrollView horizontal = {true}>
      <View style={styles.header1}>
      {products.map((product) => (
          <><View style={styles.card} >
            <View style={{ flexDirection:'row',margin:10}}>
            <Text style={{ color: 'black',marginRight:10,fontSize:18 }}>Product Name: </Text>
                <Text style={{ color: 'black',backgroundColor:'pink',padding:10,borderRadius:5 }}>{product?.name}</Text>
                </View>
                <View style={{ flexDirection:'row',margin:10}}>
            <Text style={{ color: 'black',marginRight:10,fontSize:18 }}>Product Price: </Text>
                <Text style={{ color: 'black',backgroundColor:'pink',padding:10,borderRadius:5 }}>{product?.price}</Text>
                </View>
                <Pressable style={styles.button}  onPress={ handleDelete }>     
  <Text style={{ color: 'black',marginRight:10,fontSize:18 }}>Delete</Text>
</Pressable> 
<TouchableOpacity style={styles.button} onPress={()=>props.navigation.navigate('UpdateItems',{productId:product?._id})}>     
  <Text style={{ color: 'black',marginRight:10,fontSize:18 }}>Update</Text>
</TouchableOpacity> 
          </View>
          </>
      ))}
      </View>  
      </ScrollView>
 
    </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  body: {
    // backgroundColor: 'white',
    flex: 1,
    alignItems: 'center',
  },

  header: {
    backgroundColor: 'white',
    height: 60,
    width: windowWidth,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    backgroundColor: 'pink',
    height: 50,
    width: 250,
    borderRadius:15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    margin:10,
  },
  header: {
    backgroundColor: 'white',
    height: windowHeight*0.07,
    width: windowWidth*0.9,
    flexDirection: 'row',
    marginTop:25,
    borderRadius:40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#23e0e0',
    height: windowHeight*0.3,
    width: windowWidth*0.8,
    alignItems: 'center',
    borderRadius:30,
    justifyContent: 'center',
    margin:10,
  },
  header1: {
    // backgroundColor: 'red',
    height: windowHeight*0.35,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
  },

})

export default ViewItems;