import React, {useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {fonts} from '../../../fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Input = ({gmbr, plc, error, onFocus, ...props}) => {
  const inputContainerHeight = 0.075 * windowHeight;
  const inputContainerWidth = 0.86 * windowWidth;
  const gmbrWidth = 0.035 * windowHeight;
  const gmbrHeight = 0.035 * windowHeight;
  const gmbrLeft = 0.054 * windowWidth;
  const inputFontSize = 0.045 * windowWidth;
  const inputLeft = 0.095 * windowWidth;

  const handleInputPress = () => {
    // Logika untuk menangani saat input diklik
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={handleInputPress}>
        <View
          style={[
            styles.inputContainer,
            {height: inputContainerHeight, width: inputContainerWidth},
          ]}>
          <Image
            source={gmbr}
            style={[{width: gmbrWidth, height: gmbrHeight, left: gmbrLeft}]}
          />
          <TextInput
            {...props}
            style={[styles.input, {fontSize: inputFontSize, left: inputLeft}]}
            placeholder={plc}
            placeholderTextColor="#7C82A1"
            maxLength={35}
          />
        </View>
      </TouchableWithoutFeedback>
      {error && <Text style={styles.texterror}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 17,
    top: 0.1 * windowHeight,
  },
  inputContainer: {
    backgroundColor: '#F3F4F6',
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 0.045 * windowWidth,
  },
  input: {
    color: '#7C82A1',
    flex: 1,
    paddingHorizontal: 10,
  },
  texterror: {
    color: '#7C82A1',
    fontFamily: fonts.primary.regular,
    fontSize: 0.03 * windowWidth,
    position: 'absolute',
    top: 0.157 * windowWidth,
  },
});

export default Input;
