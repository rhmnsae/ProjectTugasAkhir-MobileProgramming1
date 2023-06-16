import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {fonts} from '../../fonts';
import {Button4, Button5, Notif, Button6} from '../../components/molecules';
import {Iprof} from '../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Profile = ({navigation}) => {
  const text1FontSize = 0.07 * windowWidth;
  const gbrWidth = 0.22 * windowWidth;
  const gbrHeight = 0.22 * windowWidth;
  const text2FontSize = 0.045 * windowWidth;
  const text3FontSize = 0.04 * windowWidth;

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text style={[styles.text1, {fontSize: text1FontSize}]}>Profile</Text>
      </View>
      <Image
        source={Iprof}
        style={[styles.gbr, {width: gbrWidth, height: gbrHeight}]}
      />
      <View style={styles.cont}>
        <Text style={[styles.text2, {fontSize: text2FontSize}]}>Otong</Text>
        <Text style={[styles.text3, {fontSize: text3FontSize}]}>
          surotongotong@gmail.com
        </Text>
      </View>
      <Notif />
      <Button5
        onPress={() => {
          navigation.navigate('DetailKelompok');
        }}
      />
      <Button6 />
      <Button4
        onPress={() => {
          navigation.navigate('SplashScreen');
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: windowWidth * 0.05,
  },
  wrapper: {
    marginTop: 0.01 * windowHeight,
    marginBottom: 0.043 * windowHeight,
  },
  text1: {
    fontFamily: fonts.primary.semibold,
    color: '#333647',
    top: 0.03 * windowHeight,
  },
  gbr: {
    marginLeft: 0.02 * windowWidth,
    marginTop: 0.045 * windowHeight,
  },
  cont: {
    bottom: 0.16 * windowWidth,
    marginLeft: 0.31 * windowWidth,
    marginBottom: 0.015 * windowHeight,
  },
  text2: {
    fontFamily: fonts.primary.semibold,
    color: '#333647',
  },
  text3: {
    fontFamily: fonts.primary.regular,
    color: '#333647',
  },
  aboutus: {
    color: '#666C8E',
    fontFamily: fonts.primary.semibold,
    fontSize: 0.045 * windowWidth,
    textAlign: 'center',
    paddingTop: 0.01 * windowWidth,
  },
});

export default Profile;
