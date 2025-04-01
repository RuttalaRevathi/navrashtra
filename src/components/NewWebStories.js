import React, {useEffect, useState, useRef} from 'react';
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  ActivityIndicator,
  Modal,
  Image,
  Animated,
  Easing,
  Dimensions,
  Share,
  SafeAreaView
} from 'react-native';
import {
  blackcolor,
  commonstyles,
  redcolor,
  whitecolor,
  yellowcolor,
} from '../styles/commonstyles';
import FastImage from 'react-native-fast-image';
import {BaseUrl, WebstoriesUrl} from '../utilities/urls';
import Ripple from 'react-native-material-ripple';
import Storyicon from '../Assets/Images/Union.png';
import HandlePressable from './HandlePressable';
import {decode} from 'html-entities';
import LinearGradient from 'react-native-linear-gradient';
import {TouchableOpacity} from 'react-native';
const {width, height} = Dimensions.get('window');
export const NewWebStories = React.memo(() => {
  const [storiesData, setStoriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [storyViewModal, setStoryViewModal] = useState(false);
  const [currentUserIndex, setCurrentUserIndex] = useState(0);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  //const rotateAnim = useRef(new Animated.Value(0)).current;
  const storyTextAnim = new Animated.Value(0);
  const storyContentAnim = new Animated.Value(0);
  const storyImageScale = useRef(new Animated.Value(1.5)).current;
  const progressAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    fetchWebStories();
  }, []);

  // const animateCubeTurn = () => {
  //   //rotateAnim.setValue(0); // Reset before animation
  //   Animated.timing(rotateAnim, {
  //     toValue: 1,
  //     duration: 1000, // Adjust speed here
  //     easing: Easing.out(Easing.ease), // Smooth start and stop
  //     useNativeDriver: true,
  //   }).start();
  // };

  Animated.timing(storyTextAnim, {
    toValue: 1,
    duration: 1000,
    easing: Easing.elastic(1),
    useNativeDriver: true,
  }).start();

  Animated.timing(storyContentAnim, {
    toValue: 1,
    duration: 1000,
    easing: Easing.elastic(0),
    useNativeDriver: true,
  }).start();

  const animateImageZoomOut = () => {
    storyImageScale.setValue(1.5); // Reset scale before animation
    Animated.timing(storyImageScale, {
      toValue: 1.0, // Zoom out effect
      duration: 1200, // 1 second transition
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const storyTextAnimTop = storyTextAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 1],
  });

  const storyContentAnimTop = storyContentAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 1],
  });

  const fetchWebStories = async () => {
    setLoading(true);
    try {
      const response = await fetch(BaseUrl + WebstoriesUrl);
      const responseJson = await response.json();
      const list = responseJson.data?.map(item => {
        const storyObj = {
          user_id: item.id,
          user_image: item.web_featured_image,
          user_name: item.title?.rendered,
          stroy_link: item.link,
          story_date: item.date_gmt,
          stories: item.slides?.map((item, i) => {
            const slideObj = {
              story_id: i,
              story_image: item.thumbnailUrl,
              story_author: decode(item.author),
              story_source: decode(item.source),
              story_caption: decode(item.caption),
              story_content: decode(item.content),
              stroy_link: item.link,

              swipeText: null,
            };
            return slideObj;
          }),
        };
        return storyObj;
      });
      setStoriesData(list);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  const openStory = userIndex => {
    setCurrentUserIndex(userIndex);
    setCurrentSlideIndex(0);
    setStoryViewModal(true);
  };

  const nextSlide = () => {
    if (currentSlideIndex < storiesData[currentUserIndex]?.stories.length - 1) {
      setCurrentSlideIndex(currentSlideIndex + 1);
    } else if (currentUserIndex < storiesData.length - 1) {
      //animateCubeTurn(); // Animate cube turn
      setCurrentUserIndex(currentUserIndex + 1);
      setCurrentSlideIndex(0);
    } else {
      setStoryViewModal(false);
    }
  };

  const prevSlide = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex(currentSlideIndex - 1);
    } else if (currentUserIndex > 0) {
      setCurrentUserIndex(currentUserIndex - 1);
      setCurrentSlideIndex(
        storiesData[currentUserIndex - 1]?.stories.length - 1,
      );
      //animateCubeTurn();
    }
  };

  useEffect(() => {
    if (storyViewModal) {
      startProgress();
      animateImageZoomOut();
    }
  }, [currentSlideIndex, currentUserIndex, storyViewModal]);

  const startProgress = () => {
    progressAnim.setValue(0);
    Animated.timing(progressAnim, {
      toValue: width * 0.1,
      duration: 3000, // 3 seconds per slide
      easing: Easing.linear,
      useNativeDriver: false,
    }).start(({finished}) => {
      if (finished) {
        nextSlide();
      }
    });
  };

  const storyItemComp = ({item, index}) => {
    return (
      <Ripple style={styles.storyItem} onPress={() => openStory(index)}>
        <FastImage
          source={Storyicon}
          resizeMode={FastImage.resizeMode.contain}
          style={styles.storyItemIcon}
        />
        <FastImage
          source={{uri: item?.user_image}}
          resizeMode={FastImage.resizeMode.stretch}
          style={styles.storyItemImage}
        />
        <Text numberOfLines={2} style={styles.storyItemText}>
          {item.user_name}
        </Text>
      </Ripple>
    );
  };

  const sharecall = link => {
    if (link) {
      Share.share({
        message: link,
      })
        .then(result => console.log(result))
        .catch(error => console.log(error));
    } else {
      console.log('Story link is missing or invalid');
    }
  };

  return (
    <View>
      <View style={commonstyles.homeOnetextView}>
        <Text style={commonstyles.Category}>वेब स्टोरीज़</Text>
      </View>
      {loading ? (
        <ActivityIndicator size={'large'} color={blackcolor} />
      ) : (
        <FlatList
          data={storiesData}
          keyExtractor={item => item?.id}
          renderItem={storyItemComp}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{marginTop: 10}}
        />
      )}
      <Modal visible={storyViewModal} animationType="slide" transparent={true}>
      <SafeAreaView style={{flex: 1, backgroundColor: blackcolor}}>
        <Animated.View
          style={styles.modalContent}>
          <View
            style={{
              flexDirection: 'row',
              position: 'absolute',
              zIndex: 1,
              top: 26,
              right: 12,
            }}>
            <HandlePressable
              onPress={() =>
                sharecall(
                  storiesData[currentUserIndex]?.stories[currentUserIndex]
                    ?.stroy_link,
                )
              }
              style={styles.storyClose}>
              <Image
                source={require('../Assets/Images/share_black.png')}
                style={styles.storyIconSize}
                resizeMode="contain"
              />
            </HandlePressable>
            <HandlePressable
              onPress={() => setStoryViewModal(false)}
              style={styles.storyClose}>
              <Image
                source={require('../Assets/Images/cancel.png')}
                style={styles.storyIconSize}
                resizeMode="contain"
              />
            </HandlePressable>
          </View>

          <TouchableOpacity
            style={styles.prvStory}
            onPress={prevSlide}></TouchableOpacity>
          <View style={styles.progressBarContainer}>
            {storiesData[currentUserIndex]?.stories.map((_, index) => (
              <View key={index} style={styles.progressBarBackground}>
                <Animated.View
                  style={[
                    styles.progressBarFill,
                    {
                      width:
                        index < currentSlideIndex // Already viewed → Full width
                          ? '100%'
                          : index === currentSlideIndex // Current story → Animated progress
                          ? progressAnim
                          : '0%', // Upcoming → No progress (gray)
                      backgroundColor:
                        index <= currentSlideIndex ? 'white' : 'gray',
                    },
                  ]}
                />
              </View>
            ))}
          </View>
          <Animated.View style={{transform: [{scale: storyImageScale}]}}>
            <FastImage
              source={{
                uri: storiesData[currentUserIndex]?.stories[currentSlideIndex]
                  ?.story_image,
                priority: FastImage.preload
              }}
              style={styles.storyImage}
              resizeMode={FastImage.resizeMode.cover}
            />
          </Animated.View>
          <View style={styles.storyViewContent}>
            <LinearGradient
              colors={[
                'rgba(0, 0, 0, 0)',
                'rgba(0, 0, 0, 0.75)',
                'rgba(0, 0, 0, 1)',
              ]}>
              <Animated.Text
                style={[
                  styles.storyText,
                  {transform: [{translateY: storyTextAnimTop}]},
                ]}>
                {
                  storiesData[currentUserIndex]?.stories[currentSlideIndex]
                    ?.story_caption
                }
              </Animated.Text>
              <Animated.Text
                style={[
                  styles.storyCaption,
                  {transform: [{translateY: storyContentAnimTop}]},
                ]}>
                {
                  storiesData[currentUserIndex]?.stories[currentSlideIndex]
                    ?.story_content
                }
              </Animated.Text>

              {storiesData[currentUserIndex]?.stories[currentSlideIndex]
                ?.story_source && (
                <View style={styles.authorSource}>
                  {storiesData[currentUserIndex]?.stories[currentSlideIndex]
                    ?.story_source !== '' && (
                    <Text style={styles.storyAuthor}>
                      {
                        storiesData[currentUserIndex]?.stories[
                          currentSlideIndex
                        ]?.story_source
                      }
                    </Text>
                  )}
                  {storiesData[currentUserIndex]?.stories[currentSlideIndex]
                    ?.story_author !== '' && (
                    <Text style={[styles.storyAuthor, {textAlign: 'right'}]}>
                      {
                        storiesData[currentUserIndex]?.stories[
                          currentSlideIndex
                        ]?.story_author
                      }
                    </Text>
                  )}
                </View>
              )}
            </LinearGradient>
          </View>
          <TouchableOpacity
            style={styles.nxtStory}
            onPress={nextSlide}></TouchableOpacity>
        </Animated.View>
        </SafeAreaView>
      </Modal>
    </View>
  );
});

