/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import {commonstyles } from '../styles/commonstyles';
import HomeComponentOne from '../components/HomeComponentOne';
import HomeComponentTwo from './HomeComponentTwo';

function HomeUI(props) {
  const { navigation } = props;

  const renderItemOne = ({ item }) => (
    <HomeComponentOne
      item={item}
      propsdata={props?.data}
      navigation={navigation} />
  );

  const renderItemTwo = ({ item }) => (
    <HomeComponentTwo
      item={item}
      propsdata={props?.data}
      navigation={navigation} />
  );

  // Check if data is available and is an array
  const newdata = Array.isArray(props?.data) ? props.data : [];

  return (
    <SafeAreaView styles={commonstyles.container}>
      <View style={{ padding: 5 }}>
        {/* Ctegory  text*/}
        <View style={commonstyles.homecategoryView}>
          <View style={commonstyles.homeOnetextView}>
            <Text style={commonstyles.Category}>{props?.categoryName}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate(props?.categoryName, {
                  url: props?.navigationScreen,
                  title: props?.categoryName,
                  isCategoryClicked: true
                })
              }}>
              <Image style={commonstyles.homeNextImage} source={require('../Assets/Images/next.png')} />
            </TouchableOpacity>
          </View>
        </View>

        {/* flatlist */}
        <View>
          <View style={commonstyles.homeCategoryflatView}>
            <FlatList
              data={newdata?.slice(0, 1)}
              showsHorizontalScrollIndicator={false}
              persistentScrollbar={false}
              numColumns={2}
              onEndReachedThreshold={50}
              getItemLayout={(data, index) => ({
                length: 40,
                offset: 40 * index,
                index,
              })}
              renderItem={renderItemOne}
            />
            <View>
              <FlatList
                showsHorizontalScrollIndicator={false}
                persistentScrollbar={false}
                data={newdata?.slice(1, 6)}
                onEndReachedThreshold={50}
                getItemLayout={(data, index) => ({
                  length: 40,
                  offset: 40 * index,
                  index,
                })}
                renderItem={renderItemTwo}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeUI;
