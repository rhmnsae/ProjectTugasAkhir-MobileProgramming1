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
import {IbookmarkBerita} from '../../../assets';

const windowWidth = Dimensions.get('window').width;

const Card = ({img, label, onPress}) => {
  const containerWidth = 0.9 * windowWidth;
  const containerHeight = (301.14 * containerWidth) / 372;
  const imageHeight = (210 * containerWidth) / 372;
  const textFontSize = 0.045 * windowWidth;

  const truncatedLabel =
    label.length > 45 ? `${label.substring(0, 45)}...` : label;

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
      <TouchableOpacity>
        <Image source={IbookmarkBerita} style={styles.book}/>
      </TouchableOpacity>
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
    margin: 0.025 * windowWidth,
    width: 0.67 * windowWidth,
    height: 0.12 * windowWidth,
  },
  text: {
    fontFamily: fonts.primary.semibold,
    paddingRight: 0.059 * windowWidth,
    color: '#333647',
  },
  book: {
    width: 0.08 * windowWidth,
    height: 0.08 * windowWidth,
    marginLeft: 0.77 * windowWidth,
    bottom: 0.10 * windowWidth,
  }
});

export default Card;
