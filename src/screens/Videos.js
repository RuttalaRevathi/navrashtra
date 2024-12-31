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
import { blackcolor, commonstyles, whitecolor, redcolor, graycolor, Dark_Gray } from '../styles/commonstyles';
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
                 <View style={{ padding: 12 }}>
                          <View style={commonstyles.gallerycategoryView}>
                                    <Text style={commonstyles.galleryArticlecategorytext}>वीडियो गैलरी</Text>
                                    </View>
                    <FlatList
                        style={commonstyles.cateflist}
                        data={videosData?.data}
                        numColumns={1}
                        renderItem={({ item, index }) => (
                            <View style={{ flex: 1 }}>
                                    <TouchableOpacity onPress={() => {
                                        navigation.navigate('VideoArticle', {
                                            item: item,
                                            detailsData: videosData?.data,
                                            screenName: "Videos"
                                        });
                                    }}>
                                        <View style={{paddingBottom: 5,paddingTop:5}}>
                                                <>
                                                    {typeof item?.web_featured_image === 'string' && item?.web_featured_image.trim() !== '' ? (
                                                        <View>
                                                            <Image style={commonstyles.VideoimgTag}
                                                                source={{ uri: item?.web_featured_image }} />
                                                           <View style={{
                                                                           bottom: 15,
                                                                           right: 15,
                                                                           position: 'absolute',
                                                                         }}>
                                                                           <Image
                                                                             source={require('../Assets/Images/video.png')}
                                                                             style={{ tintColor: whitecolor }}
                                                                           />
                                                                         </View>
                                                        </View>
                                                    ) : null}
                                                </>
                                                    <Text numberOfLines={2} ellipsizeMode="tail"
                                                        style={commonstyles.latestTxtTag}>{item?.title?.rendered}
                                                    </Text>
                                                    </View>
                                    </TouchableOpacity>
                            </View>
                        )}
                    />
                    </View>
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
