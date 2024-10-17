/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import {
  ActivityIndicator,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import getPhotoGalleryAction from '../redux/actions/getPhotoGalleryAction';
import { appThemeColor, blackcolor, commonstyles, graycolor, light_gray, light_yellow, redcolor } from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';

const PhotoGallery = ({
  navigation,
  photosData,
}: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPhotoGalleryAction());
  }, [dispatch]);

  const getPhotoCount = (content) => {
    if (!content) return 0;
    const regex = /<dl class='gallery-item'>/g;
    const matches = content.match(regex);
    return matches ? matches.length : 0;
  };

  return (
    <SafeAreaView style={commonstyles.container}>
      {/* <ScrollView style={commonstyles.scroll}> */}
      <View>
        <Text style={commonstyles.galleryArticlecategorytext}>
          फोटो गैलरी
        </Text>
      </View>
      <View>
        {photosData?.data?.length !== 0 ? (
          <View>
            <FlatList
              style={commonstyles.photoflist}
              data={photosData?.data}
              numColumns={1}
                      renderItem={({ item }) => {
                const photoCount = getPhotoCount(item?.content?.rendered);
                return (
                  <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={() => {
                      navigation.navigate('PhotoArticle', {
                        item: item,
                        detailsData: photosData?.data,
                        screenName:"Photos"
                      });
                    }}>
                      <View style={{ paddingBottom: 15 }}>
                        <View>
                          {typeof item?.web_featured_image === 'string' && item?.web_featured_image.trim() !== '' ? (
                            <FastImage
                              style={commonstyles.PhotoimgTag}
                              source={{ uri: item?.web_featured_image }}
                              resizeMode={FastImage.resizeMode.cover}
                            />
                          ) : null}
                          <View style={{
                            bottom: 10,
                            left: 30,
                            position: 'absolute',
                          }}>
                            <View style={{
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              transform: [{ translateX: -25 }, { translateY: -25 }],
                              padding: 5,
                              backgroundColor: redcolor,
                              justifyContent: 'center',
                              alignItems: 'center', borderRadius: 5
                            }}>
                              <View style={{ flexDirection: 'row', top: 3 }}>

                                <View>
                                  <Image
                                    source={require('../Assets/Images/gallery.png')}
                                    style={{ height: 15, width: 15, }} />
                                </View>
                                <View>
                                  <Text style={{
                                    color: 'black',
                                    fontSize: 14,
                                    bottom: 4,
                                    left: 3
                                  }}>
                                    {`${photoCount}`}
                                  </Text>
                                </View>

                              </View>
                            </View>
                          </View>
                        </View>
                        <View style={{ borderBottomColor: graycolor, borderBottomWidth: 1, }}>
                          <Text numberOfLines={2} ellipsizeMode="tail"
                            style={commonstyles.latestTxtTag}>{item?.title?.rendered}
                          </Text>
                        </View>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }}
            />
          </View>
        ) : (
          <View style={commonstyles.spinnerView}>
            <ActivityIndicator color={appThemeColor} size='large' />
            <Text style={commonstyles.spinnerText}>. . . Loading . . .</Text>
          </View>
        )}
      </View>
      {/* </ScrollView> */}
    </SafeAreaView>
  );
};

type Props = {
  photosData: Function,
  photosLoading: Boolean,
};

const mapStateToProps = state => ({
  photosData: state.photosGalleryReducer?.photosData,
  photosLoading: state.photosGalleryReducer?.photosLoading,
});

const mapDispatchToProps = {
  getPhotoGalleryAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(PhotoGallery);
