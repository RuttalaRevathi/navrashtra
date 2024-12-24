import React, { useEffect, useState } from 'react';
import { useRoute, useNavigation } from '@react-navigation/native';
import { View, Text, ActivityIndicator } from 'react-native';
import { blackcolor, commonstyles } from '../styles/commonstyles';
import AuthorUI from '../components/AuthorUI';

const AuthorScreen = ({ item }) => {
    const navigation = useNavigation();
    const route = useRoute();

    const [parentData, setParentData] = useState(null); // Use `null` for initial state
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        fetchParentData();
    }, []);

    const fetchParentData = async () => {
        setLoading(true); // Set loading to true before starting the fetch
        try {
            // Replace API call with static data
            const staticData = {
                author: {
                    id: 1, // Unique ID of the author
                    name: 'Author One', // Author's name
                    bio: "Author One's bio", // Author's biography
                },
                articles: [
                    {
                        id: 727505, // Unique ID of the article
                        title: {
                            rendered: "Om Prakash Chautala : ५ वेळा CM, तुरुंगवास अन् जेलमधून १०, १२ वी चं शिक्षण; असा होता ओम प्रकाश चौटाला यांचा राजकीय प्रवास"
                        },
                        link: "https://www.navarashtra.com/india/haryana-former-cm-om-prakash-chautala-mla-after-supreme-court-order-story-of-devi-lal-son-727505.html",
                        web_featured_image: "https://images.navarashtra.com/wp-content/uploads/2024/12/Untitled-design-13-12_V_jpg--1280x720-4g.webp",
                        author_name: "नवराष्ट्र डेस्क",
                        date: "2024-12-20 16:34:41",
                        date_gmt: "2024-12-20 11:04:41",
                        category_name: "देश",
                        content: {
                            rendered: "<p>हरियाणाचे माजी मुख्यमंत्री आणि इंडियन नॅशनल लोक दलचे (INLD) प्रमुख ओम प्रकाश चौटाला यांचं शुक्रवारी दुपारी त्यांच्या गुरुग्राम येथील निवासस्थानी निधन झाले. ते ८९ वर्षांचे होते.चौटाला पाच वेळा हरियाणाचे मुख्यमंत्री राहिले आहेत. हरियाणाचे 5 वेळा मुख्यमंत्री राहिलेल्या चौटाला यांना मोठा राजकीय लाभला होता. चौटाला यांचे वडील आणि माजी उपपंतप्रधान चौधरी देवी लाल हे देशातील मोठे शेतकरी नेते होते. तरीही चौटाला यांचा राजकीय प्रवास खडतर आणि वादगस्त राहिला आहे.</p>"
                        }
                    },
                    {
                        id: 727354, // Unique ID of the article
                        title: {
                            rendered: "Om Prakash Chautala : हरियाणाचे माजी मुख्यमंत्री ओम प्रकाश चौटाला यांचं निधन; ५ वेळा भूषवलंय मुख्यमंत्रिपद"
                        },
                        link: "https://www.navarashtra.com/india/haryana-former-cm-and-inld-leader-om-prakash-chautala-passed-away-at-89-727354.html",
                        web_featured_image: "https://images.navarashtra.com/wp-content/uploads/2024/12/Untitled-design-8-13_V_jpg--1280x720-4g.webp",
                        author_name: "नवराष्ट्र डेस्क",
                        date: "2024-12-20 15:10:57",
                        date_gmt: "2024-12-20 09:40:57",
                        category_name: "देश",
                        content: {
                            rendered: "<p>हरियाणाचे माजी मुख्यमंत्री आणि इंडियन नॅशनल लोक दलचे (INLD) प्रमुख ओम प्रकाश चौटाला यांचं शुक्रवारी दुपारी त्यांच्या गुरुग्राम येथील निवासस्थानी निधन झाले. ते ८९ वर्षांचे होते.चौटाला पाच वेळा हरियाणाचे मुख्यमंत्री राहिले आहेत. ते माजी उपपंतप्रधान देवी लाल यांचे पुत्र होते. त्यांच्यावर शनिवारी दुपारी सिरसा जिल्ह्यातील तेजा खेरा येथे अंत्यसंस्कार करण्यात येणार असल्याची माहिती कुटुंबीयांनी दिली.चौटाला यांच्या पश्चात दोन मुले अजय सिंह चौटाला आणि अभय सिंह चौटाला आणि तीन मुली असा परिवार आहे.</p>"
                        }
                    }
                ]
            };
            

            // Simulate an API delay
            setTimeout(() => {
                setParentData(staticData);
                setLoading(false);
            }, 1000); // Simulate 1-second delay
        } catch (error) {
            console.error('Error fetching parent data: ', error);
        } finally {
            setLoading(false); // Ensure loading stops after fetch or error
        }
    };


    return (
        <>
            {loading ? (
                <View style={commonstyles.spinnerView}>
                    <ActivityIndicator color={blackcolor} size="large" />
                    <Text style={commonstyles.spinnerText}>. . . Loading . . .</Text>
                </View>
            ) : (
                parentData && (
                    <AuthorUI
                        data={parentData.articles} // Pass articles to AuthorUI
                        navigation={navigation}
                     
                    />
                )
            )}
        </>
    );
};

export default AuthorScreen;
