import {
  FlatList,
  Linking,
  ScrollView,
  Share,
  Text,
  TouchableOpacity,
} from 'react-native';
import {View} from 'react-native';
import {blackcolor, commonstyles} from '../styles/commonstyles';
import {SafeAreaView} from 'react-native';
import {Image} from 'react-native';
import SubHeader from '../components/SubHeader';

const Settings = ({navigation}) => {
  const data = [
    {
      id: 1,
      text: 'About Us',
      img: require('../Assets/Images/about.png'),
      screen: 'About',
    },
    {
      id: 2,
      text: 'Contact Us',
      img: require('../Assets/Images/contact.png'),
      screen: 'Contact',
    },
    {
      id: 3,
      text: 'Privacy Policy',
      img: require('../Assets/Images/privacy.png'),
      screen: 'Privacy',
    },
    {
      id: 4,
      text: 'Terms and Conditions',
      img: require('../Assets/Images/terms.png'),
      screen: 'Terms',
    },
    {
      id: 5,
      text: 'Share App',
      img: require('../Assets/Images/share_black.png'),
      screen: 'ShareApp',
    },
  ];
  const mediaData = [
    {
      id: 1,
      text: 'Google News',
      img: require('../Assets/Images/google.png'),
      screen:
        'https://news.google.com/publications/CAAqBwgKMLbanwsww-S3Aw?hl=en-IN&gl=IN&ceid=IN%3Aen',
    },
    {
      id: 2,
      text: 'Facebook',
      img: require('../Assets/Images/facebook.png'),
      screen: 'https://www.facebook.com/navarashtra',
    },
    {
      id: 3,
      text: 'youtube',
      img: require('../Assets/Images/youtube.png'),
      screen: 'https://www.youtube.com/@NavaRashtra',
    },
    {
      id: 4,
      text: 'Instagram',
      img: require('../Assets/Images/instagram.png'),
      screen: 'https://www.instagram.com/navarashtra/',
    },
    {
      id: 5,
      text: 'Twitter',
      img: require('../Assets/Images/twitter.png'),
      screen: 'https://x.com/navarashtra',
    },
  ];
  const navigateToScreen = async screenName => {
    if (screenName === 'ShareApp') {
      try {
        const result = await Share.share({
          message:
            'Check out this awesome app! https://play.google.com/store/apps/details?id=com.navarashtra',
          url: 'https://play.google.com/store/apps/details?id=com.navarashtra',
          title: 'App link',
        });

        if (result.action === Share.sharedAction) {
          if (result.activityType) {
            // shared with activity type of result.activityType
          } else {
            // shared
          }
        } else if (result.action === Share.dismissedAction) {
          // dismissed
        }
      } catch (error) {
        console.error('Error sharing app:', error.message);
      }
    } else {
      navigation.navigate(screenName);
    }
  };

  return (
    <SafeAreaView style={commonstyles.container}>
      <SubHeader
        title={'Settings'}
        leftBtnClick={() =>
          navigation.reset({
            index: 0,
            routes: [{name: 'TopTabs', params: {screen: 'Home'}}],
          })
        }
        isBook={true}
      />
      <ScrollView>
        <FlatList
          data={data}
          showsHorizontalScrollIndicator={false}
          style={{paddingHorizontal: 12}}
          scrollEnabled={false}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigateToScreen(item.screen)}>
              <View style={commonstyles.settingview}>
                <Image source={item.img} style={commonstyles.settingimg} />
                <Text style={commonstyles.settingtext}>{item.text}</Text>
              </View>
            </TouchableOpacity>
          )}
        />
        <View style={{paddingHorizontal: 12, marginTop: 30}}>
          <Text
            style={{
              color: blackcolor,
              fontSize: 18,
              fontWeight: 'bold',
              marginBottom: 10,
            }}>
            Follow Us
          </Text>
          <FlatList
            data={mediaData}
            showsHorizontalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => {
                  Linking.openURL(item.screen);
                }}>
                <View style={commonstyles.settingmediaview}>
                  <Image
                    source={item.img}
                    style={commonstyles.settingmediaimg}
                    resizeMode="cover"
                  />
                  <Text style={commonstyles.settingmediatext}>{item.text}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
export default Settings;
