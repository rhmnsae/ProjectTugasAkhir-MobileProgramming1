import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Dimensions,
  ScrollView,
} from 'react-native';
import {fonts} from '../../fonts';
import {Iki, Jana, Nanda, Nandi, Sae} from '../../assets';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const DetailKelompok = () => {
  const text1FontSize = 0.07 * windowWidth;
  const gbrWidth = 0.3 * windowWidth;
  const gbrHeight = 0.3 * windowWidth;
  const text2FontSize = 0.045 * windowWidth;
  const text3FontSize = 0.04 * windowWidth;
  const text7FontSize = 0.04 * windowWidth;

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.wrapper}>
          <Text style={[styles.text1, {fontSize: text1FontSize}]}>
            About us
          </Text>
          <Text style={styles.text7}>TI.4A - Mobile Programming 1</Text>
        </View>
        <View style={styles.orang}>
          <Image
            source={Jana}
            style={[styles.gbr, {width: gbrWidth, height: gbrHeight}]}
          />
          <View style={styles.cont}>
            <Text style={[styles.text2, {fontSize: text2FontSize}]}>
              Jana Fitria Malawat
            </Text>
            <Text style={[styles.text3, {fontSize: text3FontSize}]}>
              17211009
            </Text>
          </View>
          <Image
            source={Nanda}
            style={[styles.gbr, {width: gbrWidth, height: gbrHeight}]}
          />
          <View style={styles.cont}>
            <Text style={[styles.text2, {fontSize: text2FontSize}]}>
              Nanda Dwi Husna Sadiqin
            </Text>
            <Text style={[styles.text3, {fontSize: text3FontSize}]}>
              17213038
            </Text>
          </View>
          <Image
            source={Nandi}
            style={[styles.gbr, {width: gbrWidth, height: gbrHeight}]}
          />
          <View style={styles.cont}>
            <Text style={[styles.text2, {fontSize: text2FontSize}]}>
              Nandi Dwi Husni Sadiqin
            </Text>
            <Text style={[styles.text3, {fontSize: text3FontSize}]}>
              17213039
            </Text>
          </View>
          <Image
            source={Iki}
            style={[styles.gbr, {width: gbrWidth, height: gbrHeight}]}
          />
          <View style={styles.cont}>
            <Text style={[styles.text2, {fontSize: text2FontSize}]}>
              Rizki Anugrah
            </Text>
            <Text style={[styles.text3, {fontSize: text3FontSize}]}>
              17211014
            </Text>
          </View>
          <Image
            source={Sae}
            style={[styles.gbr, {width: gbrWidth, height: gbrHeight}]}
          />
          <View style={styles.cont}>
            <Text style={[styles.text2, {fontSize: text2FontSize}]}>
              Saepul Rohman
            </Text>
            <Text style={[styles.text3, {fontSize: text3FontSize}]}>
              17213040
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    flex: 1,
    paddingHorizontal: windowWidth * 0.05,
  },
  wrapper: {
    marginTop: 0.01 * windowHeight,
    marginBottom: 0.043 * windowHeight,
  },
  text1: {
    fontFamily: fonts.primary.semibold,
    color: '#333647',
    top: 0.03 * windowHeight,
  },
  gbr: {
    marginLeft: 0.02 * windowWidth,
    marginTop: 0.01 * windowHeight,
    borderRadius: 0.5 * windowHeight, // membuat gambar menjadi lingkaran
  },
  cont: {
    bottom: 0.215 * windowWidth,
    marginLeft: 0.37 * windowWidth,
  },
  text2: {
    fontFamily: fonts.primary.semibold,
    color: '#333647',
  },
  text3: {
    fontFamily: fonts.primary.regular,
    color: '#333647',
  },
  orang: {
    marginTop: 0.07 * windowWidth,
  },
  text7: {
    fontFamily: fonts.primary.regular,
    fontSize: windowWidth * 0.045, // 4% of the screen windowWidth
    color: '#7C82A1',
    top: 0.03 * windowHeight,
  },
});

export default DetailKelompok;
