/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import { appThemeColor, commonstyles, Dark_Gray, whitecolor } from '../styles/commonstyles';
import CategoryComponentTwo from './CategoryComponentTwo';
import CategoryComponentOne from './CategoryComponentOne';
import { HeaderStyle } from '../styles/Header.Styles';

function CategoryUI({ navigation, data, title, isTopNavigation, loading,
  hasMore,
  loadMore, }) {
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

  const renderLoadMoreButton = () => {
    if (loading) {
      return <ActivityIndicator size="small" color={appThemeColor} />;  // Spinner only for Load More button
    }

    if (!hasMore) {
      return <Text style={commonstyles.noMoreText}>No more data available</Text>;
    }

    return (
      <TouchableOpacity style={{ alignSelf: 'center', paddingTop: 5 }} onPress={loadMore}>
        <View
          style={{
            padding: 10,
            backgroundColor: appThemeColor,
            width: '30%',
            borderRadius: 30,
          }}
        >
          <Text style={{ color: whitecolor, textAlign: 'center' }}>Load More</Text>
        </View>
      </TouchableOpacity>
    );
};


  return (
    <SafeAreaView style={commonstyles.container}>
      {!isTopNavigation && (
        <View style={HeaderStyle.subHeaderviewHeight}>
          <TouchableOpacity
            onPress={() =>
              navigation.reset({
                index: 0,
                routes: [{ name: 'TopTabs', params: { screen: 'Home' } }],
              })
            }
          >
            <Image
              source={require('../Assets/Images/arrow.png')}
              style={{ width: 22, height: 22 }}
            />
          </TouchableOpacity>
        </View>
      )}
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
            style={{ marginTop: 12 }}
          />
          {data.length > 0 ? (
            <FlatList
              style={commonstyles.cateflist}
              data={data?.slice(1)}
              renderItem={renderItemTwo}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              ListFooterComponent={renderLoadMoreButton}
            />
          ) : (
            <View style={commonstyles.spinnerView}>
              <ActivityIndicator color={Dark_Gray} size="large" />
              <Text style={commonstyles.spinnerText}>. . . Loading . . .</Text>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CategoryUI;
