import React, {useState} from 'react';
import {View, Text, Touchable, TouchableOpacity} from 'react-native';
import Background from '../Components/Background';
import { signUpAPI } from '../utils/api';
import Field from './Field';

const SignUp = (props) => {
  const[firstName,setFirstName] = useState(' ');
  const[lastName,setlastName] = useState(' ');
  const[email,setemail] = useState(' ');
  const[contactNumber,setcontactNumber] = useState(' ');
  const[password,setpassword] = useState(' ');
  const[confirmPassword,setconfirmPassword] = useState(' ');

console.log(firstName)
  const handleSignUp = async()=>{
    console.log('fjk')
   try{
    const res = await signUpAPI({
      firstName,   
      lastName,    
      email,
      contactNumber,
      password,
    })
    console.log(res)
    props.navigation.navigate('HomeScreen')
   }
   catch(error){
        console.log("error")
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
        </Text>
        <View
          style={{
            backgroundColor: 'white',
            height: 750,
            width: 460,
            borderRadius: 30,
            paddingTop: 90,
            alignItems: 'center',
          }}>
          <Text style={{fontSize: 40, color: 'black', fontWeight: 'bold',marginTop:-70}}>
            Register
          </Text>
          <Text
            style={{
              color: 'grey',
              fontSize: 14,
              fontWeight: 'bold',
              marginBottom: 20,
            }}>
            Create New Account
          </Text>
          <Field
            value = {firstName}
            onChangeText={setFirstName}
            placeholder="First Name"
          />
          <Field
          value = {lastName}
          onChangeText={setlastName}
            placeholder="Last Name"
          />
          <Field
         value={email}
         onChangeText={setemail}
            placeholder="Email / Username"
          />
          <Field
 value = {contactNumber}
 onChangeText={setcontactNumber}
            placeholder="Contact Number"
          />
          <Field 
          value = {password}
          onChangeText={setpassword}
          placeholder="Password" secureTextEntry={true} />
          <Field 
            value = {confirmPassword}
            onChangeText={setconfirmPassword}
          placeholder="Confirm Password" secureTextEntry={true} />
          <View
            style={{alignItems: 'flex-end', width: '78%', paddingRight: 28, marginBottom: 40,marginTop:15}}>
            <Text style={{color: 'black', fontWeight: 'bold', fontSize: 12}}>
             By Signing in you agree to our terms and Conditions.  
            </Text>
          </View>
          <TouchableOpacity  
                onPress={handleSignUp}
          style={{
        backgroundColor:'#23e0e0',
        borderRadius:100,
        alignItems:'center',
        width:250,
        height:50,
        justifyContent:'center',        
    }}>
       <Text style={{color:'white',fontSize:22,fontWeight:'bold'}}>
        Sign Up
       </Text>
    </TouchableOpacity>        
   <View style={{ display: 'flex', flexDirection :'row', justifyContent: "center",marginTop:25 }}>
            <Text style={{ fontSize: 16, fontWeight:"bold",color:'black' }}>Already have an Account ? </Text>
            <TouchableOpacity onPress={() => props.navigation.navigate('Login')}>
            <Text style={{ fontWeight: 'bold', fontSize: 16, color:'#23e0e0' }}>SignIn</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Background>
  );
};

export default SignUp;