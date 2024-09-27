import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { HeaderStyle } from '../styles/Header.Styles';
import { blackcolor, dark_blue, off_white, red_color, whitecolor } from '../styles/commonstyles';
import SideMenu from '../screens/SideMenu';
import TopTabNavigator from './TopTabNavigator';
import { useSelector } from 'react-redux';
import HomeStackNavigator from './stack-navigators/HomeStackNavigator';
import BottomTabNavigator from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const [notificationImage, setNotificationImage] = React.useState(require('../Assets/Images/notification_white.png'));

  // Assuming you have access to sliderData from your Redux store
  const sliderData = useSelector(state => state.sliderData);

  React.useEffect(() => {
    if (sliderData && sliderData.length > 0) {
      const latestArticles = sliderData.slice(0, 10);
      const isNewArticle = latestArticles.some(article => article.isNew);
      if (isNewArticle) {
        setNotificationImage(require('../Assets/Images/notification.png'));
      } else {
        setNotificationImage(require('../Assets/Images/notification_white.png'));
      }
    }
  }, [sliderData]);

  return (
    <Drawer.Navigator

      drawerContent={props => <SideMenu {...props} />} useLegacyImplementation={false}>
      <Drawer.Screen
        name="Home"
        component={BottomTabNavigator}
        options={({ navigation }) => ({
          headerStyle: {
            backgroundColor: off_white,
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10, }}>
              <TouchableOpacity
                style={{
                  flexDirection: 'row', marginRight: 30, borderColor: blackcolor,
                  borderWidth: 1.5, borderRadius: 5, width: 70, justifyContent: 'center',
                  alignSelf: 'center', alignContent: 'center', height: 25,
                }}
                onPress={() => {
                  Linking.openURL('https://epaper.navarashtra.com/');
                }}>
                <Image
                  style={[HeaderStyle.HeadRightpaperImg, { marginLeft: 5, top: 3 }]}
                  source={require('../Assets/Images/paper.png')}
                />
                <Text style={{
                  color: blackcolor, fontSize: 12, fontWeight: '700', top: 3,
                  fontFamily: 'Mukta-SemiBold',
                  textAlign: 'center'
                }}>ई-पेपर</Text>
              </TouchableOpacity>
              {/* <TouchableOpacity
                onPress={() => {
                  navigation.navigate('Notifications');
                }}> */}
              <Image
                style={{ height: 20, width: 20, marginRight: 10, marginTop: 2 }}
                source={require('../Assets/Images/notification.png')}

              />
              {/* </TouchableOpacity> */}
            </View>
          ),
          headerLeft: () => (
            <View style={HeaderStyle.headerLeftView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/menu.png')}
                />
              </TouchableOpacity>
            </View>
          ),
          headerTitle: () => (
            <View
              style={HeaderStyle.HeadTitleView}>
              {/* <TouchableOpacity
                onPress={() => {
                  navigation.navigate('TopTabs', { screen: 'Home' });
                }}
              > */}
                <Image
                  style={HeaderStyle.HeadTitleImg}
                  source={require('../Assets/Images/logo1.png')}
                />
              {/* </TouchableOpacity> */}
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
