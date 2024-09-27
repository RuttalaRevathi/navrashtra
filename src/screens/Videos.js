/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React, { useEffect } from 'react';
import { useDispatch, connect } from 'react-redux';
import {
    FlatList,
    Image,
    SafeAreaView,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import SubHeader from '../components/SubHeader';
import { blackcolor, commonstyles, whitecolor, redcolor } from '../styles/commonstyles';
import getVideoAction from '../redux/actions/getVideoAction';

const Videos = ({
    navigation,
    videosData,
    videosLoading,
    route,
}: Props) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getVideoAction());
    }, []);

    // share function
    return (
        <SafeAreaView style={commonstyles.container}>
            <ScrollView style={commonstyles.scroll}>
                <View>
                    <Text style={commonstyles.galleryArticlecategorytext}>वीडियो गैलरी</Text>
                </View>
                <View>
                    <FlatList
                        style={commonstyles.cateflist}
                        data={videosData?.data}
                        numColumns={1}
                        renderItem={({ item, index }) => (
                            <View style={{ flex: 1 }}>
                                <View>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('VideoArticle', {
                                            item: item,
                                            detailsData: videosData?.data,
                                        });
                                    }}>
                                        <View style={{}}>
                                            <View style={{ paddingBottom:15 }}>
                                                <View >
                                                    {typeof item?.web_featured_image === 'string' && item?.web_featured_image.trim() !== '' ? (
                                                        <View style={{ position: 'relative' }}>
                                                            <Image style={commonstyles.VideoimgTag}
                                                                source={{ uri: item?.web_featured_image }} />
                                                            <View style={{
                                                                position: 'absolute',
                                                                top: '50%',
                                                                left: '50%',
                                                                transform: [{ translateX: -25 }, { translateY: -25 }],
                                                                width: 50,
                                                                height: 40,
                                                                backgroundColor: redcolor,
                                                                justifyContent: 'center',
                                                                alignItems: 'center',
                                                            }}>
                                                                <Text style={{
                                                                    color: 'black',
                                                                    fontSize: 30,
                                                                    fontWeight: 'bold',
                                                                    bottom:3
                                                                }}>
                                                                    ▶
                                                                </Text>
                                                            </View>
                                                        </View>
                                                    ) : null}
                                                </View>
                                                <View>
                                                    <Text numberOfLines={2} ellipsizeMode="tail"
                                                        style={commonstyles.latestTxtTag}>{item?.title?.rendered}
                                                    </Text>
                                                </View>
                                            </View>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

type Props = {
    videosData: Function,
    videosLoading: Boolean,
};

const mapStateToProps = state => ({
    videosData: state.videoReducer?.videosData,
    videosLoading: state.videoReducer?.videosLoading,
});
const mapDispatchToProps = {
    getVideoAction,
};
export default connect(mapStateToProps, mapDispatchToProps)(Videos);
