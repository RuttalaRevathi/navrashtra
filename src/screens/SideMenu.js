import React, { useEffect } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { View, Text, Image, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import { graycolor } from '../styles/commonstyles';

const SideMenu = ({ navigation }: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopMenuDataAction());
  }, [dispatch]);

  let menuData = useSelector((state) => state.topMenuDataReducer.topMenuData) || [];

  const mergedArray = [];
  menuData.forEach((item) => {
    if (item.subItems) {
      // Add the main item
      mergedArray.push(item);

      // Add each subItem as a separate item
      item.subItems.forEach((subItem) => {
        mergedArray.push({
          ...subItem, // Include the parent title for reference
        });
      });
    } else {
      // If no subItems, add the main item as is
      mergedArray.push(item);
    }
  });

  const handleNavigation = (title) => {
    if (title === 'व्हिडिओ') {
      navigation.navigate('VDStack');
    } else if (title === 'फोटो') {
      navigation.navigate('PTStack');
    }
    else if (title === 'वेब स्टोरीज') {
      navigation.navigate('Webstories');
    } else {
      navigation.navigate(title);
    }
  };

  return (
    <SafeAreaView style={sideMenuStyle.areaView}>
      <View style={sideMenuStyle.MainView}>
        <View style={sideMenuStyle.logoView}>
          <Image
            style={sideMenuStyle.logoText}
            source={require('../Assets/Images/nr_logo.png')}
          />
        </View>
      </View>
      <ScrollView>
        <View>
          <FlatList
            data={mergedArray}
            ItemSeparatorComponent={() => <View style={{}} />}
            renderItem={({ item }) => (
              <View>
                <DrawerItem
                onPress={() => {
                  handleNavigation(item.title);
                }}
                  style={{
                    borderTopColor: graycolor,
                    borderTopWidth: 1,
                    marginVertical: -2,
                  }}
                  icon={({ color, size }) => (
                    <Image
                      style={sideMenuStyle.listImg}
                      source={{ uri: item.Image }}
                    />
                  )}
                  label={() => (
                    
                      <Text style={sideMenuStyle.text}>{item.title}</Text>
                    
                  )}
                  labelStyle={sideMenuStyle.text}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

type Props = {
  menuData: Function,
  loading: Boolean,
};

export default SideMenu;
