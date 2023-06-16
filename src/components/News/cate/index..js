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

const Cate = ({label, onPress}) => {
  const buttonWidthPercentage = 0.4;
  const buttonHeight = 0.1 * windowHeight;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.button,
          {width: windowWidth * buttonWidthPercentage, height: buttonHeight},
        ]}onPress={onPress}>
        <Text style={styles.text}>{label}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    top: 0.04 * windowHeight,
    margin: 0.01 * windowHeight,
    left: 0.001 * windowHeight,
  },
  button: {
    height: 0.07 * windowHeight,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 0.04 * windowWidth,
    elevation: 1.2,
  },
  text: {
    fontSize: 0.04 * windowWidth,
    color: '#666C8E',
    fontFamily: fonts.primary.semibold,
  },
});

export default Cate;
