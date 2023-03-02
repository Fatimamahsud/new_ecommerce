import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from '../Screens/HomeScreen';
import Landing from '../Screens/Landing';
import Profile from '../Screens/Profile';
import Settings from '../Screens/Settings';
import Favourites from '../Screens/Favourites';
import { Image } from 'react-native-svg';
import Trending from '../Screens/Trending';
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <NavigationContainer independent={true}>
    <Drawer.Navigator  screenOptions={{ headerShown: false }}

    initialRouteName=' '>
      <Drawer.Screen name="Home " component={HomeScreen} 
     />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="Trending " component={Trending} 
     />
      <Drawer.Screen name="Cart" component={Favourites} />
      <Drawer.Screen name="Settings" component={Settings} />
      <Drawer.Screen name="Logout" component={Landing} />
    </Drawer.Navigator>
  </NavigationContainer>
  );
}
export default MyDrawer;