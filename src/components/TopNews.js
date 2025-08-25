import React, {memo, useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  TouchableWithoutFeedback,
} from 'react-native';
import {
  blackcolor,
  light_gray,
  redcolor,
  whitecolor,
} from '../styles/commonstyles';
import TextTicker from 'react-native-text-ticker';
import { BaseUrl, BreakingNewsUrl } from '../utilities/urls';
import { decode } from 'html-entities';

const TopNews = ({navigation}) => {
  const [topNews, setTopNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [articleData, setArticleData] = useState([]);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    fetchBreackingNews();
  }, []);

  const fetchBreackingNews = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${BaseUrl}${BreakingNewsUrl}`);
      const data = await response.json();
      let tempData = [];
      data[0].items?.forEach(item => {
        let obj = {
          id: item.id,
          title: decode(item.title?.rendered),
          categoryName: item.category?.slug
        };
        tempData.push(obj);
      });
      setTopNews(tempData);
      setArticleData(data[0].items);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const handleTopNewsPress = (item) => {
    navigation.navigate('Details', {
      item: item,
      detailsData: articleData,
      categoryName: item?.category?.slug
    });
  };

  return (
    <View style={styles.topNews}>
      <Text style={styles.topNewsLabel}>TOP NEWS</Text>
      {loading ? (
        <ActivityIndicator
          size="small"
          color={blackcolor}
          style={{paddingLeft: 16}}
        />
      ) : (
        <>
          <TextTicker
            scrollSpeed={25}
            loop={true} // Enable continuous looping
            bounce={false} // Smooth scrolling effect
            marqueeDelay={0} // Small delay before scrolling starts
            isInteraction={false} // Helps prevent unwanted restarts
            delay={0}
            scroll={!paused} // Pause and resume based on state
          >
            {topNews.length > 0 ? topNews?.map(item => (
              <TouchableWithoutFeedback
                key={item.id}
                onPress={() => handleTopNewsPress(item)}
                onPressIn={() => setPaused(true)}
                onPressOut={() => setPaused(false)}
                >
                <Text style={styles.topNewsTitle}>{item.title}{' '}{' '}{' '} | {' '}{' '}{' '}</Text>
              </TouchableWithoutFeedback>
            )) : 'No breaking news available'}
          </TextTicker>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  topNews: {
    backgroundColor: light_gray,
    flexDirection: 'row',
    alignItems: 'center',
    overflow: 'hidden',
  },
  topNewsLabel: {
    fontSize: 14,
    fontWeight: 'bold',
    color: whitecolor,
    backgroundColor: redcolor,
    paddingVertical: 12,
    paddingHorizontal: 8,
  },
  topNewsTitle: {
    fontSize: 15,
    color: blackcolor,
    fontWeight: '500',
  },
});

export default memo(TopNews);
