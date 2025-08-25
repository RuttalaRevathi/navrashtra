import {StyleSheet, Image} from 'react-native';
import React from 'react';
import Ripple from 'react-native-material-ripple';
import {blackcolor, whitecolor} from '../styles/commonstyles';

export const GotoTop = ({handleClick}) => {
  return <Ripple style={styles.gotoTop} onPress={handleClick}>
    <Image source={require('../Assets/Images/next.png')} style={styles.arrowIcon} />
  </Ripple>;
};

const styles = StyleSheet.create({
  gotoTop: {
    position: 'absolute',
    left: '50%',
    bottom: 16,
    transform: [{translateX: -25}],
    backgroundColor: whitecolor,
    color: blackcolor,
    width: 34,
    height: 34,
    borderRadius: 17,
    elevation: 8,
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrowIcon: {
    transform: [{rotate: '-90deg'}],
    width: 16, height: 16,
  }
});
