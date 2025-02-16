/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useDispatch, connect} from 'react-redux';
import {
  FlatList,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  StyleSheet,
} from 'react-native';
import {commonstyles, whitecolor, appThemeColor, graycolor} from '../styles/commonstyles';
import getVideoAction from '../redux/actions/getVideoAction';

const Videos = ({navigation, videosData, videosLoading}) => {
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
            वीडियो गैलरी
          </Text>
        </View>
        <FlatList
          style={commonstyles.cateflist}
          data={videosData?.data}
          numColumns={1}
          renderItem={({item, index}) => (
            <View style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('VideoArticle', {
                    item: item,
                    detailsData: videosData?.data,
                    screenName: 'Videos',
                  });
                }}>
                <View style={[styles.videoContainer, index === 0 && {paddingTop: 2}]}>
                  <>
                    {typeof item?.web_featured_image === 'string' &&
                    item?.web_featured_image.trim() !== '' ? (
                      <View>
                        <Image
                          style={commonstyles.VideoimgTag}
                          source={{uri: item?.web_featured_image}}
                        />
                        <View
                          style={styles.videoIconAbs}>
                          <Image
                            source={require('../Assets/Images/video.png')}
                            style={{tintColor: whitecolor}}
                          />
                        </View>
                      </View>
                    ) : null}
                  </>
                  <Text
                    numberOfLines={2}
                    ellipsizeMode="tail"
                    style={commonstyles.latestTxtTag}>
                    {item?.title?.rendered}
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          )}
        />
      </SafeAreaView>
    );
  }
};

const styles = StyleSheet.create({
    videoContainer: {
      borderBottomColor: graycolor,
      borderBottomWidth: 1,
      paddingTop: 12,
    },
    videoIconAbs: {
      bottom: 12,
      right: 12,
      position: 'absolute',
    },
  });

const mapStateToProps = state => ({
  videosData: state.videoReducer?.videosData,
  videosLoading: state.videoReducer?.videosLoading,
});
const mapDispatchToProps = {
  getVideoAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Videos);
