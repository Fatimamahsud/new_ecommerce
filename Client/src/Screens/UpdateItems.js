import { StyleSheet, TouchableOpacity, Dimensions, ScrollView, View, Text, TextInput, Button, Image, Alert } from 'react-native'
import Search from '../Components/Search';
import ListCards from '../Components/ListCards';
import React, { useState, useEffect } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ButtonC from '../Components/ButtonC';
import Fields from './Fields';
import { addItemsAPI, updateProductAPI } from '../utils/api';
import {viewProductByIdAPI } from '../utils/api';
import { useIsFocused } from "@react-navigation/native";
import Background from '../Components/Background';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const UpdateItems = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [openCamera, setOpenCamera] = useState(false);
  const {productId} = route.params;


  const [product, setProduct] = useState();
  const isFocused = useIsFocused();

  const fetchProducts = async () => {
    const { data } = await viewProductByIdAPI(productId);
    setProduct(data);
    setName(data.name);
    setPrice(data.price)
  };

  useEffect(() => {
    fetchProducts();
  }, [isFocused])


  const selectImage = async camera => {
    let options = {
      mediaType: 'photo',
    };

    let response;
    if (camera) {
      response = await launchCamera(options);
    } else {
      response = await launchImageLibrary(options);
    }

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else {s
      setImage(response.assets[0].uri);
    }
  };

  const submitForm = async() => {
    const product = await updateProductAPI({_id: productId, name, price})
    Alert.alert('Items Updated!');
        navigation.navigate('AdminDashboard')

  };
  return (
    <Background>
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.text}>Update Items</Text>
      </View>
        <View style={styles.header1}>
         <View style={styles.card} >
         <View style={{ flexDirection:'row',margin:0}}>
            <Text style={{ color: 'black',marginRight:10,fontSize:18 }}>Product Name: </Text>
                <Text style={{ color: 'black',backgroundColor:'pink',padding:10,borderRadius:5 }}>{product?.name}</Text>
                </View>
                <View style={{ flexDirection:'row',margin:10}}>
            <Text style={{ color: 'black',marginRight:10,fontSize:18 }}>Product Price: </Text>
                <Text style={{ color: 'black',backgroundColor:'pink',padding:10,borderRadius:5 }}>{product?.price}</Text>
                
                </View>
                <View style={{flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                  <Text style={styles.text1}>Edit Below the Item Details</Text>
                <Fields
          placeholder={'Enter name'}
          secureText={false}
          value={name}
          onChangeText={setName} />
        <Fields
          placeholder={'Enter price'}
          secureText={false}
          value={price}
          onChangeText={setPrice} />
        <TouchableOpacity onPress={() => navigation.navigate('Trending')}>
          <ButtonC text="Edit Image" onPress={selectImage} />
        </TouchableOpacity>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
   
          <ButtonC text={'Submit'} onPress={submitForm} />


      </View>
                </View>
          </View>
      </View>               
        
    </Background>
  )
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
  header1: {
    // backgroundColor: 'black',
    height: windowHeight*0.30,
    width: windowWidth,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    backgroundColor: '#23e0e0',
    height: windowHeight*0.6,
    width: windowWidth*0.8,
    marginTop:350,
    alignItems: 'center',
    borderRadius:30,
    justifyContent: 'center',
    margin:10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },

})

export default UpdateItems;