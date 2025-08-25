/* eslint-disable prettier/prettier */
import React from 'react';
import {HeaderStyle} from '../styles/Header.Styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import Ripple from 'react-native-material-ripple';
import { commonstyles } from '../styles/commonstyles';
export default function SubHeader(props) {
  return (
    <View style={HeaderStyle.subHeaderviewHeight}>
        <Ripple
          style={commonstyles.iconRipple}
          onPress={() => {
            props.leftBtnClick();
          }}
          >
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={{width: 22, height: 22}}
          />
        </Ripple>
        <Text style={HeaderStyle.subHeaderheading}>{props.title}</Text>


      {props.isBook != null && props.isBook === true ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              props.BookClick();
            }}
            style={{zIndex: 999}}></TouchableOpacity>
        </View>
      ): <View />}
    </View>
  );
}
