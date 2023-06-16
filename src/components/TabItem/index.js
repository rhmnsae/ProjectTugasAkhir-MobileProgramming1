import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {
  IEstateNav,
  IEstateOn,
  IUserNav,
  IUserOn,
  IBookmarkNav,
  IBookmarkOn,
  ICategoNav,
  ICategoOn,
} from '../../assets';

const windowWidth = Dimensions.get('window').width;

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'HomePage') {
      return isFocused ? (
        <IEstateOn width={30} height={30} />
      ) : (
        <IEstateNav width={30} height={30} />
      );
    } else if (label === 'Categorie') {
      return isFocused ? (
        <ICategoOn width={30} height={30} />
      ) : (
        <ICategoNav width={30} height={30} />
      );
    } else if (label === 'Bookmark') {
      return isFocused ? (
        <IBookmarkOn width={30} height={30} />
      ) : (
        <IBookmarkNav width={30} height={30} />
      );
    } else if (label === 'Profile') {
      return isFocused ? (
        <IUserOn width={30} height={30} />
      ) : (
        <IUserNav width={30} height={30} />
      );
    }
  };

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      style={styles.container}>
      <Icon />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    margin: windowWidth * 0.04,
  },
});

export default TabItem;
