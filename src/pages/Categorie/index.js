import React from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {fonts} from '../../fonts';
import {Cate} from '../../components/News';

const Categorie = ({navigation}) => {
  return (
    <View style={style.container}>
      <View style={style.wrapper}>
        <Text style={style.text1}>Categories</Text>
        <Text style={style.text2}>Thousands of articles in each category</Text>
      </View>
      <View style={style.catt}>
        <View>
          <Cate
            label={'Sports'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Sports',
                text: 'Latest sports news'
              });
            }}
          />
          <Cate
            label={'Life'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Life',
                text: 'Latest life news'
              });
            }}
          />
          <Cate
            label={'Animals'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Animals',
                text: 'Latest animals news'
              });
            }}
          />
          <Cate
            label={'Food'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Food',
                text: 'Latest food news'
              });
            }}
          />
          <Cate
            label={'History'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'History',
                text: 'Latest history news'
              });
            }}
          />
          <Cate
            label={'Health'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Health',
                text: 'Latest health news'
              });
            }}
          />
        </View>
        <View>
          <Cate
            label={'Politics'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Politics',
                text: 'Latest politics news'
              });
            }}
          />
          <Cate
            label={'Gaming'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Gaming',
                text: 'Latest gaming news'
              });
            }}
          />
          <Cate
            label={'Nature'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Nature',
                text: 'Latest nature news'
              });
            }}
          />
          <Cate
            label={'Art'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Art',
                text: 'Latest art news'
              });
            }}
          />
          <Cate
            label={'Fashion'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Fashion',
                text: 'Latest fashion news'
              });
            }}
          />
          <Cate
            label={'Middle East'}
            onPress={() => {
              navigation.navigate('Categ', {
                title: 'Middle East',
                text: 'Latest middle east news'
              });
            }}
          />
        </View>
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
  catt: {
    flexDirection: 'row',
  },
});

export default Categorie;
