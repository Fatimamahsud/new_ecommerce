// In App.js in a new project
import * as React from 'react';
import SignUp from './src/Screens/SignUp';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/Screens/Home';
import Landing from './src/Screens/Landing';
import Login from './src/Screens/Login';
import ListCards from './src/Components/ListCards';
import HomeScreen from './src/Screens/HomeScreen';
import Trending from './src/Screens/Trending';
import CardViews from './src/Screens/CardViews';
import 'react-native-gesture-handler';
import MyCart from './src/Screens/MyCart';
import Cart from './src/Screens/Cart';
import MyDrawer from './src/Navigation/MyDrawer';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AdminDashboard from './src/Screens/AdminDashboard';
import AddItems from './src/Screens/AddItems';
import Choice from './src/Screens/Choice';
import ViewItems from './src/Screens/ViewItems';
import UpdateItems from './src/Screens/UpdateItems';
import AdminSignIn from './src/Screens/AdminSignIn';

const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();
function App() {
  return (
    // <Landing/>
    // <Login/>
    // <HomeScreen/>
    // <Trending/>
    // <CardViews/>
    // <SignUp/>
    // <AdminDashboard/>
    // <AddItems/>
    // <Home/>
      <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Landing" component={Landing} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="HomeScreen" component={MyDrawer} />
        <Stack.Screen name="Trending" component={Trending} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="Cart" component={Cart} />
        <Stack.Screen name="MyDrawer" component={MyDrawer} />
        <Stack.Screen name="AdminDashboard" component={AdminDashboard}/>
        <Stack.Screen name="AddItems" component={AddItems}/>
        <Stack.Screen name="Choice" component={Choice}/>
        <Stack.Screen name="ViewItems" component={ViewItems}/>
        <Stack.Screen name="UpdateItems" component={UpdateItems}/>
        <Stack.Screen name="AdminSignIn" component={AdminSignIn}/>
      </Stack.Navigator>
     </NavigationContainer>
 ) 
}
export default App;