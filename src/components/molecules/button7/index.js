import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking,
} from 'react-native';
import {fonts} from '../../../fonts';
import {Ifacebook} from '../../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button7 = ({label, onPress, link}) => {
  const buttonWidthPercentage = 0.86;
  const buttonHeight = 0.075 * windowHeight;
  const imageContainerWidth = 0.075 * windowWidth;
  const imageContainerAspectRatio = 1;

  const handleButtonPress = () => {
    Linking.openURL('https://facebook.com');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {width: windowWidth * buttonWidthPercentage, height: buttonHeight},
        ]}
        onPress={handleButtonPress}>
        <View
          style={[
            styles.imageContainer,
            {
              width: imageContainerWidth,
              aspectRatio: imageContainerAspectRatio,
            },
          ]}>
          <Image source={Ifacebook} style={styles.gmbr} resizeMode="contain" />
        </View>
        <Text style={styles.text}>Sign In With Facebook</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    top: 0.265 * windowHeight,
  },
  button: {
    backgroundColor: '#F3F4F6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.045 * windowWidth,
  },
  text: {
    fontSize: 0.04 * windowWidth,
    color: '#666C8E',
    fontFamily: fonts.primary.semibold,
  },
  imageContainer: {
    width: 0.1 * windowWidth,
    aspectRatio: 1,
  },
  gmbr: {
    flex: 1,
    width: undefined,
    height: undefined,
    marginLeft: -0.25 * windowWidth,
  },
});

export default Button7;