const styles = StyleSheet.create({
  storyItem: {
    width: 150,
    height: 210,
    marginRight: 10,
    borderRadius: 8,
    overflow: 'hidden',
    position: 'relative',
  },
  storyItemImage: {width: '100%', height: '100%'},
  storyItemText: {
    fontSize: 14,
    fontWeight: '600',
    color: whitecolor,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    padding: 6,
    backgroundColor: 'rgba(0,0,0,0.65)',
  },
  storyItemIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    left: 10,
    top: 10,
    zIndex: 1,
  },
  storyClose: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(255,255,255,0.85)',
    borderRadius: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },
  prvStory: {
    width: '40%',
    height: '100%',
    position: 'absolute',
    top: 60,
    left: 0,
    bottom: 0,
    zIndex: 1,
  },
  nxtStory: {
    width: '40%',
    height: '100%',
    position: 'absolute',
    top: 60,
    right: 0,
    bottom: 0,
    zIndex: 1,
  },
  modalContent: {
    flex: 1,
    backgroundColor: blackcolor,
    position: 'relative',
    overflow: 'hidden'
  },
  progressBarContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    zIndex: 1,
    marginTop: 12,
    position: 'absolute',
  },
  progressBarBackground: {
    flex: 1,
    height: 3,
    backgroundColor: '#555',
    marginHorizontal: 2,
    overflow: 'hidden',
    borderRadius: 3,
  },
  progressBarFill: {height: '100%', backgroundColor: '#fff'},
  storyContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  storyImage: {width: width, height: height},
  storyText: {
    fontSize: 26,
    color: '#ef0b0b',
    fontWeight: '700',
    marginHorizontal: 12,
    textAlign: 'center',
    marginBottom: 12,
    textShadowOffset: {width: 0, height: 0},
    textShadowColor: blackcolor,
    textShadowRadius: 16,
  },
  storyAuthor: {
    fontSize: 13,
    color: blackcolor,
    flex: 1,
  },
  storyCaption: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 12,
    textAlign: 'center',
    color: whitecolor,
    marginHorizontal: 12,
  },
  authorSource: {
    backgroundColor: 'rgba(225,225,225, 0.95)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  storyViewContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  storyIconSize: {
    width: 18,
    height: 18,
  },
});
