import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {ICat2} from '../../assets';
import {fonts} from '../../fonts';
import {Button} from '../../components/molecules';

const WelcomeScreen = ({navigation}) => {
  const imageWidth = Dimensions.get('window').width * 0.85;
  const imageHeight = (imageWidth * 170) / 328;

  return (
    <View style={style.container}>
      <Image
        source={ICat2}
        style={[style.cat2, {width: imageWidth, height: imageHeight}]}
      />
      <View style={style.context}>
        <Text style={style.text1}>All news in one place,</Text>
        <Text style={style.text2}>be the first to know last news</Text>
      </View>
      <Button
        label="Get Started"
        onPress={() => {
          navigation.navigate('SignIn');
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cat2: {
    marginBottom: Dimensions.get('window').height * 0.35,
  },
  context: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    position: 'absolute',
    top: '64%',
  },
  text1: {
    fontFamily: fonts.primary.regular,
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: '400',
    color: '#7C82A1',
    marginTop: Dimensions.get('window').height * 0.03,
  },
  text2: {
    fontFamily: fonts.primary.regular,
    fontSize: Dimensions.get('window').width * 0.05,
    fontWeight: '400',
    color: '#7C82A1',
  },
});

export default WelcomeScreen;
