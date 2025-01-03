/* eslint-disable prettier/prettier */
import React from 'react';
import {HeaderStyle} from '../styles/Header.Styles';
import {View, Image, Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {appThemeColor, blackcolor, whitecolor} from '../styles/commonstyles';
export default function SubHeader(props) {
  return (
    <View style={HeaderStyle.subHeaderviewHeight}>
      <View style={{}}>
        <TouchableOpacity
          onPress={() => {
            props.leftBtnClick();
          }}
          style={{zIndex:999}}>
            <Image
                source={require('../Assets/Images/arrow.png')}
                style={{ width:25,height:25,}}
              />
        

        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={[HeaderStyle.subHeaderheading]}>{props.title}</Text>
      </View>
   
      {props.isBook != null && props.isBook === true && (
        <View style={{}}>
          <TouchableOpacity
            onPress={() => {
              props.BookClick();
            }}
            style={{zIndex: 999}}>
            
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
