/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  Image,
} from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import HomeComponentFour from './HomeComponentFour';
import HomeComponentThree from './HomeComponentThree';

function HomeUINew(props) {
  const { navigation } = props;

  const renderItemOne = ({ item }) => (
    <HomeComponentThree
      item={item}
      propsdata={props?.data}
      navigation={props?.navigation}
    />
  );

  const renderItemTwo = ({ item }) => (
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
      <View style={{ padding: 5 }}>
        {/* Category text */}
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
              <Image
                style={commonstyles.homeNextImage}
                source={require('../Assets/Images/next.png')}
              />
            </TouchableOpacity>
          </View>
        </View>

        {/* FlatList for Latest News */}
        <View style={commonstyles.homeCategoryflatView}>
          <FlatList
            data={newdata.slice(0, 1)}
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
          <FlatList
            showsHorizontalScrollIndicator={true}
            persistentScrollbar={false}
            horizontal={true}
            data={newdata.slice(1, 10)}
            getItemLayout={(data, index) => ({
              length: 40,
              offset: 40 * index,
              index,
            })}
            renderItem={renderItemTwo}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

export default HomeUINew;
