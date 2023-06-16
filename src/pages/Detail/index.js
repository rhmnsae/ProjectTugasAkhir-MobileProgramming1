import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Share,
} from 'react-native';
import {IBack, IbookmarkBerita, Ishare} from '../../assets';
import {fonts} from '../../fonts';
import Pinchable from 'react-native-pinchable';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Detail1 = ({route, navigation}) => {
  const {image} = route.params;
  const {titleDetail} = route.params;
  const {textDetail1} = route.params;
  const {textDetail2} = route.params;

  const handleShare = () => {
    Share.share({
      message: 'MacNews',
    });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <View style={styles.img2}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => {
                navigation.navigate('MainApp');
              }}>
              <Image source={IBack} style={styles.back} />
            </TouchableOpacity>
            <TouchableOpacity onPress={handleShare}>
              <Image source={Ishare} style={styles.share} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={IbookmarkBerita} style={styles.book} />
            </TouchableOpacity>
          </View>
          <Pinchable>
            <Image source={image} style={styles.image} />
          </Pinchable>
          <View style={styles.tekscon}>
            <Text style={styles.title}>{titleDetail}</Text>
            <Text style={styles.text1}>{textDetail1}</Text>
            <Text style={styles.text2}>{textDetail2}</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  wrapper: {
    marginTop: 0.03 * windowHeight,
  },
  title: {
    fontSize: 0.06 * windowWidth,
    color: '#333647',
    marginHorizontal: 0.064 * windowWidth,
    fontFamily: fonts.primary.bold,
    marginTop: 0.012 * windowWidth,
  },
  text1: {
    fontSize: 0.05 * windowWidth,
    color: '#333647',
    marginHorizontal: 0.064 * windowWidth,
    fontFamily: fonts.primary.semibold,
    marginTop: 0.021 * windowWidth,
    top: 0.052 * windowWidth,
  },
  text2: {
    fontSize: 0.05 * windowWidth,
    color: '#666C8E',
    marginHorizontal: 0.064 * windowWidth,
    fontFamily: fonts.primary.regular,
    marginBottom: 0.021 * windowWidth,
    top: 0.082 * windowWidth,
  },
  tekscon: {
    margin: 0.015 * windowWidth,
  },
  image: {
    width: 0.928 * windowWidth,
    height: 0.533 * windowWidth,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#FFFFFF',
    margin: 0.064 * windowWidth,
    marginTop: 0.15 * windowWidth,
    zIndex: 0,
  },
  img2: {
    flexDirection: 'row',
    marginBottom: 0.015 * windowWidth,
    top: 0.015 * windowWidth,
    zIndex: 1,
  },
  backButton: {
    position: 'absolute',
    left: 0.055 * windowWidth,
  },
  back: {
    width: 0.08 * windowWidth,
    height: 0.08 * windowWidth,
  },
  book: {
    position: 'absolute',
    width: 0.07 * windowWidth,
    height: 0.07 * windowWidth,
    left: 0.9 * windowWidth,
  },
  share: {
    position: 'absolute',
    width: 0.07 * windowWidth,
    height: 0.07 * windowWidth,
    left: 0.78 * windowWidth,
  },
});

export default Detail1;
