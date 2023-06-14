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

const Button2 = ({label, onPress}) => {
  const buttonWidthPercentage = 0.86;
  const buttonHeight = 0.075 * windowHeight;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {width: windowWidth * buttonWidthPercentage, height: buttonHeight},
        ]}
        onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 0.1 * windowHeight,
  },
  button: {
    height: 0.07 * windowHeight,
    backgroundColor: '#393E46',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.045 * windowWidth,
  },
  text: {
    fontSize: 0.04 * windowWidth,
    color: '#FFFFFF',
    fontFamily: fonts.primary.semibold,
  },
});

export default Button2;
