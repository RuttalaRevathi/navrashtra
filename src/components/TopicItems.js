import React from 'react';
import {View, Text, FlatList, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import {
  commonstyles,
  graycolor,
  blackcolor,
  light_gray,
} from '../styles/commonstyles';
import { useNavigation } from '@react-navigation/native';

const TopicItems = ({ tags, categoryName}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.tagContainer}>
      <View style={[commonstyles.DetailsLatestView]}>
        <Text style={commonstyles.Category}>Topics</Text>
      </View>
      {tags?.length > 0 ? (
        <View style={{paddingLeft: 12, flex: 1, alignItems: 'flex-start'}}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            persistentScrollbar={false}
            horizontal={true}
            data={tags}
            renderItem={({item}) => (
              <TouchableWithoutFeedback
                onPress={() =>
                  navigation.push('Topics', {item, categoryName})
                }>
                <View style={styles.tagItem}>
                <Text style={styles.tagItemText}>{item.name}</Text>
                </View>
              </TouchableWithoutFeedback>
            )}
            keyExtractor={item => item.id?.toString()}
          />
        </View>
      ) : (
        <Text style={styles.noTagsText}>No Tags</Text>
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

export default TopicItems;
