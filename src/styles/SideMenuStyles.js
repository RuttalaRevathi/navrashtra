/* eslint-disable prettier/prettier */
import {StyleSheet, Platform} from 'react-native';
import {appThemeColor, blackcolor, graycolor, whitecolor} from '../styles/commonstyles';

export const sideMenuStyle = StyleSheet.create({
  icon: {width: 15, height: 15},

  text: {
    color:blackcolor,
    fontSize: 16,
    fontWeight:'bold',
    marginLeft: -15,

     },
  Disttext: {
    paddingLeft:45,
     fontSize: 16,
 },
  item: {
  borderTopColor: graycolor,
    borderTopWidth: 1,
  },
  subitem: {
    borderTopColor: whitecolor,
    borderTopWidth: 1,
    marginVertical: -10,
    marginBottom: -5,
    marginLeft:40
  },
  sectionsText: {
    color: whitecolor,
    paddingLeft: 10,
    fontFamily: 'Mandali-Bold',
    fontSize: 22,
  },
  cross:{top: 5, alignSelf: 'flex-end', justifyContent: 'center'},
  areaView:{ flex: 1 },
  MainView:{ backgroundColor: whitecolor},
  logoView:{ justifyContent: 'center', alignItems: 'center',},
  logoText:{ width: '50%', resizeMode:'contain',padding:10},
  titleView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listImg:{ width: 18, height: 18,
  },
});
