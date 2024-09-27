/* eslint-disable prettier/prettier */
import { relative } from 'patch-package/dist/path';
import { StyleSheet, Dimensions } from 'react-native';
import { black } from 'react-native-paper/lib/typescript/styles/themes/v2/colors';
// export const appThemeColor = "#337DFF"
//3349FF,339fff
export const appThemeColor = '#000000';
export const off_white = '#F6F6F6'
export const whitecolor = '#ffffff';
export const graycolor = '#e4e3e3';
export const Dark_graycolor = '#63666A';
export const blackcolor = '#000000';
export const redcolor = '#f93a4f';
export const medium_gray = '#D3D3D3';
export const light_yellow = '#EADF0C';
export const light_gray = '#cccccc5e';
export const gllery_background = '#2c2c2c';
export const lightgllery_background = '#656565';


// export const Dark_Gray ="#63666A"
export const Dark_Gray = '#A9A9A9';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export const SLIDER_WIDTH = Dimensions.get('window').width;
export const ITEM_WIDTH = Math.round(SLIDER_WIDTH);

export const commonstyles = StyleSheet.create({
  HomeThreeCategoryview: {
    // padding: 5,
    borderBottomColor: graycolor, borderBottomWidth: 1,
  },
  homecategoryView: {
    justifyContent: 'space-between', flex: 1, flexDirection: 'row',
    // paddingBottom: 10,
    // paddingTop: 5,
    // paddingLeft: 10,
    paddingRight: 10,

  },
  homegallerycategoryView: {
    justifyContent: 'space-between', flex: 1, flexDirection: 'row',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,

  },
  homeVideoTextView: {
    width: ITEM_WIDTH - 30,
    top: 5
  },
  homevideocategorytext: {
    color: whitecolor,
    fontFamily: 'Mukta-SemiBold',
    fontSize: 22,
  },
  homeVideoview: {
    backgroundColor: gllery_background,
  },
  HomeVideotext: {
    color: whitecolor,
    fontFamily: 'Mukta-SemiBold',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 10,
    paddingBottom: 5,
  },
  homeVideosliderTextView: {
    width: ITEM_WIDTH - 220,
  },
  homephotosliderTextView: {
    width: ITEM_WIDTH - 180,
  },
  homeVideosliderText: {
    color: whitecolor,
    fontFamily: 'Mukta-SemiBold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '600',
  },
  homephotosliderText: {
    color: whitecolor,
    fontFamily: 'Mukta-SemiBold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '600',
  },

  HomephotosliderImg: {
    height: 100,
    width: ITEM_WIDTH - 180,
    objectFit:'cover'
  },
  HomeVideoImg: {
    height: 250,
    width: ITEM_WIDTH - 30,
    borderRadius: 10,
    marginBottom: 5,
    objectFit:'fill'
  },
  HomeVideosliderImg: {
    height: 100,
    width: ITEM_WIDTH - 220,
    borderRadius: 5,
    objectFit:'fill'

  },

  DetailsLatestView: {
    justifyContent: 'space-between', flex: 1, flexDirection: 'row',
    paddingBottom: 15,
    paddingTop: 5,
    paddingLeft: 10,
    paddingRight: 10,

  },
  HomeoneCategoryview: {
    // padding: 5, borderBottomColor: graycolor,
    // borderBottomWidth: 1,
    paddingBottom: 10,
   
    position: 'relative',
  },
  HomeCategoryImg: {
    height: 230,
    marginTop: 5,
    marginBottom: 10,
    width: ITEM_WIDTH,
  },
  HomeCategorytext: {
    color: whitecolor,
    fontFamily: 'Mukta-Bold',
    fontSize: 20,
    // marginLeft: 10,
    // marginRight: 10,
    lineHeight: 25,
    position: 'relative',
    paddingTop: 10,
    width: ITEM_WIDTH,
    paddingLeft:5,
paddingRight:15

  },
  HomeThreeCategorytext: {
    color: blackcolor,
    fontFamily: 'Mukta-SemiBold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,

  },
  homeFoursliderText: {
    color: blackcolor,
    fontFamily: 'Mukta-SemiBold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    position: 'relative',
    paddingTop: 5,
    paddingBottom: 5,
    fontWeight: '600',
  },
  HomeFourcategoryView: {
    borderBottomColor: graycolor,
    borderBottomWidth: 1,
    paddingBottom: 15,
    paddingTop: 15,
    paddingRight: 10,
  },
  DetailsCompOneView: {
      paddingRight: 10,
  },
  categoryoneTextView: {
    width: ITEM_WIDTH - 20,
  },
  CategoryOnetext: {
    color: blackcolor,
    fontFamily: 'Mukta-SemiBold',
    fontSize: 18,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 25,
    position: 'relative',
    paddingTop: 10,
  },
  homecategoryTextView: {
    width: ITEM_WIDTH - 30,
  },
  homeOnetextView:{
    borderLeftColor: redcolor, borderLeftWidth: 6, 
    left: 5,
    
  },
  // new styles
  DetailsShareimage: { width: 30, height: 30 },
  DetailsShareview: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: medium_gray,
    flex: 1, alignItems: 'center'


  },
  detailauthor:{ color: blackcolor,fontFamily: 'Mukta-SemiBold',fontSize:14
  },
  categoryText: {
    fontSize: 22,
    color: blackcolor, fontFamily: 'Mukta-SemiBold',
  },
  bookmarkcategoryText: {
    fontSize: 16,
    color: blackcolor, fontFamily: 'Mukta-SemiBold'
  },
  morevideos: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',

  },
  THighliet: {
    width: 80,
    marginLeft: 'auto',
  },
  shareMview: {
    flexDirection: 'row', justifyContent: 'flex-end', flex: 1,
    marginTop: 10, marginBottom: 10, width: 80, marginLeft: 'auto'
  },
  imgview: { marginRight: 8, marginTop: 4 },
  shareimage: { height: 18, width: 18, color: Dark_Gray, resizeMode: 'contain' },
  shareview: { marginRight: 15 },
  sharetext: { color: Dark_Gray, fontSize: 16, fontWeight: '500' },
  settingview: {
    paddingHorizontal: 10, marginTop: 20, flexDirection: 'row',
    borderBottomColor: graycolor, borderBottomWidth: 1, height: 40
  },
  settingimg: { width: 20, height: 20, color: blackcolor },
  settingtext: { color: blackcolor, fontSize: 16, marginLeft: 10 },
  scroll: { backgroundColor: whitecolor },
  TextView: {
    flexDirection: 'row', flex: 2,
    fontFamily: 'Mandali-Regular', fontSize: 20, lineHeight: 33, justifyContent: 'center',
  },
  Textdot: {
    marginTop: 10,
  },
  HomeCateImg: {
    height: 200,
    width: ITEM_WIDTH - 30,
    borderRadius: 15,
  },
  categorytwoText:{ color: blackcolor,fontSize:16,fontFamily:'Mukta-SemiBold' },
  catecomp2mainView: { borderBottomColor: medium_gray, borderBottomWidth: 2 },
  catecomp2Tochable: { flexDirection: 'row',display:'flex' },

  cateview: { marginTop: 7, flex: 0.7 },
  CategoryOneview: {
    padding: 5,
  },
  CategoryOneImg: {
    height: 200,
    width: '100%',
  },
  HomeComp2DotView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    margin: 5,
    borderBottomColor: medium_gray,
    borderBottomWidth: 1.5,
    paddingBottom: 10
  },
  HomeComp2MainView: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  HomeComp2Text: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 18,
    lineHeight: 31,
    marginLeft: 5,
    justifyContent: 'center',
  },
  Homecartoonimg: {
    width: Dimensions.get('window').height * 0.40,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 4,
  },
  HomePhotoimgOne: {
    width: Dimensions.get('window').height * 0.40,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    height: Dimensions.get('window').height - 500,
  },
  HomePhotoimgTwo: {
    width: Dimensions.get('window').height * 0.20,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 3,
  },
  //
  container: {
    width: '100%',
    height: '100%',
    backgroundColor: whitecolor,
  },
  spinnerView: { justifyContent: 'center', alignItems: 'center', flex: 1, },
  spinnerText: { fontSize: 16, textAlign: 'center', color: blackcolor },
  loader: {
    marginTop: 10,
    alignItems: 'center',
  },
  cateMView: {
    flexDirection: 'row',
    left: 10,
    marginRight: 10,
    flex: 2,
  },
  menuview: {
    // backgroundColor: appThemeColor,
    alignItems: 'center',
    marginRight: 10,
    left: 20,
  },
  menutext: {
    // backgroundColor: whitecolor,
    paddingHorizontal: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: blackcolor,
    fontSize: 22,
    fontFamily: 'Mandali-Bold',
    // fontWeight: '500'
  },
  latestMainView: { width: Dimensions.get('window').width, margin: 5 },
  latestsubView: {
    backgroundColor: whitecolor,
    height: 155, borderRadius: 10,

  },
  VideoimgTag: {
    width: ITEM_WIDTH - 10,
    height: 200,
    borderRadius: 5,
  },
  PhotoimgTag: {
    width: ITEM_WIDTH - 10,
    height: 200,
    borderRadius: 5,
    paddingTop: 10,
  },
  HomeVideoCategoryview: {
    padding: 5,
    paddingBottom: 15,
  },
  galleryArticlecategorytext:{
    color: blackcolor, fontSize: 20, paddingLeft: 10,
    fontFamily: 'Mukta-Bold', paddingTop: 10
  },
  latestTxtTag: {
    color: blackcolor, fontFamily: 'Mukta-SemiBold',
    fontSize: 16, lineHeight: 25, left: 5, right: 2, paddingRight: 20, top: 5, paddingBottom: 10
  },
  slidercard: {
    width: ITEM_WIDTH-150,
    height: 200,
    borderRadius: 5,
    objectFit:'fill'
  },
  photocard: {
    height: Dimensions.get('window').height * 0.32,
    resizeMode: 'contain',
    aspectRatio: 9 / 9,
    borderRadius: 5,

  },
  videocard: {
    height: Dimensions.get('window').height * 0.32,
    resizeMode: 'contain',
    aspectRatio: 10 / 9,
    borderRadius: 5,

  },
  pagination: {
    position: 'relative',
    // top: -20,
  },
  slidertext: {
    color: whitecolor,
    fontFamily: 'Mukta-Bold',
    fontSize: 16,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 20,
    bottom: 10,
    position: 'absolute',
    paddingTop: 10
  },
  photoview: {
    backgroundColor: graycolor,
    borderRadius: 10, margin: 5,
    width: '97%', paddingBottom: 10, marginTop: 10, paddingTop: 10,
  },
  phototextview: {
    flexDirection: 'row', paddingLeft: 10,
    paddingRight: 10, paddingTop: 10, flex: 1,
  },
  ptext: {
    color: whitecolor, fontSize: 25,
    marginEnd: 5, fontFamily: 'Mandali-Bold',
  },
  phototext: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 22,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29,
    position: 'relative',
    top: 25,
  },
  sliderGradient: {
    width: ITEM_WIDTH - 150, bottom: 4.5, borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    position: 'absolute', height: 60, marginLeft: 5,
    backgroundColor: '#000000', filter: 'blur({10}px)',
  },
  HomeonesliderGradient: {
    width: '100%', bottom: 20,left: 0,right: 0,
    position: 'absolute', height: 110, paddingRight:10  
    ,paddingTop:10,paddingBottom:20,
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: 100,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    flex: 1,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,

  },
  SlidercategoryView: {
    justifyContent: 'space-between',
    // paddingBottom: 5,
    // marginBottom: 15,
  },
  SliderflatView: {
    justifyContent: 'center',
    display: 'flex',
  },
  Category: {
    color: blackcolor,
    fontFamily: 'Mukta-Bold',
    fontSize: 22,
       left: 10,
    // fontWeight: '400'

  },
  homeNextImage: {
    top: 8,
  },
  sliderView: {
    position: 'relative', backgroundColor: 'transparent',
  },
  dot: {
    marginTop: 22, marginLeft: 15,
  },
  latestCard: {
    backgroundColor: '#fff',
    padding: 5,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  latestImage: {
    width: '100%', height: screenHeight * 0.12,
    borderRadius: 10,
  },
  cateView: { flexDirection: 'row', marginLeft: 5, width: '100%' },
  cateImage: { width: 120, height: 70, borderRadius: 5 },
  latestText: {
    color: blackcolor, fontFamily: 'Mukta-SemiBold', fontSize: 16, lineHeight: 25,
     justifyContent: 'center',paddingTop:5,
  },
  latesttime: { color: whitecolor, fontSize: 12, fontFamily: 'Mukta-Regular' },
  HomeTwotime: { color: Dark_graycolor, fontSize: 12, fontFamily: 'Mukta-Regular' },
  CategoryOnetime: { color: blackcolor, fontSize: 12, fontFamily: 'Mukta-Regular' },
  CategoryOnetimeview: {
    flexDirection: 'row',
    paddingLeft: 7,
  },
  cardViewFirst: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  cardView: {
    backgroundColor: whitecolor,
    padding: 3,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderBottomColor: graycolor, borderBottomWidth: 2,
    borderLeftColor: graycolor, borderLeftWidth: 1,
    borderRightColor: graycolor, borderRightWidth: 1,
  },
  latestViewcard: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    width: '100%',
    // height:120,
    borderRadius: 10,
    // flexDirection: 'row',
    // flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,

  },
  cardViewHome: {
    backgroundColor: whitecolor,
    padding: 5,
    elevation: 5,
    margin: 5,
    // height:120,
    borderRadius: 10,
    flexDirection: 'row',
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.7,
    shadowRadius: 2,
    borderBottomColor: graycolor, borderBottomWidth: 2,
    borderLeftColor: graycolor, borderLeftWidth: 1,
    borderRightColor: graycolor, borderRightWidth: 1,

  },
  cinemaText: {
    // color: blackcolor, fontFamily: 'JIMS', fontSize: 22, lineHeight: 29,
    color: blackcolor, fontFamily: 'JIMS', fontSize: 22, lineHeight: 30,
  },
  SportCard: {
    flex: 1,
    backgroundColor: '#fff',
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: 170,
    // height: Dimensions.get('window').height * 0.12,
    flexDirection: 'row',
  },

  sportimage: {
    height: Dimensions.get('window').height * 0.12,
    borderRadius: 10, resizeMode: 'center',
  },
  CartoonCard: {
    width: '95%',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#fff',
    elevation: 1,
    margin: 10,
    borderRadius: 5,
    height: 'auto',
    flexDirection: 'row',
    paddingRight: 10,
  },
  pcard: {
    // flex: 1,
    width: '95%',
    backgroundColor: '#fff',
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.32,
    flexDirection: 'row',
  },
  vcard: {
    // flex: 1,
    width: '95%',
    backgroundColor: whitecolor,
    elevation: 1,
    margin: 5,
    borderRadius: 5,
    height: Dimensions.get('window').height * 0.3,
    flexDirection: 'row',
  },
  pimg: {
    width: '98%', height: 180,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    // width: '100%', height: 280, resizeMode: "contain",

  },
  vimg: {
    width: '96%', height: 180,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    // width: '100%', height: 280, resizeMode: "contain",

  },
  cartoonimg: {
    width: Dimensions.get('window').height * 0.23,
    borderRadius: 10, resizeMode: 'contain', margin: 5,
    aspectRatio: 3 / 4,
  },
  photoimage: {
    width: '110%',
    height: Dimensions.get('window').height * 0.13,
    borderRadius: 15,
    resizeMode: 'center',
  },
  SportText: {
    color: blackcolor, fontFamily: 'Mandali-Regular', fontSize: 18,
  },
  Detailslargecardvideo: {
    height: 200,
    marginTop: 10,
    marginBottom: 10,
    width: '100%',
    // borderRadius: 10,
    // resizeMode:'contain',
  },
  Detailslargecard: {
    height: 230,
    // marginBottom: 10,
    width: '100%',
    resizeMode: 'contain'
  },
  shortsTime: {
    color: blackcolor,
    fontFamily: 'JIMS',
    fontSize: 12,

  },
  detailsCateName: {
    color: Dark_graycolor,
    fontFamily: 'Mukta-Regular',fontSize:14


  },
  timeview: {
    flexDirection: 'row',
    top: -5,
  },
  detailTime: {
    color: Dark_graycolor,
    fontFamily: 'Mukta-Regular',fontSize:14

  },
  cateviewText: {
    flex: 1.9,
    fontFamily: 'Mandali-Regular', fontSize: 18, lineHeight: 25,
    justifyContent: 'center', paddingtop:5
  },
  cateviewImg: { marginRight: 5, marginTop:5 },
  cateflist: { marginBottom: 20, top: 10, margin: 5 },
  photoflist: { marginBottom: 50, top: 10, margin: 5 },

  videoImg: {
    width: Dimensions.get('window').width * 0.3,
    height: Dimensions.get('window').height * 0.2,
    borderRadius: 10, resizeMode: 'stretch',
  },
  categoryView: { flex: 1.7, flexDirection: 'row' },
  homeCategoryflatView: {
    position: 'relative',
    justifyContent: 'center',
    display: 'flex'
  }, bgDarkGrey: {
    width: '100%', backgroundColor: '#85929e', paddingTop: 10,
    paddingBottom: 10, paddingRight: 3, paddingLeft: 3,
    borderTopLeftRadius: 8, borderTopRightRadius: 8,
  },
  prevText: {
    color: appThemeColor,
    textAlign: 'center', fontSize: 18,
    fontFamily: 'RobotoCondensed-Regular',
  },
  prevNextMainView: {
    flexDirection: 'row', flex: 1,
    justifyContent: 'space-between',
    marginTop: 5, marginBottom: 5,
  },
  prevView: { flex: 0.25, height: 30, justifyContent: 'center', marginLeft: 10 },
  nextView: { flex: 0.2, height: 30, justifyContent: 'center', marginRight: 10 },
  relatedText: { color: '#000', fontSize: 20, fontFamily: 'RobotoCondensed-Regular' },
  photoflash: { color: whitecolor, fontSize: 20, fontFamily: 'RobotoCondensed-Regular' },
  nextText: { color: appThemeColor, fontSize: 20, fontFamily: 'RobotoCondensed-Regular' },
  flashView: {
    backgroundColor: graycolor,
    borderRadius: 10, margin: 5,
    width: '97%', paddingBottom: 10, marginTop: 10, paddingTop: 10,
  },
  flashtext: {
    color: whitecolor,
    fontFamily: 'Mandali-Bold',
    // fontWeight:'bold',
    fontSize: 22,
    // marginBottom: 5,
    marginLeft: 10,
    marginRight: 10,
    lineHeight: 29,
    position: 'relative',
    top: 25,
  },
  categoryMview: { flexDirection: 'row', bottom: 5, flex: 1 },
  moreview: { alignContent: 'flex-end', alignItems: 'flex-end' },
  moretext: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 18, color: appThemeColor,
  },
  loadingview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  loadingtext: {
    fontSize: 16,
    textAlign: 'center',
    color: '#000000',
  },
  // Horoscope new design 17/3 /23
  horoMainView: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    margin: 5,
    borderBottomColor: medium_gray,
    borderBottomWidth: 1.5,
  },
  horoimageView: {
    marginRight: 5,
    flexDirection: 'row'
  },
  horoimage: {
    width: 120, height: 90,
    borderRadius: 5, resizeMode: 'contain'
  },
  horotextView: { flex: 2 },
  horotext: {
    color: blackcolor,
    fontFamily: 'Mandali-Bold',
    fontSize: 18,
    lineHeight: 31,
    marginLeft: 5,
    marginVertical: 20,
  },
  horomore: { justifyContent: 'flex-end', alignItems: 'flex-end', alignSelf: 'flex-end' },
  horomoretext: {
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 18, color: appThemeColor,
  },

});
