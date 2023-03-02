import React from 'react'
import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView,SafeAreaView, Image } from 'react-native';
import Product from './Product';
import Favourite from '../assets/svg/Favourite.svg'

const url =  '../assets/png/background.png';

const products = [
    {name:'Shirt Printed',price:'$25'} ,
    {name:'Shirt Printed',price:'$25'} ,
    {name:'Shirt Printed',price:'$25'} ,
    {name:'Shirt Printed',price:'$25'} ,
    {name:'Shirt Printed',price:'$25'} ,
    {name:'Shirt Printed',price:'$25'} ,
    {name:'Shirt Printed',price:'$25'} ,
    {name:'Shirt Printed',price:'$25'} ,
]

export default function ListCards(name,price) {
  return (
    <SafeAreaView>
        <FlatList numColumns={2} keyExtractor ={(item,index)=>index.toString()} data={products} renderItem={({item})=>(<Product product = {item}/>)}>
        </FlatList>
          </SafeAreaView>
  )
}

const styles = StyleSheet.create({})























// import React from 'react';
// import { StyleSheet, Text, View, FlatList, Dimensions, ScrollView } from 'react-native';

// const data = [
//   { key: 'A' }, { key: 'B' }, { key: 'C' }, { key: 'D' }, { key: 'E' }, { key: 'F' }, { key: 'G' }, { key: 'H' }, { key: 'I' }, { key: 'J' },
//   // { key: 'K' },
//   // { key: 'L' },
// ];

// const formatData = (data, numColumns) => {
//   const numberOfFullRows = Math.floor(data.length / numColumns);

//   let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
//   while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
//     data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
//     numberOfElementsLastRow++;
//   }

//   return data;
// };

// const numColumns = 2;
// export default class App extends React.Component {
//   renderItem = ({ item, index }) => {
//     if (item.empty === true) {
//       return <View style={[styles.item, styles.itemInvisible]} />;
//     }
//     return (
//       <View
//         style={styles.item}
//       >
//         <Text style={styles.itemText}>{item.key}</Text>
//       </View>
//     );
//   };

//   render() {
//     return (
//         <ScrollView>
//       <FlatList
//         data={formatData(data, numColumns)}
//         style={styles.container}
//         renderItem={this.renderItem}
//         numColumns={numColumns}
//       />
//       </ScrollView>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     marginVertical: 20,
//   },
//   item: {
//     backgroundColor: '#4D243D',
//     alignItems: 'center',
//     justifyContent: 'center',
//     flex: 1,
//     margin: 1,
//     height: Dimensions.get('window').width / numColumns, // approximate a square
//   },
//   itemInvisible: {
//     backgroundColor: 'transparent',
//   },
//   itemText: {
//     color: '#fff',
//   }
// })