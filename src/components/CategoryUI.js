/* eslint-disable prettier/prettier */
import React, { useEffect } from 'react';
import {
  Text,
  View,
  FlatList,
   ScrollView,
  SafeAreaView,
} from 'react-native';
import {commonstyles } from '../styles/commonstyles';
import CategoryComponentTwo from './CategoryComponentTwo';
import CategoryComponentOne from './CategoryComponentOne';

function CategoryUI({ navigation, data }) {
  const renderItemOne = ({ item }) => (
    <CategoryComponentOne
      item={item}
      propsdata={data}
      navigation={navigation}
    />
  );

  const renderItemTwo = ({ item }) => (
    <CategoryComponentTwo
      item={item}
      propsdata={data}
      navigation={navigation}
    />
  );
 
  return (
    <SafeAreaView styles={commonstyles.container}>
      <ScrollView style={commonstyles.scroll}>
        <View>
         
          <View style={{ position: 'relative' }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data?.slice(0, 1)}
              renderItem={renderItemOne}
              keyExtractor={(item) => item.id.toString()}
            />
            <FlatList
              style={commonstyles.cateflist}
              data={data?.slice(1, -1)}
              renderItem={renderItemTwo}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CategoryUI;
