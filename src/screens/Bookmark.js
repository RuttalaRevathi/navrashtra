import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, ScrollView, SafeAreaView, TouchableOpacity, Image, FlatList, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { appThemeColor, commonstyles, whitecolor } from '../styles/commonstyles';
import { HeaderStyle } from '../styles/Header.Styles';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import BookmarkComponent from '../components/BookmarkComponent';
import Toast from '../components/Toast';

const BookmarkScreen = () => {
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [bookmarkedArticles, setBookmarkedArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const getBookmarkedArticles = useCallback(async () => {
    try {
      const storedArticles = await AsyncStorage.getItem('bookmarkedArticles');
      if (storedArticles) {
        const parsedArticles = JSON.parse(storedArticles);
        setBookmarkedArticles(parsedArticles.reverse());
      }
    } catch (error) {
      console.error('Error retrieving bookmarked articles:', error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isFocused) {
      getBookmarkedArticles();
    }
  }, [isFocused, getBookmarkedArticles]);

  const handleDelete = (id) => {
    setBookmarkedArticles((prevArticles) => prevArticles.filter(article => article.id !== id));
    setToastMessage('Article deleted successfully');
    setShowToast(true);
  };

  const renderItem = ({ item }) => (
    <BookmarkComponent
      item={item}
      propsdata={bookmarkedArticles}
      navigation={navigation}
      onDelete={handleDelete}
    />
  );

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color={appThemeColor} />
      </View>
    );
  }

  const toggleToast = () => {
    setShowToast(!showToast);
  };

  return (
    <SafeAreaView style={commonstyles.container}>
      <View style={HeaderStyle.subHeaderviewHeight}>
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()} >
            <Image
              source={require('../Assets/Images/arrow.png')}
              style={{ width: 20, height: 20,}}
            />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={[HeaderStyle.subHeaderheading]}>बुकमार्क</Text>
        </View>
        <View></View>
      </View>
      <ScrollView style={commonstyles.scroll}>
        <View>
          {bookmarkedArticles.length > 0 ? (
            <View style={{ position: 'relative' }}>
              <FlatList
                style={commonstyles.cateflist}
                data={bookmarkedArticles}
                renderItem={renderItem}
                keyExtractor={(item) => item.id ? item.id.toString() : Math.random().toString()}              />
            </View>
          ) : (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <Text style={{ textAlign: 'center', marginVertical: 300, fontSize: 18 }}>No Favourites are saved</Text>
            </View>
          )}
        </View>
      </ScrollView>
      {/* Toast */}
      {showToast && <Toast message={toastMessage} onClose={toggleToast} />}
    </SafeAreaView>
  );
};

export default BookmarkScreen;
