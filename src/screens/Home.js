/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, connect, useSelector } from 'react-redux';
import FastImage from 'react-native-fast-image';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Spinner from 'react-native-loading-spinner-overlay';


import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

import {
  commonstyles,
} from '../styles/commonstyles';
import HomeUI from '../components/HomeUI';
import SliderUI from '../components/SliderUI';
import HomeUINew from '../components/HomeUINew';
import getSliderAction from '../redux/actions/getSliderAction';
import HomeVideosgalleryItemOne from '../components/HomeVideosgalleryItemOne';
import HomeVideosgalleryItemTwo from '../components/HomeVideosgalleryItemTwo';
import HomePhotogalleryItemTwo from '../components/HomePhotogalleryItemTwo';
import getPhotoGalleryAction from '../redux/actions/getPhotoGalleryAction';
import { Automobile, BaseUrl, Business, Carrer, CategoryUrl, Elections, India, Lifestyle, Maharashtra, Movies, Mumbai, Nagpur, Pune, Religion, Special, Sports, Technology, Travel, Viral, World } from '../utilities/urls';
import getVideoAction from '../redux/actions/getVideoAction';
import WebStoriesHome from './WebStroriesHome';

const Home = ({ navigation }) => {
  const [indiaData, setIndiaData] = useState(null);
  const [loading, setLoading] = useState(null);
  const [maharashtraData, setMaharashtraData] = useState(null);
  const [mumbaiData, setMumbaiData] = useState(null);
  const [worldData, setWorldData] = useState(null);
  const [sportsData, setSportsData] = useState(null);
  const [lifestyleData, setLifestyleData] = useState(null);
  const [specialData, setSpecialData] = useState(null);
  const [moviesData, setMoviesData] = useState(null);
  const [viralData, setViralData] = useState(null);
  const [businessData, setBusinessData] = useState(null);
  const [automobileData, setAutomobileData] = useState(null);
  const [technologyData, setTechnologyData] = useState(null);
  const [religionData, setReligionData] = useState(null);
  const [careerData, setCareerData] = useState(null);
  const [puneData, setPuneData] = useState(null);
  const [nagpurData, setNagpurData] = useState(null);

  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useDispatch();
  const sliderData = useSelector(state => state.sliderReducer.sliderData);
  const videosData = useSelector(state => state.videoReducer.videosData);
  const photosData = useSelector(state => state.photosGalleryReducer.photosData);

  const getIndiaAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + India);
      const responseJson = await response.json();
      setIndiaData(responseJson);
    } catch (error) {
      console.error('Error fetching India data:', error);
    }
  };
  const getMaharashtraAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Maharashtra);
      const responseJson = await response.json();
      setMaharashtraData(responseJson);
    } catch (error) {
      console.error('Error fetching maharashtra data in home:', error);
    }
  };
  const getMumbaiAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Mumbai);
      const responseJson = await response.json();
      setMumbaiData(responseJson);
    } catch (error) {
      console.error('Error fetching Mumbai data:', error);
    }
  };
  const getPuneAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Pune);
      const responseJson = await response.json();
      setPuneData(responseJson);
    } catch (error) {
      console.error('Error fetching puneAction data:', error);
    }
  };
  const getNagpurAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Nagpur);
      const responseJson = await response.json();
      setNagpurData(responseJson);
    } catch (error) {
      console.error('Error fetching getNagpurAction data:', error);
    }
  };
  const getWorldAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + World);
      const responseJson = await response.json();
      setWorldData(responseJson);
    } catch (error) {
      console.error('Error fetching World data:', error);
    }
  };
  const getSportsAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Sports);
      const responseJson = await response.json();
      setSportsData(responseJson);
    } catch (error) {
      console.error('Error fetching Sports data:', error);
    }
  };
  const getLifestyleAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Lifestyle);
      const responseJson = await response.json();
      setLifestyleData(responseJson);
    } catch (error) {
      console.error('Error fetching Lifestyle data:', error);
    }
  };
  const getSpecialAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Special);
      const responseJson = await response.json();
      setSpecialData(responseJson);
    } catch (error) {
      console.error('Error fetching Special data:', error);
    }
  };
  const getMoviesAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Movies);
      const responseJson = await response.json();
      setMoviesData(responseJson);
    } catch (error) {
      console.error('Error fetching getMoviesAction data:', error);
    }
  };
  const getViralAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Viral);
      const responseJson = await response.json();
      setViralData(responseJson);
    } catch (error) {
      console.error('Error fetching getViralAction data:', error);
    }
  };
  const getBusinessAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Business);
      const responseJson = await response.json();
      setBusinessData(responseJson);
    } catch (error) {
      console.error('Error fetching getBusinessAction data:', error);
    }
  };
  const getAutomobileAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Automobile);
      const responseJson = await response.json();
      setAutomobileData(responseJson);
    } catch (error) {
      console.error('Error fetching getAutomobileAction data:', error);
    }
  };
  const getTechnologyAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Technology);
      const responseJson = await response.json();
      setTechnologyData(responseJson);
    } catch (error) {
      console.error('Error fetching getTechnologyAction data:', error);
    }
  };
  const getReligionAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Religion);
      const responseJson = await response.json();
      setReligionData(responseJson);
    } catch (error) {
      console.error('Error fetching getReligionAction data:', error);
    }
  };
  const getCareerAction = async () => {
    try {
      const response = await fetch(BaseUrl + CategoryUrl + Carrer);
      const responseJson = await response.json();
      setCareerData(responseJson);
    } catch (error) {
      console.error('Error fetching getCareerAction data:', error);
    }
  };
 

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(getSliderAction());
    dispatch(getVideoAction());
    dispatch(getPhotoGalleryAction());
    getIndiaAction();
    getMaharashtraAction();
    getMumbaiAction();
    getNagpurAction();
    getWorldAction();
    getSportsAction();
    getLifestyleAction();
    getSpecialAction();
    getMoviesAction();
    getViralAction();
    getBusinessAction();
    getAutomobileAction();
    getTechnologyAction();
    getReligionAction();
    getCareerAction();
    getPuneAction();
    setTimeout(() => setRefreshing(false), 3000);
  };

  useEffect(() => {
    getIndiaAction();
    getMaharashtraAction();
    getMumbaiAction();
    getWorldAction();
    getSportsAction();
    getLifestyleAction();
    getSpecialAction();
    getMoviesAction();
    getViralAction();
    getBusinessAction();
    getAutomobileAction();
    getTechnologyAction();
    getReligionAction();
    getCareerAction();
    getPuneAction();
    getNagpurAction();

  }, []);
  const videoGalleryitemOne = ({ item, index }) => (
    <HomeVideosgalleryItemOne
      item={item}
      propsdata={videosData?.data}
      navigation={navigation}
      index={index}
    />
  );
  const videoGalleryitemTwo = ({ item, index }) => (
    <HomeVideosgalleryItemTwo
      item={item}
      propsdata={videosData?.data}
      navigation={navigation}
      index={index}
    />
  );
  const photoGalleryItemTwo = ({ item, index }) => (
    <HomePhotogalleryItemTwo
      item={item}
      propsdata={photosData?.data}
      navigation={navigation}
      index={index}
    />
  );
  const newsliderdata = Array.isArray(sliderData?.data) ? sliderData?.data : [];

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={commonstyles.scroll}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <View style={{}}>
          {/* Spinner */}
          <Spinner
            visible={loading}
            textContent={'Loading...'}
            textStyle={{ color: '#FFF' }}
          />


          {/* Slider */}
          <View style={{ paddingLeft: 5 ,paddingTop:5}}>
            <SliderUI data={newsliderdata} navigation={navigation} />
          </View>
          {/* Webstories */}
          <WebStoriesHome />
          {/* India */}

          <HomeUI
            categoryName="देश"
            data={indiaData?.data}
            navigationScreen="india"
            navigation={navigation}
          />
          {/* Photo Gallery */}
          {/* photo gallery  Cards*/}
          <View style={commonstyles.homeVideoview}>
            <View style={commonstyles.homegallerycategoryView}>
              <View>
                <Text style={commonstyles.homevideocategorytext}>फोटो</Text>
              </View>
              <View style={{ paddingRight: 5, }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Photos');
                  }}>
                  <Image style={{ width: 25, height: 25 }} source={require('../Assets/Images/next_white.png')} />
                </TouchableOpacity>
              </View>
            </View>
            {/* photo gallery  Cards*/}
            <View style={{ paddingLeft: 10 }}>
              <FlatList
                persistentScrollbar
                data={photosData?.data}
                showsHorizontalScrollIndicator={true}
                horizontal={true}
                renderItem={photoGalleryItemTwo}
              />
            </View>
          </View>
          {/* Maharashtra */}
          <HomeUINew
            categoryName="महाराष्ट्र"
            data={maharashtraData?.data}
            navigationScreen="Maharashtra"
            navigation={navigation}
          />
          {/* videos Gallery */}
          {/* videos gallery  text */}
          <View style={commonstyles.homeVideoview}>
            <View style={commonstyles.homegallerycategoryView}>
              <View>
                <Text style={commonstyles.homevideocategorytext}>वीडियो</Text>
              </View>
              <View style={{ paddingRight: 5 }}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('Videos');
                  }}>
                  <Image style={{ width: 25, height: 25 }} source={require('../Assets/Images/next_white.png')} />
                </TouchableOpacity>
              </View>
            </View>

            {/* videos gallery  Cards*/}
            <View>
              <View>
                <FlatList
                  data={videosData?.data?.slice(0, 1)}
                  showsHorizontalScrollIndicator={false}
                  renderItem={videoGalleryitemOne}
                />
              </View>
              <View style={{ paddingLeft: 10 }}>
                <FlatList
                  persistentScrollbar
                  data={videosData?.data?.slice(1, 10)}
                  showsHorizontalScrollIndicator={true}
                  horizontal={true}
                  renderItem={videoGalleryitemTwo}
                />
              </View>
            </View>
          </View>
          {/* Mumbai */}
          <HomeUI
            categoryName="मुंबई"
            data={mumbaiData?.data || []}
            navigationScreen="Mumbai"
            navigation={navigation}
          />
          {/* Pune */}
          <HomeUINew
            categoryName="पुणे"
            data={puneData?.data}
            navigationScreen="Pune"
            navigation={navigation}
          />
          {/* Nagpur */}
          <HomeUI
            categoryName="नागपूर"
            data={nagpurData?.data || []}
            navigationScreen="Nagpur"
            navigation={navigation}
          />
          {/* world */}
          <HomeUINew
            categoryName="वर्ल्ड"
            data={worldData?.data}
            navigationScreen="World"
            navigation={navigation}
          />
          {/* Sports */}
          <HomeUI
            categoryName="खेल"
            data={sportsData?.data}
            navigationScreen="Sports"
            navigation={navigation}
          />
          {/* lifestyle */}
          <HomeUINew
            categoryName="लाइफ़स्टाइल"
            data={lifestyleData?.data}
            navigationScreen="Lifestyle"
            navigation={navigation}
          />
          {/* Special */}
          <HomeUI
            categoryName="नवभारत विशेष"
            data={specialData?.data}
            navigationScreen="special-coverage"
            navigation={navigation}
          />
          {/* Movies */}
          <HomeUI
            categoryName="मूवी मसाला"
            data={moviesData?.data}
            navigationScreen="Movies"
            navigation={navigation}
          />
          {/* Viral */}
          <HomeUINew
            categoryName="वायरल"
            data={viralData?.data}
            navigationScreen="Viral"
            navigation={navigation}
          />
          {/* Business */}
          <HomeUI
            categoryName="बिज़नेस"
            data={businessData?.data}
            navigationScreen="Business"
            navigation={navigation}
          />
          {/* Automobile */}
          <HomeUINew
            categoryName="ऑटोमोबाइल"
            data={automobileData?.data}
            navigationScreen="Automobile"
            navigation={navigation}
          />
          {/* Technology */}
          <HomeUI
            categoryName="टेक्नॉलजी"
            data={technologyData?.data}
            navigationScreen="Technology"
            navigation={navigation}
          />
          {/* Religion */}
          <HomeUINew
            categoryName="धर्म"
            data={religionData?.data}
            navigationScreen="Religion"
            navigation={navigation}
          />
          {/* Career */}
          <HomeUI
            categoryName="करियर"
            data={careerData?.data}
            navigationScreen="Career"
            navigation={navigation}
          />
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

type Props = {
  sliderData: Function,
  loading: Boolean,
  indiaData: Function,
  maharashtraData: Function,
  videosData: Function,
  photosData: Function

}

export default Home;
