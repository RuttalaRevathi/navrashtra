/* eslint-disable prettier/prettier */
import React from 'react';
import {
    Text,
    View,
    FlatList,
    SafeAreaView,
} from 'react-native';
import {commonstyles } from '../styles/commonstyles';
import HomeSliderComponent from './HomeSliderComponent';
function SliderUI(props) {
    const renderItemOne = ({ item ,index }) => (
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
            <View>
                {/* LatestNews  text*/}
                <View style={commonstyles.homeOnetextView}>
                    <View>
                        <Text style={commonstyles.Category}>दिन की खबरें</Text>
                    </View>

                </View>

                {/* flatlist for Latest News */}
                <View>
                    <View style={commonstyles.SliderflatView}>
                        <FlatList
                            data={newdata.filter(obj => {
                                return obj.format === 'standard';
                            })} showsHorizontalScrollIndicator={true}
                            horizontal={true}
                            scrollEnabled={true}
                            getItemLayout={(data, index) => ({
                                length: 40,
                                offset: 40 * index,
                                index,
                            })}
                            renderItem={renderItemOne}
                        />

                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default SliderUI;
