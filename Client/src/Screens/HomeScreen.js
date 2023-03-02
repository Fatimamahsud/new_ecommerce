import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native'
import React from 'react'
import Search from '../Components/Search';
import ListCards from '../Components/ListCards';
import Category from '../Components/Category';

const HomeScreen = (props) => {
  return (
    <>
      <View style={styles.body}>
        <View style={styles.header}>
          <Image style={{
            height: 50, width: 60, marginTop: 20,
            marginLeft: 20,
          }} source={require('../assets/png/drawer.png')} />
          <TouchableOpacity onPress={() => props.navigation.navigate('Trending')}>
            <Image style={{
              height: 60, width: 50, marginTop: 15,
              marginLeft: 20, marginRight: 20,
            }} source={require('../assets/png/logo.png')} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>
          COLLECTIONS
        </Text>
        <Search />
        <ScrollView horizontal={true} style={{}}>
          <View style={{ flexDirection: 'row', backgroundColor: 'white', height: 200 }}>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Trending')}
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#816ACD',
                marginTop: 20,
                marginLeft: 20,
                borderRadius: 20,
              }}>
                
              <Image style={{
                height: 60, width: 60, marginTop: 20,
                marginLeft: 20,
              }} source={require('../assets/png/CategoryIcon.png')} />
              <Text style={styles.text2}>Categories</Text>

            </TouchableOpacity>
           
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Trending')}
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
              }} source={require('../assets/png/women.png')} />
              <Text style={styles.text1}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Trending')}
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
              }} source={require('../assets/png/man.png')} />
              <Text style={styles.text1}>Men</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Trending')}
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
                marginLeft: -15,
              }} source={require('../assets/png/boy.png')} />
              <Text style={styles.text1}>Boy</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => props.navigation.navigate('Trending')}
              style={{
                height: 100,
                width: 100,
                backgroundColor: '#f8c5cd',
                marginTop: 20,
                marginLeft: 20,
                borderRadius: 50
              }}>
              <Image style={{
                height: 120, width: 120, marginTop: -20,
                marginLeft: -10,
              }} source={require('../assets/png/girl.png')} />
              <Text style={styles.text}>Girl</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <View style={{ height: 30, width: 3000, backgroundColor: 'white', marginTop: 0 }}>
          <Text style={{ color: 'black', marginTop: -50, marginLeft: 20, fontSize: 40, fontWeight: 'bold' }}>
            NEW IN
          </Text>
          {/* <ListCards/> */}
        </View>

      </View><View style={{ height: 400, width: 3000, backgroundColor: 'white' }}>
        <ListCards />
      </View></>
  )
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    flex: 1,

  },
  header: {
    backgroundColor: 'white',
    height: 80,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 10,
    fontSize: 35,
    marginLeft: 25,
  },
  text1: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 30,
    fontSize: 20,
    marginLeft: 0,
  },

  text2: {
    color: 'black',
    fontWeight: 'bold',
    marginTop: 43,
    fontSize: 20,
    marginLeft: -5,
  },
})

export default HomeScreen;