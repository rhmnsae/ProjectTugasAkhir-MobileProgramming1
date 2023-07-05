import React from 'react';
import {
  Onboarding,
  SignIn,
  SplashScreen,
  WelcomeScreen,
  SignUp,
  HomePage,
  Profile,
  Detail1,
  Categorie,
  Bookmark,
  DetailKelompok,
  Categ,
} from './pages';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigator} from './components';
import {useColorScheme} from 'react-native';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="HomePage"
        component={HomePage}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Categorie"
        component={Categorie}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Bookmark"
        component={Bookmark}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

const MyTheme = {
  colors: {
    primary: '',
    background: '',
    texthead: '',
    text: '',
    border: '',
    notification: '',
  },
};

const DarkTheme = {
  colors: {
    primary: ' ',
    background: '#FFFFFF',
    texthead: ' ',
    text: ' ',
    border: ' ',
    notification: '',
  },
};

const App = () => {
  const colorScheme = useColorScheme();
  return (
    <NavigationContainer theme={colorScheme === 'dark' ? DarkTheme : MyTheme}>
      <Stack.Navigator initialRouteName="SplashScreen">
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WelcomeScreen"
          component={WelcomeScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="SignUp"
          component={SignUp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="MainApp"
          component={MainApp}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Detail1"
          component={Detail1}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="DetailKelompok"
          component={DetailKelompok}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Categ"
          component={Categ}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
