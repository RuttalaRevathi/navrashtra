/* eslint-disable prettier/prettier */
import React from 'react';
import {
  Text,
  View,
  FlatList,
  ScrollView,
  SafeAreaView,
  Image,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import { appThemeColor, commonstyles, Dark_Gray, whitecolor } from '../styles/commonstyles';
import CategoryComponentTwo from './CategoryComponentTwo';
import CategoryComponentOne from './CategoryComponentOne';
import { HeaderStyle } from '../styles/Header.Styles';
import Ripple from 'react-native-material-ripple';
import Trending from '../components/Trending';

function CategoryUI({ navigation, data, title, isTopNavigation, loadingMore,
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
    if (loadingMore) {
      return <ActivityIndicator style={{marginVertical: 16}} size="small" color={appThemeColor} />;  // Spinner only for Load More button
    }

    if (!hasMore) {
      return <Text style={commonstyles.noMoreText}>No more data available</Text>;
    }

    return (
      <Ripple style={styles.loadMoreBtn} onPress={loadMore}>
          <Text style={styles.loreMoreBtnTxt}>Load More</Text>
      </Ripple>
    );
};


  return (
    <SafeAreaView style={commonstyles.container}>
      {!isTopNavigation && (
        <View style={HeaderStyle.subHeaderviewHeight}>
          <Ripple
            style={commonstyles.iconRipple}
           onPress={() => navigation.goBack()}
          >
            <Image
              source={require('../Assets/Images/arrow.png')}
              style={styles.topActionIcon}
            />
          </Ripple>
        </View>
      )}
      <ScrollView style={commonstyles.scroll}>
        <Trending />
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
              data={data?.slice(1)}
              renderItem={renderItemTwo}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              ListFooterComponent={renderLoadMoreButton}
            />
          ) : (
            <View style={commonstyles.spinnerView}>
              <ActivityIndicator color={Dark_Gray} size="large" />
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  loadMoreBtn: {
    alignSelf: 'center', 
    marginTop: 10,
    paddingHorizontal: 30,
    paddingVertical: 8,
    backgroundColor: appThemeColor,
    borderRadius: 30,
  },
  loreMoreBtnTxt: {
    color: whitecolor, textAlign: 'center', fontWeight: '500',
    fontSize: 16
  },
  topActionIcon: { width: 22, height: 22 }
})

export default CategoryUI;
