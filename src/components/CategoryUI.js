/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
   ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image
} from 'react-native';
import {commonstyles } from '../styles/commonstyles';
import CategoryComponentTwo from './CategoryComponentTwo';
import CategoryComponentOne from './CategoryComponentOne';
import { HeaderStyle } from '../styles/Header.Styles';

function CategoryUI({ navigation, data, title, isTopNavigation }) {
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
            {!isTopNavigation && <View style={HeaderStyle.subHeaderviewHeight}>
          <TouchableOpacity onPress={() => {
               navigation.reset({
                index: 0,
                routes: [{ name: 'TopTabs', params: { screen: 'Home' } }],
              });
            }} >
              <Image
                source={require('../Assets/Images/arrow.png')}
                style={{ width: 22, height: 22 }}
              />
            </TouchableOpacity>
        </View>}
      <ScrollView style={commonstyles.scroll}>
          <View style={{ padding: 12 }}>
          <View style={commonstyles.homeOnetextView}>
                    <Text style={commonstyles.Category}>{title}</Text>
                </View>
            <FlatList
              showsHorizontalScrollIndicator={false}
              data={data?.slice(0, 1)}
              renderItem={renderItemOne}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              style={{marginTop: 12}}
            />
            <FlatList
              style={commonstyles.cateflist}
              data={data?.slice(1, -1)}
              renderItem={renderItemTwo}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
            />
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CategoryUI;
