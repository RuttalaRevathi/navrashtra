import React, { useState } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {commonstyles, Dark_Gray} from '../styles/commonstyles';

const BookmarkComponent = ({ item, onDelete, navigation, propsdata }) => {
    const [bookmarked, setBookmarked] = useState(false); // Manage bookmark state

    const decode = require('html-entities-decoder');

    const handleDelete = async () => {
        try {
            const storedArticles = await AsyncStorage.getItem('bookmarkedArticles');
            let bookmarkedArticles = storedArticles ? JSON.parse(storedArticles) : [];

            bookmarkedArticles = bookmarkedArticles.filter(article => article.id !== item.id);

            await AsyncStorage.setItem('bookmarkedArticles', JSON.stringify(bookmarkedArticles));
            onDelete(item.id); // Notify parent component to update state
        } catch (error) {
            console.error('Error deleting article:', error);
        }
    };

   

    const imageUrl = item?.web_featured_image ? { uri: item?.web_featured_image } : require('../Assets/Images/home.png');

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    navigation.navigate('Details', {
                        item,
                        detailsData: propsdata,
                    });
                }}>
                <View style={commonstyles.HomeComp2DotView}>
                    <View style={commonstyles.cateviewText}>
                        <View>
                            <Text
                                numberOfLines={2}
                                ellipsizeMode="tail"
                                style={commonstyles.latestText}>
                                {decode(item?.title?.rendered)}
                            </Text>
                        </View>
                        {/* Time View */}
                        <View style={{ flexDirection: 'row', justifyContent:'space-between' }}>
                            <View>
                            <Text numberOfLines={3} ellipsizeMode="tail" style={{ color: Dark_Gray }}>
                                {item?.category_name}
                            </Text>
                            </View>
                            <View>
                            <TouchableOpacity onPress={handleDelete}>
                                <Image style={{ width: 20, height: 20, right: 10 }} source={require('../Assets/Images/bin.png')} />
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={commonstyles.cateviewImg}>
                        <Image source={imageUrl} style={commonstyles.cateImage} />
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

export default BookmarkComponent;
