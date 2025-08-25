/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  View,
  ActivityIndicator,
  TouchableWithoutFeedback,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {
  commonstyles,
  whitecolor,
  appThemeColor,
  graycolor,
} from '../styles/commonstyles';
import getVideoAction from '../redux/actions/getVideoAction';
import FastImage from 'react-native-fast-image';

const Videos = ({navigation}) => {
  const {videosData, videosLoading} = useSelector(state => state.videoReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getVideoAction());
  }, []);

  if (videosLoading) {
    return (
      <View style={commonstyles.loadingContainer}>
        <ActivityIndicator color={appThemeColor} size="large" />
      </View>
    );
  } else {
    return (
      <SafeAreaView style={commonstyles.container}>
        <View
          style={[
            commonstyles.gallerycategoryView,
            {marginLeft: 12, marginVertical: 10},
          ]}>
          <Text style={commonstyles.galleryArticlecategorytext}>
          व्हिडिओ गैलरी
          </Text>
        </View>
        <ScrollView style={commonstyles.scroll} scrollEnabled={true}>
          <FlatList
            style={commonstyles.cateflist}
            data={videosData?.data}
            numColumns={1}
            keyExtractor={item => item.id?.toString()}
            renderItem={({item, index}) => (
              <View style={{ flex: 1 }}>
              <TouchableWithoutFeedback
                onPress={() => {
                  navigation.push('VideoArticle', {
                    item: item,
                    detailsData: videosData?.data,
                    screenName: 'Videos',
                  });
                }}>
                <View
                  style={[styles.videoContainer, index === 0 && {paddingTop: 2}]}>
                  <View style={{position: 'relative'}}>
                    <FastImage
                      style={commonstyles.VideoimgTag}
                      source={{uri: item?.web_featured_image}}
                    />
                    <View style={styles.videoIconAbs}>
                      <Image
                        source={require('../Assets/Images/video.png')}
                        style={{tintColor: whitecolor}}
                      />
                    </View>
                  </View>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={commonstyles.latestTxtTag}>
                    {item?.title?.rendered}
                  </Text>
                </View>
              </TouchableWithoutFeedback>
              </View>
            )}
            scrollEnabled={false}
          />
        </ScrollView>
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
  videoContainer: {
    borderBottomColor: graycolor,
    borderBottomWidth: 1,
    paddingTop: 12,
    overflow: 'hidden',
  },
  videoIconAbs: {
    bottom: 12,
    right: 12,
    position: 'absolute',
  },
});

export default Videos;
