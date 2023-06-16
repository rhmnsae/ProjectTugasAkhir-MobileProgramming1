import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {fonts} from '../../../fonts';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Notif = ({onPress}) => {
  const containerTop = -0.02 * windowHeight;
  const buttonHeight = 0.075 * windowHeight;
  const buttonWidthPercentage = 0.86;
  const textFontSize = 0.045 * windowWidth;
  const [isOn, setIsOn] = useState(true)
  function toggleSwitch(){
    setIsOn(isOn=> !isOn)
  }
  return (
    <View style={[styles.container, {top: containerTop}]}>
      <View
        style={[
          styles.button,
          {height: buttonHeight, width: windowWidth * buttonWidthPercentage},
        ]}
        onPress={onPress}>
        <Text style={[styles.text, {fontSize: textFontSize}]}>
          Notifications
        </Text>
        <TouchableOpacity style={[styles.outter, isOn?{justifyContent: 'flex-end', backgroundColor: "#6D9886"}:
        {justifyContent: 'flex-start', backgroundColor: "#ACAFC3"}
    ]} activeOpacity={1} onPress={(toggleSwitch)}>
          <View style={[styles.inner]} />
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
    marginRight: 0.37 * windowWidth,
  },
  outter: {
    width: 50,
    height: 30,
    backgroundColor: '#ACAFC3',
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  inner: {
    width: 26,
    height: 26,
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    elevation: 8,
    shadowOffset: {width: 0, height: 0},
    shadowOpacity: 0.15,
    shadowRadius: 2,
  }
});

export default Notif;
