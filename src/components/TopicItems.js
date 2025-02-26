import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {commonstyles, graycolor, blackcolor, light_gray} from '../styles/commonstyles';

export const TopicItems = ({navigation, tags, categoryName}) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const renderTopicItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.tagItem}
        onPress={() => navigation.navigate('Topics', {item, categoryName})}>
        <Text style={styles.tagItemText}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.tagContainer}>
      <View style={[commonstyles.DetailsLatestView]}>
        <Text style={commonstyles.Category}>Topics</Text>
      </View>
      {loading ? (
        <ActivityIndicator size="small" color={blackcolor} />
      ) : (
        <>
          {tags?.length > 0 ? (
            <View style={{paddingLeft: 12}}>
              <FlatList
                showsHorizontalScrollIndicator={false}
                persistentScrollbar={false}
                horizontal={true}
                data={tags}
                renderItem={renderTopicItem}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          ) : (
            <Text style={styles.noTagsText}>No Tags</Text>
          )}
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  tagContainer: {
    borderBottomColor: graycolor,
    borderBottomWidth: 2,
    paddingBottom: 16,
  },
  tagItem: {
    paddingHorizontal: 14,
    paddingVertical: 5,
    marginRight: 6,
    backgroundColor: light_gray,
    borderRadius: 20,
  },
  tagItemText: {
    color: blackcolor,
    fontSize: 14,
    fontWeight: '600',
    lineHeight: 24,
  },
  noTagsText: {
    fontSize: 18,
    color: blackcolor,
    textAlign: 'center',
  },
});
