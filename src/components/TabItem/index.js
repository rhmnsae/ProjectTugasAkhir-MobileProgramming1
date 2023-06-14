import {StyleSheet, TouchableOpacity, Dimensions} from 'react-native';
import React from 'react';
import {IEstateNav, IEstateOn, IUserNav, IUserOn} from '../../assets';

const windowWidth = Dimensions.get('window').width;

const TabItem = ({isFocused, onPress, onLongPress, label}) => {
  const Icon = () => {
    if (label === 'HomePage') {
      return isFocused ? (
        <IEstateOn width={30} height={30} />
      ) : (
        <IEstateNav width={30} height={30} />
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
    margin: windowWidth * 0.025,
    marginHorizontal: windowWidth * 0.03,
  },
});

export default TabItem;
