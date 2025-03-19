/* eslint-disable prettier/prettier */
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  ActivityIndicator,
  SafeAreaView,
  RefreshControl,
} from 'react-native';

import {
  commonstyles
} from '../styles/commonstyles';
import HomeUI from '../components/HomeUI';
import SliderUI from '../components/SliderUI';
import HomeUINew from '../components/HomeUINew';
import getSliderAction from '../redux/actions/getSliderAction';
import HomeVideosgalleryItemOne from '../components/HomeVideosgalleryItemOne';
import HomeVideosgalleryItemTwo from '../components/HomeVideosgalleryItemTwo';
import HomePhotogalleryItemTwo from '../components/HomePhotogalleryItemTwo';
import getPhotoGalleryAction from '../redux/actions/getPhotoGalleryAction';
import { Automobile, BaseUrl, Business, Carrer, CategoryUrl, India, Lifestyle, Maharashtra, Movies, Mumbai, Nagpur, Pune, Religion, Special, Sports, Technology, Viral, World } from '../utilities/urls';
import getVideoAction from '../redux/actions/getVideoAction';
import WebStoriesHome from './WebStroriesHome';
import TopNews from '../components/TopNews';
import Ripple from 'react-native-material-ripple';
import Trending from '../components/Trending';

const Home = ({ navigation }) => {
  const [indiaData, setIndiaData] = useState(null);
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
  const photosData = useSelector(state => state.photosGalleryReducer?.photosData);

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
      const response = await fetch(BaseUrl + CategoryUrl + Mumbai );
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
        <View>
          {/* Trending */}
          <Trending />
          {/* Breaking News */}
          <TopNews navigation={navigation} />
          {/* Slider */}
          <View style={{ paddingLeft: 12, paddingTop: 10 }}>
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
          <View style={commonstyles.homeVideoview}>
            <View style={commonstyles.homegallerycategoryView}>
              <View style={commonstyles.gallerytextView}>
                <Text style={commonstyles.homevideocategorytext}>फोटो</Text>
              </View>
              <Ripple
                  onPress={() => {
                    navigation.navigate('PTStack', {screen: 'PhotoGallery'});
                  }}>
                  <Image style={commonstyles.galleryImage} source={require('../Assets/Images/next.png')} />
              </Ripple>
            </View>
            {/* photo gallery  Cards*/}
            <View style={{ paddingLeft: 12 }}>
              {photosData?.data?.length > 0 ? <FlatList
                persistentScrollbar
                data={photosData?.data}
                showsHorizontalScrollIndicator={true}
                horizontal={true}
                renderItem={photoGalleryItemTwo}
              /> : <ActivityIndicator size={'large'} style={{paddingVertical: 12}} />}
            </View>
          </View>
          {/* Maharashtra */}
          <HomeUINew
            categoryName="महाराष्ट्र"
            data={maharashtraData?.data}
            navigationScreen="maharashtra"
            navigation={navigation}
          />
          {/* videos Gallery */}
          {/* videos gallery  text */}
          <View style={commonstyles.homeVideoview}>
            <View style={commonstyles.homegallerycategoryView}>
              <View style={commonstyles.gallerytextView}>
                <Text style={commonstyles.homevideocategorytext}>व्हिडिओ</Text>
              </View>
              <Ripple
                  onPress={() => {
                    navigation.navigate('VDStack', {screen: 'Videos'});
                  }}>
                  <Image style={commonstyles.galleryImage} source={require('../Assets/Images/next.png')} />
                </Ripple>
            </View>

            {videosData?.data?.length ? <>
              <FlatList
                  data={videosData?.data?.slice(0, 1)}
                  showsHorizontalScrollIndicator={false}
                  renderItem={videoGalleryitemOne}
                />
              <View style={{ paddingLeft: 12, paddingBottom: 12 }}>
                <FlatList
                  persistentScrollbar
                  data={videosData?.data?.slice(1, 10)}
                  showsHorizontalScrollIndicator={true}
                  horizontal={true}
                  renderItem={videoGalleryitemTwo}
                />
              </View>
            </> : <ActivityIndicator size={"large"} style={{paddingVertical: 12}} />}
                
          </View>
          {/* Mumbai */}
          <View style={{paddingVertical: 6}}></View>
          <HomeUI
            categoryName="मुंबई"
            data={mumbaiData?.data || []}
            navigationScreen="mumbai"
            navigation={navigation}
          />
          {/* Pune */}
          <HomeUINew
            categoryName="पुणे"
            data={puneData?.data}
            navigationScreen="pune"
            navigation={navigation}
          />
          {/* Nagpur */}
          <HomeUI
            categoryName="नागपूर"
            data={nagpurData?.data || []}
            navigationScreen="nagpur"
            navigation={navigation}
          />
          {/* world */}
          <HomeUINew
            categoryName="वर्ल्ड"
            data={worldData?.data}
            navigationScreen="world"
            navigation={navigation}
          />
          {/* Sports */}
          <HomeUI
            categoryName="क्रीडा"
            data={sportsData?.data}
            navigationScreen="Sports"
            navigation={navigation}
          />
          {/* lifestyle */}
          <HomeUINew
            categoryName="लाइफ स्टाइल"
            data={lifestyleData?.data}
            navigationScreen="Lifestyle"
            navigation={navigation}
          />
          {/* Special */}
          <HomeUI
            categoryName="नवराष्ट्र विशेष"
            data={specialData?.data}
            navigationScreen="special-coverage"
            navigation={navigation}
          />
          {/* Movies */}
          <View style={{paddingVertical: 6}}></View>
          <HomeUI
            categoryName="मनोरंजन"
            data={moviesData?.data}
            navigationScreen="movies"
            navigation={navigation}
          />
          {/* Viral */}
          <HomeUINew
            categoryName="व्हायरल"
            data={viralData?.data}
            navigationScreen="viral"
            navigation={navigation}
          />
          {/* Business */}
          <HomeUI
            categoryName="व्यापार"
            data={businessData?.data}
            navigationScreen="business"
            navigation={navigation}
          />
          {/* Automobile */}
          <HomeUINew
            categoryName="ऑटो"
            data={automobileData?.data}
            navigationScreen="automobile"
            navigation={navigation}
          />
          {/* Technology */}
          <HomeUI
            categoryName="टेक"
            data={technologyData?.data}
            navigationScreen="technology"
            navigation={navigation}
          />
          {/* Religion */}
          <HomeUINew
            categoryName="धर्म"
            data={religionData?.data}
            navigationScreen="religion"
            navigation={navigation}
          />
          {/* Career */}
          <HomeUI
            categoryName="करिअर"
            data={careerData?.data}
            navigationScreen="career"
            navigation={navigation}
          />

        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
