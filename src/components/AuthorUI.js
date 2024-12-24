/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import AuthorComponent from './AuthorComponent';

function AuthorUI({ navigation, data }) {
  // Render each article item using AuthorComponent
  const renderItemOne = ({ item }) => (
    <AuthorComponent
      item={item}
      propsdata={data}
      navigation={navigation}
    />
  );

  // Check if data exists and extract author details
  const authorDetails = data?.length ? data[0] : null; // Assuming the author info is included in the first article for simplicity
console.log(authorDetails,"authorDetails");

  return (
    <SafeAreaView style={commonstyles.container}>
      <ScrollView style={commonstyles.scroll}>
        <View>
          {/* Author Details Section */}
          {authorDetails && (
            <View style={{}}>
              <Text style={{color:'black',fontSize:20}}>
                {authorDetails.title} {/* Assuming "authorName" in your data */}
              </Text>
              <Text style={{}}>
                {authorDetails.content} {/* Assuming "authorBio" in your data */}
              </Text>
            </View>
          )}

          {/* Articles Section */}
          <View style={{ position: 'relative' }}>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={renderItemOne}
              keyExtractor={(item) => item.id.toString()}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default AuthorUI;
