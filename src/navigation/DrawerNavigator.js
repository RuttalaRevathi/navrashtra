import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Image, Linking } from 'react-native';
import { HeaderStyle } from '../styles/Header.Styles';
import { blackcolor, commonstyles, off_white, whitecolor } from '../styles/commonstyles';
import SideMenu from '../screens/SideMenu';
import { useSelector } from 'react-redux';
import BottomTabNavigator from './BottomTabNavigator';
import HandlePressable from '../components/HandlePressable';

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
            backgroundColor: whitecolor,
          },
          headerRight: () => (
            <View style={{ flexDirection: 'row', marginRight: 10, }}>
              <HandlePressable
                style={{
                  flexDirection: 'row', marginRight: 10, borderColor: blackcolor,
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
              </HandlePressable>
            </View>
          ),
          headerLeft: () => (
              <HandlePressable
              style={commonstyles.iconRipple}
                onPress={() => {
                  navigation.toggleDrawer();
                }}>
                  <View>
                <Image
                  style={HeaderStyle.HeadRightImg}
                  source={require('../Assets/Images/menu.png')}
                />
                </View>
              </HandlePressable>
          ),
          headerTitle: () => (
            <View
              style={HeaderStyle.HeadTitleView}>
                <Image
                  style={HeaderStyle.HeadTitleImg}
                  source={require('../Assets/Images/nrlogo.png')}
                />
            </View>
          ),
        })}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
