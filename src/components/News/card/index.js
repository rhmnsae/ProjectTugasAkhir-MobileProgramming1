import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import {fonts} from '../../../fonts';

const windowWidth = Dimensions.get('window').width;

const Card = ({img, label, onPress}) => {
  const containerWidth = 0.9 * windowWidth;
  const containerHeight = (301.14 * containerWidth) / 372;
  const imageHeight = (210 * containerWidth) / 372;
  const textFontSize = 0.045 * windowWidth;

  const truncatedLabel =
    label.length > 65 ? `${label.substring(0, 65)}...` : label;

  return (
    <View
      style={[
        styles.container,
        {width: containerWidth, height: containerHeight},
      ]}>
      <TouchableWithoutFeedback onPress={onPress}>
        <Image source={img} style={[styles.image, {height: imageHeight}]} />
      </TouchableWithoutFeedback>
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={onPress}>
          <Text style={[styles.text, {fontSize: textFontSize, zIndex: 1}]}>
            {truncatedLabel}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    elevation: 1,
    marginHorizontal: 0.03 * windowWidth,
    marginBottom: 0.03 * windowWidth,
  },
  image: {
    width: '100%',
  },
  contentContainer: {
    padding: 0.02 * windowWidth,
    margin: 0.025 * windowWidth,
    width: '100%',
    height: 'auto',
  },
  text: {
    fontFamily: fonts.primary.semibold,
    paddingRight: 0.059 * windowWidth,
    color: '#333647',
  },
});

export default Card;
