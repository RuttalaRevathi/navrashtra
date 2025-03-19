import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, FlatList, ActivityIndicator, Image} from 'react-native';
import {blackcolor, light_gray, whitecolor} from '../styles/commonstyles';
import {useDispatch, useSelector} from 'react-redux';
import getTrendingAction from '../redux/actions/getTrendingAction';
import Ripple from 'react-native-material-ripple';
import { useNavigation } from '@react-navigation/native';
import TrendIcon from '../Assets/Images/trending.png';

const Trending = React.memo(() => {
  const [trendLength, setTrendLength] = useState(0);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {trendingData, trendingLoading, error} = useSelector(
    state => state.trendingReducer,
  );

  useEffect(() => {
    dispatch(getTrendingAction());
    callback();
  }, []);
  function callback(){
    setTrendLength(trendingData.menu_items?.length);
  }
  const trendRederItem = ({item, index}) => {
    return (
      <>
        <Ripple onPress={()=> navigation.navigate(item.title === "Photos" ? "PTStack" : item.title === "Videos" ? "VDStack" : "Topics", {
            item: {link: item.url, name: item.title}
        })}>
          <Text key={index} style={styles.trendItem}>
            {item.title}
          </Text>
        </Ripple>
        {trendLength !== index + 1 && <Text style={styles.pipe}>|</Text>}
      </>
    );
  };
  return (
    <View style={styles.treningContainer}>
        <Image source={TrendIcon} style={styles.trendIcon} resizeMode="contain" />
      <Text style={styles.trendHeading}>In Trends:</Text>
      {trendingLoading ? (
        <ActivityIndicator size="small" color={blackcolor} style={{marginLeft: 12}} />
      ) : (
        <>
          {trendingData.menu_items?.length > 0 ? <FlatList
              data={trendingData.menu_items?.filter(item => item.title !== "Web Stories")}
              key={index => index.toString()}
              renderItem={trendRederItem}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            /> : <Text style={styles.trendItem}>No Trending's: {error}</Text>}
        </>
      )}
    </View>
  );
});
const styles = StyleSheet.create({
  treningContainer: {
    paddingLeft: 12,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: light_gray,
    backgroundColor: whitecolor,
  },
  trendHeading: {
    fontSize: 14,
    fontWeight: '600',
    color: blackcolor,
    marginHorizontal: 5
  },
  trendItem: {
    fontSize: 13,
    color: blackcolor,
    marginHorizontal: 8
  },
  trendIcon: {
    width: 14
  },
  pipe: {
    fontSize: 13,
    color: blackcolor,
  }
});
export default Trending;
