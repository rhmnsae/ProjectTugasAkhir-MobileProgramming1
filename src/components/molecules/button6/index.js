import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  Linking
} from 'react-native';
import {fonts} from '../../../fonts';
import {IPanah} from '../../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button6 = () => {
  const containerTop = -0.02 * windowHeight;
  const buttonHeight = 0.075 * windowHeight;
  const buttonWidthPercentage = 0.86;
  const textFontSize = 0.045 * windowWidth;
  const imageWidth = 0.075 * windowWidth;
  const imageHeight = 0.075 * windowWidth;

  const handleButtonPress = () => {
    Linking.openURL(
      'https://github.com/rhmnsae/ProjectTugasAkhir-MobileProgramming1',
    );
  };

  return (
    <View style={[styles.container, {top: containerTop}]}>
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            {height: buttonHeight, width: windowWidth * buttonWidthPercentage},
          ]}
          onPress={handleButtonPress}>
          <Image
            source={IPanah}
            style={[styles.gmbr, {width: imageWidth, height: imageHeight}]}
          />
          <Text style={[styles.text, {fontSize: textFontSize}]}>Github</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 0.12 * windowWidth,
  },
  button: {
    backgroundColor: '#F3F4F6',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.045 * windowWidth,
  },
  text: {
    color: '#666C8E',
    fontFamily: fonts.primary.semibold,
    right: 0.32 * windowWidth,
  },
  gmbr: {
    width: 0.075 * windowWidth,
    height: 0.075 * windowWidth,
    left: 0.41 * windowWidth,
  },
});

export default Button6;
