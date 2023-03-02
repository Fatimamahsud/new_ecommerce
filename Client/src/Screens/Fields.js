import React from 'react';
import {TextInput} from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
import {darkGreen} from './Constants';

const Fields = props => {
  return (
    <TextInput
      {...props}
      style={{borderRadius: 100, color: 'black', height:50,paddingHorizontal: 10, width: 300, backgroundColor: 'white', marginVertical: 10}}
      placeholderTextColor='black'></TextInput>
  );
};
export default Fields;
