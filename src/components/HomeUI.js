/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import HomeComponentOne from '../components/HomeComponentOne';
import HomeComponentTwo from './HomeComponentTwo';
import HandlePressable from './HandlePressable';

function HomeUI(props) {
  const {navigation} = props;

  const renderItemOne = ({item}) => (
    <HomeComponentOne
      item={item}
      propsdata={props?.data}
      navigation={navigation}
    />
  );

  const renderItemTwo = ({item}) => (
    <HomeComponentTwo
      item={item}
      propsdata={props?.data}
      navigation={navigation}
    />
  );

  const newdata = Array.isArray(props?.data) ? props.data : [];

  return (
    <SafeAreaView styles={commonstyles.container}>
      <View style={{paddingHorizontal: 12}}>
        <View style={commonstyles.homecategoryView}>
          <View style={commonstyles.homeOnetextView}>
            <Text style={commonstyles.Category}>{props?.categoryName}</Text>
          </View>
          <HandlePressable
            onPress={() => {
              navigation.navigate(props?.categoryName, {
                url: props?.navigationScreen,
                title: props?.categoryName,
                isCategoryClicked: true,
              });
            }}>
            <Image
              style={commonstyles.homeNextImage}
              source={require('../Assets/Images/next.png')}
            />
          </HandlePressable>
        </View>

        {newdata.length > 0 ? (
          <View style={commonstyles.homeCategoryflatView}>
            <FlatList
              data={newdata?.slice(0, 1)}
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              numColumns={1}
              style={{borderRadius: 6, overflow: 'hidden'}}
              renderItem={renderItemOne}
            />
            <FlatList
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              data={newdata?.slice(1, 6)}
              renderItem={renderItemTwo}
            />
          </View>
        ) : (
          <ActivityIndicator size={'large'} style={{paddingVertical: 12}} />
        )}
      </View>
    </SafeAreaView>
  );
}

export default HomeUI;
