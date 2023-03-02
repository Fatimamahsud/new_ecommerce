import React, {useState} from 'react';
import {Alert,View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../Components/Background';
import Field from './Field';
import { signInAPI } from '../utils/api';
import Home from './Home';
import HomeScreen from './HomeScreen';


const email='admin';


const AdminSignIn = (props) => {
  const[email,setemail] = useState(' ');
  const[password,setpassword] = useState(' ');
  const valid =  () => {
    if(email == email){
        console.log('yess')
        props.navigation.navigate('AdminDashboard')
    }
    else{
        Alert.alert('Invalid Credentials')
    }
  }

  return (
    <Background>
      <View style={{alignItems: 'center', width: 460}}>
        <Text
          style={{
            color: 'black',
            fontSize: 34,
            fontWeight: 'bold',
            marginVertical: 20,
          }}>
          Login
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 300,
            width: 460,
            borderRadius: 30,
            paddingTop: 90,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 30, color: 'black', fontWeight: 'bold',marginTop:-70}}>
            Welcome Back
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Login to your account
          </Text>
          <Field
           value={email}
           onChangeText={setemail}
            placeholder="    Email / Username"
          />
          <Field  
          value = {password}
          onChangeText={setpassword}
          placeholder="     Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 19, marginBottom: 60,marginTop:15}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
              Forgot Password ?
            </Text>
          </View>
 <TouchableOpacity  
          onPress={valid}
          style={{
        backgroundColor:'#23e0e0',
        borderRadius:100,
        marginLeft:-150,
        alignItems:'center',
        width:250,
        height:50,
        justifyContent:'center',        
    }}>
       <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>
        Sign In
       </Text>
    </TouchableOpacity>  
          
               
   <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center",marginLeft:-400,marginTop:20 }}>
            <Text style={{ fontSize: 16, fontWeight:"bold",marginLeft:250,color:'black' }}>Don't have an account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('SignUp')}>
            <Text style={{ color:'#23e0e0', fontWeight: 'bold', fontSize: 16, fontWeight:'bold' }}>SignUp</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default AdminSignIn;