/* eslint-disable prettier/prettier */
import React from 'react';
import {HeaderStyle} from '../styles/Header.Styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
export default function SubHeader(props) {
  return (
    <View style={HeaderStyle.subHeaderviewHeight}>
        <TouchableOpacity
          onPress={() => {
            props.leftBtnClick();
          }}
          style={{zIndex: 999}}>
          <Image
            source={require('../Assets/Images/arrow.png')}
            style={{width: 22, height: 22}}
          />
        </TouchableOpacity>
        <Text style={HeaderStyle.subHeaderheading}>{props.title}</Text>


      {props.isBook != null && props.isBook === true && (
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              props.BookClick();
            }}
            style={{zIndex: 999}}></TouchableOpacity>
        </View>
      )}
    </View>
  );
}
