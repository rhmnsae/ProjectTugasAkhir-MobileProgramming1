import React, {useEffect} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {ILogo} from '../../assets';

const windowWidth = Dimensions.get('window').width;

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Onboarding');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Image source={ILogo} style={styles.logo} resizeMode="contain" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 0.55 * windowWidth,
    height: 0.475 * windowWidth,
  },
});

export default SplashScreen;
