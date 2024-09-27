// NotificationsScreen.js
import React, { useEffect } from 'react';
import { Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { getSliderAction } from '../redux/actions/getSliderAction';
import { blackcolor, commonstyles, red_color } from '../styles/commonstyles';

const NotificationsScreen = () => {
  const dispatch = useDispatch();
  sliderData = useSelector(state => state.sliderReducer.sliderData);



  return (
    <View>
      <FlatList
        data={sliderData?.data?.slice(0, 10)} 
        keyExtractor={(item, index) => index.toString()} 
        renderItem={({ item }) => (
            <View style={{}}>
            <View style={commonstyles.catecomp2mainView}>
              <TouchableOpacity
                style={commonstyles.catecomp2Tochable}
                onPress={() => {
                  this.props.navigation.navigate('Details', {
                    item: this.props.item,
                    detailsData: this.props.propsdata,
                  });
                }}>
      
                <View style={commonstyles.cateviewText}>
      
                  <Text
                    numberOfLines={3}
                    ellipsizeMode="tail"
                    style={commonstyles.categoryText}>
                    {item?.title?.rendered?.includes(':') ? (
                      <Text style={{ color: red_color }}>
                        {item?.title?.rendered?.split(':')[0]}
                        <Text style={{ color: red_color }}>:</Text>
                        <Text style={{ color: blackcolor }}>
                          {item?.title?.rendered?.split(':')[1]}
                        </Text>
                      </Text>
                    ) : (
                      <Text style={{ color: blackcolor }}>
                        {item?.title?.rendered}
                      </Text>
                    )}
                  </Text>
                </View>
                <View style={commonstyles.cateviewImg}>
                  {/* <Image
                    source={{ uri: item?.web_featured_image }}
                    style={commonstyles.cateImage}
                  /> */}
                </View>
              </TouchableOpacity>
              <View style={{ flexDirection: 'row' }}>
                <View style={commonstyles.cateview}>
                  <Text numberOfLines={2}
                    ellipsizeMode="tail"
                    style={[commonstyles.catetext, { width: 140 }]}>
                    {this.props?.item?.category_name}</Text>
                </View>
          
               
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};
type Props = {
    sliderData: Function,
    loading: Boolean,
  }
export default NotificationsScreen;
