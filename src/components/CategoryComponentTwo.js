import React, { useEffect, useState } from 'react';
import {
  Image,
  Share,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import moment from 'moment';
import {
  commonstyles,
} from '../styles/commonstyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import FastImage from 'react-native-fast-image';

const CategoryComponentTwo = ({ item, navigation, propsdata }) => {
  const [loadedArticles, setLoadedArticles] = useState(5); // Initial number of articles to load
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  
  const sharecall = () => {
    const Link_Url = item?.link;
    Share.share({
      message: Link_Url,
    })
      .then((result) => console.log(result))
      .catch((error) => console.log(error));
  };

  const defaultImage = require('../Assets/Images/noimage.png');
  const imageUrl = item?.web_featured_image
    ? { uri: item?.web_featured_image }
    : defaultImage;
  const decode = require('html-entities-decoder');
    // Date and time 
    const apiDate = item?.date;
    const formattedDate = moment(apiDate).format("MMM DD, YYYY | hh:mm A");

  return (
    <>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Details', {
            item,
            detailsData: propsdata,
          });
        }}>
        <View style={commonstyles.HomeComp2DotView}>
          <View style={commonstyles.cateviewText}>
              <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={commonstyles.latestText}>
                {decode(item?.title?.rendered)}
              </Text>
            {/* Time View */}
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8 }}>
            <Text style={commonstyles.HomeTwotime}>{formattedDate}</Text>
            <TouchableOpacity
                    onPress={() => {
                      sharecall();
                    }}>
                    <Image
                      style={{ width: 15, height: 15, right: 6 }}
                      source={require('../Assets/Images/share_black.png')}
                    />
                  </TouchableOpacity>
            </View>
          </View>
          <FastImage
              resizeMode={FastImage.resizeMode.cover}
              source={imageUrl} style={commonstyles.cateImage} />
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CategoryComponentTwo;
