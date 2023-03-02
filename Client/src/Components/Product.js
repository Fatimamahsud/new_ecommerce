import { StyleSheet, Text, View , Image,TouchableOpacity,svg} from 'react-native'
import React from 'react'
import Favourite from '../assets/svg/Favourite.svg'

class Product extends React.Component {
    render(){
        const {name,price,productImage}=this.props.product
        return(
            <View style={{margin:3}}>
                <Image style = {{ width:180,height:250,borderRadius:30,margin:10}} source = {require('../assets/png/background.png')} />
                <Text style={{fontWeight:'bold',alignItems:'center',justifyContent:'center',fontSize:20,color:'black',marginLeft:10}}>{name}</Text>
                <Text style={{fontWeight:'bold',alignItems:'center',justifyContent:'center',fontSize:15,color:'#8069CC',marginLeft:10,marginBottom:10}}>{price}</Text>
                    {/* <Favourite/> */}           
            </View>
        )
    }
    
}

export default Product;