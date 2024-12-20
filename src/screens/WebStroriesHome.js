import { useEffect, useRef, useState } from 'react';
import {
  Dimensions,
  Text,
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  ActivityIndicator,
  TouchableOpacity,
  Animated,
  Platform
} from 'react-native';
import { BaseUrl, WebstoriesUrl } from '../utilities/urls';
import InstaStory from 'react-native-insta-story';
import { decode } from 'html-entities';
import { blackcolor, commonstyles, redcolor } from '../styles/commonstyles';
import LinearGradient from 'react-native-linear-gradient';
import { Share } from 'react-native';

const WebStoriesHome = () => {
  const [storiesData, setStoriesData] = useState([]);
  const [loading, setLoading] = useState(false);
  const captionSlideAnim = useRef(new Animated.Value(-1300)).current; // Animation for caption (from left)
  const contentSlideAnim = useRef(new Animated.Value(300)).current;  // Animation for content (from bottom)
  const getWebstoriesAction = async () => {
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
          stories: item.slides.map((item, i) => {
            const slideObj = {
              story_id: i,
              story_image: item.thumbnailUrl,
              story_author: item.author,
              story_source: item.source,
              story_caption: item.caption,
              story_content: item.content,
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

  useEffect(() => {
    getWebstoriesAction();
  }, []);

  const sharecall = (item) => {
    const storyLink = item?.stroy_link;

    if (storyLink) {
      Share.share({
        message: storyLink,
      })
        .then((result) => console.log(result))
        .catch((error) => console.log(error));
    } else {
      console.log('Story link is missing or invalid');
    }
  };

  useEffect(() => {
    // Caption animation from the left
    Animated.timing(captionSlideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true, // Use native driver for better performance
    }).start();

    // Content animation from the bottom
    Animated.timing(contentSlideAnim, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
      delay: 300, // Adding a delay so that the content animation starts after the caption
    }).start();
  }, []);


  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ padding: 5 }}>
        <View style={commonstyles.homeOnetextView}>
          <Text style={commonstyles.Category}>
          वेब स्टोरीज 
          </Text>
        </View>
        {loading ? (
          <ActivityIndicator size="large" color={blackcolor} />
        ) : (
          <>
            {storiesData.length > 0 ? (
              <InstaStory
                data={storiesData}
                duration={10}
                avatarSize={60}
                pressedBorderColor={'#FFFFFF'}
                unPressedBorderColor={'#FFFFFF'}
                avatarImageStyle={{
                  width: '100%',
                  height: 210,
                  borderRadius: 10,
                  objectFit: 'fill'
                }}
                avatarWrapperStyle={{
                  width: 150,
                  height: 210,
                  borderRadius: 10,
                  border: 'none',
                  position: 'relative',
                  overflow: 'hidden',
                  marginHorizontal: -3
                }}
                avatarTextStyle={{
                  position: 'absolute',
                  left: 0,
                  bottom: 2,
                  right: 0,
                  backgroundColor: 'rgba(0,0,0,0.75)',
                  color: '#FFFFFF',
                  fontSize: 15,
                  zIndex: 9,
                  width: '100%',
                  padding: 5,
                  borderRadius: 8,
                  overflow: 'hidden',
                  fontFamily: 'Mukta-Bold'

                }}
                unPressedAvatarTextColor={'#FFFFFF'}
                pressedAvatarTextColor={'#FFFFFF'}
                renderCloseComponent={({ onPress, item }) => (
                  <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => sharecall(item)}>

                      <View style={styles.storyShare}>
                        <Image
                          source={require('../Assets/Images/share_filled.png')}
                          style={styles.shareIcon}
                        />
                      </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={onPress}>

                      <View style={styles.storyClose}>
                        <Image
                          source={require('../Assets/Images/cancel.png')}
                          style={styles.closeIcon}
                        />
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
                renderTextComponent={({ item }) => (
                  <View style={styles.storyContentWrapper}>
                    <LinearGradient
                      style={styles.linearGradient}
                      colors={[
                        'rgba(255, 255, 255, 0)',
                        'rgba(0, 0, 0, 1)',
                        'rgba(0, 0, 0, 1)',
                      ]}>
                      <View style={{ padding: 30 }}>
                        {item.story_caption !== '' && (
                          <Animated.Text
                            style={[
                              styles.storyCaption,
                              { color: redcolor, transform: [{ translateX: captionSlideAnim }] },
                            ]}
                          >
                            {decode(item.story_caption)}
                          </Animated.Text>
                        )}
                        <Animated.Text
                          numberOfLines={6}
                          style={[
                            styles.storyText,
                            { transform: [{ translateY: contentSlideAnim }] },
                          ]}
                        >
                          {decode(item.story_content)}
                        </Animated.Text>
                      </View>
                      {(item.story_source || item.story_author) && (
                        <View style={styles.authorSource}>
                          {item.story_source !== '' && (
                            <Text style={styles.storyAuthor}>
                              {decode(item.story_source)}
                            </Text>
                          )}
                          {item.story_author !== '' && (
                            <Text style={styles.storyAuthor}>
                              {decode(item.story_author)}
                            </Text>
                          )}
                        </View>
                      )}
                    </LinearGradient>
                  </View>
                )}
                style={{ marginTop: 6, marginLeft: -10, marginRight: -10 }}
                storyAvatarImageStyle={{ display: 'none' }}
                renderSwipeUpComponent={() => <></>}
                storyImageStyle={{ objectFit: 'cover' }}
              />
            ) : (
              <View
                style={{
                  padding: 20,
                  borderWidth: 1,
                  borderStyle: 'solid',
                  borderColor: '#c2c2c2',
                  marginTop: 6,
                  borderRadius: 10,
                }}>
                <Text style={{ textAlign: 'center' }}>No Data</Text>
              </View>
            )}
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  storyShare: {
    width: 36,
    height: 36,
    marginRight: 16,
    borderRadius: 18,
    backgroundColor: '#000',
    justifyContent: 'center',
    alignItems: 'center'
  },
  shareIcon: {
    width: 20,
    height: 20,
  },
  storyClose: {
    width: 36,
    height: 36,
    marginRight: -16,
    borderRadius: 18,
    backgroundColor: '#ffffff',
  },
  closeIcon: {
    width: 36,
    height: 36,
  },
  storyContentWrapper: {
    position: 'absolute',
    left: -16,
    bottom: 0,
    right: 0,
    width: Dimensions.get('window').width + 4,
    height: Platform.OS === 'android' ? Dimensions.get('window').height - 20 : Dimensions.get('window').height - 55,
    top: 0,
    justifyContent: 'flex-end',
  },
  linearGradient: {},
  storyText: {
    fontSize: 20,
    color: '#FFFFFF',
    fontWeight: '600',
    textAlign: 'center',
  },
  storyAuthor: {
    fontSize: 13,
    color: '#000000',
  },
  storyCaption: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
    textAlign: 'center',
  },
  authorSource: {
    backgroundColor: 'rgba(225,225,225, 0.95)',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginBottom: 25
  },
});
export default WebStoriesHome;
