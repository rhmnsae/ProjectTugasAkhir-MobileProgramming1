import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import {fonts} from '../../fonts';
import {IEllipse} from '../../assets';
import {Ibook} from '../../assets';

const Bookmark = () => {
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.text1}>Bookmark</Text>
        <Text style={style.text2}>Saved articles to the library</Text>
      </View>
      <View style={style.img}>
        <Image source={IEllipse} style={style.el} />
        <Image source={Ibook} style={style.vec} />
      </View>
      <View style={style.bawah}>
        <Text style={style.text3}>You haven't saved any articles</Text>
        <Text style={style.text4}>yet. Start reading and</Text>
        <Text style={style.text5}>bookmarking them now</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const style = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: windowWidth * 0.05, // 5% of the screen windowWidth
  },
  wrapper: {
    marginTop: 0.01 * windowHeight,
    marginBottom: windowWidth * 0.07, // 3% of the screen windowWidth
  },
  text1: {
    fontFamily: fonts.primary.semibold,
    fontSize: windowWidth * 0.07, // 8% of the screen windowWidth
    color: '#333647',
    top: 0.03 * windowHeight,
  },
  text2: {
    fontFamily: fonts.primary.regular,
    fontSize: windowWidth * 0.045, // 4% of the screen windowWidth
    color: '#7C82A1',
    top: 0.03 * windowHeight,
  },
  img: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0.25 * windowHeight,
  },
  el: {
    width: 0.25 * windowWidth,
    height: 0.25 * windowWidth,
  },
  vec: {
    width: 0.093 * windowWidth,
    height: 0.093 * windowWidth,
    position: 'absolute',
  },
  bawah: {
    alignItems: 'center',
    marginTop: 0.03 * windowHeight,
  },
  text3: {
    color: '#333647',
    fontFamily: fonts.primary.medium,
    fontSize: windowWidth * 0.045,
    marginBottom: 0.004 * windowHeight,
  },
  text4: {
    color: '#333647',
    fontFamily: fonts.primary.medium,
    fontSize: windowWidth * 0.045,
    marginBottom: 0.004 * windowHeight,
  },
  text5: {
    color: '#333647',
    fontFamily: fonts.primary.medium,
    fontSize: windowWidth * 0.045,
  },
});

export default Bookmark;
