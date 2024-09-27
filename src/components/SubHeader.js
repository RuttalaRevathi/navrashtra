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
          style={{zIndex: 999,}}>
            <Image
                source={require('../Assets/Images/arrow_white.png')}
                style={{ }}
              />
        

        </TouchableOpacity>
      </View>
      <View style={{}}>
        <Text style={[HeaderStyle.subHeaderheading]}>{props.title}</Text>
      </View>

      {props.isLive != null && props.isLive === true && (
        <View style={{}}>
          <TouchableOpacity
           onPress={() => {
            props.rightBtnClick();
          }}>
              <Image
                source={require('../Assets/Images/tv_small.png')}
                style={{ height:25,width:25}}
              />
          
          </TouchableOpacity>
        </View>
      )}
      {props.isBook != null && props.isBook === true && (
        <View style={{flex: 0.3}}>
          <TouchableOpacity
            onPress={() => {
              props.BookClick();
            }}
            style={{zIndex: 999}}>
            <MaterialIcons
              name="bookmark-outline"
              size={30}
              color={appThemeColor}
              style={{left: 20, top: 2}}
            />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
