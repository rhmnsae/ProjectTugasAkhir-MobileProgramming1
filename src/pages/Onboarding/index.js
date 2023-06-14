import React from 'react';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {ICat1} from '../../assets';
import {fonts} from '../../fonts';
import {Button} from '../../components/molecules';
import {useTheme} from '@react-navigation/native';

const Onboarding = ({navigation}) => {
  const imageWidth = Dimensions.get('window').width * 0.85;
  const imageHeight = (imageWidth * 170) / 328;

  const {colors} = useTheme();
  const useStyle = style(colors);

  return (
    <View style={useStyle.container}>
      <Image
        source={ICat1}
        style={[useStyle.cat1, {width: imageWidth, height: imageHeight}]}
      />
      <View style={useStyle.context}>
        <Text style={useStyle.text1}>Mac News</Text>
        <Text style={useStyle.text2}>Most Accurate and Latest</Text>
        <Text style={useStyle.text3}>News Provider</Text>
      </View>
      <Button
        label="Next"
        onPress={() => {
          navigation.navigate('WelcomeScreen');
        }}
      />
    </View>
  );
};

const style = colors =>
  StyleSheet.create({
    container: {
      backgroundColor: '#FFFFFF',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cat1: {
      marginBottom: Dimensions.get('window').height * 0.35,
    },
    context: {
      alignItems: 'center',
      justifyContent: 'flex-end',
      position: 'absolute',
      top: '50%',
    },
    text1: {
      fontFamily: fonts.primary.semibold,
      fontSize: Dimensions.get('window').width * 0.07,
      fontWeight: 600,
      color: '#333647',
      marginTop: Dimensions.get('window').height * 0.1,
    },
    text2: {
      fontFamily: fonts.primary.regular,
      fontSize: Dimensions.get('window').width * 0.05,
      fontWeight: 400,
      color: '#7C82A1',
      marginTop: Dimensions.get('window').height * 0.04,
    },
    text3: {
      fontFamily: fonts.primary.regular,
      fontSize: Dimensions.get('window').width * 0.05,
      fontSize: 19,
      fontWeight: 400,
      color: '#7C82A1',
    },
  });

export default Onboarding;
