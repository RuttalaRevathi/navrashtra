/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
  ActivityIndicator,
} from 'react-native';
import {commonstyles} from '../styles/commonstyles';
import HomeComponentFour from './HomeComponentFour';
import HomeComponentThree from './HomeComponentThree';

function HomeUINew(props) {
  const {navigation} = props;

  const renderItemOne = ({item}) => (
    <HomeComponentThree
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
    />
  );

  const renderItemTwo = ({item}) => (
    <HomeComponentFour
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
    />
  );

  // Ensure props.data is an array
  const newdata = Array.isArray(props?.data) ? props.data : [];

  return (
    <SafeAreaView styles={commonstyles.container}>
      <View style={{padding: 12}}>
        <View style={commonstyles.homecategoryView}>
          <View style={commonstyles.homeOnetextView}>
            <Text style={commonstyles.Category}>{props?.categoryName}</Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(props?.categoryName, {
                url: props?.navigationScreen,
                title: props?.categoryName,
                isCategoryClicked: true,
              });
            }}>
            <Image source={require('../Assets/Images/next.png')} />
          </TouchableOpacity>
        </View>

        {newdata.length > 0 ? (
          <View style={commonstyles.homeCategoryflatView}>
            <FlatList
              data={newdata.slice(0, 1)}
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              numColumns={1}
              style={{borderRadius: 6, overflow: 'hidden'}}
              onEndReachedThreshold={50}
              getItemLayout={index => ({
                length: 40,
                offset: 40 * index,
                index,
              })}
              renderItem={renderItemOne}
            />
            <FlatList
              showsHorizontalScrollIndicator={true}
              persistentScrollbar={false}
              horizontal={true}
              data={newdata.slice(1, 10)}
              getItemLayout={index => ({
                length: 40,
                offset: 40 * index,
                index,
              })}
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

export default HomeUINew;
