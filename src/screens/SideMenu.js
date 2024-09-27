import React, { useEffect, useState } from 'react';
import { DrawerItem } from '@react-navigation/drawer';
import { View, Text, TouchableOpacity, Image, FlatList, SafeAreaView, ScrollView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import getTopMenuDataAction from '../redux/actions/getTopMenuDataAction';
import { sideMenuStyle } from '../styles/SideMenuStyles';
import { graycolor } from '../styles/commonstyles';

const SideMenu = ({ navigation }: Props) => {
  const [expandedItems, setExpandedItems] = useState({});
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
      navigation.navigate('Videos');
    } else if (title === 'फोटो') {
      navigation.navigate('Photos');
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
            source={require('../Assets/Images/logo1.png')}
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
                  style={{
                    borderTopColor: graycolor,
                    borderTopWidth: 1,
                    marginVertical: -2,
                  }}
                  icon={({ color, size }) => (
                    <Image
                      style={sideMenuStyle.listImg}
                      // source={require('../Assets/Images/list.png')}
                      source={{ uri: item.Image }}
                    />
                  )}
                  label={() => (
                    <TouchableOpacity
                      onPress={() => {
                        handleNavigation(item.title);
                      }}
                    >
                      <Text style={sideMenuStyle.text}>{item.title}</Text>
                    </TouchableOpacity>
                  )}
                  labelStyle={sideMenuStyle.text}
                  onPress={() => { }}
                />
              </View>
            )}
          />
          <DrawerItem
            style={sideMenuStyle.item}
            icon={({ color, size }) => (
              <Image
                source={require('../Assets/Images/star.png')}
                style={sideMenuStyle.icon}
              />
            )}
            label="पसंदीदा"
            labelStyle={sideMenuStyle.text}
            onPress={() => {
              navigation.navigate('Bookmark');
            }}
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
