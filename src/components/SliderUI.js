/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
    ActivityIndicator,
} from 'react-native';
import { commonstyles } from '../styles/commonstyles';
import HomeSliderComponent from './HomeSliderComponent';
function SliderUI(props) {
    const renderItemOne = ({ item, index }) => (
        <HomeSliderComponent
            item={item}
            propsdata={props?.data}
            navigation={props?.navigation}
            index={index}
        />
    );

    // Check if data is available and is an array
    const newdata = Array.isArray(props?.data) ? props.data : [];

    return (
        <SafeAreaView styles={commonstyles.container}>
                {/* LatestNews  text*/}
                <View style={commonstyles.homeOnetextView}>
                    <Text style={commonstyles.Category}>ताज्या बातम्या</Text>
                </View>
                    <View style={commonstyles.SliderflatView}>
                        {newdata.length > 0 ? <FlatList
                            data={newdata}
                            showsHorizontalScrollIndicator={true}
                            horizontal={true}
                            scrollEnabled={true}
                            getItemLayout={(data, index) => ({
                                length: 40,
                                offset: 40 * index,
                                index,
                            })}
                            renderItem={renderItemOne}
                        /> : <ActivityIndicator  size={'large'} />}
                    </View>
        </SafeAreaView>
    );
}

export default SliderUI;
