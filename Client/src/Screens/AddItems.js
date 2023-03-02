import { StyleSheet, TouchableOpacity, Dimensions, ScrollView, View, Text, TextInput, Button, Image, Alert } from 'react-native'
import Search from '../Components/Search';
import ListCards from '../Components/ListCards';
import React, { useState, useEffect } from 'react';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import ButtonC from '../Components/ButtonC';
import Field from './Field';
import { addItemsAPI } from '../utils/api';
import Background from '../Components/Background';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const AddItems = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);
  const [openCamera, setOpenCamera] = useState(false);

  const handleItems = async () => {
    try {
      const res = await addItemsAPI({
        name,
        price,
        image,
        
      }
      )
      console.log(res)
    }

    catch (error) {
      console.log("error")
    }
  }
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

  const submitForm = () => {
    Alert.alert('Form submitted!');
  };
  return (
    <Background>
    <View style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.text}>Add Items</Text>
      </View>
      <View style={styles.header1}>
        <Text style={styles.text1}>Enter Product Details</Text>
        <Field
          placeholder={'Enter name'}
          secureText={false}
          text={name}
          onChangeText={setName} />
        <Field
          placeholder={'Enter price'}
          secureText={false}
          text={price}
          onChangeText={setPrice} />
        <TouchableOpacity onPress={() => props.navigation.navigate('Trending')}>
          <ButtonC text="Upload Image" onPress={selectImage} />
        </TouchableOpacity>
        {image && (
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />
        )}
        <TouchableOpacity onPress={() => props.navigation.navigate('Trending')}>
        <TouchableOpacity 
    onPress={handleItems} 
    
     style={{
        backgroundColor:'#23e0e0',
        borderRadius:100,
        alignItems:'center',
        width:210,
        height:60,
        marginTop:20,
        justifyContent:'center',
        paddingVertical:5,
        
    }}>
       <Text style={{color:'black',fontSize:22,fontWeight:'bold'}}>
        Submit
       </Text>
    </TouchableOpacity>
        </TouchableOpacity>
      </View>
    </View>
    </Background>
  )
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: windowWidth,
    height:windowHeight,
    alignItems: 'center',
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
    height: windowHeight*0.35,
    width: windowWidth,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text1: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 25,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    padding:10,
  },

})

export default AddItems;