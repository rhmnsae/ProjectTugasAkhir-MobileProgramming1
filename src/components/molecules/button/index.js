import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {fonts} from '../../../fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Button = ({label, onPress}) => {
  const buttonWidthPercentage = 0.86;
  const buttonHeight = 0.075 * windowHeight;

  return (
    <View style={style.container}>
      <TouchableOpacity
        style={[
          style.button,
          {width: windowWidth * buttonWidthPercentage, height: buttonHeight},
        ]}
        onPress={onPress}>
        <Text style={style.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0.11 * windowHeight,
  },
  button: {
    height: 0.07 * windowHeight,
    backgroundColor: '#393E46',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.045 * windowWidth,
  },
  text: {
    fontSize: 0.045 * windowWidth,
    color: '#FFFFFF',
    fontFamily: fonts.primary.semibold,
  },
});

export default Button;
