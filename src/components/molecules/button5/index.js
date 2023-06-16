import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
  
} from 'react-native';
import {fonts} from '../../../fonts';
import {IPanah} from '../../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button5 = ({onPress}) => {
  const containerTop = -0.02 * windowHeight;
  const buttonHeight = 0.075 * windowHeight;
  const buttonWidthPercentage = 0.86;
  const textFontSize = 0.045 * windowWidth;
  const imageWidth = 0.075 * windowWidth;
  const imageHeight = 0.075 * windowWidth;

  return (
    <View style={[styles.container, {top: containerTop}]}>
      <View>
        <TouchableOpacity
          style={[
            styles.button,
            {height: buttonHeight, width: windowWidth * buttonWidthPercentage},
          ]}
          onPress={onPress}>
          <Image
            source={IPanah}
            style={[styles.gmbr, {width: imageWidth, height: imageHeight}]}
          />
          <Text style={[styles.text, {fontSize: textFontSize}]}>About us</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginBottom: 0.045 * windowWidth,
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
    right: 0.3 * windowWidth,
  },
  gmbr: {
    width: 0.075 * windowWidth,
    height: 0.075 * windowWidth,
    left: 0.43 * windowWidth,
  },
});

export default Button5;
